
import { useState } from 'react';
import { Bell, Phone, MessageSquare, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'te' : 'en');
  };

  return (
    <div>
      {/* Vara Lakshmi Vratham Notification Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white py-3 px-4 text-center">
        <div className="container mx-auto">
          {/* Mobile Layout */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <span className="text-xl sm:text-lg">🕉️</span>
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
              <span className="font-medium text-sm sm:text-base">
                Vara Lakshmi Vratham - August 8th @ 11:30 AM
              </span>
              <a
                href="https://chat.whatsapp.com/FSaWINn0irKEYNh25QPF5f?mode=ac_t"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold transition-colors whitespace-nowrap"
              >
                Join WhatsApp Group
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border py-3 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/bb67ed3d-2ff4-4f3b-aba0-eacaae604b3e.png" 
              alt="Telugu Priest Logo" 
              className="h-10 w-auto md:h-12"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Urgent Booking Button */}
          <Link to="/urgent-booking">
            <Button 
              variant="destructive" 
              size="sm" 
              className="hidden sm:flex items-center gap-2 text-white bg-red-600 hover:bg-red-700"
            >
              <AlertTriangle className="h-4 w-4" />
              <span className="hidden md:inline">Urgent Booking</span>
            </Button>
          </Link>
          
          <button 
            className="flex items-center bg-gray-100 rounded-full p-1 hover:bg-gray-200 transition-colors"
            onClick={toggleLanguage}
          >
            <span className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              language === 'en' 
                ? 'bg-primary text-white' 
                : 'text-gray-600 hover:text-gray-800'
            }`}>
              EN
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              language === 'te' 
                ? 'bg-primary text-white' 
                : 'text-gray-600 hover:text-gray-800'
            }`}>
              తె
            </span>
          </button>
          
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+447438618486">
              <Button variant="ghost" size="icon" className="text-maroon hover:bg-maroon/10">
                <Phone className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://wa.me/447438618486">
              <Button variant="ghost" size="icon" className="text-green-600 hover:bg-green-100">
                <MessageSquare className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;
