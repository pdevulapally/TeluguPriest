import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createBooking } from "@/actions/booking";
import { bookingSchema } from "@/lib/validations/booking";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { generatePujaRequirementsPDF } from "@/utils/pdfGenerator";

interface BookingFlowProps {
  selectedService: string;
  onClose: () => void;
}

const BookingFlow = ({ selectedService, onClose }: BookingFlowProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      customerName: "",
      customerPhone: "",
      customerEmail: "",
      date: new Date(),
      location: "",
      address: "",
      city: "",
      country: "India",
      notes: "",
    },
  });

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = async (data: z.infer<typeof bookingSchema>) => {
    try {
      setIsSubmitting(true);
      
      const bookingData = {
        customerName: data.customerName,
        customerPhone: data.customerPhone,
        customerEmail: data.customerEmail,
        service: selectedService,
        date: data.date.toISOString(),
        location: data.location,
        address: data.address,
        city: data.city,
        country: data.country,
        notes: data.notes,
        status: "pending" as const,
        createdAt: new Date().toISOString(),
      };

      await createBooking(bookingData);
      
      // Generate PDF with requirements
      generatePujaRequirementsPDF(
        selectedService,
        data.customerName,
        format(data.date, "PPPP")
      );
      
      toast({
        title: "Booking Confirmed!",
        description: "Your puja has been scheduled successfully. A PDF with requirements has been downloaded.",
      });
      
      setCurrentStep(5);
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "There was an error creating your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            form={form}
            nextStep={nextStep}
            isSubmitting={isSubmitting}
          />
        );
      case 2:
        return (
          <Step2
            form={form}
            prevStep={prevStep}
            nextStep={nextStep}
            isSubmitting={isSubmitting}
          />
        );
      case 3:
        return (
          <Step3
            form={form}
            prevStep={prevStep}
            nextStep={nextStep}
            isSubmitting={isSubmitting}
          />
        );
      case 4:
        return (
          <Step4
            form={form}
            onSubmit={onSubmit}
            prevStep={prevStep}
            isSubmitting={isSubmitting}
          />
        );
      case 5:
        return <Confirmation onClose={onClose} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {currentStep !== 5 && (
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Step {currentStep} of 4: {getStepTitle(currentStep)}
          </h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            Cancel
          </Button>
        </div>
      )}
      {renderStepContent()}
    </div>
  );
};

const getStepTitle = (step: number) => {
  switch (step) {
    case 1:
      return "Personal Details";
    case 2:
      return "Service Details";
    case 3:
      return "Address Details";
    case 4:
      return "Confirmation";
    default:
      return "";
  }
};

interface Step1Props {
  form: any;
  nextStep: () => void;
  isSubmitting: boolean;
}

const Step1 = ({ form, nextStep, isSubmitting }: Step1Props) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(nextStep)} className="space-y-8">
        <FormField
          control={form.control}
          name="customerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Customer Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="customerPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your phone number"
                  type="tel"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="customerEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email address"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Next
        </Button>
      </form>
    </Form>
  );
};

interface Step2Props {
  form: any;
  prevStep: () => void;
  nextStep: () => void;
  isSubmitting: boolean;
}

const Step2 = ({ form, prevStep, nextStep, isSubmitting }: Step2Props) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(nextStep)} className="space-y-8">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of Service</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date > new Date(2024, 11, 31)
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Enter the location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between">
          <Button variant="outline" onClick={prevStep} disabled={isSubmitting}>
            Previous
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
};

interface Step3Props {
  form: any;
  prevStep: () => void;
  nextStep: () => void;
  isSubmitting: boolean;
}

const Step3 = ({ form, prevStep, nextStep, isSubmitting }: Step3Props) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(nextStep)} className="space-y-8">
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter your address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Enter your city" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="India">India</SelectItem>
                  <SelectItem value="USA">USA</SelectItem>
                  <SelectItem value="Canada">Canada</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between">
          <Button variant="outline" onClick={prevStep} disabled={isSubmitting}>
            Previous
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
};

interface Step4Props {
  form: any;
  onSubmit: (data: z.infer<typeof bookingSchema>) => Promise<void>;
  prevStep: () => void;
  isSubmitting: boolean;
}

const Step4 = ({ form, onSubmit, prevStep, isSubmitting }: Step4Props) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Notes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any specific requirements or notes?"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Do you have any specific requests or notes for us?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between">
          <Button variant="outline" onClick={prevStep} disabled={isSubmitting}>
            Previous
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Confirm Booking
          </Button>
        </div>
      </form>
    </Form>
  );
};

interface ConfirmationProps {
  onClose: () => void;
}

const Confirmation = ({ onClose }: ConfirmationProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-semibold">Booking Confirmed!</h2>
      <p className="text-muted-foreground">
        Thank you for your booking. We will contact you soon.
      </p>
      <Button onClick={onClose}>Close</Button>
    </div>
  );
};

export default BookingFlow;
