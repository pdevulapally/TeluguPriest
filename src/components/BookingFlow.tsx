
import { useState } from "react";
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

type Step = "location" | "service" | "date";

const BookingFlow = () => {
  const [language, setLanguage] = useState<"en" | "te">("en");
  const [step, setStep] = useState<Step>("location");
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  
  const goToNextStep = () => {
    if (step === "location") {
      if (!location) {
        toast.error(language === "en" ? "Please enter your location" : "దయచేసి మీ ప్రాంతాన్ని నమోదు చేయండి");
        return;
      }
      setStep("service");
    } else if (step === "service") {
      if (!service) {
        toast.error(language === "en" ? "Please select a service" : "దయచేసి ఒక సేవను ఎంచుకోండి");
        return;
      }
      setStep("date");
    }
  };

  const goToPreviousStep = () => {
    if (step === "service") setStep("location");
    if (step === "date") setStep("service");
  };

  const handleSubmit = () => {
    if (!date) {
      toast.error(language === "en" ? "Please select a date" : "దయచేసి తేదీని ఎంచుకోండి");
      return;
    }

    toast.success(
      language === "en" 
        ? "Booking request sent successfully!" 
        : "బుకింగ్ అభ్యర్థన విజయవంతంగా పంపబడింది!"
    );
    
    // Reset form after submission
    setLocation("");
    setService("");
    setDate(undefined);
    setStep("location");
  };

  return (
    <section className="bg-cream py-16" id="book">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-maroon text-center mb-8">
            {language === "en" ? "Book Your Puja in 3 Simple Steps" : "3 సులభమైన దశలలో మీ పూజను బుక్ చేసుకోండి"}
          </h2>

          <div className="flex justify-between mb-10 relative">
            <div className="w-full absolute top-1/2 -translate-y-1/2 h-1 bg-muted"></div>
            <div className="flex justify-between relative z-10 w-full">
              <div className={`flex flex-col items-center ${step === "location" ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === "location" ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>1</div>
                <span className="text-sm mt-2">
                  {language === "en" ? "Location" : "స్థానం"}
                </span>
              </div>
              
              <div className={`flex flex-col items-center ${step === "service" ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === "service" ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>2</div>
                <span className="text-sm mt-2">
                  {language === "en" ? "Service" : "సేవ"}
                </span>
              </div>
              
              <div className={`flex flex-col items-center ${step === "date" ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === "date" ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>3</div>
                <span className="text-sm mt-2">
                  {language === "en" ? "Date" : "తేదీ"}
                </span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            {step === "location" && (
              <div className="space-y-4">
                <label className="block text-lg font-medium text-foreground">
                  {language === "en" ? "Where are you located?" : "మీరు ఎక్కడ ఉన్నారు?"}
                </label>
                <Input
                  placeholder={language === "en" ? "Enter your city or country" : "మీ నగరం లేదా దేశాన్ని నమోదు చేయండి"}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-lg py-6"
                />
              </div>
            )}

            {step === "service" && (
              <div className="space-y-4">
                <label className="block text-lg font-medium text-foreground">
                  {language === "en" ? "Select a puja service" : "పూజా సేవను ఎంచుకోండి"}
                </label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger className="text-lg py-6">
                    <SelectValue placeholder={language === "en" ? "Select a service" : "సేవను ఎంచుకోండి"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="satyanarayana">
                      {language === "en" ? "Satyanarayana Vratam" : "సత్యనారాయణ వ్రతం"}
                    </SelectItem>
                    <SelectItem value="barasala">
                      {language === "en" ? "Barasala (Naming)" : "బారసాల"}
                    </SelectItem>
                    <SelectItem value="gruhapravesam">
                      {language === "en" ? "Gruhapravesam" : "గృహప్రవేశం"}
                    </SelectItem>
                    <SelectItem value="wedding">
                      {language === "en" ? "Vivaham (Wedding)" : "వివాహం"}
                    </SelectItem>
                    <SelectItem value="annaprasana">
                      {language === "en" ? "Annaprasana" : "అన్నప్రాసన"}
                    </SelectItem>
                    <SelectItem value="upanayanam">
                      {language === "en" ? "Upanayanam" : "ఉపనయనం"}
                    </SelectItem>
                    <SelectItem value="custom">
                      {language === "en" ? "Custom Puja" : "కస్టమ్ పూజ"}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {step === "date" && (
              <div className="space-y-4">
                <label className="block text-lg font-medium text-foreground">
                  {language === "en" ? "Select a preferred date" : "ఇష్టమైన తేదీని ఎంచుకోండి"}
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
                        {date ? format(date, "PPP") : language === "en" ? "Pick a date" : "తేదీని ఎంచుకోండి"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="center">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            {step !== "location" ? (
              <Button
                variant="outline"
                onClick={goToPreviousStep}
                className="text-lg py-6 px-8"
              >
                {language === "en" ? "Back" : "వెనుకకు"}
              </Button>
            ) : (
              <div></div>
            )}
            
            {step !== "date" ? (
              <Button
                onClick={goToNextStep}
                className="bg-primary text-white text-lg py-6 px-8"
              >
                {language === "en" ? "Continue" : "కొనసాగించండి"}
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="bg-primary text-white text-lg py-6 px-8"
              >
                {language === "en" ? "Submit Request" : "అభ్యర్థనను సమర్పించండి"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingFlow;
