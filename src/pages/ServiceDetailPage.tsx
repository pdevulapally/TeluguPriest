
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceDetails } from '@/data/serviceDetails';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Clock, Star, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  
  const service = serviceDetails.find(s => s.id === serviceId);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-maroon mb-4">
            {t('Service not found', 'సేవ కనుగొనబడలేదు')}
          </h1>
          <Button onClick={() => navigate('/')} variant="outline">
            {t('Go back to home', 'హోమ్‌కు తిరిగి వెళ్లు')}
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-cream">
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6 flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            {t('Back to Services', 'సేవలకు తిరిగి వెళ్లు')}
          </Button>
          
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={service.image} 
                    alt={language === 'en' ? service.nameEn : service.nameTe}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h1 className="text-2xl md:text-3xl font-bold text-maroon mb-4">
                    {language === 'en' ? service.nameEn : service.nameTe}
                  </h1>
                  <p className="text-lg text-foreground mb-6">
                    {language === 'en' ? service.detailedDescriptionEn : service.detailedDescriptionTe}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      <span className="text-sm text-muted-foreground">{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star size={16} className="text-gold fill-gold" />
                      <span className="text-sm text-muted-foreground">
                        {t('Traditional Authentic', 'సాంప్రదాయ ప్రామాణిక')}
                      </span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => navigate(`/booking?service=${service.id}`)}
                    className="bg-primary text-white w-full md:w-auto"
                  >
                    {t('Book This Service', 'ఈ సేవను బుక్ చేయండి')}
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-maroon">
                    {t('Benefits', 'ప్రయోజనాలు')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {(language === 'en' ? service.benefits.en : service.benefits.te).map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Rituals */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-maroon">
                    {t('Key Rituals', 'ముఖ్య కర్మలు')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {(language === 'en' ? service.rituals.en : service.rituals.te).map((ritual, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{ritual}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-maroon">
                    {t('Requirements', 'అవసరాలు')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {(language === 'en' ? service.requirements.en : service.requirements.te).map((requirement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            {/* About Pandit Section */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-maroon text-center">
                  {t('About Your Pandit', 'మీ పండితుడి గురించి')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-gold/20 flex items-center justify-center text-4xl">
                    🙏
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {t('Pandit Eswar Prasad Valavalapalli', 'పండిత ఈశ్వర్ ప్రసాద్ వలవలపల్లి')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('Telugu Priest', 'తెలుగు పురోహితుడు')}
                </p>
                <p className="text-foreground max-w-2xl mx-auto">
                  {t(
                    'With over 15 years of experience in traditional Telugu rituals and ceremonies, Pandit Eswar Prasad Valavalapalli brings authentic Vedic practices to devotees worldwide. His deep knowledge of Sanskrit, Telugu traditions, and Vedic scriptures ensures that every ceremony is performed with precision and devotion.',
                    '15 సంవత్సరాలకు పైగా సాంప్రదాయ తెలుగు కర్మకాండలు మరియు వేడుకలలో అనుభవంతో, పండిత ఈశ్వర్ ప్రసాద్ వలవలపల్లి ప్రపంచవ్యాప్తంగా ఉన్న భక్తులకు అసలైన వైదిక ఆచారాలను అందిస్తున్నారు. సంస్కృతం, తెలుగు సంప్రదాయాలు మరియు వేద శాస్త్రాలలో అతని లోతైన జ్ఞానం ప్రతి వేడుక ఖచ్చితత్వంతో మరియు భక్తితో నిర్వహించబడేలా నిర్ధారిస్తుంది.'
                  )}
                </p>
              </CardContent>
            </Card>
            
            {/* CTA Section */}
            <div className="text-center mt-8">
              <Button 
                onClick={() => navigate(`/booking?service=${service.id}`)}
                className="bg-primary text-white text-lg py-6 px-8"
              >
                {t('Book This Service Now', 'ఇప్పుడే ఈ సేవను బుక్ చేయండి')}
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
