
import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { format, isSameDay } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { Booking, BookingService } from "@/types/booking";
import { addBooking, getBookedDates } from "@/services/bookingService";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

type Step = "location" | "service" | "date";

const BookingFlow = () => {
  const { language, t } = useLanguage();
  const [step, setStep] = useState<Step>("location");
  const [location, setLocation] = useState("");
  const [service, setService] = useState<BookingService | "">("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [bookedDates, setBookedDates] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Load booked dates when component mounts
    const fetchBookedDates = async () => {
      try {
        const dates = await getBookedDates();
        setBookedDates(dates);
      } catch (error) {
        console.error("Error fetching booked dates:", error);
      }
    };
    
    fetchBookedDates();
  }, []);
  
  const isDateDisabled = (day: Date) => {
    // Check if the date is in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (day < today) return true;
    
    // Check if the date is already booked
    return bookedDates.some(bookedDate => {
      const bookedDateObj = new Date(bookedDate);
      return isSameDay(bookedDateObj, day);
    });
  };
  
  const goToNextStep = () => {
    if (step === "location") {
      if (!location) {
        toast.error(t("Please enter your location", "దయచేసి మీ ప్రాంతాన్ని నమోదు చేయండి"));
        return;
      }
      setStep("service");
    } else if (step === "service") {
      if (!service) {
        toast.error(t("Please select a service", "దయచేసి ఒక సేవను ఎంచుకోండి"));
        return;
      }
      setStep("date");
    }
  };

  const goToPreviousStep = () => {
    if (step === "service") setStep("location");
    if (step === "date") setStep("service");
  };

  const handleSubmit = async () => {
    if (!date) {
      toast.error(t("Please select a date", "దయచేసి తేదీని ఎంచుకోండి"));
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Create a new booking
      const newBooking = {
        location,
        service,
        date: date.toISOString(),
      };
      
      await addBooking(newBooking);
      
      toast.success(
        t("Booking request sent successfully!", "బుకింగ్ అభ్యర్థన విజయవంతంగా పంపబడింది!")
      );
      
      // Reset form after submission
      setLocation("");
      setService("");
      setDate(undefined);
      setStep("location");
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast.error(
        t("Failed to submit booking. Please try again.", "బుకింగ్ సమర్పించడంలో విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.")
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-cream py-16" id="book">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-maroon text-center mb-8">
            {t("Book Your Puja in 3 Simple Steps", "3 సులభమైన దశలలో మీ పూజను బుక్ చేసుకోండి")}
          </h2>

          <div className="flex justify-between mb-10 relative">
            <div className="w-full absolute top-1/2 -translate-y-1/2 h-1 bg-muted"></div>
            <div className="flex justify-between relative z-10 w-full">
              <div className={`flex flex-col items-center ${step === "location" ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === "location" ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>1</div>
                <span className="text-sm mt-2">
                  {t("Location", "స్థానం")}
                </span>
              </div>
              
              <div className={`flex flex-col items-center ${step === "service" ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === "service" ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>2</div>
                <span className="text-sm mt-2">
                  {t("Service", "సేవ")}
                </span>
              </div>
              
              <div className={`flex flex-col items-center ${step === "date" ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === "date" ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>3</div>
                <span className="text-sm mt-2">
                  {t("Date", "తేదీ")}
                </span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            {step === "location" && (
              <div className="space-y-4">
                <label className="block text-lg font-medium text-foreground">
                  {t("Where are you located?", "మీరు ఎక్కడ ఉన్నారు?")}
                </label>
                <Input
                  placeholder={t("Enter your city or country", "మీ నగరం లేదా దేశాన్ని నమోదు చేయండి")}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-lg py-6"
                />
              </div>
            )}

            {step === "service" && (
              <div className="space-y-4">
                <label className="block text-lg font-medium text-foreground">
                  {t("Select a puja service", "పూజా సేవను ఎంచుకోండి")}
                </label>
                <Select value={service} onValueChange={(value) => setService(value as BookingService)}>
                  <SelectTrigger className="text-lg py-6">
                    <SelectValue placeholder={t("Select a service", "సేవను ఎంచుకోండి")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="satyanarayana">
                      {t("Satyanarayana Vratam", "సత్యనారాయణ వ్రతం")}
                    </SelectItem>
                    <SelectItem value="barasala">
                      {t("Barasala (Naming)", "బారసాల")}
                    </SelectItem>
                    <SelectItem value="gruhapravesam">
                      {t("Gruhapravesam", "గృహప్రవేశం")}
                    </SelectItem>
                    <SelectItem value="wedding">
                      {t("Vivaham (Wedding)", "వివాహం")}
                    </SelectItem>
                    <SelectItem value="annaprasana">
                      {t("Annaprasana", "అన్నప్రాసన")}
                    </SelectItem>
                    <SelectItem value="upanayanam">
                      {t("Upanayanam", "ఉపనయనం")}
                    </SelectItem>
                    <SelectItem value="custom">
                      {t("Custom Puja", "కస్టమ్ పూజ")}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {step === "date" && (
              <div className="space-y-4">
                <label className="block text-lg font-medium text-foreground">
                  {t("Select a preferred date", "ఇష్టమైన తేదీని ఎంచుకోండి")}
                </label>
                <div className="flex justify-center">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full text-lg py-6 pl-3 text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : t("Pick a date", "తేదీని ఎంచుకోండి")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="center">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={isDateDisabled}
                        initialFocus
                        className="pointer-events-auto"
                        modifiers={{
                          booked: (date) => bookedDates.some(bookedDate => 
                            isSameDay(new Date(bookedDate), date)
                          )
                        }}
                        modifiersClassNames={{
                          booked: "bg-red-100 text-red-600 line-through opacity-70"
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  {t("Dates highlighted in red are already booked", "ఎరుపు రంగులో హైలైట్ చేయబడిన తేదీలు ఇప్పటికే బుక్ చేయబడ్డాయి")}
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            {step !== "location" ? (
              <Button
                variant="outline"
                onClick={goToPreviousStep}
                className="text-lg py-6 px-8"
                disabled={isLoading}
              >
                {t("Back", "వెనుకకు")}
              </Button>
            ) : (
              <div></div>
            )}
            
            {step !== "date" ? (
              <Button
                onClick={goToNextStep}
                className="bg-primary text-white text-lg py-6 px-8"
                disabled={isLoading}
              >
                {t("Continue", "కొనసాగించండి")}
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="bg-primary text-white text-lg py-6 px-8"
                disabled={isLoading}
              >
                {isLoading ? t("Submitting...", "సమర్పిస్తోంది...") : t("Submit Request", "అభ్యర్థనను సమర్పించండి")}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingFlow;
