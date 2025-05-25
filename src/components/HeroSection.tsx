
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { language, t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-white to-saffron/20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-maroon/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-saffron/10 rounded-full blur-3xl animate-pulse-soft delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-float"></div>
      </div>
      
      {/* Temple imagery */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop" 
          alt="Temple background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10 py-20">
        {/* Decorative top element - simplified without glow */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-maroon to-primary rounded-full flex items-center justify-center shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1580130544401-e0c0e9fb5e6e?w=40&h=40&fit=crop" 
              alt="Sacred Symbol"
              className="w-8 h-8 object-cover rounded-full"
            />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-maroon mb-6 leading-tight">
          <span className="block mb-2">
            {t('Authentic Telugu', 'అసలైన తెలుగు')}
          </span>
          <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('Temple Services', 'దేవాలయ సేవలు')}
          </span>
        </h1>
        
        <div className="mb-4">
          <p className="text-xl md:text-2xl text-foreground font-medium">
            {t('with Pandit Eswar Prasad Valavalapalli', 'పండిత ఈశ్వర్ ప్రసాద్ వలవలపల్లితో')}
          </p>
          <div className="flex justify-center mt-2">
            <span className="inline-block bg-gradient-to-r from-maroon to-saffron h-1 w-32 rounded-full"></span>
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed">
          {t('Experience sacred Vedic rituals, traditional Telugu ceremonies, and ancestral worship performed with devotion and authenticity – available worldwide, both in-person and online',
            'భక్తి మరియు ప్రామాణికతతో నిర్వహించబడే పవిత్ర వైదిక కర్మలు, సాంప్రదాయ తెలుగు వేడుకలు మరియు పితృ పూజలను అనుభవించండి - ప్రపంచవ్యాప్తంగా వ్యక్తిగతంగా మరియు ఆన్‌లైన్‌లో అందుబాటులో')}
        </p>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
          <Link 
            to="/booking" 
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-maroon to-saffron opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              <span>{t('Book Sacred Services', 'పవిత్ర సేవలను బుక్ చేయండి')}</span>
              <img 
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=20&h=20&fit=crop" 
                alt="Temple Bell"
                className="w-5 h-5 object-cover rounded-full"
              />
            </span>
          </Link>
          
          <a 
            href="#services" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
          >
            {t('Explore Services', 'సేవలను అన్వేషించండి')}
          </a>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl mb-2">🌟</div>
            <div className="text-2xl font-bold text-maroon">15+</div>
            <div className="text-sm text-muted-foreground">
              {t('Years Experience', 'సంవత్సరాల అనుభవం')}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🌍</div>
            <div className="text-2xl font-bold text-maroon">
              {t('Worldwide', 'ప్రపంచవ్యాప్తంగా')}
            </div>
            <div className="text-sm text-muted-foreground">
              {t('Service Available', 'సేవ అందుబాటులో')}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🏛️</div>
            <div className="text-2xl font-bold text-maroon">
              {t('Authentic', 'ప్రామాణిక')}
            </div>
            <div className="text-sm text-muted-foreground">
              {t('Vedic Traditions', 'వైదిక సంప్రదాయాలు')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
