
import { useState } from 'react';

const PanditBio = () => {
  const [language, setLanguage] = useState<'en' | 'te'>('en');
  
  return (
    <section className="py-16 bg-white" id="about-pandit">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-maroon text-center mb-8">
          {language === 'en' ? 'Meet Your Trusted Telugu Pandit' : 'మీ నమ్మకమైన తెలుగు పండితుని కలవండి'}
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
          <div className="w-full md:w-1/3">
            <div className="rounded-full overflow-hidden border-4 border-gold aspect-square max-w-[300px] mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1473177104440-ffee2f376098" 
                alt={language === 'en' ? 'Telugu Pandit' : 'తెలుగు పండితుడు'} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h3 className="text-xl md:text-2xl font-bold text-maroon mb-3">
              {language === 'en' ? 'Pandit Ram Sharma' : 'పండిత్ రామ్ శర్మ'}
            </h3>
            
            <p className="text-foreground mb-4">
              {language === 'en' 
                ? 'With over 25 years of experience performing traditional Telugu and Vedic rituals, Pandit Ram Sharma has conducted thousands of pujas for families across the globe. Educated in Vedic traditions at Tirupati, he specializes in authentic Telugu rituals.'
                : 'సాంప్రదాయ తెలుగు మరియు వైదిక కర్మకాండలను నిర్వహించడంలో 25 సంవత్సరాలకు పైగా అనుభవంతో, పండిత్ రామ్ శర్మ ప్రపంచవ్యాప్తంగా ఉన్న కుటుంబాల కోసం వేలాది పూజలు నిర్వహించారు. తిరుపతిలో వైదిక సంప్రదాయాలలో విద్యనభ్యసించిన ఆయన, ప్రామాణిక తెలుగు కర్మకాండలలో నిపుణుడు.'}
            </p>
            
            <p className="text-foreground mb-4">
              {language === 'en'
                ? 'Whether you need a simple puja or a complete wedding ceremony, Pandit Ram ensures all rituals are performed with precision and devotion, maintaining the sanctity and cultural significance of each ceremony.'
                : 'మీకు సాధారణ పూజ కావాలన్నా లేదా పూర్తి వివాహ వేడుక కావాలన్నా, పండిత్ రామ్ అన్ని కర్మకాండలను ఖచ్చితత్వంతో మరియు భక్తితో నిర్వహిస్తూ, ప్రతి వేడుక యొక్క పవిత్రత మరియు సాంస్కృతిక ప్రాముఖ్యతను నిలబెడతారు.'}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-cream rounded-lg px-4 py-2 text-sm font-medium text-maroon">
                {language === 'en' ? '25+ Years Experience' : '25+ సంవత్సరాల అనుభవం'}
              </div>
              <div className="bg-cream rounded-lg px-4 py-2 text-sm font-medium text-maroon">
                {language === 'en' ? 'Tirupati Educated' : 'తిరుపతిలో విద్యాభ్యాసం'}
              </div>
              <div className="bg-cream rounded-lg px-4 py-2 text-sm font-medium text-maroon">
                {language === 'en' ? 'Fluent in Telugu & English' : 'తెలుగు & ఇంగ్లీష్ లో ప్రావీణ్యం'}
              </div>
              <div className="bg-cream rounded-lg px-4 py-2 text-sm font-medium text-maroon">
                {language === 'en' ? 'Online Consultations' : 'ఆన్‌లైన్ సంప్రదింపులు'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanditBio;
