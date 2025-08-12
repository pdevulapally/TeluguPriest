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
            
            <div className="flex items-center gap-3 mb-6">
              <Button className="bg-green-600 hover:bg-green-700 text-white h-14 w-14">
                <MessageSquare className="h-6 w-6" />
              </Button>
              <div>
                <div className="font-medium">WhatsApp</div>
                <div className="text-lg">+44 7438 618486</div>
              </div>
            </div>
            
            {/* Vara Lakshmi Vratham WhatsApp Group */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-3 sm:p-4 mb-6 border border-yellow-200">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-600 text-sm sm:text-lg">🕉️</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-yellow-800 text-sm sm:text-base">🕉️ SATYANARAYANA VRATHAM 🕉️</h4>
                  <p className="text-xs sm:text-sm text-yellow-700">Nov 15th @ 6:00 PM BST</p>
                </div>
              </div>
              <a
                href="https://chat.whatsapp.com/FSaWINn0irKEYNh25QPF5f?mode=ac_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-3 sm:px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors text-xs sm:text-sm"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Join WhatsApp Group
              </a>
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
