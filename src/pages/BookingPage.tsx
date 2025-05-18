// Om Ganesha Namah 🕉️
import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
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
import { BookingService } from "@/types/booking";
import { addBooking, getBookedDates } from "@/services/bookingService";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";

const BookingPage = () => {
  const { language, t } = useLanguage();
  const [location, setLocation] = useState("");
  const [service, setService] = useState<BookingService | "">("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [bookedDates, setBookedDates] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  
  // Personal details
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [notes, setNotes] = useState("");

  // Get the service from URL parameter if it exists
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');
    if (serviceParam && Object.values(BookingService).includes(serviceParam as BookingService)) {
      setService(serviceParam as BookingService);
    }
  }, []);
  
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
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  
  const isDateDisabled = (day: Date) => {
    // Check if the date is in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (day < today) return true;
    
    // Check if the date is already booked
    return bookedDates.some(bookedDate => {
      const bookedDateObj = new Date(bookedDate);
      return day.toDateString() === bookedDateObj.toDateString();
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!fullName) {
      toast.error(t("Please enter your full name", "దయచేసి మీ పూర్తి పేరు నమోదు చేయండి"));
      return;
    }
    
    if (!email) {
      toast.error(t("Please enter your email address", "దయచేసి మీ ఇమెయిల్ చిరునామాను నమోదు చేయండి"));
      return;
    }
    
    if (!phone) {
      toast.error(t("Please enter your phone number", "దయచేసి మీ ఫోన్ నంబర్‌ను నమోదు చేయండి"));
      return;
    }
    
    if (!city || !country) {
      toast.error(t("Please enter your city and country", "దయచేసి మీ నగరం మరియు దేశాన్ని నమోదు చేయండి"));
      return;
    }
    
    if (!service) {
      toast.error(t("Please select a service", "దయచేసి ఒక సేవను ఎంచుకోండి"));
      return;
    }
    
    if (!date) {
      toast.error(t("Please select a date", "దయచేసి తేదీని ఎంచుకోండి"));
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Create a new booking with additional fields
      const newBooking = {
        location,
        service,
        date: date.toISOString(),
        customerName: fullName,
        customerEmail: email,
        customerPhone: phone,
        address,
        city,
        country,
        notes
      };
      
      await addBooking(newBooking);
      
      // Show success notification
      toast.success(
        t("Booking request sent successfully!", "బుకింగ్ అభ్యర్థన విజయవంతంగా పంపబడింది!")
      );
      
      // Set submitted to show thank you message
      setIsSubmitted(true);
      
      // Reset form after submission (not needed anymore as we're showing thank you message)
      // But keep it for now in case we want to use it later
      setLocation("");
      setFullName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setCity("");
      setCountry("");
      setService("");
      setDate(undefined);
      setNotes("");
      
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast.error(
        t("Failed to submit booking. Please try again.", "బుకింగ్ సమర్పించడంలో విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.")
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl font-bold text-maroon">
                {t("Thank You!", "ధన్యవాదాలు!")}
              </CardTitle>
              <CardDescription className="text-lg">
                {t("Your booking request has been submitted successfully.", "మీ బుకింగ్ అభ్యర్థన విజయవంతంగా సమర్పించబడింది.")}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-8">
                <p className="text-foreground mb-6">
                  {t(
                    "Thank you for choosing Pandit Eshwar Prasad for your puja services. We have received your booking request and will contact you shortly to confirm the details.",
                    "మీ పూజా సేవల కోసం పండిత ఈశ్వర్ ప్రసాద్ ని ఎంచుకున్నందుకు ధన్యవాదాలు. మేము మీ బుకింగ్ అభ్యర్థనను స్వీకరించాము మరియు వివరాలను నిర్ధారించడానికి త్వరలో మిమ్మల్ని సంప్రదిస్తాము."
                  )}
                </p>
                <div className="mt-8 mb-4">
                  <Button 
                    onClick={() => navigate("/")}
                    className="bg-primary text-white"
                  >
                    {t("Return to Home", "హోమ్‌కు తిరిగి వెళ్లు")}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          {t("Back to Home", "హోమ్‌కు తిరిగి వెళ్లు")}
        </Button>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-maroon text-center mb-8">
            {t("Book Your Puja with Pandit Eshwar Prasad", "పండిత ఈశ్వర్ ప్రసాద్ తో మీ పూజను బుక్ చేసుకోండి")}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-maroon">
                {t("Personal Information", "వ్యక్తిగత సమాచారం")}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    {t("Full Name", "పూర్తి పేరు")}*
                  </label>
                  <Input
                    placeholder={t("Enter your full name", "మీ పూర్తి పేరును నమోదు చేయండి")}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    {t("Email Address", "ఇమెయిల్ చిరునామా")}*
                  </label>
                  <Input
                    type="email"
                    placeholder={t("Enter your email", "మీ ఇమెయిల్‌ను నమోదు చేయండి")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    {t("Phone Number", "ఫోన్ నంబర్")}*
                  </label>
                  <Input
                    placeholder={t("Enter your phone number", "మీ ఫోన్ నంబర్‌ను నమోదు చేయండి")}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    {t("Address", "చిరునామా")}
                  </label>
                  <Input
                    placeholder={t("Enter your address", "మీ చిరునామాను నమోదు చేయండి")}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    {t("City", "నగరం")}*
                  </label>
                  <Input
                    placeholder={t("Enter your city", "మీ నగరాన్ని నమోదు చేయండి")}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    {t("Country", "దేశం")}*
                  </label>
                  <Input
                    placeholder={t("Enter your country", "మీ దేశాన్ని నమోదు చేయండి")}
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="text-base"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-maroon">
                {t("Puja Details", "పూజా వివరాలు")}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    {t("Select a puja service", "పూజా సేవను ఎంచుకోండి")}*
                  </label>
                  <Select value={service} onValueChange={(value) => setService(value as BookingService)}>
                    <SelectTrigger className="text-base">
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

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    {t("Select a preferred date", "ఇష్టమైన తేదీని ఎంచుకోండి")}*
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full text-left font-normal justify-start",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : t("Pick a date", "తేదీని ఎంచుకోండి")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={isDateDisabled}
                        initialFocus
                        className="pointer-events-auto"
                        modifiers={{
                          booked: (date) => bookedDates.some(bookedDate => 
                            new Date(bookedDate).toDateString() === date.toDateString()
                          )
                        }}
                        modifiersClassNames={{
                          booked: "bg-red-100 text-red-600 line-through opacity-70"
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                  <p className="text-xs text-muted-foreground mt-1">
                    {t("Dates highlighted in red are already booked", "ఎరుపు రంగులో హైలైట్ చేయబడిన తేదీలు ఇప్పటికే బుక్ చేయబడ్డాయి")}
                  </p>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  {t("Additional Notes", "అదనపు గమనికలు")}
                </label>
                <Textarea
                  placeholder={t("Any special requests or information about the puja", "పూజ గురించి ఏదైనా ప్రత్యేక అభ్యర్థనలు లేదా సమాచారం")}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={4}
                />
              </div>
            </div>

            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">
                {t("Fields marked with * are required", "* గుర్తుతో సూచించబడిన ఫీల్డ్‌లు అవసరం")}
              </p>
              <Button
                type="submit"
                className="bg-primary text-white w-full text-lg py-6"
                disabled={isLoading}
              >
                {isLoading ? 
                  t("Submitting...", "సమర్పిస్తోంది...") : 
                  t("Submit Booking Request", "బుకింగ్ అభ్యర్థనను సమర్పించండి")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
