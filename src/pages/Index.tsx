
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import BookingFlow from '@/components/BookingFlow';
import PanditBio from '@/components/PanditBio';
import GlobalAvailability from '@/components/GlobalAvailability';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDYyQCC5azFue8QtmSopalcIsuyy_IGIVA",
  authDomain: "telugupandit-e6e0d.firebaseapp.com",
  projectId: "telugupandit-e6e0d",
  storageBucket: "telugupandit-e6e0d.firebasestorage.app",
  messagingSenderId: "744213705847",
  appId: "1:744213705847:web:ca91216cb52d065a67c272",
  measurementId: "G-VX3PL3WPWY"
};

const Index = () => {
  useEffect(() => {
    // Initialize Firebase
    try {
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      console.log("Firebase initialized successfully");
    } catch (error) {
      console.error("Error initializing Firebase:", error);
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <ServicesGrid />
          <BookingFlow />
          <PanditBio />
          <GlobalAvailability />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
