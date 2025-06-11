
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceDetails } from '@/data/serviceDetails';

const ServicesGrid = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  
  const handleServiceSelect = (serviceId: string) => {
    navigate(`/booking?service=${serviceId}`);
  };
  
  const handleLearnMore = (serviceId: string) => {
    navigate(`/service/${serviceId}`);
  };
  
  return (
    <section className="bg-gradient-to-b from-white to-cream py-20" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-4">
            {t('Pandit Services', 'పండిత్ సేవలు')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('Experience authentic Vedic rituals performed with devotion and traditional expertise', 
               'భక్తి మరియు సాంప్రదాయ నైపుణ్యంతో నిర్వహించబడే అసలైన వైదిక కర్మలను అనుభవించండి')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {serviceDetails.map((service) => (
            <div 
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-cream"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.icon}
                  alt={language === 'en' ? service.nameEn : service.nameTe}
                  className="w-full h-49 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-maroon mb-3 leading-tight">
                  {language === 'en' ? service.nameEn : service.nameTe}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                  {language === 'en' ? service.shortDescriptionEn : service.shortDescriptionTe}
                </p>
                
                <div className="space-y-3">
                  <button 
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                    onClick={() => handleServiceSelect(service.id)}
                  >
                    {t('Book Now', 'ఇప్పుడే బుక్ చేయండి')}
                  </button>
                  <button 
                    className="w-full text-sm border-2 border-primary text-primary rounded-lg px-4 py-2 hover:bg-primary hover:text-white transition-all duration-300 font-medium"
                    onClick={() => handleLearnMore(service.id)}
                  >
                    {t('Learn More', 'మరింత తెలుసుకోండి')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-maroon/10 px-6 py-3 rounded-full">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=32&h=32&fit=crop" 
              alt="Global service" 
              className="w-6 h-6 rounded-full"
            />
            <span className="text-maroon font-medium">
              {t('All services available worldwide - In-person & Online', 
                 'అన్ని సేవలు ప్రపంచవ్యాప్తంగా అందుబాటులో - వ్యక్తిగతంగా మరియు ఆన్‌లైన్‌లో')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
