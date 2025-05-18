
import { useState } from 'react';
import { Globe } from 'lucide-react';

const GlobalAvailability = () => {
  const [language, setLanguage] = useState<'en' | 'te'>('en');
  
  return (
    <section className="py-16 bg-gradient-to-r from-saffron/10 to-gold/10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Globe className="h-12 w-12 text-maroon" />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-maroon mb-8">
          {language === 'en' 
            ? '🌍 Available Worldwide – Book from UK, USA, Canada, Australia & more'
            : '🌍 ప్రపంచవ్యాప్తంగా అందుబాటులో ఉంది - UK, USA, కెనడా, ఆస్ట్రేలియా మరియు మరింత నుండి బుక్ చేసుకోండి'}
        </h2>
        
        <p className="text-lg max-w-3xl mx-auto mb-10">
          {language === 'en'
            ? 'Whether you need in-person services or prefer to conduct rituals online via video call, our Telugu Pandit is available to serve your spiritual needs across the globe.'
            : 'మీకు వ్యక్తిగత సేవలు కావాలన్నా లేదా వీడియో కాల్ ద్వారా ఆన్‌లైన్‌లో కర్మకాండలు నిర్వహించడానికి ఇష్టపడినా, మా తెలుగు పండితుడు ప్రపంచవ్యాప్తంగా మీ ఆధ్యాత్మిక అవసరాలను తీర్చడానికి అందుబాటులో ఉన్నాడు.'}
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="text-primary font-semibold">
              {language === 'en' ? 'In-Person' : 'వ్యక్తిగతంగా'}
            </div>
            <p className="text-sm text-muted-foreground">
              {language === 'en' ? 'Traditional ceremonies at your location' : 'మీ ప్రాంతంలో సాంప్రదాయ వేడుకలు'}
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="text-primary font-semibold">
              {language === 'en' ? 'Online' : 'ఆన్‌లైన్'}
            </div>
            <p className="text-sm text-muted-foreground">
              {language === 'en' ? 'Virtual ceremonies via video call' : 'వీడియో కాల్ ద్వారా వర్చువల్ వేడుకలు'}
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="text-primary font-semibold">
              {language === 'en' ? 'Travel Available' : 'ప్రయాణం అందుబాటులో ఉంది'}
            </div>
            <p className="text-sm text-muted-foreground">
              {language === 'en' ? 'For major ceremonies and events' : 'ముఖ్యమైన వేడుకలు మరియు ఈవెంట్‌ల కోసం'}
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="text-primary font-semibold">
              {language === 'en' ? 'Consultation' : 'సంప్రదింపు'}
            </div>
            <p className="text-sm text-muted-foreground">
              {language === 'en' ? 'Guidance on rituals and muhurtams' : 'కర్మకాండలు మరియు ముహూర్తాల గురించి మార్గదర్శకత్వం'}
            </p>
          </div>
        </div>
        
        <div className="mt-10">
          <button className="glowing-btn">
            {language === 'en' ? 'Contact for Availability' : 'అందుబాటు కోసం సంప్రదించండి'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default GlobalAvailability;
