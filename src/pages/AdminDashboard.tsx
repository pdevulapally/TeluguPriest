// Om Ganesha Namah 🕉️
import { useState, useEffect } from "react";
import { getBookings } from "@/services/bookingService";
import { Booking } from "@/types/booking";
import { format, parseISO } from "date-fns";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarCheck, Calendar, Eye, RefreshCw, Video } from "lucide-react";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore";
import { toast } from "sonner";
import BookingDetailModal from "@/components/BookingDetailModal";
import ZoomMeetingManager from "@/components/ZoomMeetingManager";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-green-100 text-green-800",
  completed: "bg-blue-100 text-blue-800",
  cancelled: "bg-red-100 text-red-800",
};

const AdminDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      setIsLoading(true);
      const fetchedBookings = await getBookings();
      
      // Sort bookings by date (newest first)
      fetchedBookings.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      
      setBookings(fetchedBookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      toast.error("Failed to load bookings");
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (bookingId: string, newStatus: Booking['status']) => {
    try {
      const db = getFirestore();
      const bookingRef = doc(db, "bookings", bookingId);
      await updateDoc(bookingRef, { status: newStatus });
      
      // Update local state
      setBookings(prevBookings => 
        prevBookings.map(booking => 
          booking.id === bookingId ? { ...booking, status: newStatus } : booking
        )
      );
      
      toast.success(`Booking status updated to ${newStatus}`);
    } catch (error) {
      console.error("Error updating booking status:", error);
      toast.error("Failed to update booking status");
    }
  };

  const openDetailModal = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setSelectedBooking(null);
    setIsDetailModalOpen(false);
  };

  const filteredBookings = filter === "all" 
    ? bookings 
    : bookings.filter(booking => booking.status === filter);

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

  return (
    <div className="p-4 sm:p-6">
      {/* Header Section - Mobile First */}
      <div className="flex flex-col space-y-4 mb-6 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-bold text-maroon flex items-center">
          <CalendarCheck className="mr-2 h-5 w-5 sm:h-6 sm:w-6" /> 
          Admin Dashboard
        </h1>
        
        <Button 
          onClick={() => fetchBookings()} 
          variant="outline"
          disabled={isLoading}
          className="w-full sm:w-auto"
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>
      
      {/* Tabs for different sections */}
      <Tabs defaultValue="bookings" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="bookings" className="flex items-center gap-2">
            <CalendarCheck className="h-4 w-4" />
            Bookings
          </TabsTrigger>
          <TabsTrigger value="zoom" className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            Online Events
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="bookings" className="mt-6">
          {/* Filter Section */}
          <div className="mb-6">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Bookings</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Bookings Content */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {isLoading ? (
              <div className="flex justify-center items-center p-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : filteredBookings.length === 0 ? (
              <div className="p-8 text-center">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No bookings found</h3>
                <p className="text-muted-foreground mt-1">
                  {filter === "all" 
                    ? "There are no booking requests yet" 
                    : `There are no ${filter} bookings`}
                </p>
              </div>
            ) : (
              <>
                {/* Mobile Card View */}
                <div className="block sm:hidden">
                  <div className="divide-y divide-gray-200">
                    {filteredBookings.map((booking) => (
                      <div key={booking.id} className="p-4 space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <div className="font-medium text-sm">
                              {renderServiceName(booking.service)}
                            </div>
                            <div className="text-xs text-gray-500">
                              {format(parseISO(booking.date), "MMM dd, yyyy")}
                            </div>
                            <div className="text-xs text-gray-500 truncate">
                              {booking.location}
                            </div>
                          </div>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${statusColors[booking.status]}`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => openDetailModal(booking)}
                            className="flex-1 sm:flex-none text-xs"
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            View Details
                          </Button>
                          
                          {booking.status === "pending" && (
                            <>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateStatus(booking.id, "confirmed")}
                                className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100 text-xs"
                              >
                                Confirm
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateStatus(booking.id, "cancelled")}
                                className="bg-red-50 text-red-700 border-red-200 hover:bg-red-100 text-xs"
                              >
                                Cancel
                              </Button>
                            </>
                          )}
                          {booking.status === "confirmed" && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateStatus(booking.id, "completed")}
                              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 text-xs"
                            >
                              Complete
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desktop Table View */}
                <div className="hidden sm:block overflow-x-auto">
                  <Table>
                    <TableCaption>List of all booking requests</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredBookings.map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell className="font-medium">
                            {format(parseISO(booking.date), "PP")}
                          </TableCell>
                          <TableCell>{renderServiceName(booking.service)}</TableCell>
                          <TableCell className="max-w-[200px] truncate">{booking.location}</TableCell>
                          <TableCell>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${statusColors[booking.status]}`}>
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2 flex-wrap">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => openDetailModal(booking)}
                                className="bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              
                              {booking.status === "pending" && (
                                <>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => updateStatus(booking.id, "confirmed")}
                                    className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
                                  >
                                    Confirm
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => updateStatus(booking.id, "cancelled")}
                                    className="bg-red-50 text-red-700 border-red-200 hover:bg-red-100"
                                  >
                                    Cancel
                                  </Button>
                                </>
                              )}
                              {booking.status === "confirmed" && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateStatus(booking.id, "completed")}
                                  className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"
                                >
                                  Mark Completed
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="zoom" className="mt-6">
          <ZoomMeetingManager />
        </TabsContent>
      </Tabs>

      {/* Detail Modal */}
      <BookingDetailModal 
        booking={selectedBooking}
        isOpen={isDetailModalOpen}
        onClose={closeDetailModal}
      />
    </div>
  );
};

export default AdminDashboard;
