
import { useState } from 'react';
import { Bell, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'te' : 'en');
  };

  return (
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
            <Button variant="ghost" size="icon" className="text-maroon">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-green-600">
              <MessageSquare className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
