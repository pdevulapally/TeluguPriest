import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, Cookie, Settings } from 'lucide-react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { language, t } = useLanguage();

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    localStorage.setItem('analyticsCookies', 'true');
    localStorage.setItem('advertisingCookies', 'true');
    localStorage.setItem('functionalCookies', 'true');
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential');
    localStorage.setItem('analyticsCookies', 'false');
    localStorage.setItem('advertisingCookies', 'false');
    localStorage.setItem('functionalCookies', 'false');
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = () => {
    const analytics = document.getElementById('analytics') as HTMLInputElement;
    const advertising = document.getElementById('advertising') as HTMLInputElement;
    const functional = document.getElementById('functional') as HTMLInputElement;

    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('analyticsCookies', analytics.checked.toString());
    localStorage.setItem('advertisingCookies', advertising.checked.toString());
    localStorage.setItem('functionalCookies', functional.checked.toString());
    
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-maroon text-white border-t border-gold/20 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-2">
                  {language === 'en' ? 'We use cookies' : 'మేము కుకీలను ఉపయోగిస్తాము'}
                </h3>
                <p className="text-sm text-white/80 mb-3">
                  {language === 'en' 
                    ? 'We use cookies to enhance your browsing experience, serve personalized ads, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.'
                    : 'మీ బ్రౌజింగ్ అనుభవాన్ని మెరుగుపరచడానికి, వ్యక్తిగతీకరించిన ప్రకటనలను అందించడానికి మరియు మా ట్రాఫిక్‌ను విశ్లేషించడానికి మేము కుకీలను ఉపయోగిస్తాము. "అన్నీ అంగీకరించు" క్లిక్ చేయడం ద్వారా, మీరు మా కుకీల ఉపయోగానికి అంగీకరిస్తున్నారు.'}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(true)}
                className="border-gold text-gold bg-transparent hover:bg-gold hover:text-maroon font-semibold rounded-lg px-6 py-2 transition-colors duration-150"
              >
                <Settings className="h-4 w-4" />
                {language === 'en' ? 'Settings' : 'సెట్టింగ్‌లు'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={acceptEssential}
                className="border-white text-white bg-transparent hover:bg-white hover:text-maroon font-semibold rounded-lg px-6 py-2 transition-colors duration-150"
              >
                {language === 'en' ? 'Essential Only' : 'అవసరమైనవి మాత్రమే'}
              </Button>
              <Button
                size="sm"
                onClick={acceptAll}
                className="bg-gold text-maroon hover:bg-gold/90 font-semibold rounded-lg px-6 py-2 transition-colors duration-150"
              >
                {language === 'en' ? 'Accept All' : 'అన్నీ అంగీకరించు'}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white">
                {language === 'en' ? 'Cookie Preferences' : 'కుకీ ప్రాధాన్యతలు'}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSettings(false)}
                className="text-white hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg border border-white/20">
                <div>
                  <h4 className="font-medium text-white">
                    {language === 'en' ? 'Essential Cookies' : 'అవసరమైన కుకీలు'}
                  </h4>
                  <p className="text-sm text-white/80">
                    {language === 'en' 
                      ? 'Required for the website to function properly. Cannot be disabled.'
                      : 'వెబ్‌సైట్ సరిగ్గా పనిచేయడానికి అవసరం. నిలిపివేయలేము.'}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="h-4 w-4 text-gold rounded border-white/30 bg-white/10"
                />
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg border border-white/20">
                <div>
                  <h4 className="font-medium text-white">
                    {language === 'en' ? 'Analytics Cookies' : 'విశ్లేషణ కుకీలు'}
                  </h4>
                  <p className="text-sm text-white/80">
                    {language === 'en' 
                      ? 'Help us understand how visitors interact with our website.'
                      : 'సందర్శకులు మా వెబ్‌సైట్‌తో ఎలా పరస్పర చర్య చేస్తారో అర్థం చేసుకోవడానికి సహాయపడుతుంది.'}
                  </p>
                </div>
                <input
                  id="analytics"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-gold rounded border-white/30 bg-white/10"
                />
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg border border-white/20">
                <div>
                  <h4 className="font-medium text-white">
                    {language === 'en' ? 'Advertising Cookies' : 'ప్రకటన కుకీలు'}
                  </h4>
                  <p className="text-sm text-white/80">
                    {language === 'en' 
                      ? 'Used to deliver personalized advertisements and track ad performance.'
                      : 'వ్యక్తిగతీకరించిన ప్రకటనలను అందించడానికి మరియు ప్రకటన పనితీరును ట్రాక్ చేయడానికి ఉపయోగించబడుతుంది.'}
                  </p>
                </div>
                <input
                  id="advertising"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-gold rounded border-white/30 bg-white/10"
                />
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg border border-white/20">
                <div>
                  <h4 className="font-medium text-white">
                    {language === 'en' ? 'Functional Cookies' : 'ఫంక్షనల్ కుకీలు'}
                  </h4>
                  <p className="text-sm text-white/80">
                    {language === 'en' 
                      ? 'Enable enhanced functionality and personalization.'
                      : 'మెరుగైన ఫంక్షనాలిటీ మరియు వ్యక్తిగతీకరణను ప్రారంభిస్తుంది.'}
                  </p>
                </div>
                <input
                  id="functional"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-gold rounded border-white/30 bg-white/10"
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(false)}
                className="border-white text-white bg-transparent hover:bg-white hover:text-maroon font-semibold rounded-lg px-6 py-2 transition-colors duration-150"
              >
                {language === 'en' ? 'Cancel' : 'రద్దు'}
              </Button>
              <Button
                size="sm"
                onClick={savePreferences}
                className="bg-gold text-maroon hover:bg-gold/90 font-semibold rounded-lg px-6 py-2 transition-colors duration-150"
              >
                {language === 'en' ? 'Save Preferences' : 'ప్రాధాన్యతలను సేవ్ చేయండి'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner; 