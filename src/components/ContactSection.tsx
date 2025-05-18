
import { useState } from 'react';
import { Phone, WhatsApp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [language, setLanguage] = useState<'en' | 'te'>('en');
  
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-maroon text-center mb-8">
          {language === 'en' ? 'Get in Touch' : 'సంప్రదించండి'}
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-maroon mb-4">
              {language === 'en' ? 'Contact Directly' : 'నేరుగా సంప్రదించండి'}
            </h3>
            
            <div className="flex items-center gap-3 mb-6">
              <Button className="bg-maroon hover:bg-maroon/90 text-white h-14 w-14">
                <Phone className="h-6 w-6" />
              </Button>
              <div>
                <div className="font-medium">
                  {language === 'en' ? 'Phone' : 'ఫోన్'}
                </div>
                <div className="text-lg">+1 (555) 123-4567</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mb-10">
              <Button className="bg-green-600 hover:bg-green-700 text-white h-14 w-14">
                <WhatsApp className="h-6 w-6" />
              </Button>
              <div>
                <div className="font-medium">WhatsApp</div>
                <div className="text-lg">+1 (555) 987-6543</div>
              </div>
            </div>
            
            <div className="bg-cream rounded-lg p-6">
              <h4 className="font-medium text-maroon mb-2">
                {language === 'en' ? 'Best time to call:' : 'కాల్ చేయడానికి ఉత్తమ సమయం:'}
              </h4>
              <p className="mb-4 text-sm">
                {language === 'en' 
                  ? 'Available from 9:00 AM to 8:00 PM (EST) every day'
                  : 'ప్రతిరోజూ ఉదయం 9:00 నుండి సాయంత్రం 8:00 (EST) వరకు అందుబాటులో ఉంటుంది'}
              </p>
              <h4 className="font-medium text-maroon mb-2">
                {language === 'en' ? 'Temple collaborations:' : 'దేవాలయ సహకారం:'}
              </h4>
              <p className="text-sm">
                {language === 'en'
                  ? 'We welcome collaborations with temples and cultural organizations'
                  : 'దేవాలయాలు మరియు సాంస్కృతిక సంస్థలతో సహకారాన్ని స్వాగతిస్తున్నాము'}
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-maroon mb-4">
              {language === 'en' ? 'Send a Message' : 'సందేశాన్ని పంపండి'}
            </h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  {language === 'en' ? 'Your Name' : 'మీ పేరు'}
                </label>
                <Input 
                  placeholder={language === 'en' ? 'Enter your name' : 'మీ పేరును నమోదు చేయండి'}
                  className="h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">
                  {language === 'en' ? 'Phone Number' : 'ఫోన్ నంబర్'}
                </label>
                <Input 
                  placeholder={language === 'en' ? 'Enter your phone number' : 'మీ ఫోన్ నంబర్‌ని నమోదు చేయండి'}
                  className="h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">
                  {language === 'en' ? 'Your Message' : 'మీ సందేశం'}
                </label>
                <Textarea 
                  placeholder={language === 'en' ? 'How can we help you?' : 'మేము మీకు ఎలా సహాయం చేయగలము?'}
                  rows={4}
                />
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-white w-full py-6">
                {language === 'en' ? 'Send Message' : 'సందేశాన్ని పంపండి'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
