import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { submitTestimonialResponse, updateTestimonialResponse } from "@/services/testimonialService";
import { useToast } from "@/hooks/use-toast";

const TestDataAdder = () => {
  const [isAdding, setIsAdding] = useState(false);
  const { toast } = useToast();

  const addTestTestimonials = async () => {
    setIsAdding(true);
    try {
      // First, we need a form ID. Let's create a test form first
      // For now, let's use a hardcoded form ID or create one
      const testFormId = "test-form-123"; // You'll need to replace this with a real form ID
      
      // Add test testimonial
      await submitTestimonialResponse(testFormId, {
        customerName: "Test Customer",
        customerEmail: "test@example.com",
        rating: 5,
        review: "This is a test testimonial to verify the embed functionality works correctly.",
        service: "Satyanarayana Puja",
        date: "2024-01-15"
      });

      toast({
        title: "Success",
        description: "Test testimonial added successfully",
      });
    } catch (error) {
      console.error("Error adding test testimonial:", error);
      toast({
        title: "Error",
        description: "Failed to add test testimonial",
        variant: "destructive",
      });
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Add Test Data (Development Only)</CardTitle>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={addTestTestimonials} 
          disabled={isAdding}
          variant="outline"
        >
          {isAdding ? "Adding..." : "Add Test Testimonial"}
        </Button>
        <p className="text-sm text-muted-foreground mt-2">
          This will add a test testimonial to your database for testing purposes.
        </p>
      </CardContent>
    </Card>
  );
};

export default TestDataAdder; 