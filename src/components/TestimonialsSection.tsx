import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { getTestimonialResponses } from "@/services/testimonialService";
import { TestimonialResponse } from "@/types/testimonial";

interface TestimonialsSectionProps {
  maxTestimonials?: number;
  showTitle?: boolean;
  className?: string;
}

const TestimonialsSection = ({ 
  maxTestimonials = 6, 
  showTitle = true,
  className = "" 
}: TestimonialsSectionProps) => {
  const [testimonials, setTestimonials] = useState<TestimonialResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      setIsLoading(true);
      const allResponses = await getTestimonialResponses();
      
      // Filter only approved testimonials
      const approvedTestimonials = allResponses
        .filter(response => response.isApproved)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, maxTestimonials);

      setTestimonials(approvedTestimonials);

      // Calculate average rating
      if (approvedTestimonials.length > 0) {
        const totalRating = approvedTestimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0);
        setAverageRating(Math.round((totalRating / approvedTestimonials.length) * 10) / 10);
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
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  if (isLoading) {
    return (
      <div className={`py-12 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading testimonials...</p>
          </div>
        </div>
      </div>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className={`py-12 bg-cream ${className}`}>
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-maroon mb-4">
              What Our Clients Say
            </h2>
            {averageRating > 0 && (
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="flex items-center space-x-1">
                  {renderStars(Math.round(averageRating))}
                </div>
                <span className="text-lg font-semibold text-maroon">
                  {averageRating} out of 5
                </span>
                <span className="text-muted-foreground">
                  ({testimonials.length} reviews)
                </span>
              </div>
            )}
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Read testimonials from families who have experienced our traditional Telugu priest services
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Quote className="w-6 h-6 text-maroon flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({testimonial.rating}/5)
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-4 italic">
                      "{testimonial.review}"
                    </p>
                    
                    <div className="space-y-1">
                      <p className="font-semibold text-maroon">
                        {testimonial.customerName}
                      </p>
                      {testimonial.service && (
                        <p className="text-sm text-muted-foreground">
                          Service: {testimonial.service}
                        </p>
                      )}
                      {testimonial.date && (
                        <p className="text-sm text-muted-foreground">
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

        {testimonials.length >= maxTestimonials && (
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Showing {maxTestimonials} of {testimonials.length} testimonials
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection; 