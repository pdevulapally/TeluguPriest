import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";
import CookieBanner from "@/components/CookieBanner";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLayout from "./components/AdminLayout";
import BookingPage from "./pages/BookingPage";
import UrgentBooking from "./pages/UrgentBooking";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ZoomCallback from "./pages/ZoomCallback";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FeedbackForm from "./pages/FeedbackForm";
import TestimonialEmbedPage from "./pages/TestimonialEmbed";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <CookieBanner />
            <Routes>
              {/* Homepage Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/te" element={<Index />} />
              
              {/* Booking Routes */}
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/te/booking" element={<BookingPage />} />
              <Route path="/book-puja" element={<BookingPage />} />
              <Route path="/te/book-puja" element={<BookingPage />} />
              <Route path="/urgent-booking" element={<UrgentBooking />} />
              <Route path="/te/urgent-booking" element={<UrgentBooking />} />
              
              {/* Local City Routes for SEO */}
              <Route path="/london" element={<Index />} />
              <Route path="/te/london" element={<Index />} />
              <Route path="/birmingham" element={<Index />} />
              <Route path="/te/birmingham" element={<Index />} />
              <Route path="/manchester" element={<Index />} />
              <Route path="/te/manchester" element={<Index />} />
              <Route path="/leeds" element={<Index />} />
              <Route path="/te/leeds" element={<Index />} />
              <Route path="/cardiff" element={<Index />} />
              <Route path="/te/cardiff" element={<Index />} />
              
              {/* Service Detail Routes */}
              <Route path="/service/:serviceId" element={<ServiceDetailPage />} />
              <Route path="/te/service/:serviceId" element={<ServiceDetailPage />} />
              
              {/* Individual Service Routes for SEO */}
              <Route path="/satyanarayana-vratam" element={<ServiceDetailPage />} />
              <Route path="/te/satyanarayana-vratam" element={<ServiceDetailPage />} />
              <Route path="/gruhapravesam" element={<ServiceDetailPage />} />
              <Route path="/te/gruhapravesam" element={<ServiceDetailPage />} />
              <Route path="/hindu-wedding" element={<ServiceDetailPage />} />
              <Route path="/te/hindu-wedding" element={<ServiceDetailPage />} />
              <Route path="/barasala" element={<ServiceDetailPage />} />
              <Route path="/te/barasala" element={<ServiceDetailPage />} />
              <Route path="/upanayanam" element={<ServiceDetailPage />} />
              <Route path="/te/upanayanam" element={<ServiceDetailPage />} />
              <Route path="/seemantham" element={<ServiceDetailPage />} />
              <Route path="/te/seemantham" element={<ServiceDetailPage />} />
              <Route path="/annaprasana" element={<ServiceDetailPage />} />
              <Route path="/te/annaprasana" element={<ServiceDetailPage />} />
              <Route path="/pitra-paksha" element={<ServiceDetailPage />} />
              <Route path="/te/pitra-paksha" element={<ServiceDetailPage />} />
              <Route path="/ganesha-puja" element={<ServiceDetailPage />} />
              <Route path="/te/ganesha-puja" element={<ServiceDetailPage />} />
              <Route path="/lakshmi-puja" element={<ServiceDetailPage />} />
              <Route path="/te/lakshmi-puja" element={<ServiceDetailPage />} />
              <Route path="/durga-puja" element={<ServiceDetailPage />} />
              <Route path="/te/durga-puja" element={<ServiceDetailPage />} />
              <Route path="/online-puja" element={<ServiceDetailPage />} />
              <Route path="/te/online-puja" element={<ServiceDetailPage />} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/auth/zoom/callback" element={<ZoomCallback />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboard />} />
              </Route>

              {/* Privacy Policy Route */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              
              {/* Feedback Form Route */}
              <Route path="/feedback/:formId" element={<FeedbackForm />} />
              
              {/* Testimonial Embed Route */}
              <Route path="/embed/testimonials" element={<TestimonialEmbedPage />} />
              
              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  </HelmetProvider>
);

export default App;
