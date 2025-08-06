
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
      {/* Vara Lakshmi Vratham Notification Banner - SUPER PROMINENT & MOBILE FIRST */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-white py-3 sm:py-4 md:py-5 px-3 sm:px-4 text-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1 left-2 sm:top-2 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-2 right-4 sm:top-4 sm:right-8 w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          {/* Mobile Layout - Default */}
          <div className="block sm:hidden">
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <div className="text-center">
                <h3 className="font-black text-sm sm:text-base text-white leading-tight">
                  🕉️ VARA LAKSHMI VRATHAM 🕉️
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-yellow-100 mt-1">
                  August 8th @ 11:30 AM
                </p>
              </div>
              <a
                href="https://chat.whatsapp.com/FSaWINn0irKEYNh25QPF5f?mode=ac_t"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white hover:bg-green-50 text-green-700 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-green-300 flex items-center gap-1.5 sm:gap-2 w-full justify-center max-w-xs"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span className="font-black text-center">JOIN WHATSAPP GROUP</span>
              </a>
            </div>
          </div>
          
          {/* Tablet Layout */}
          <div className="hidden sm:block lg:hidden">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="text-left">
                <h3 className="font-black text-base sm:text-lg text-white leading-tight">
                  🕉️ VARA LAKSHMI VRATHAM 🕉️
                </h3>
                <p className="text-sm font-semibold text-yellow-100">
                  August 8th @ 11:30 AM UK Time
                </p>
              </div>
              <a
                href="https://chat.whatsapp.com/FSaWINn0irKEYNh25QPF5f?mode=ac_t"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white hover:bg-green-50 text-green-700 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg text-sm font-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-green-300 flex items-center gap-2 flex-shrink-0"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span className="font-black">JOIN WHATSAPP GROUP</span>
              </a>
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-6">
            <div className="text-left">
              <h3 className="font-black text-lg xl:text-xl text-white leading-tight">
                🕉️ VARA LAKSHMI VRATHAM 🕉️
              </h3>
              <p className="text-base xl:text-lg font-semibold text-yellow-100">
                August 8th @ 11:30 AM UK Time
              </p>
            </div>
            <a
              href="https://chat.whatsapp.com/FSaWINn0irKEYNh25QPF5f?mode=ac_t"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-green-50 text-green-700 px-6 xl:px-8 py-3 xl:py-4 rounded-xl text-base xl:text-lg font-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-green-300 flex items-center gap-3 flex-shrink-0"
            >
              <svg className="w-6 h-6 xl:w-7 xl:h-7 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span className="font-black">JOIN WHATSAPP GROUP</span>
            </a>
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
