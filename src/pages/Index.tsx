
// Om Ganesha Namah 🕉️
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import PanditBio from '@/components/PanditBio';
import GlobalAvailability from '@/components/GlobalAvailability';
import ContactSection from '@/components/ContactSection';
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
          <ContactSection />
          <FloatingWhatsApp />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
