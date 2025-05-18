
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { language, t } = useLanguage();
  
  return (
    <section className="relative bg-gradient-to-b from-cream to-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="absolute top-0 left-0 right-0 -z-10 h-full">
          <div className="kalash-decoration h-24 opacity-20"></div>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold text-maroon mb-4">
          {t('Book Your Trusted Telugu Pandit – Anywhere in the World',
            'మీ నమ్మకమైన తెలుగు పండితుడిని బుక్ చేసుకోండి - ప్రపంచంలో ఎక్కడైనా')}
        </h1>
        
        <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto mb-8">
          {t('Perform Satyanarayana Vratam, Barasala, Gruhapravesam, and more with Pandit Eshwar Prasad – in-person or online',
            'పండిత ఈశ్వర్ ప్రసాద్ తో సత్యనారాయణ వ్రతం, బారసాల, గృహప్రవేశం, మరియు మరిన్ని - వ్యక్తిగతంగా లేదా ఆన్‌లైన్‌లో నిర్వహించండి')}
        </p>
        
        <Link to="/booking" className="glowing-btn animate-pulse-soft inline-block">
          {t('Book a Puja', 'పూజ బుక్ చేయండి')}
        </Link>
        
        <div className="mt-12 devotional-divider"></div>
      </div>
    </section>
  );
};

export default HeroSection;
