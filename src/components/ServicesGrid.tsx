
import { useState } from 'react';

type ServiceType = {
  id: string;
  nameEn: string;
  nameTe: string;
  icon: string;
  description?: {
    en: string;
    te: string;
  };
};

const services: ServiceType[] = [
  {
    id: 'satyanarayana',
    nameEn: 'Satyanarayana Vratam',
    nameTe: 'సత్యనారాయణ వ్రతం',
    icon: '🪔',
    description: {
      en: 'A sacred puja honoring Lord Vishnu in the form of Satya Narayana.',
      te: 'సత్య నారాయణ రూపంలో భగవాన్ విష్ణు మూర్తిని ఆరాధించే పవిత్రమైన పూజ.',
    }
  },
  {
    id: 'barasala',
    nameEn: 'Barasala (Naming)',
    nameTe: 'బారసాల',
    icon: '👶',
    description: {
      en: 'A ceremony celebrating the naming of a newborn child.',
      te: 'నవజాత శిశువుకు నామకరణం చేసే వేడుక.',
    }
  },
  {
    id: 'gruhapravesam',
    nameEn: 'Gruhapravesam',
    nameTe: 'గృహప్రవేశం',
    icon: '🏡',
    description: {
      en: 'A traditional housewarming ceremony for new homes.',
      te: 'కొత్త ఇళ్లకు సంప్రదాయ గృహప్రవేశ వేడుక.',
    }
  },
  {
    id: 'wedding',
    nameEn: 'Vivaham (Wedding)',
    nameTe: 'వివాహం',
    icon: '💍',
    description: {
      en: 'Traditional Telugu wedding ceremonies.',
      te: 'సాంప్రదాయ తెలుగు వివాహ వేడుకలు.',
    }
  },
  {
    id: 'annaprasana',
    nameEn: 'Annaprasana',
    nameTe: 'అన్నప్రాసన',
    icon: '🍚',
    description: {
      en: "Baby's first solid food ceremony.",
      te: 'శిశువుకి మొదటి ఆహారం అందించే వేడుక.',
    }
  },
  {
    id: 'upanayanam',
    nameEn: 'Upanayanam',
    nameTe: 'ఉపనయనం',
    icon: '🧵',
    description: {
      en: 'Sacred thread ceremony for young boys.',
      te: 'బాలురకు జరిగే పవిత్రమైన యజ్ఞోపవీతం వేడుక.',
    }
  },
  {
    id: 'custom',
    nameEn: 'Custom Puja',
    nameTe: 'కస్టమ్ పూజ',
    icon: '✨',
    description: {
      en: 'Personalized puja services based on your requirements.',
      te: 'మీ అవసరాల ప్రకారం వ్యక్తిగతీకరించిన పూజా సేవలు.',
    }
  },
];

const ServicesGrid = () => {
  const [language, setLanguage] = useState<'en' | 'te'>('en');
  
  return (
    <section className="bg-white py-16" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-maroon text-center mb-8">
          {language === 'en' ? 'Our Services' : 'మా సేవలు'}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
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
              <p className="text-sm text-muted-foreground mb-4">
                {language === 'en' ? service.description?.en : service.description?.te}
              </p>
              <button className="puja-button w-full text-sm">
                {language === 'en' ? 'Select' : 'ఎంచుకోండి'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
