import { useSearchParams } from "react-router-dom";
import TestimonialEmbed from "@/components/TestimonialEmbed";

const TestimonialEmbedPage = () => {
  const [searchParams] = useSearchParams();
  
  const maxTestimonials = parseInt(searchParams.get('max') || '3');
  const showRating = searchParams.get('rating') !== 'false';
  const showService = searchParams.get('service') !== 'false';
  const showDate = searchParams.get('date') !== 'false';
  const theme = (searchParams.get('theme') as 'light' | 'dark') || 'light';
  const formId = searchParams.get('formId') || undefined;

  return (
    <div className="min-h-screen bg-transparent">
      <TestimonialEmbed
        maxTestimonials={maxTestimonials}
        showRating={showRating}
        showService={showService}
        showDate={showDate}
        theme={theme}
        formId={formId}
      />
    </div>
  );
};

export default TestimonialEmbedPage; 