import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { language, t } = useLanguage();

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-white to-saffron/20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-maroon/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-saffron/10 rounded-full blur-3xl animate-pulse-soft delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Temple Image for Atmosphere */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
          alt="Hindu Temple Background for Puja"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10 py-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-maroon mb-6 leading-tight">
          <span className="block mb-2">
            {t('Need a Pooja Priest Now?', 'మీకు ఇప్పుడే పూజ పండితుడు అవసరమా?')}
          </span>
          <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('Book Pandit Eswar Prasad Online', 'పండిత ఈశ్వర్ ప్రసాద్‌ను ఆన్‌లైన్‌లో బుక్ చేయండి')}
          </span>
          <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-foreground">
            {t('Top Telugu Hindu Pandit – North & South Indian Rituals', 'విశ్వసనీయ తెలుగు పూజారి – నార్త్ & సౌత్ ఇండియన్ పూజలు')}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-6 leading-relaxed">
          {t(
            'Pandit Eswar Prasad Valavalapalli is an experienced Hindu priest offering authentic North and South Indian Vedic rituals including Satyanarayana Puja, Griha Pravesh, Hindu weddings, Upanayanam, and more. Book in just 2 minutes – available online or in-person globally.',
            'పండిత ఈశ్వర్ ప్రసాద్ వలవలపల్లి అనుభవజ్ఞ హిందూ పూజారి – నార్త్ & సౌత్ ఇండియన్ పూజలు: సత్యనారాయణ వ్రతం, గృహప్రవేశం, హిందూ వివాహాలు, ఉపనయనము & మరిన్ని. ప్రపంచవ్యాప్తంగా ఆన్‌లైన్ లేదా ప్రత్యక్షంగా 2 నిమిషాల్లో బుక్ చేయండి.'
          )}
        </p>

        {/* Booking CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/booking"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 overflow-hidden w-full sm:w-auto"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-maroon to-saffron opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative">{t('Book Your Puja Now', 'మీ పూజను ఇప్పుడే బుక్ చేయండి')}</span>
          </Link>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            {t('View All Pooja Services', 'అన్ని పూజా సేవలను చూడండి')}
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-maroon">40+ Years</div>
            <div className="text-sm text-muted-foreground">
              {t('of Ritual Experience', 'వైదిక అనుభవం')}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-maroon">North & South</div>
            <div className="text-sm text-muted-foreground">
              {t('Indian Ceremonies Expertise', 'భారతీయ పూజల్లో నైపుణ్యం')}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-maroon">Global Access</div>
            <div className="text-sm text-muted-foreground">
              {t('Online & In‑Person Available', 'ఆన్‌లైన్ మరియు ప్రత్యక్ష సేవలు')}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
