
// Om Ganesha Namah 🕉️
import { useLanguage } from '@/contexts/LanguageContext';

const PanditBio = () => {
  const { t } = useLanguage();
  
  return (
    <section className="bg-cream py-16" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-maroon text-center mb-12">
            {t('Meet Your Trusted Telugu Hindu Pandit', 'మీ నమ్మకమైన తెలుగు పురోహితుడిని కలవండి')}
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-maroon mb-2">
                {t('Pandit Eswar Prasad Valavalapalli', 'పండిత ఈశ్వర్ ప్రసాద్ వలవలపల్లి')}
              </h3>
              
              <p className="text-lg text-primary mb-6 font-medium">
                {t('Telugu Priest & Vedic Scholar', 'తెలుగు పురోహితుడు & వేద పండితుడు')}
              </p>
              
              <div className="space-y-4 text-foreground text-left">
                <p className="text-lg leading-relaxed">
                  {t(
                    'With over 40+ years of dedicated experience in performing traditional Telugu rituals and ceremonies, Pandit Eswar Prasad Valavalapalli is a highly respected Vedic scholar and priest.',
                    'సాంప్రదాయ తెలుగు కర్మకాండలు మరియు వేడుకలు నిర్వహించడంలో 40 సంవత్సరాలకు పైగా అంకిత అనుభవంతో, పండిత ఈశ్వర్ ప్రసాద్ వలవలపల్లి అత్యంత గౌరవనీయమైన వేద పండితుడు మరియు పురోహితుడు.'
                  )}
                </p>
                
                <p className="leading-relaxed">
                  {t(
                    'Specializing in authentic Vedic practices and traditional Telugu ceremonies, he brings profound spiritual knowledge and devotion to every ritual. Whether performing ceremonies in person or guiding devotees through online pujas, his expertise ensures that every sacred practice is conducted with utmost precision and reverence.',
                    'అసలైన వైదిక ఆచారాలు మరియు సాంప్రదాయ తెలుగు వేడుకలలో ప్రత్యేకత కలిగిన అతను ప్రతి కర్మకాండకు లోతైన ఆధ్యాత్మిక జ్ఞానం మరియు భక్తిని తెస్తాడు. వ్యక్తిగతంగా వేడుకలు నిర్వహించినా లేదా ఆన్‌లైన్ పూజల ద్వారా భక్తులకు మార్గనిర్దేశం చేసినా, అతని నైపుణ్యం ప్రతి పవిత్రమైన అభ్యాసం అత్యంత ఖచ్చితత్వంతో మరియు భక్తితో నిర్వహించబడేలా నిర్ధారిస్తుంది.'
                  )}
                </p>
                
                <div className="bg-cream p-4 rounded-lg">
                  <h4 className="font-semibold text-maroon mb-2">
                    {t('Specializations:', 'ప్రత్యేకతలు:')}
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• {t('Traditional Telugu Wedding Ceremonies', 'సాంప్రదాయ తెలుగు వివాహ వేడుకలు')}</li>
                    <li>• {t('Vedic Rituals & Pujas', 'వైదిక కర్మలు & పూజలు')}</li>
                    <li>• {t('Ancestral Worship (Pitru Pujas)', 'పితృ పూజలు')}</li>
                    <li>• {t('Housewarming & Sacred Ceremonies', 'గృహప్రవేశం & పవిత్ర వేడుకలు')}</li>
                    <li>• {t('Online & In-Person Services Worldwide', 'ప్రపంచవ్యాప్తంగా ఆన్‌లైన్ & వ్యక్తిగత సేవలు')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanditBio;
