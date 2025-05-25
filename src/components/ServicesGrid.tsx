
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
    <section className="bg-white py-16" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-maroon text-center mb-8">
          {t('Our Sacred Services', 'మా పవిత్ర సేవలు')}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceDetails.map((service) => (
            <div 
              key={service.id}
              className="service-card group"
            >
              <div className="text-4xl mb-4 animate-float">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-maroon mb-2">
                {language === 'en' ? service.nameEn : service.nameTe}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {language === 'en' ? service.shortDescriptionEn : service.shortDescriptionTe}
              </p>
              <div className="space-y-2">
                <button 
                  className="puja-button w-full text-sm"
                  onClick={() => handleServiceSelect(service.id)}
                >
                  {t('Book Now', 'ఇప్పుడే బుక్ చేయండి')}
                </button>
                <button 
                  className="w-full text-sm border border-primary text-primary rounded-lg px-4 py-2 hover:bg-primary hover:text-white transition-colors"
                  onClick={() => handleLearnMore(service.id)}
                >
                  {t('Learn More', 'మరింత తెలుసుకోండి')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
