
import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { format } from "date-fns";
import { 
  markDateUnavailable, 
  markDateAvailable, 
  getPriestUnavailability,
  PriestAvailability 
} from "@/services/availabilityService";
import { Trash2 } from "lucide-react";

const PriestAvailabilityManager = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [reason, setReason] = useState("");
  const [unavailableDates, setUnavailableDates] = useState<PriestAvailability[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadUnavailableDates();
  }, []);

  const loadUnavailableDates = async () => {
    try {
      const dates = await getPriestUnavailability();
      setUnavailableDates(dates);
    } catch (error) {
      console.error("Error loading unavailable dates:", error);
    }
  };

  const handleMarkUnavailable = async () => {
    if (!selectedDate) {
      toast.error("Please select a date");
      return;
    }

    setIsLoading(true);
    try {
      await markDateUnavailable(selectedDate, reason);
      toast.success("Date marked as unavailable");
      setReason("");
      setSelectedDate(undefined);
      loadUnavailableDates();
    } catch (error) {
      toast.error("Failed to mark date as unavailable");
    } finally {
      setIsLoading(false);
    }
  };

  const handleMarkAvailable = async (date: string) => {
    setIsLoading(true);
    try {
      await markDateAvailable(new Date(date));
      toast.success("Date marked as available");
      loadUnavailableDates();
    } catch (error) {
      toast.error("Failed to mark date as available");
    } finally {
      setIsLoading(false);
    }
  };

  const isDateUnavailable = (date: Date) => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    return unavailableDates.some(unavailable => unavailable.date === formattedDate);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Manage Your Availability</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Mark Date as Unavailable</h3>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date()}
                modifiers={{
                  unavailable: isDateUnavailable
                }}
                modifiersClassNames={{
                  unavailable: "bg-red-100 text-red-600 line-through"
                }}
                className="rounded-md border"
              />
              
              <div className="mt-4 space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Reason (Optional)
                  </label>
                  <Textarea
                    placeholder="Enter reason for unavailability..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    rows={3}
                  />
                </div>
                
                <Button 
                  onClick={handleMarkUnavailable}
                  disabled={!selectedDate || isLoading}
                  className="w-full"
                >
                  {isLoading ? "Marking..." : "Mark as Unavailable"}
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Currently Unavailable Dates</h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {unavailableDates.length === 0 ? (
                  <p className="text-muted-foreground">No unavailable dates set</p>
                ) : (
                  unavailableDates.map((unavailable) => (
                    <div 
                      key={unavailable.id} 
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div>
                        <Badge variant="destructive" className="mb-1">
                          {format(new Date(unavailable.date), "MMM dd, yyyy")}
                        </Badge>
                        {unavailable.reason && (
                          <p className="text-sm text-muted-foreground">
                            {unavailable.reason}
                          </p>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleMarkAvailable(unavailable.date)}
                        disabled={isLoading}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PriestAvailabilityManager;
