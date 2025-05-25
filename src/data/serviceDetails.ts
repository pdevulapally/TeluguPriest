
export interface ServiceDetail {
  id: string;
  nameEn: string;
  nameTe: string;
  icon: string;
  shortDescriptionEn: string;
  shortDescriptionTe: string;
  detailedDescriptionEn: string;
  detailedDescriptionTe: string;
  duration: string;
  benefits: {
    en: string[];
    te: string[];
  };
  rituals: {
    en: string[];
    te: string[];
  };
  requirements: {
    en: string[];
    te: string[];
  };
  image: string;
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: 'satyanarayana',
    nameEn: 'Satyanarayana Vratam',
    nameTe: 'సత్యనారాయణ వ్రతం',
    icon: '🪔',
    shortDescriptionEn: 'A sacred puja honoring Lord Vishnu in the form of Satya Narayana.',
    shortDescriptionTe: 'సత్య నారాయణ రూపంలో భగవాన్ విష్ణు మూర్తిని ఆరాధించే పవిత్రమైన పూజ.',
    detailedDescriptionEn: 'The Satyanarayana Vratam is one of the most popular and widely performed pujas in Hindu tradition. This sacred ritual is dedicated to Lord Vishnu in his form as Satya Narayana, the embodiment of truth and righteousness. The puja is typically performed to seek the Lord\'s blessings for prosperity, peace, and fulfillment of desires.',
    detailedDescriptionTe: 'సత్యనారాయణ వ్రతం హిందూ సంప్రదాయంలో అత్యంత ప్రసిద్ధమైన మరియు విస్తృతంగా నిర్వహించబడే పూజలలో ఒకటి. ఈ పవిత్రమైన కర్మకాండ సత్యం మరియు ధర్మం యొక్క స్వరూపమైన సత్య నారాయణ రూపంలో భగవాన్ విష్ణువుకు అంకితం చేయబడింది.',
    duration: '2-3 hours',
    benefits: {
      en: ['Removes obstacles and brings prosperity', 'Fulfills desires and wishes', 'Brings peace and harmony to the family', 'Purifies the mind and soul'],
      te: ['అడ్డంకులను తొలగించి సంపదను తెస్తుంది', 'కోరికలు మరియు కోరికలను నెరవేర్చుతుంది', 'కుటుంబానికి శాంతి మరియు సామరస్యాన్ని తెస్తుంది', 'మనస్సు మరియు ఆత్మను శుద్ధి చేస్తుంది']
    },
    rituals: {
      en: ['Kalasha Sthapana (Sacred pot installation)', 'Ganesh Puja', 'Satyanarayana Katha recitation', 'Prasadam distribution'],
      te: ['కలశ స్థాపన', 'గణేశ పూజ', 'సత్యనారాయణ కథ పఠనం', 'ప్రసాద వितరణ']
    },
    requirements: {
      en: ['Fruits and flowers', 'Panchamrita ingredients', 'Incense and camphor', 'Prasadam items'],
      te: ['పండ్లు మరియు పూలు', 'పంచామృత పదార్థాలు', 'అగర్బత్తి మరియు కర్పూరం', 'ప్రసాద వస్తువులు']
    },
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800'
  },
  {
    id: 'barasala',
    nameEn: 'Barasala (Naming Ceremony)',
    nameTe: 'బారసాల',
    icon: '👶',
    shortDescriptionEn: 'A ceremony celebrating the naming of a newborn child.',
    shortDescriptionTe: 'నవజాత శిశువుకు నామకరణం చేసే వేడుక.',
    detailedDescriptionEn: 'Barasala, also known as Namakaran, is a sacred Hindu ceremony where a newborn child is given their name. This auspicious ritual is typically performed on the 12th day after birth and marks the child\'s formal introduction to the family and community.',
    detailedDescriptionTe: 'బారసాల లేదా నామకరణం అనేది నవజాత శిశువుకు పేరు పెట్టే పవిత్రమైన హిందూ వేడుక. ఈ శుభ కర్మ సాధారణంగా జననం తర్వాత 12వ రోజు నిర్వహించబడుతుంది.',
    duration: '1-2 hours',
    benefits: {
      en: ['Blesses the child with a long and prosperous life', 'Invokes divine protection', 'Strengthens family bonds', 'Ensures spiritual growth'],
      te: ['శిశువుకు దీర్ఘాయువు మరియు సంపన్న జీవితాన్ని అనుగ్రహిస్తుంది', 'దైవిక రక్షణను కోరుతుంది', 'కుటుంబ బంధాలను బలపరుస్తుంది', 'ఆధ్యాత్మిక వృద్ధిని నిర్ధారిస్తుంది']
    },
    rituals: {
      en: ['Ganesh Puja', 'Name selection ceremony', 'Sacred thread blessing', 'Family blessings'],
      te: ['గణేశ పూజ', 'నామ ఎంపిక వేడుక', 'పవిత్ర దారం ఆశీర్వాదం', 'కుటుంబ ఆశీర్వాదాలు']
    },
    requirements: {
      en: ['Sacred thread', 'Flowers and fruits', 'Turmeric and kumkum', 'Sweets for distribution'],
      te: ['పవిత్ర దారం', 'పూలు మరియు పండ్లు', 'పసుపు మరియు కుంకుమ', 'పంపిణీ కోసం తీపిలు']
    },
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800'
  },
  {
    id: 'gruhapravesam',
    nameEn: 'Gruhapravesam',
    nameTe: 'గృహప్రవేశం',
    icon: '🏡',
    shortDescriptionEn: 'A traditional housewarming ceremony for new homes.',
    shortDescriptionTe: 'కొత్త ఇళ్లకు సంప్రదాయ గృహప్రవేశ వేడుక.',
    detailedDescriptionEn: 'Gruhapravesam is a sacred Hindu ceremony performed when entering a new home for the first time. This ritual purifies the house, removes negative energies, and invites positive vibrations and divine blessings into the new dwelling.',
    detailedDescriptionTe: 'గృహప్రవేశం అనేది కొత్త ఇంటిలోకి మొదటిసారి ప్రవేశించేటప్పుడు నిర్వహించే పవిత్రమైన హిందూ వేడుక. ఈ కర్మ ఇంటిని శుద్ధి చేస్తుంది, ప్రతికూల శక్తులను తొలగిస్తుంది.',
    duration: '2-3 hours',
    benefits: {
      en: ['Purifies the new home', 'Brings prosperity and happiness', 'Removes negative energies', 'Ensures family well-being'],
      te: ['కొత్త ఇంటిని శుద్ధి చేస్తుంది', 'సంపద మరియు ఆనందాన్ని తెస్తుంది', 'ప్రతికూల శక్తులను తొలగిస్తుంది', 'కుటుంబ క్షేమాన్ని నిర్ధారిస్తుంది']
    },
    rituals: {
      en: ['Ganesh Puja', 'Vastu Shanti', 'Kalasha Sthapana', 'Aarti and prayers'],
      te: ['గణేశ పూజ', 'వాస్తు శాంతి', 'కలశ స్థాపన', 'ఆరతి మరియు ప్రార్థనలు']
    },
    requirements: {
      en: ['Kalasha with coconut', 'Flowers and mango leaves', 'Rice and turmeric', 'Oil lamps'],
      te: ['కొబ్బరితో కలశ', 'పూలు మరియు మామిడి ఆకులు', 'అన్నం మరియు పసుపు', 'నూనె దీపాలు']
    },
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800'
  },
  {
    id: 'wedding',
    nameEn: 'Vivaham (Wedding)',
    nameTe: 'వివాహం',
    icon: '💍',
    shortDescriptionEn: 'Traditional Telugu wedding ceremonies.',
    shortDescriptionTe: 'సాంప్రదాయ తెలుగు వివాహ వేడుకలు.',
    detailedDescriptionEn: 'Telugu wedding ceremonies are elaborate and sacred rituals that unite two souls in holy matrimony. These ceremonies are rich in tradition and include various rituals performed over multiple days, each with its own significance and blessings.',
    detailedDescriptionTe: 'తెలుగు వివాహ వేడుకలు రెండు ఆత్మలను పవిత్ర వివాహ బంధంలో కలిపే విస్తృతమైన మరియు పవిత్రమైన కర్మకాండలు. ఈ వేడుకలు సంప్రదాయంలో సమృద్ధిగా ఉంటాయి.',
    duration: '4-6 hours',
    benefits: {
      en: ['Sanctifies the marriage bond', 'Invokes divine blessings', 'Ensures marital happiness', 'Brings prosperity to the couple'],
      te: ['వివాహ బంధాన్ని పవిత్రం చేస్తుంది', 'దైవిక ఆశీర్వాదాలను కోరుతుంది', 'వైవాహిక ఆనందాన్ని నిర్ధారిస్తుంది', 'దంపతులకు సంపదను తెస్తుంది']
    },
    rituals: {
      en: ['Ganesh Puja', 'Kanyadaan', 'Saptapadi (Seven steps)', 'Mangalsutra ceremony'],
      te: ['గణేశ పూజ', 'కన్యాదానం', 'సప్తపది', 'మంగళసూత్ర వేడుక']
    },
    requirements: {
      en: ['Sacred fire', 'Mangalsutra', 'Wedding garlands', 'Rice and flowers'],
      te: ['పవిత్రమైన అగ్ని', 'మంగళసూత్రం', 'వివాహ మాలలు', 'అన్నం మరియు పూలు']
    },
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800'
  },
  {
    id: 'annaprasana',
    nameEn: 'Annaprasana',
    nameTe: 'అన్నప్రాసన',
    icon: '🍚',
    shortDescriptionEn: "Baby's first solid food ceremony.",
    shortDescriptionTe: 'శిశువుకి మొదటి ఆహారం అందించే వేడుక.',
    detailedDescriptionEn: 'Annaprasana is a sacred Hindu ceremony marking a baby\'s first intake of solid food. Typically performed when the child is 6-8 months old, this ritual signifies the transition from milk to solid food and seeks divine blessings for the child\'s healthy growth.',
    detailedDescriptionTe: 'అన్నప్రాసన అనేది శిశువు మొదటిసారి ఘన ఆహారం తీసుకోవడాన్ని సూచించే పవిత్రమైన హిందూ వేడుక. సాధారణంగా పిల్లవాడు 6-8 నెలల వయస్సులో నిర్వహించబడుతుంది.',
    duration: '1-2 hours',
    benefits: {
      en: ['Ensures healthy growth', 'Blesses digestive system', 'Invokes divine protection', 'Celebrates milestone'],
      te: ['ఆరోగ్యకరమైన వృద్ధిని నిర్ధారిస్తుంది', 'జీర్ణ వ్యవస్థను ఆశీర్వదిస్తుంది', 'దైవిక రక్షణను కోరుతుంది', 'మైలురాయిని జరుపుకుంటుంది']
    },
    rituals: {
      en: ['Ganesh Puja', 'Food blessing ceremony', 'First feeding ritual', 'Family blessings'],
      te: ['గణేశ పూజ', 'ఆహార ఆశీర్వాద వేడుక', 'మొదటి దాణా కర్మ', 'కుటుంబ ఆశీర్వాదాలు']
    },
    requirements: {
      en: ['Rice and ghee', 'Silver spoon', 'Fruits and sweets', 'Flowers for decoration'],
      te: ['అన్నం మరియు నెయ్యి', 'వెండి చెంచా', 'పండ్లు మరియు తీపిలు', 'అలంకరణ కోసం పూలు']
    },
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800'
  },
  {
    id: 'upanayanam',
    nameEn: 'Upanayanam',
    nameTe: 'ఉపనయనం',
    icon: '🧵',
    shortDescriptionEn: 'Sacred thread ceremony for young boys.',
    shortDescriptionTe: 'బాలురకు జరిగే పవిత్రమైన యజ్ఞోపవీతం వేడుక.',
    detailedDescriptionEn: 'Upanayanam is one of the most important samskaras (rites of passage) in Hindu tradition. This sacred thread ceremony initiates a young boy into spiritual learning and marks his entry into the student phase of life (Brahmacharya ashrama).',
    detailedDescriptionTe: 'ఉపనయనం హిందూ సంప్రదాయంలో అత్యంత ముఖ్యమైన సంస్కారాలలో ఒకటి. ఈ పవిత్ర దార వేడుక ఒక యువకుడిని ఆధ్యాత్మిక అభ్యాసంలోకి దీక్షపరుస్తుంది.',
    duration: '3-4 hours',
    benefits: {
      en: ['Initiates spiritual journey', 'Purifies the mind', 'Grants divine protection', 'Marks entry into studenthood'],
      te: ['ఆధ్యాత్మిక ప్రయాణాన్ని ప్రారంభిస్తుంది', 'మనస్సును శుద్ధి చేస్తుంది', 'దైవిక రక్షణను అనుగ్రహిస్తుంది', 'విద్యార్థిత్వంలోకి ప్రవేశాన్ని సూచిస్తుంది']
    },
    rituals: {
      en: ['Sacred thread ceremony', 'Gayatri Mantra initiation', 'Vedic learning begins', 'Guru dakshina'],
      te: ['పవిత్ర దార వేడుక', 'గాయత్రి మంత్ర దీక్ష', 'వేద అభ్యాసం ప్రారంభం', 'గురు దక్షిణ']
    },
    requirements: {
      en: ['Sacred thread', 'Turmeric and sandalwood', 'Sacred fire setup', 'Vedic materials'],
      te: ['పవిత్ర దారం', 'పసుపు మరియు చందనం', 'పవిత్రమైన అగ్ని ఏర్పాటు', 'వేద సామగ్రి']
    },
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800'
  },
  {
    id: 'samvatsarika-pitru',
    nameEn: 'Samvatsarika Pitru Puja',
    nameTe: 'సంవత్సరిక పితృ పూజ',
    icon: '🕯️',
    shortDescriptionEn: 'Annual ancestral worship ceremony.',
    shortDescriptionTe: 'వార్షిక పూర్వీకుల ఆరాధన వేడుక.',
    detailedDescriptionEn: 'Samvatsarika Pitru Puja is an annual ceremony dedicated to honoring and seeking blessings from departed ancestors. This sacred ritual is performed to express gratitude, seek forgiveness, and ensure the spiritual well-being of both the ancestors and the living family members.',
    detailedDescriptionTe: 'సంవత్సరిక పితృ పూజ అనేది మరణించిన పూర్వీకులను గౌరవించడానికి మరియు వారి ఆశీర్వాదాలను కోరడానికి అంకితమైన వార్షిక వేడుక. ఈ పవిత్రమైన కర్మ కృతజ్ఞతను వ్యక్తం చేయడానికి నిర్వహించబడుతుంది.',
    duration: '2-3 hours',
    benefits: {
      en: ['Ensures ancestors\' peace', 'Removes ancestral curses', 'Brings family prosperity', 'Spiritual protection'],
      te: ['పూర్వీకుల శాంతిని నిర్ధారిస్తుంది', 'పితృ శాపాలను తొలగిస్తుంది', 'కుటుంబ సంపదను తెస్తుంది', 'ఆధ్యాత్మిక రక్షణ']
    },
    rituals: {
      en: ['Pitru invocation', 'Tarpan ceremony', 'Food offerings', 'Brahmin feeding'],
      te: ['పితృ ఆవాహన', 'తర్పణ వేడుక', 'అన్న దానం', 'బ్రాహ్మణ భోజనం']
    },
    requirements: {
      en: ['Sesame seeds', 'Sacred water', 'Cooked rice', 'Black sesame'],
      te: ['నువ్వులు', 'పవిత్ర నీరు', 'వండిన అన్నం', 'నల్ల నువ్వులు']
    },
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800'
  },
  {
    id: 'masika-pitru',
    nameEn: 'Masika Pitru Puja',
    nameTe: 'మాసిక పితృ పూజ',
    icon: '🌙',
    shortDescriptionEn: 'Monthly ancestral worship ceremony.',
    shortDescriptionTe: 'మాసిక పూర్వీకుల ఆరాధన వేడుక.',
    detailedDescriptionEn: 'Masika Pitru Puja is a monthly ritual performed to honor departed ancestors. This ceremony maintains a continuous spiritual connection with ancestors and seeks their ongoing blessings for family prosperity and protection.',
    detailedDescriptionTe: 'మాసిక పితృ పూజ అనేది మరణించిన పూర్వీకులను గౌరవించడానికి నిర్వహించే మాసిక కర్మ. ఈ వేడుక పూర్వీకులతో నిరంతర ఆధ్యాత్మిక సంబంధాన్ని కొనసాగిస్తుంది.',
    duration: '1-2 hours',
    benefits: {
      en: ['Monthly spiritual cleansing', 'Ancestral blessings', 'Family harmony', 'Removes obstacles'],
      te: ['మాసిక ఆధ్యాత్మిక శుద్ధి', 'పితృ ఆశీర్వాదాలు', 'కుటుంబ సామరస్యం', 'అడ్డంకుల తొలగింపు']
    },
    rituals: {
      en: ['New moon prayers', 'Water offerings', 'Rice ball offerings', 'Mantra chanting'],
      te: ['అమావాస్య ప్రార్థనలు', 'నీరు సమర్పణలు', 'అన్న పిండం సమర్పణ', 'మంత్ర జపం']
    },
    requirements: {
      en: ['Rice flour', 'Black sesame', 'Copper vessel', 'Sacred thread'],
      te: ['బియ్యం పిండి', 'నల్ల నువ్వులు', 'రాగి పాత్ర', 'పవిత్ర దారం']
    },
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800'
  },
  {
    id: 'abdika-pitru',
    nameEn: 'Abdika Pitru Puja',
    nameTe: 'ఆబ్దిక పితృ పూజ',
    icon: '🪷',
    shortDescriptionEn: 'Special ancestral worship on death anniversary.',
    shortDescriptionTe: 'మరణ వార్షికోత్సవంలో ప్రత్యేక పూర్వీకుల ఆరాధన.',
    detailedDescriptionEn: 'Abdika Pitru Puja is performed on the death anniversary of ancestors. This special ceremony is considered one of the most important rituals to ensure the departed soul\'s peace and to receive their blessings for the family\'s well-being.',
    detailedDescriptionTe: 'ఆబ్దిక పితృ పూజ పూర్వీకుల మరణ వార్షికోత్సవంలో నిర్వహించబడుతుంది. మరణించిన ఆత్మ యొక్క శాంతిని నిర్ధారించడానికి ఈ ప్రత్యేక వేడుక అత్యంత ముఖ్యమైన కర్మలలో ఒకటిగా పరిగణించబడుతుంది.',
    duration: '2-3 hours',
    benefits: {
      en: ['Grants moksha to ancestors', 'Removes family doshas', 'Ensures spiritual progress', 'Divine protection'],
      te: ['పూర్వీకులకు మోక్షాన్ని అనుగ్రహిస్తుంది', 'కుటుంబ దోషాలను తొలగిస్తుంది', 'ఆధ్యాత్మిక పురోగతిని నిర్ధారిస్తుంది', 'దైవిక రక్షణ']
    },
    rituals: {
      en: ['Anniversary rituals', 'Pinda daan', 'Ganga jal offerings', 'Charity giving'],
      te: ['వార్షికోత్సవ కర్మలు', 'పిండ దానం', 'గంగా జల సమర్పణ', 'దాన ధర్మాలు']
    },
    requirements: {
      en: ['Pinda materials', 'Ganga water', 'White flowers', 'Donation items'],
      te: ['పిండ సామగ్రి', 'గంగా నీరు', 'తెల్ల పూలు', 'దాన వస్తువులు']
    },
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800'
  },
  {
    id: 'custom',
    nameEn: 'Custom Puja',
    nameTe: 'కస్టమ్ పూజ',
    icon: '✨',
    shortDescriptionEn: 'Personalized puja services based on your requirements.',
    shortDescriptionTe: 'మీ అవసరాల ప్రకారం వ్యక్తిగతీకరించిన పూజా సేవలు.',
    detailedDescriptionEn: 'Our custom puja services are tailored to meet your specific spiritual needs. Whether it\'s a special occasion, personal prayer, or unique ceremony, Pandit Eswar Prasad Valavalapalli will design and perform a personalized ritual according to your requirements.',
    detailedDescriptionTe: 'మా కస్టమ్ పూజా సేవలు మీ నిర్దిష్ట ఆధ్యాత్మిక అవసరాలను తీర్చడానికి రూపొందించబడ్డాయి. ఇది ప్రత్యేక సందర్భం, వ్యక్తిగత ప్రార్థన లేదా ప్రత్యేక వేడుక అయినా, పండిత ఈశ్వర్ ప్రసాద్ వలవలపల్లి మీ అవసరాలకు అనుగుణంగా వ్యక్తిగతీకరించిన కర్మను రూపొందించి నిర్వహిస్తారు.',
    duration: 'Variable',
    benefits: {
      en: ['Personalized spiritual experience', 'Specific problem solutions', 'Flexible timing', 'Customized rituals'],
      te: ['వ్యక్తిగతీకరించిన ఆధ్యాత్మిక అనుభవం', 'నిర్దిష్ట సమస్య పరిష్కారాలు', 'సౌకర్యవంతమైన సమయం', 'కస్టమైజ్డ్ కర్మలు']
    },
    rituals: {
      en: ['Consultation session', 'Customized ceremony design', 'Personal prayers', 'Specific deity worship'],
      te: ['సంప్రదింపుల సెషన్', 'కస్టమైజ్డ్ వేడుక రూపకల్పన', 'వ్యక్తిగత ప్రార్థనలు', 'నిర్దిష్ట దేవతా ఆరాధన']
    },
    requirements: {
      en: ['Depends on ceremony', 'Consultation required', 'Flexible arrangements', 'Personal preferences'],
      te: ['వేడుకపై ఆధారపడుతుంది', 'సంప్రదింపులు అవసరం', 'సౌకర్యవంతమైన ఏర్పాట్లు', 'వ్యక్తిగత ప్రాధాన్యతలు']
    },
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800'
  }
];
