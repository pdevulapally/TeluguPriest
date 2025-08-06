
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
          
                                {/* Vara Lakshmi Vratham WhatsApp Group Section - Mobile First */}
           <section className="py-6 sm:py-8 md:py-12 bg-gradient-to-r from-yellow-50 to-orange-50">
             <div className="container mx-auto px-4 sm:px-6">
               <div className="max-w-4xl mx-auto">
                 <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 border border-yellow-200">
                   
                   {/* Mobile-First Header */}
                   <div className="text-center mb-6 sm:mb-8">
                     {/* Lakshmi Devi Photo - Mobile Optimized */}
                     <div className="flex justify-center mb-4 sm:mb-6">
                       <div className="relative w-24 h-20 sm:w-32 sm:h-28 md:w-40 md:h-36">
                         <img 
                           src="/Images/Goddess-Lakshmi.jpg" 
                           alt="Goddess Lakshmi" 
                           className="w-full h-full object-contain rounded-lg border-2 border-yellow-300 shadow-md"
                         />
                         <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-yellow-100 rounded-full flex items-center justify-center">
                           <span className="text-yellow-600 text-xs sm:text-sm">🕉️</span>
                         </div>
                       </div>
                     </div>
                     
                     <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-maroon mb-3 sm:mb-4 text-center leading-tight">
                       🕉️ Vara Lakshmi Vratham - August 8th @ 11:30 AM 🕉️
                     </h2>
                     <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 text-center leading-relaxed px-2">
                       Join our special WhatsApp group for the Vara Lakshmi Vratham ceremony. 
                       Get live updates, guidance, and connect with fellow devotees.
                     </p>
                   </div>
                   
                   {/* WhatsApp Group Section - Mobile First */}
                   <div className="bg-green-50 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                     <h3 className="text-base sm:text-lg md:text-xl font-semibold text-green-800 mb-3 sm:mb-4 text-center">
                       📱 Join Our WhatsApp Group
                     </h3>
                     <p className="text-green-700 mb-4 sm:mb-6 text-center text-sm sm:text-base leading-relaxed">
                       Stay connected with Pandit Eswar Prasad and other devotees for the Vara Lakshmi Vratham ceremony.
                     </p>
                     <div className="flex justify-center">
                       <a
                         href="https://chat.whatsapp.com/FSaWINn0irKEYNh25QPF5f?mode=ac_t"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-green-600 text-white font-bold text-sm sm:text-base md:text-lg rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto max-w-sm"
                       >
                         <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                         </svg>
                         Join Vara Lakshmi Vratham Group
                       </a>
                     </div>
                   </div>
                   
                   {/* Event Details Grid - Mobile First */}
                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
                     <div className="flex items-center justify-center">
                       <span className="bg-yellow-100 text-yellow-800 px-3 sm:px-4 py-2 rounded-full text-center text-xs sm:text-sm">📅 August 8th, 2024</span>
                     </div>
                     <div className="flex items-center justify-center">
                       <span className="bg-blue-100 text-blue-800 px-3 sm:px-4 py-2 rounded-full text-center text-xs sm:text-sm">⏰ 11:30 AM UK Time</span>
                     </div>
                     <div className="flex items-center justify-center">
                       <span className="bg-purple-100 text-purple-800 px-3 sm:px-4 py-2 rounded-full text-center text-xs sm:text-sm">🌍 Worldwide Access</span>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </section>
          
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
