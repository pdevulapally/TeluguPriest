import { useState } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const ContactSection = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert(t('Please fill all fields', 'దయచేసి అన్ని ఫీల్డ్‌లను పూరించండి'));
      return;
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        createdAt: new Date(),
        status: 'unread'
      });
      
      // Reset form
      setFormData({ name: '', phone: '', message: '' });
      alert(t('Message sent successfully!', 'సందేశం విజయవంతంగా పంపబడింది!'));
    } catch (error) {
      console.error('Error sending message:', error);
      alert(t('Error sending message. Please try again.', 'సందేశం పంపడంలో లోపం. దయచేసి మళ్లీ ప్రయత్నించండి.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-maroon mb-4">
            {t('Get in Touch', 'సంప్రదించండి')}
          </h2>
          
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-maroon mb-4">
              {t('Contact Directly', 'నేరుగా సంప్రదించండి')}
            </h3>
            
            <div className="flex items-center gap-3 mb-6">
              <Button className="bg-maroon hover:bg-maroon/90 text-white h-14 w-14">
                <Phone className="h-6 w-6" />
              </Button>
              <div>
                <div className="font-medium">
                  {t('Phone', 'ఫోన్')}
                </div>
                <div className="text-lg">+44 7438 618486</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mb-10">
              <Button className="bg-green-600 hover:bg-green-700 text-white h-14 w-14">
                <MessageSquare className="h-6 w-6" />
              </Button>
              <div>
                <div className="font-medium">WhatsApp</div>
                <div className="text-lg">+44 7438 618486</div>
              </div>
            </div>
            
            <div className="bg-cream rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=40&h=40&fit=crop" alt="Time" className="w-8 h-8 rounded-full" />
                <div>
                  <h4 className="font-medium text-maroon mb-2">
                    {t('Best time to call:', 'కాల్ చేయడానికి ఉత్తమ సమయం:')}
                  </h4>
                  <p className="mb-4 text-sm">
                    {t('Available from 9:00 AM to 5:00 PM (GMT) every day', 'ప్రతిరోజూ ఉదయం 9:00 నుండి సాయంత్రం 8:00 (EST) వరకు అందుబాటులో ఉంటుంది')}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img src="https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=40&h=40&fit=crop" alt="Temple" className="w-8 h-8 rounded-full" />
                <div>
                  <h4 className="font-medium text-maroon mb-2">
                    {t('Temple collaborations:', 'దేవాలయ సహకారం:')}
                  </h4>
                  <p className="text-sm">
                    {t('We welcome collaborations with temples and cultural organizations', 'దేవాలయాలు మరియు సాంస్కృతిక సంస్థలతో సహకారాన్ని స్వాగతిస్తున్నాము')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-maroon mb-4">
              {t('Send a Message', 'సందేశాన్ని పంపండి')}
            </h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t('Your Name', 'మీ పేరు')}
                </label>
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('Enter your name', 'మీ పేరును నమోదు చేయండి')} 
                  className="h-12" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t('Phone Number', 'ఫోన్ నంబర్')}
                </label>
                <Input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t('Enter your phone number', 'మీ ఫోన్ నంబర్‌ని నమోదు చేయండి')} 
                  className="h-12" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t('Your Message', 'మీ సందేశం')}
                </label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('How can we help you?', 'మేము మీకు ఎలా సహాయం చేయగలము?')} 
                  rows={4} 
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-white w-full py-6"
              >
                {isSubmitting 
                  ? t('Sending...', 'పంపుతోంది...')
                  : t('Send Message', 'సందేశాన్ని పంపండి')
                }
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
