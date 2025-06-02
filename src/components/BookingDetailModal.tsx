import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Booking } from "@/types/booking";
import { format, parseISO } from "date-fns";
import { X, User, Phone, Mail, MapPin, Calendar, FileText, Home, Download, CheckCircle, Clock, XCircle } from "lucide-react";
import jsPDF from 'jspdf';
import { updateBookingStatus } from "@/services/bookingService";
import { useState } from "react";

interface BookingDetailModalProps {
  booking: Booking | null;
  isOpen: boolean;
  onClose: () => void;
  onStatusUpdate: () => Promise<void>;
}

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-green-100 text-green-800",
  completed: "bg-blue-100 text-blue-800",
  cancelled: "bg-red-100 text-red-800",
};

const renderServiceName = (serviceKey: string) => {
  const serviceNames: Record<string, string> = {
    satyanarayana: "Satyanarayana Vratam",
    barasala: "Barasala (Naming)",
    gruhapravesam: "Gruhapravesam",
    wedding: "Vivaham (Wedding)",
    annaprasana: "Annaprasana",
    upanayanam: "Upanayanam",
    custom: "Custom Puja"
  };
  
  return serviceNames[serviceKey] || serviceKey;
};

const BookingDetailModal = ({ booking, isOpen, onClose, onStatusUpdate }: BookingDetailModalProps) => {
  const [isUpdating, setIsUpdating] = useState(false);

  if (!booking) return null;

  const handleStatusUpdate = async (newStatus: 'pending' | 'confirmed' | 'completed' | 'cancelled') => {
    if (!booking.id) return;
    
    setIsUpdating(true);
    try {
      const success = await updateBookingStatus(booking.id, newStatus);
      if (success) {
        await onStatusUpdate();
        console.log(`Booking status updated to ${newStatus}`);
      } else {
        console.error('Failed to update booking status');
      }
    } catch (error) {
      console.error('Error updating booking status:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    let yPosition = 20;

    // Title
    doc.setFontSize(20);
    doc.setTextColor(139, 69, 19); // Maroon color
    doc.text('Booking Details', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 20;

    // Status
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Status: ${booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}`, 20, yPosition);
    yPosition += 15;

    // Customer Information
    doc.setFontSize(14);
    doc.setTextColor(139, 69, 19);
    doc.text('Customer Information', 20, yPosition);
    yPosition += 10;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(`Name: ${booking.customerName}`, 20, yPosition);
    yPosition += 8;
    doc.text(`Phone: ${booking.customerPhone}`, 20, yPosition);
    yPosition += 8;
    doc.text(`Email: ${booking.customerEmail}`, 20, yPosition);
    yPosition += 15;

    // Service Details
    doc.setFontSize(14);
    doc.setTextColor(139, 69, 19);
    doc.text('Service Details', 20, yPosition);
    yPosition += 10;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(`Service: ${renderServiceName(booking.service)}`, 20, yPosition);
    yPosition += 8;
    doc.text(`Date: ${format(parseISO(booking.date), "PPPP")}`, 20, yPosition);
    yPosition += 8;
    doc.text(`Location: ${booking.location}`, 20, yPosition);
    yPosition += 15;

    // Address Details
    doc.setFontSize(14);
    doc.setTextColor(139, 69, 19);
    doc.text('Address Details', 20, yPosition);
    yPosition += 10;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    if (booking.address) {
      doc.text(`Address: ${booking.address}`, 20, yPosition);
      yPosition += 8;
    }
    doc.text(`City: ${booking.city}`, 20, yPosition);
    yPosition += 8;
    doc.text(`Country: ${booking.country}`, 20, yPosition);
    yPosition += 15;

    // Notes
    if (booking.notes) {
      doc.setFontSize(14);
      doc.setTextColor(139, 69, 19);
      doc.text('Additional Notes', 20, yPosition);
      yPosition += 10;

      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      const splitNotes = doc.splitTextToSize(booking.notes, pageWidth - 40);
      doc.text(splitNotes, 20, yPosition);
      yPosition += splitNotes.length * 5 + 15;
    }

    // Booking Metadata
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text(`Booking ID: ${booking.id}`, 20, yPosition);
    yPosition += 5;
    doc.text(`Created: ${format(parseISO(booking.createdAt), "PPp")}`, 20, yPosition);

    doc.save(`booking-${booking.id}.pdf`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-md mx-auto sm:max-w-lg md:max-w-2xl max-h-[95vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
          <DialogTitle className="text-base sm:text-lg font-semibold text-maroon pr-2">
            Booking Details
          </DialogTitle>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={downloadPDF}
              className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3"
            >
              <Download className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
              <span className="hidden sm:inline">PDF</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-4 sm:space-y-6 pt-4">
          {/* Status Badge and Actions */}
          <div className="space-y-3">
            <div className="flex justify-center sm:justify-start">
              <span className={`inline-block px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${statusColors[booking.status]}`}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </span>
            </div>
            
            {/* Status Update Buttons */}
            <div className="flex flex-wrap gap-2">
              {booking.status === 'pending' && (
                <>
                  <Button
                    size="sm"
                    onClick={() => handleStatusUpdate('confirmed')}
                    disabled={isUpdating}
                    className="h-8 text-xs"
                  >
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Confirm
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleStatusUpdate('cancelled')}
                    disabled={isUpdating}
                    className="h-8 text-xs"
                  >
                    <XCircle className="h-3 w-3 mr-1" />
                    Cancel
                  </Button>
                </>
              )}
              {booking.status === 'confirmed' && (
                <Button
                  size="sm"
                  onClick={() => handleStatusUpdate('completed')}
                  disabled={isUpdating}
                  className="h-8 text-xs bg-blue-600 hover:bg-blue-700"
                >
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Mark Complete
                </Button>
              )}
            </div>
          </div>

          {/* Customer Information */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-semibold text-gray-900 flex items-center">
              <User className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              Customer Information
            </h3>
            <div className="grid gap-2 sm:gap-3 text-xs sm:text-sm">
              <div className="flex flex-col gap-1">
                <span className="font-medium text-gray-700">Name:</span>
                <span className="text-gray-900 break-words">{booking.customerName}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium text-gray-700 flex items-center">
                  <Phone className="h-3 w-3 mr-1" />
                  Phone:
                </span>
                <a 
                  href={`tel:${booking.customerPhone}`}
                  className="text-blue-600 hover:text-blue-800 break-all"
                >
                  {booking.customerPhone}
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium text-gray-700 flex items-center">
                  <Mail className="h-3 w-3 mr-1" />
                  Email:
                </span>
                <a 
                  href={`mailto:${booking.customerEmail}`}
                  className="text-blue-600 hover:text-blue-800 break-all text-xs"
                >
                  {booking.customerEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-semibold text-gray-900 flex items-center">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              Service Details
            </h3>
            <div className="grid gap-2 sm:gap-3 text-xs sm:text-sm">
              <div className="flex flex-col gap-1">
                <span className="font-medium text-gray-700">Service:</span>
                <span className="text-gray-900 break-words">{renderServiceName(booking.service)}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium text-gray-700">Date:</span>
                <span className="text-gray-900">{format(parseISO(booking.date), "PPPP")}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium text-gray-700">Location:</span>
                <span className="text-gray-900 break-words">{booking.location}</span>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-semibold text-gray-900 flex items-center">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              Address Details
            </h3>
            <div className="grid gap-2 sm:gap-3 text-xs sm:text-sm">
              {booking.address && (
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-gray-700 flex items-center">
                    <Home className="h-3 w-3 mr-1" />
                    Address:
                  </span>
                  <span className="text-gray-900 break-words">{booking.address}</span>
                </div>
              )}
              <div className="flex flex-col gap-1">
                <span className="font-medium text-gray-700">City:</span>
                <span className="text-gray-900">{booking.city}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium text-gray-700">Country:</span>
                <span className="text-gray-900">{booking.country}</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          {booking.notes && (
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 flex items-center">
                <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Additional Notes
              </h3>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs sm:text-sm text-gray-900 whitespace-pre-wrap break-words">{booking.notes}</p>
              </div>
            </div>
          )}

          {/* Booking Metadata */}
          <div className="border-t pt-3 sm:pt-4">
            <div className="text-xs text-gray-500 space-y-1">
              <div className="break-all">Booking ID: {booking.id}</div>
              <div>Created: {format(parseISO(booking.createdAt), "PPp")}</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDetailModal;
