import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Clock, Globe, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const UrgentBooking = () => {
  return (
    <LanguageProvider>
      <SEOHead 
        title="I Need a Pooja Priest Now - Urgent Telugu Priest Booking | Same Day Available"
        description="URGENT: Need a Telugu priest immediately? Book same-day Hindu ceremonies with Pandit Eswar Prasad. Available 24/7 for Satyanarayana Vratam, Gruhapravesam, Hindu weddings. Call +44 7438 618486 for immediate assistance."
        keywords="I need a pooja priest now, urgent telugu priest booking, same day pooja priest, emergency hindu priest, telugu priest near me, immediate puja booking, 24/7 hindu priest, urgent satyanarayana vratam, same day gruhapravesam"
        canonical="https://telugupriest.com/urgent-booking"
      />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-red-50 to-orange-50 py-20">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-maroon mb-6">
                  <span className="block mb-2">🚨 URGENT BOOKING</span>
                  <span className="block text-3xl md:text-4xl">I Need a Pooja Priest Now!</span>
                </h1>
                
                <p className="text-xl text-foreground mb-8">
                  Need a Telugu priest immediately? We understand urgent situations and can arrange same-day ceremonies.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <a
                    href="tel:+447438618486"
                    className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white bg-red-600 rounded-full shadow-2xl hover:bg-red-700 transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="mr-2 h-6 w-6" />
                    Call Now: +44 7438 618486
                  </a>
                  
                  <a
                    href="/booking"
                    className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-maroon border-2 border-maroon rounded-full hover:bg-maroon hover:text-white transition-all duration-300"
                  >
                    Book Online Now
                  </a>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-maroon mb-2">Same Day Available</h3>
                    <p className="text-foreground">Online ceremonies can be arranged within hours</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <Globe className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-maroon mb-2">24/7 Service</h3>
                    <p className="text-foreground">Available round the clock for urgent requests</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <CheckCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-maroon mb-2">Immediate Response</h3>
                    <p className="text-foreground">We respond to urgent calls within minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Urgent Services */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-maroon text-center mb-12">
                Urgent Telugu Priest Services Available
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card className="border-2 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-maroon">Satyanarayana Vratam</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4">
                      Traditional prosperity ceremony. Can be arranged same-day for urgent situations.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <p>• Same-day availability</p>
                      <p>• Online & in-person</p>
                      <p>• Traditional Telugu rituals</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-maroon">Gruhapravesam</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4">
                      House warming ceremony. Available for immediate booking.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <p>• 24-48 hour booking</p>
                      <p>• Traditional approach</p>
                      <p>• Complete ceremony</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-maroon">Hindu Weddings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4">
                      Traditional Hindu wedding ceremonies. Flexible scheduling available.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <p>• Flexible dates</p>
                      <p>• Traditional rituals</p>
                      <p>• Complete ceremony</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-maroon">Online Puja Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4">
                      Virtual ceremonies via video call. Available immediately worldwide.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <p>• Instant availability</p>
                      <p>• Global access</p>
                      <p>• No travel required</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-maroon">Pitra Paksha Rituals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4">
                      Ancestral ceremonies. Can be arranged urgently when needed.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <p>• Same-day booking</p>
                      <p>• Traditional approach</p>
                      <p>• Proper rituals</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-maroon">Custom Pujas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4">
                      Special ceremonies tailored to your needs. Available urgently.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <p>• Customized approach</p>
                      <p>• Flexible timing</p>
                      <p>• Traditional methods</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 bg-gradient-to-r from-saffron/10 to-gold/10">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-maroon mb-8">
                Need Immediate Assistance?
              </h2>
              
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
                  <h3 className="text-2xl font-bold text-maroon mb-4">
                    Call Us Right Now
                  </h3>
                  <p className="text-lg text-foreground mb-6">
                    For the fastest response to urgent requests, call us directly:
                  </p>
                  <a
                    href="tel:+447438618486"
                    className="inline-flex items-center justify-center px-8 py-4 text-2xl font-bold text-white bg-red-600 rounded-full shadow-2xl hover:bg-red-700 transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="mr-3 h-8 w-8" />
                    +44 7438 618486
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">
                    Available 24/7 for urgent bookings
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-maroon mb-4">
                    Or Book Online
                  </h3>
                  <p className="text-lg text-foreground mb-6">
                    For non-urgent bookings, you can use our online booking system:
                  </p>
                  <a
                    href="/booking"
                    className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white bg-maroon rounded-full shadow-2xl hover:bg-maroon/90 transition-all duration-300 hover:scale-105"
                  >
                    Book Online Now
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default UrgentBooking; 