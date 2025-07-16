
// Om Ganesha Namah 🕉️
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import PanditBio from '@/components/PanditBio';
import GlobalAvailability from '@/components/GlobalAvailability';
import ContactSection from '@/components/ContactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import '@/lib/firebase'; // Just import the firebase module to ensure it's initialized

const Index = () => {
  useEffect(() => {
    // Log that Firebase is ready
    console.log("Firebase initialized successfully");
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <ServicesGrid />
          <PanditBio />
          <GlobalAvailability />
          
          {/* FAQ Section for SEO */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Common questions about booking a Telugu priest for your Hindu ceremonies
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="bg-cream/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-maroon mb-3">
                    How quickly can you arrange a Telugu priest for urgent ceremonies?
                  </h3>
                  <p className="text-foreground">
                    We understand urgent situations! Pandit Eswar Prasad is available 24/7 for immediate bookings. 
                    For same-day ceremonies, call us directly at +44 7438 618486. We can arrange online puja services 
                    within hours and in-person services within 24-48 hours depending on your location.
                  </p>
                </div>
                
                <div className="bg-cream/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-maroon mb-3">
                    How do I find a Telugu priest near me?
                  </h3>
                  <p className="text-foreground">
                    While we're based in the UK, our Telugu priest services are available worldwide through online 
                    ceremonies. For in-person services, we travel to major cities globally. Simply book online or 
                    call +44 7438 618486 to check availability in your area. We serve clients in UK, USA, Canada, 
                    Australia, and many other countries.
                  </p>
                </div>
                
                <div className="bg-cream/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-maroon mb-3">
                    What makes your Telugu priest different from others?
                  </h3>
                  <p className="text-foreground">
                    Pandit Eswar Prasad has 40+ years of experience in authentic Telugu and North Indian Vedic rituals. 
                    He's a certified Brahmin priest with deep knowledge of Sanskrit mantras and traditional ceremonies. 
                    Our services combine traditional authenticity with modern convenience - available both online and in-person.
                  </p>
                </div>
                
                <div className="bg-cream/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-maroon mb-3">
                    Can I book a pooja priest for today or tomorrow?
                  </h3>
                  <p className="text-foreground">
                    Yes! We offer same-day and next-day bookings for urgent ceremonies. Online puja services can be 
                    arranged immediately, while in-person services depend on your location and availability. Call us at +44 7438 618486 
                    for the fastest response to urgent requests.
                  </p>
                </div>
                
                <div className="bg-cream/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-maroon mb-3">
                    What Hindu ceremonies do you perform?
                  </h3>
                  <p className="text-foreground">
                    We perform all major Hindu ceremonies including Satyanarayana Vratam, Gruhapravesam (house warming), 
                    Hindu weddings, Upanayanam (thread ceremony), Barasala (naming ceremony), Annaprasana (first rice), 
                    Pitru Paksha rituals, and various deity-specific pujas (Ganesha, Lakshmi, Durga), Rama Navami, Srinivasa Kalyanam, and other special occasions.
                  </p>
                </div>
                
                <div className="bg-cream/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-maroon mb-3">
                    How much does it cost to book a Telugu priest?
                  </h3>
                  <p className="text-foreground">
                    Our pricing depends on the type of pooja service, your location, and whether it's online or in-person. Please contact us for a detailed quote based on your specific requirements.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <a
                  href="/booking"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                >
                  Book Your Puja Now
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  For urgent bookings, call +44 7438 618486 directly
                </p>
              </div>
            </div>
          </section>
          
          {/* Local Service Areas Section */}
          <section className="py-16 bg-gradient-to-r from-saffron/10 to-gold/10">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-4">
                  Telugu Priest Services Near You
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Professional Telugu Hindu priest services available across major UK cities and worldwide
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-maroon mb-3">London</h3>
                  <p className="text-foreground mb-4">
                    Same-day Telugu priest services in London. Available for urgent bookings including Satyanarayana Vratam, 
                    Gruhapravesam, and Hindu weddings.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p>• Same-day availability</p>
                    <p>• In-person & online services</p>
                    <p>• All major Hindu ceremonies</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-maroon mb-3">Birmingham</h3>
                  <p className="text-foreground mb-4">
                    Professional Telugu priest services in Birmingham. Expert in traditional Hindu rituals and ceremonies.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p>• 24-48 hour booking</p>
                    <p>• Traditional Telugu ceremonies</p>
                    <p>• Sanskrit mantras expert</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-maroon mb-3">Manchester</h3>
                  <p className="text-foreground mb-4">
                    Telugu Hindu priest services in Manchester. Available for all types of Hindu ceremonies and rituals.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p>• Flexible scheduling</p>
                    <p>• Online consultation available</p>
                    <p>• Competitive pricing</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-maroon mb-3">Leeds</h3>
                  <p className="text-foreground mb-4">
                    Authentic Telugu priest services in Leeds. Specializing in traditional Hindu ceremonies and spiritual guidance.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p>• Traditional approach</p>
                    <p>• Spiritual consultation</p>
                    <p>• Family ceremonies</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-maroon mb-3">Cardiff</h3>
                  <p className="text-foreground mb-4">
                    Professional Telugu priest in Cardiff. Available for urgent bookings and same-day ceremonies.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p>• Urgent booking service</p>
                    <p>• Same-day ceremonies</p>
                    <p>• 24/7 availability</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-maroon mb-3">Worldwide Online</h3>
                  <p className="text-foreground mb-4">
                    Virtual Telugu priest services available worldwide. Conduct ceremonies via video call from anywhere.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p>• Global availability</p>
                    <p>• Instant booking</p>
                    <p>• No travel required</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <div className="bg-maroon text-white rounded-lg p-6 max-w-2xl mx-auto">
                  <h3 className="text-xl font-bold mb-3">Need a Telugu Priest Urgently?</h3>
                  <p className="mb-4">
                    Call us directly at +44 7438 618486 for immediate assistance. 
                    We can arrange same-day ceremonies for urgent situations.
                  </p>
                  <a
                    href="tel:+447438618486"
                    className="inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-maroon bg-white rounded-full hover:bg-gray-100 transition-all duration-300"
                  >
                    Call Now: +44 7438 618486
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          <ContactSection />
          <FloatingWhatsApp />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
