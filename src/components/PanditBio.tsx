// Om Ganesha Namah 🕉️
import { useLanguage } from '@/contexts/LanguageContext';

const PanditBio = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-cream py-20" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-maroon text-center mb-12 leading-snug">
            {t('Meet Your Trusted Hindu Priest', 'మీ నమ్మకమైన హిందూ పూజారిని కలవండి')}
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 transition-all">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-extrabold text-maroon mb-2">
                {t('Pandit Eswar Prasad Valavalapalli', 'పండిత ఈశ్వర్ ప్రసాద్ వలవలపల్లి')}
              </h3>

              <p className="text-lg text-primary font-medium mb-6">
                {t('Senior Vedic Priest | Telugu Brahmin Scholar | 40+ Years Experience', 'వృద్ధ వైదిక పూజారి | తెలుగు బ్రాహ్మణ పండితుడు | 40+ ఏళ్ల అనుభవం')}
              </p>

              <div className="text-foreground text-left space-y-5">
                <p className="text-lg leading-relaxed">
                  {t(
                    'Pandit Eswar Prasad is a highly respected Hindu priest and Vedic scholar with over 40 years of spiritual service. Recognised across Indian and NRI communities, he performs both North Indian and South Indian pujas with authenticity and devotion.',
                    'పండిత ఈశ్వర్ ప్రసాద్ అనుభవజ్ఞ హిందూ పూజారి మరియు వేద పండితుడు – 40 సంవత్సరాలకు పైగా ఆధ్యాత్మిక సేవల అనుభవం కలిగి ఉన్నారు. భారతీయ మరియు ఎన్‌ఆర్‌ఐ సముదాయాలలో ప్రసిద్ధి గాంచిన ఆయన, నార్త్ మరియు సౌత్ ఇండియన్ పూజలు భక్తితో మరియు ప్రామాణికతతో నిర్వహిస్తారు.'
                  )}
                </p>

                <p className="text-base leading-relaxed">
                  {t(
                    'He is dedicated to performing traditional Hindu ceremonies such as Satyanarayana Vratam, Grihapravesam (Housewarming), Upanayanam (Thread Ceremony), Seemantham, Annaprasanam, and Hindu weddings. Whether in London or abroad, you can book him in just 2 minutes for online or in-person ceremonies.',
                    'సత్యనారాయణ వ్రతం, గృహప్రవేశం, ఉపనయనం, seemantham, అన్నప్రాశన మరియు హిందూ వివాహాల వంటి సంప్రదాయ వేడుకలను ఆయన నిర్వహించడంలో ప్రత్యేకత కలిగి ఉన్నారు. లండన్‌లోనైనా లేదా విదేశాల్లోనైనా, ఆన్‌లైన్ లేదా ప్రత్యక్ష పూజలకు కేవలం 2 నిమిషాల్లో బుక్ చేయవచ్చు.'
                  )}
                </p>

                <div className="bg-cream p-5 rounded-xl mt-6">
                  <h4 className="font-semibold text-maroon text-lg mb-3">
                    {t('Key Services & Specializations:', 'ప్రధాన సేవలు & ప్రత్యేకతలు:')}
                  </h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-foreground">
                    <li>{t('North & South Indian Vedic Rituals', 'నార్త్ & సౌత్ ఇండియన్ వైదిక పూజలు')}</li>
                    <li>{t('Satyanarayana Vratam, Upanayanam & Grihapravesam', 'సత్యనారాయణ వ్రతం, ఉపనయనం & గృహప్రవేశం')}</li>
                    <li>{t('Hindu Weddings & Traditional Telugu Ceremonies', 'హిందూ వివాహాలు & సంప్రదాయ తెలుగు వేడుకలు')}</li>
                    <li>{t('Pitru Paksha, Shraddha & Ancestral Pujas', 'పితృ పక్షం, శ్రద్ధ & పితృ పూజలు')}</li>
                    <li>{t('Online & In-Person Puja Services – Globally Available', 'ప్రపంచవ్యాప్తంగా ఆన్‌లైన్ & ప్రత్యక్ష పూజ సేవలు')}</li>
                  </ul>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-primary font-medium">
                    {t('Your trusted priest for every sacred occasion — book now to ensure availability.', 'ప్రతి పవిత్ర సందర్భానికి మీ నమ్మకమైన పూజారి — అందుబాటులో ఉండే సమయంలో ఇప్పుడే బుక్ చేయండి.')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanditBio;
