
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
          {t('Authentic Telugu Temple Services with Pandit Eswar Prasad Valavalapalli',
            'పండిత ఈశ్వర్ ప్రసాద్ వలవలపల్లితో అసలైన తెలుగు దేవాలయ సేవలు')}
        </h1>
        
        <p className="text-lg md:text-xl text-foreground max-w-4xl mx-auto mb-8">
          {t('Experience sacred Vedic rituals, traditional Telugu ceremonies, and ancestral worship performed with devotion and authenticity – available worldwide, both in-person and online',
            'భక్తి మరియు ప్రామాణికతతో నిర్వహించబడే పవిత్ర వైదిక కర్మలు, సాంప్రదాయ తెలుగు వేడుకలు మరియు పితృ పూజలను అనుభవించండి - ప్రపంచవ్యాప్తంగా వ్యక్తిగతంగా మరియు ఆన్‌లైన్‌లో అందుబాటులో')}
        </p>
        
        <Link to="/booking" className="glowing-btn animate-pulse-soft inline-block">
          {t('Book Sacred Services', 'పవిత్ర సేవలను బుక్ చేయండి')}
        </Link>
        
        <div className="mt-12 devotional-divider"></div>
      </div>
    </section>
  );
};

export default HeroSection;
