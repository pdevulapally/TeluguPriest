
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Booking } from "@/types/booking";
import { format, parseISO } from "date-fns";
import { X, User, Phone, Mail, MapPin, Calendar, FileText, Home } from "lucide-react";

interface BookingDetailModalProps {
  booking: Booking | null;
  isOpen: boolean;
  onClose: () => void;
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

const BookingDetailModal = ({ booking, isOpen, onClose }: BookingDetailModalProps) => {
  if (!booking) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-4 sm:max-w-lg md:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
          <DialogTitle className="text-lg sm:text-xl font-semibold text-maroon">
            Booking Details
          </DialogTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="h-6 w-6"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <div className="space-y-6 pt-4">
          {/* Status Badge */}
          <div className="flex justify-center sm:justify-start">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusColors[booking.status]}`}>
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </span>
          </div>

          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900 flex items-center">
              <User className="h-4 w-4 mr-2" />
              Customer Information
            </h3>
            <div className="grid gap-3 text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="font-medium text-gray-700 min-w-0 sm:min-w-[80px]">Name:</span>
                <span className="text-gray-900">{booking.customerName}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="font-medium text-gray-700 min-w-0 sm:min-w-[80px] flex items-center">
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
              <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="font-medium text-gray-700 min-w-0 sm:min-w-[80px] flex items-center">
                  <Mail className="h-3 w-3 mr-1" />
                  Email:
                </span>
                <a 
                  href={`mailto:${booking.customerEmail}`}
                  className="text-blue-600 hover:text-blue-800 break-all"
                >
                  {booking.customerEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900 flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Service Details
            </h3>
            <div className="grid gap-3 text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="font-medium text-gray-700 min-w-0 sm:min-w-[80px]">Service:</span>
                <span className="text-gray-900">{renderServiceName(booking.service)}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="font-medium text-gray-700 min-w-0 sm:min-w-[80px]">Date:</span>
                <span className="text-gray-900">{format(parseISO(booking.date), "PPPP")}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="font-medium text-gray-700 min-w-0 sm:min-w-[80px]">Location:</span>
                <span className="text-gray-900">{booking.location}</span>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900 flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              Address Details
            </h3>
            <div className="grid gap-3 text-sm">
              {booking.address && (
                <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                  <span className="font-medium text-gray-700 min-w-0 sm:min-w-[80px] flex items-center">
                    <Home className="h-3 w-3 mr-1" />
                    Address:
                  </span>
                  <span className="text-gray-900">{booking.address}</span>
                </div>
              )}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="font-medium text-gray-700 min-w-0 sm:min-w-[80px]">City:</span>
                <span className="text-gray-900">{booking.city}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="font-medium text-gray-700 min-w-0 sm:min-w-[80px]">Country:</span>
                <span className="text-gray-900">{booking.country}</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          {booking.notes && (
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-gray-900 flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Additional Notes
              </h3>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-900 whitespace-pre-wrap">{booking.notes}</p>
              </div>
            </div>
          )}

          {/* Booking Metadata */}
          <div className="border-t pt-4">
            <div className="text-xs text-gray-500 space-y-1">
              <div>Booking ID: {booking.id}</div>
              <div>Created: {format(parseISO(booking.createdAt), "PPp")}</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDetailModal;
