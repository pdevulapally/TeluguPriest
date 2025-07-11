import { useState } from 'react';
import { Bell, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const [language, setLanguage] = useState<'en' | 'te'>('en');
  
  return (
    <footer className="bg-maroon text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-10 gap-8">
          <div className="md:w-1/3">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/f507e85e-29fd-4195-957b-918f9aeb51a5.png" 
                alt="Telugu Priest Logo" 
                className="h-12 w-auto"
              />
            </div>
            
            <p className="text-white/80 text-sm mb-4">
              {language === 'en'
                ? 'Authentic Telugu Hindu puja services for all your religious and spiritual needs. Available in-person and online, anywhere in the world.'
                : 'మీ అన్ని మతపరమైన మరియు ఆధ్యాత్మిక అవసరాల కోసం అసలైన తెలుగు హిందూ పూజా సేవలు. ప్రపంచంలో ఎక్కడైనా వ్యక్తిగతంగా మరియు ఆన్‌లైన్‌లో అందుబాటులో ఉంటాయి.'}
            </p>
          </div>
          
          <div className="md:w-1/5">
            <h3 className="text-gold font-medium mb-4">
              {language === 'en' ? 'Quick Links' : 'త్వరిత లింక్‌లు'}
            </h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  {language === 'en' ? 'Services' : 'సేవలు'}
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-gold transition-colors">
                  {language === 'en' ? 'Book a Puja' : 'పూజ బుక్ చేయండి'}
                </a>
              </li>
              <li>
                <a href="#about-pandit" className="hover:text-gold transition-colors">
                  {language === 'en' ? 'About Pandit' : 'పండితుడి గురించి'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">
                  {language === 'en' ? 'Contact' : 'సంప్రదించండి'}
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/5">
            <h3 className="text-gold font-medium mb-4">
              {language === 'en' ? 'Popular Pujas' : 'ప్రముఖ పూజలు'}
            </h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  {language === 'en' ? 'Satyanarayana Vratam' : 'సత్యనారాయణ వ్రతం'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  {language === 'en' ? 'Gruhapravesam' : 'గృహప్రవేశం'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  {language === 'en' ? 'Barasala' : 'బారసాల'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  {language === 'en' ? 'Wedding Ceremonies' : 'వివాహ వేడుకలు'}
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/5">
            <h3 className="text-gold font-medium mb-4">
              {language === 'en' ? 'Legal' : 'చట్టపరమైన'}
            </h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  {language === 'en' ? 'Terms of Service' : 'సేవా నియమాలు'}
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-gold transition-colors">
                  {language === 'en' ? 'Privacy Policy' : 'గోప్యతా విధానం'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  {language === 'en' ? 'Temple Collaborations' : 'దేవాలయ సహకారం'}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Social Media Section */}
        <div className="border-t border-white/20 pt-6 mb-6">
          <div className="flex justify-center items-center space-x-6">
            <h3 className="text-gold font-medium text-sm">
              {language === 'en' ? 'Follow Us' : 'మమ్మల్ని అనుసరించండి'}
            </h3>
            <a 
              href="https://www.facebook.com/TeluguPriestLondon/?locale=en_GB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-gold transition-colors flex items-center gap-2"
              aria-label={language === 'en' ? 'Follow us on Facebook' : 'Facebook లో మమ్మల్ని అనుసరించండి'}
            >
              <Facebook size={20} />
              <span className="text-sm">Facebook</span>
            </a>
            <a 
              href="https://youtube.com/@eswaraprasadvalavalapalli?si=fBppR0GXXeB_BkB_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-gold transition-colors flex items-center gap-2"
              aria-label={language === 'en' ? 'Follow us on YouTube' : 'YouTube లో మమ్మల్ని అనుసరించండి'}
            >
              <Youtube size={20} />
              <span className="text-sm">YouTube</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 text-center text-white/60 text-sm">
          <p>
            {language === 'en' 
              ? '© 2025 Telugu Priest. All rights reserved.' 
              : '© 2025 తెలుగు పూజారి. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
