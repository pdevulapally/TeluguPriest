
// Om Ganesha Namah 🕉️
import { useLanguage } from '@/contexts/LanguageContext';

const PanditBio = () => {
  const { t } = useLanguage();
  
  return (
    <section className="bg-cream py-16" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-maroon mb-8">
            {t('Meet Your Pandit', 'మీ పండితుడిని కలవండి')}
          </h2>
          
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gold/20 flex items-center justify-center text-6xl">
              🙏
            </div>
          </div>
          
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            {t('Pandit Eshwar Prasad', 'పండిత ఈశ్వర్ ప్రసాద్')}
          </h3>
          
          <p className="text-lg mb-6">
            {t(
              'With over 15 years of experience performing traditional Telugu rituals and ceremonies, Pandit Eshwar Prasad brings authentic Vedic practices to devotees worldwide.',
              'సాంప్రదాయ తెలుగు కర్మకాండలు మరియు వేడుకలు నిర్వహించడంలో 15 సంవత్సరాలకు పైగా అనుభవంతో, పండిత ఈశ్వర్ ప్రసాద్ ప్రపంచవ్యాప్తంగా ఉన్న భక్తులకు అసలైన వైదిక ఆచారాలను అందిస్తున్నారు.'
            )}
          </p>
          
          <p className="text-lg">
            {t(
              'Whether performing ceremonies in person or guiding devotees through online pujas, Pandit Eshwar Prasad ensures that every ritual is conducted with precision and devotion.',
              'వ్యక్తిగతంగా వేడుకలు నిర్వహించినా లేదా ఆన్‌లైన్ పూజల ద్వారా భక్తులకు మార్గనిర్దేశం చేసినా, పండిత ఈశ్వర్ ప్రసాద్ ప్రతి కర్మకాండ ఖచ్చితత్వంతో మరియు భక్తితో నిర్వహించబడేలా చూస్తారు.'
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PanditBio;
