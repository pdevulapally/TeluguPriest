import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, CheckCircle, ArrowLeft } from "lucide-react";
import { getTestimonialForms, submitTestimonialResponse } from "@/services/testimonialService";
import { TestimonialForm } from "@/types/testimonial";
import { useToast } from "@/hooks/use-toast";

const FeedbackForm = () => {
  const { formId } = useParams<{ formId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [form, setForm] = useState<TestimonialForm | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    service: "",
    date: "",
    review: "",
  });

  useEffect(() => {
    if (formId) {
      loadForm();
    }
  }, [formId]);

  const loadForm = async () => {
    try {
      setIsLoading(true);
      const forms = await getTestimonialForms();
      const foundForm = forms.find(f => f.id === formId);
      
      if (!foundForm) {
        toast({
          title: "Error",
          description: "Feedback form not found",
          variant: "destructive",
        });
        navigate("/");
        return;
      }
      
      if (!foundForm.isActive) {
        toast({
          title: "Error",
          description: "This feedback form is currently inactive",
          variant: "destructive",
        });
        navigate("/");
        return;
      }
      
      if (foundForm.isExpired) {
        toast({
          title: "Error",
          description: "This feedback form has expired",
          variant: "destructive",
        });
        navigate("/");
        return;
      }
      
      if (foundForm.maxResponses && foundForm.responsesCount >= foundForm.maxResponses) {
        toast({
          title: "Error",
          description: "This feedback form has reached its maximum number of responses",
          variant: "destructive",
        });
        navigate("/");
        return;
      }
      
      setForm(foundForm);
    } catch (error) {
      console.error("Error loading form:", error);
      toast({
        title: "Error",
        description: "Failed to load feedback form",
        variant: "destructive",
      });
      navigate("/");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form) return;
    
    if (!formData.customerName.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.customerEmail.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.customerEmail.trim())) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    if (rating === 0) {
      toast({
        title: "Error",
        description: "Please provide a rating",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.review.trim()) {
      toast({
        title: "Error",
        description: "Please provide your review",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await submitTestimonialResponse(form.id, {
        customerName: formData.customerName.trim(),
        customerEmail: formData.customerEmail.trim(),
        rating,
        review: formData.review.trim(),
        service: formData.service.trim() || undefined,
        date: formData.date || undefined,
      });
      
      toast({
        title: "Thank you!",
        description: "Your feedback has been submitted successfully",
      });
      
      // Reset form
      setFormData({
        customerName: "",
        customerEmail: "",
        service: "",
        date: "",
        review: "",
      });
      setRating(0);
      
    } catch (error) {
      console.error("Error submitting feedback:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to submit feedback. Please try again.";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => {
      const starValue = i + 1;
      const isFilled = starValue <= (hoveredRating || rating);
      
      return (
        <button
          key={i}
          type="button"
          className="p-2 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 rounded-full"
          onClick={() => setRating(starValue)}
          onMouseEnter={() => setHoveredRating(starValue)}
          onMouseLeave={() => setHoveredRating(0)}
        >
          <Star
            className={`w-10 h-10 transition-all duration-200 ${
              isFilled 
                ? 'fill-yellow-400 text-yellow-400 drop-shadow-sm' 
                : 'text-gray-300 hover:text-yellow-300'
            }`}
          />
        </button>
      );
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-base">Loading feedback form...</p>
        </div>
      </div>
    );
  }

  if (!form) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-orange-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-white/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <Card className="w-full shadow-xl border-0">
          <CardHeader className="text-center bg-gradient-to-r from-maroon to-red-800 text-white rounded-t-lg">
            <CardTitle className="text-2xl">{form.title}</CardTitle>
            {form.description && (
              <p className="text-orange-100 mt-2">{form.description}</p>
            )}
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="customerName" className="text-base font-medium">Your Name *</Label>
                  <Input
                    id="customerName"
                    value={formData.customerName}
                    onChange={(e) => setFormData(prev => ({ ...prev, customerName: e.target.value }))}
                    placeholder="Enter your full name"
                    className="h-12 text-base"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="customerEmail" className="text-base font-medium">Email Address *</Label>
                  <Input
                    id="customerEmail"
                    type="email"
                    value={formData.customerEmail}
                    onChange={(e) => setFormData(prev => ({ ...prev, customerEmail: e.target.value }))}
                    placeholder="Enter your email address"
                    className="h-12 text-base"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-base font-medium">Service Received (Optional)</Label>
                  <Input
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                    placeholder="e.g., Satyanarayana Puja, Wedding Ceremony"
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="text-base font-medium">Date of Service (Optional)</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                    className="h-12 text-base"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-base font-medium">Your Rating *</Label>
                <div className="flex flex-col items-center space-y-3 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-1">
                    {renderStars()}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {rating > 0 ? `You rated us ${rating} out of 5 stars` : "Click on the stars to rate your experience"}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="review" className="text-base font-medium">Your Review *</Label>
                <Textarea
                  id="review"
                  value={formData.review}
                  onChange={(e) => setFormData(prev => ({ ...prev, review: e.target.value }))}
                  placeholder="Please share your experience with our priest services. What did you like most? How was the ceremony conducted? Any suggestions for improvement?"
                  rows={6}
                  className="resize-none"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Your feedback helps us improve our services and helps other families make informed decisions.
                </p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-maroon to-red-800 hover:from-red-800 hover:to-maroon text-white font-semibold py-3 text-lg"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting Your Feedback...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Submit Your Feedback
                  </>
                )}
              </Button>
              
              <p className="text-center text-xs text-muted-foreground">
                By submitting this feedback, you agree to share your experience publicly on our website.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeedbackForm; 