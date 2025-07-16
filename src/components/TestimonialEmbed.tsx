import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { getTestimonialResponses } from "@/services/testimonialService";
import { TestimonialResponse } from "@/types/testimonial";

interface TestimonialEmbedProps {
  maxTestimonials?: number;
  showRating?: boolean;
  showService?: boolean;
  showDate?: boolean;
  theme?: 'light' | 'dark';
  className?: string;
  formId?: string; // Optional form ID to filter testimonials
  responseId?: string; // Optional specific response ID to show single testimonial
}

const TestimonialEmbed = ({ 
  maxTestimonials = 3, 
  showRating = true,
  showService = true,
  showDate = true,
  theme = 'light',
  className = "",
  formId,
  responseId
}: TestimonialEmbedProps) => {
  const [testimonials, setTestimonials] = useState<TestimonialResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTestimonials();
  }, [formId, responseId, maxTestimonials]);

  const loadTestimonials = async () => {
    try {
      setIsLoading(true);
      console.log("Loading testimonials with responseId:", responseId);
      
      if (responseId) {
        // Load specific testimonial
        const allResponses = await getTestimonialResponses();
        console.log("All responses:", allResponses);
        console.log("Looking for responseId:", responseId);
        console.log("Available response IDs:", allResponses.map(r => r.id));
        const specificResponse = allResponses.find(response => response.id === responseId && response.isApproved);
        console.log("Specific response found:", specificResponse);
        setTestimonials(specificResponse ? [specificResponse] : []);
      } else {
        // Load filtered testimonials
        const allResponses = await getTestimonialResponses(formId);
        
        // Filter only approved testimonials
        const approvedTestimonials = allResponses
          .filter(response => response.isApproved)
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, maxTestimonials);

        setTestimonials(approvedTestimonials);
      }
    } catch (error) {
      console.error("Error loading testimonials:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  if (isLoading) {
    return (
      <div className={`${className} ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-current mx-auto mb-2"></div>
          <p className="text-sm">Loading testimonials...</p>
        </div>
      </div>
    );
  }

  if (testimonials.length === 0) {
    return (
      <div className={`${className} ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        <div className="text-center py-4">
          <p className="text-sm text-muted-foreground">
            {responseId ? `Testimonial with ID "${responseId}" not found or not approved.` : 'No testimonials found.'}
          </p>
        </div>
      </div>
    );
  }

  const themeClasses = {
    light: {
      container: 'bg-white text-gray-900',
      card: 'bg-gray-50 border-gray-200',
      text: 'text-gray-700',
      muted: 'text-gray-500',
      name: 'text-gray-900'
    },
    dark: {
      container: 'bg-gray-900 text-white',
      card: 'bg-gray-800 border-gray-700',
      text: 'text-gray-300',
      muted: 'text-gray-400',
      name: 'text-white'
    }
  };

  const currentTheme = themeClasses[theme];

  return (
    <div className={`${className} ${currentTheme.container} p-4 rounded-lg`}>
      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className={`${currentTheme.card} border`}>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <Quote className={`w-5 h-5 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} flex-shrink-0 mt-1`} />
                <div className="flex-1">
                  {showRating && (
                    <div className="flex items-center space-x-1 mb-2">
                      {renderStars(testimonial.rating)}
                      <span className={`text-xs ${currentTheme.muted} ml-1`}>
                        ({testimonial.rating}/5)
                      </span>
                    </div>
                  )}
                  
                  <p className={`${currentTheme.text} text-sm mb-3 italic`}>
                    "{testimonial.review}"
                  </p>
                  
                  <div className="space-y-1">
                    <p className={`font-semibold text-sm ${currentTheme.name}`}>
                      {testimonial.customerName}
                    </p>
                    {showService && testimonial.service && (
                      <p className={`text-xs ${currentTheme.muted}`}>
                        Service: {testimonial.service}
                      </p>
                    )}
                    {showDate && testimonial.date && (
                      <p className={`text-xs ${currentTheme.muted}`}>
                        {new Date(testimonial.date).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className={`text-center mt-4 text-xs ${currentTheme.muted}`}>
        Powered by TeluguPriest.com
      </div>
    </div>
  );
};

export default TestimonialEmbed; 