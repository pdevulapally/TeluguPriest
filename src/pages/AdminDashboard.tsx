
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Users, Clock, CheckCircle, Menu } from "lucide-react";
import { getBookings } from "@/services/bookingService";
import { Booking } from "@/types/booking";
import { format } from "date-fns";
import BookingDetailModal from "@/components/BookingDetailModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PriestAvailabilityManager from "@/components/PriestAvailabilityManager";
import { useIsMobile } from "@/hooks/use-mobile";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const data = await getBookings();
      setBookings(data);
    } catch (error) {
      console.error("Error loading bookings:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-800",
      confirmed: "bg-blue-100 text-blue-800",
      completed: "bg-green-100 text-green-800", 
      cancelled: "bg-red-100 text-red-800"
    };

    return (
      <Badge className={`${colors[status as keyof typeof colors]} text-xs px-2 py-1`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const stats = [
    {
      title: "Total Bookings",
      value: bookings.length,
      icon: Calendar,
      color: "text-blue-600"
    },
    {
      title: "Pending",
      value: bookings.filter(b => b.status === 'pending').length,
      icon: Clock,
      color: "text-yellow-600"
    },
    {
      title: "Confirmed", 
      value: bookings.filter(b => b.status === 'confirmed').length,
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "This Month",
      value: bookings.filter(b => {
        const bookingDate = new Date(b.date);
        const now = new Date();
        return bookingDate.getMonth() === now.getMonth() && 
               bookingDate.getFullYear() === now.getFullYear();
      }).length,
      icon: Users,
      color: "text-purple-600"
    }
  ];

  const BookingCard = ({ booking }: { booking: Booking }) => (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex flex-col space-y-3">
          <div className="flex justify-between items-start">
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm text-gray-900 truncate">
                {booking.customerName}
              </h3>
              <p className="text-xs text-gray-500 truncate">
                {booking.customerEmail}
              </p>
            </div>
            {getStatusBadge(booking.status)}
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Service:</span>
              <span className="font-medium capitalize text-right">
                {booking.service?.replace('-', ' ')}
              </span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Date:</span>
              <span className="font-medium text-right">
                {format(new Date(booking.date), "MMM dd, yyyy")}
              </span>
            </div>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectedBooking(booking)}
            className="w-full mt-3 h-8 text-xs"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-base">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-maroon">Admin Dashboard</h1>
          <Button 
            onClick={() => window.location.href = "/"}
            size={isMobile ? "sm" : "default"}
            className="w-full sm:w-auto"
          >
            Back to Website
          </Button>
        </div>

        <Tabs defaultValue="bookings" className="space-y-4 sm:space-y-6">
          <TabsList className="grid w-full grid-cols-2 h-10 sm:h-11">
            <TabsTrigger value="bookings" className="text-xs sm:text-sm">
              Bookings
            </TabsTrigger>
            <TabsTrigger value="availability" className="text-xs sm:text-sm">
              Availability
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="space-y-4 sm:space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-3 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                          {stat.title}
                        </p>
                        <p className="text-lg sm:text-2xl font-bold">{stat.value}</p>
                      </div>
                      <stat.icon className={`h-5 w-5 sm:h-8 sm:w-8 ${stat.color} flex-shrink-0`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bookings */}
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl">Recent Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                {bookings.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8 text-sm sm:text-base">
                    No bookings found
                  </p>
                ) : (
                  <>
                    {/* Mobile Card View */}
                    <div className="block lg:hidden space-y-3">
                      {bookings.map((booking) => (
                        <BookingCard key={booking.id} booking={booking} />
                      ))}
                    </div>

                    {/* Desktop Table View */}
                    <div className="hidden lg:block overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Service</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {bookings.map((booking) => (
                            <TableRow key={booking.id}>
                              <TableCell>
                                <div>
                                  <p className="font-medium">{booking.customerName}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {booking.customerEmail}
                                  </p>
                                </div>
                              </TableCell>
                              <TableCell className="capitalize">
                                {booking.service?.replace('-', ' ')}
                              </TableCell>
                              <TableCell>
                                {format(new Date(booking.date), "MMM dd, yyyy")}
                              </TableCell>
                              <TableCell>
                                {getStatusBadge(booking.status)}
                              </TableCell>
                              <TableCell>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setSelectedBooking(booking)}
                                >
                                  View Details
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="availability">
            <PriestAvailabilityManager />
          </TabsContent>
        </Tabs>

        {/* Booking Detail Modal */}
        {selectedBooking && (
          <BookingDetailModal
            booking={selectedBooking}
            isOpen={!!selectedBooking}
            onClose={() => setSelectedBooking(null)}
            onStatusUpdate={loadBookings}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
