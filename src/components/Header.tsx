
import { useState } from 'react';
import { Bell, Phone, WhatsApp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [language, setLanguage] = useState<'en' | 'te'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'te' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border py-3 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Bell className="h-7 w-7 text-maroon" />
            <span className="ml-2 font-bold text-xl text-maroon">
              {language === 'en' ? 'Telugu Priest' : 'తెలుగు పూజారి'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            className="language-toggle"
            onClick={toggleLanguage}
          >
            <span className={`language-toggle-option ${language === 'en' ? 'active' : ''}`}>
              English
            </span>
            <span className={`language-toggle-option ${language === 'te' ? 'active' : ''}`}>
              తెలుగు
            </span>
          </button>
          
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-maroon">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-green-600">
              <WhatsApp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
