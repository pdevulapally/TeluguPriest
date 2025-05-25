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
  significance: {
    en: string[];
    te: string[];
  };
  occasions: {
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
    icon: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    shortDescriptionEn: 'A sacred puja honoring Lord Vishnu in the form of Satya Narayana, bringing prosperity and peace.',
    shortDescriptionTe: 'సత్య నారాయణ రూపంలో భగవాన్ విష్ణు మూర్తిని ఆరాధించే పవిత్రమైన పూజ, సంపద మరియు శాంతిని తెస్తుంది.',
    detailedDescriptionEn: 'The Satyanarayana Vratam is one of the most revered and widely performed pujas in Hindu tradition. This sacred ritual is dedicated to Lord Vishnu in his benevolent form as Satya Narayana, the embodiment of truth and righteousness. The ceremony involves the recitation of five divine stories (kathas) that illustrate the power of devotion and the consequences of neglecting divine worship. Performed traditionally on full moon days or during auspicious occasions, this puja brings immense blessings of prosperity, peace, and spiritual fulfillment to devotees and their families.',
    detailedDescriptionTe: 'సత్యనారాయణ వ్రతం హిందూ సంప్రదాయంలో అత్యంత గౌరవనీయమైన మరియు విస్తృతంగా నిర్వహించబడే పూజలలో ఒకటి. ఈ పవిత్రమైన కర్మకాండ సత్యం మరియు ధర్మం యొక్క స్వరూపమైన సత్య నారాయణ రూపంలో భగవాన్ విష్ణువుకు అంకితం చేయబడింది. వేడుకలో భక్తి శక్తిని మరియు దైవిక ఆరాధనను విస్మరించడం వల్ల కలిగే పరిణామాలను వివరించే ఐదు దివ్య కథల (కథలు) పఠనం ఉంటుంది.',
    duration: '2-3 hours',
    benefits: {
      en: [
        'Removes obstacles and brings prosperity to family and business',
        'Fulfills legitimate desires and wishes with divine grace',
        'Brings peace, harmony, and unity to the household',
        'Purifies the mind, body, and soul through sacred rituals',
        'Grants protection from negative influences and evil forces',
        'Enhances spiritual growth and devotion to the divine'
      ],
      te: [
        'అడ్డంకులను తొలగించి కుటుంబం మరియు వ్యాపారానికి సంపదను తెస్తుంది',
        'దైవిక కృపతో న్యాయమైన కోరికలు మరియు కోరికలను నెరవేర్చుతుంది',
        'ఇంటికి శాంతి, సామరస్యం మరియు ఐక్యతను తెస్తుంది',
        'పవిత్రమైన కర్మల ద్వారా మనస్సు, శరీరం మరియు ఆత్మను శుద్ధి చేస్తుంది',
        'ప్రతికూల ప్రభావాలు మరియు దుష్ట శక్తుల నుండి రక్షణ అనుగ్రహిస్తుంది',
        'ఆధ్యాత్మిక వృద్ధిని మరియు దైవభక్తిని పెంచుతుంది'
      ]
    },
    rituals: {
      en: [
        'Kalasha Sthapana (Sacred pot installation with divine invocation)',
        'Ganesh Puja for removing obstacles and ensuring success',
        'Satyanarayana Katha recitation with five sacred stories',
        'Aarti and divine hymns with melodious devotional songs',
        'Prasadam preparation and distribution to all devotees',
        'Final prayers and blessings for prosperity'
      ],
      te: [
        'కలశ స్థాపన (దివ్య ఆవాహనతో పవిత్ర కుండ స్థాపన)',
        'అడ్డంకుల తొలగింపు మరియు విజయం కోసం గణేశ పూజ',
        'ఐదు పవిత్ర కథలతో సత్యనారాయణ కథ పఠనం',
        'మధుర భక్తి గీతాలతో ఆరతి మరియు దివ్య కీర్తనలు',
        'అన్ని భక్తులకు ప్రసాద తయారీ మరియు పంపిణీ',
        'సంపద కోసం చివరి ప్రార్థనలు మరియు ఆశీర్వాదాలు'
      ]
    },
    requirements: {
      en: [
        'Fresh fruits (banana, apple, coconut) and seasonal flowers',
        'Panchamrita ingredients (milk, honey, ghee, sugar, yogurt)',
        'Premium incense sticks, camphor, and oil lamps',
        'Special prasadam items (semolina halwa, fruits, sweets)',
        'Sacred thread, turmeric, kumkum, and sandalwood paste',
        'Clean worship area with proper seating arrangements'
      ],
      te: [
        'తాజా పండ్లు (అరటి, ఆపిల్, కొబ్బరి) మరియు కాలానుగుణ పూలు',
        'పంచామృత పదార్థాలు (పాలు, తేనె, నెయ్యి, చక్కెర, పెరుగు)',
        'ప్రీమియం అగర్బత్తులు, కర్పూరం మరియు నూనె దీపాలు',
        'ప్రత్యేక ప్రసాద వస్తువులు (రవ్వ హల్వా, పండ్లు, తీపిలు)',
        'పవిత్ర దారం, పసుపు, కుంకుమ మరియు చందనం పేస్ట్',
        'సరైన కూర్చోవడానికి వ్యవస్థలతో పరిశుభ్రమైన పూజా ప్రాంతం'
      ]
    },
    significance: {
      en: [
        'Represents the triumph of truth over falsehood',
        'Demonstrates the power of unwavering devotion',
        'Teaches the importance of keeping promises to the divine',
        'Symbolizes the universal presence of the divine'
      ],
      te: [
        'అసత్యంపై సత్యం యొక్క విజయాన్ని సూచిస్తుంది',
        'అచంచల భక్తి యొక్క శక్తిని ప్రదర్శిస్తుంది',
        'దైవానికి ఇచ్చిన వాగ్దానాలను నిలబెట్టుకోవడం యొక్క ప్రాముఖ్యతను బోధిస్తుంది',
        'దైవం యొక్క సార్వత్రిక ఉపస్థితిని సూచిస్తుంది'
      ]
    },
    occasions: {
      en: [
        'Purnima (Full Moon) days',
        'New home celebrations',
        'Business inaugurations',
        'Family milestone events',
        'Recovery from illness',
        'Before important ventures'
      ],
      te: [
        'పూర్ణిమ రోజులు',
        'కొత్త ఇల్లు వేడుకలు',
        'వ్యాపార ప్రారంభోత్సవాలు',
        'కుటుంబ మైలురాయి సంఘటనలు',
        'అనారోగ్యం నుండి కోలుకోవడం',
        'ముఖ్యమైన పనుల ముందు'
      ]
    },
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
  },
  {
    id: 'srinivasa-kalyanam',
    nameEn: 'Srinivasa Kalyanam',
    nameTe: 'శ్రీనివాస కల్యాణం',
    icon: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=400&h=400&fit=crop',
    shortDescriptionEn: 'The divine wedding ceremony of Lord Venkateswara and Goddess Padmavathi, bringing marital bliss.',
    shortDescriptionTe: 'భగవాన్ వేంకటేశ్వరుడు మరియు దేవి పద్మావతి దేవి యొక్క దివ్య వివాహ వేడుక, వైవాహిక ఆనందాన్ని తెస్తుంది.',
    detailedDescriptionEn: 'Srinivasa Kalyanam is one of the most elaborate and spiritually significant ceremonies in South Indian tradition, recreating the celestial wedding of Lord Venkateswara (Srinivasa) with Goddess Padmavathi. This divine union represents the perfect harmony between the material and spiritual worlds. The ceremony is performed with great devotion and includes all traditional wedding rituals, from the initial preparations to the final blessings. It is believed that witnessing or sponsoring this divine wedding brings immense blessings for married couples, ensures harmony in relationships, and helps unmarried individuals find suitable life partners.',
    detailedDescriptionTe: 'శ్రీనివాస కల్యాణం దక్షిణ భారతీయ సంప్రదాయంలో అత్యంత విస్తృతమైన మరియు ఆధ్యాత్మికంగా ముఖ్యమైన వేడుకలలో ఒకటి, ఇది భగవాన్ వేంకటేశ్వరుడు (శ్రీనివాసుడు) దేవి పద్మావతితో చేసుకున్న దివ్య వివాహాన్ని పునఃసృష్టిస్తుంది. ఈ దివ్య మిలనం భౌతిక మరియు ఆధ్యాత్మిక లోకాల మధ్య పరిపూర్ణ సామరస్యాన్ని సూచిస్తుంది.',
    duration: '4-5 hours',
    benefits: {
      en: [
        'Blesses marriages with divine harmony and eternal love',
        'Removes obstacles in finding suitable life partners',
        'Brings prosperity, abundance, and financial stability',
        'Ensures fertility and blessings for children',
        'Strengthens family bonds and relationships',
        'Grants spiritual elevation and divine grace'
      ],
      te: [
        'వైవాహిక జీవితానికి దైవిక సామరస్యం మరియు శాశ్వత ప్రేమను అనుగ్రహిస్తుంది',
        'తగిన జీవిత భాగస్వామిని కనుగొనడంలో అడ్డంకులను తొలగిస్తుంది',
        'సంపద, అభివృద్ధి మరియు ఆర్థిక స్థిరత్వాన్ని తెస్తుంది',
        'సంతానం మరియు పిల్లల ఆశీర్వాదాలను నిర్ధారిస్తుంది',
        'కుటుంబ బంధాలు మరియు సంబంధాలను బలపరుస్తుంది',
        'ఆధ్యాత్మిక ఉన్నతి మరియు దైవిక కృపను అనుగ్రహిస్తుంది'
      ]
    },
    rituals: {
      en: [
        'Elaborate mandap decoration with flowers and lights',
        'Divine couple invocation with sacred mantras',
        'Traditional wedding rituals including saptapadi',
        'Mangalsutra ceremony with divine blessings',
        'Exchange of garlands and wedding vows',
        'Divine feast offering and prasadam distribution'
      ],
      te: [
        'పూలు మరియు దీపాలతో విస్తృత మండప అలంకరణ',
        'పవిత్ర మంత్రాలతో దివ్య దంపతుల ఆవాహన',
        'సప్తపది సహా సాంప్రదాయ వివాహ కర్మలు',
        'దైవిక ఆశీర్వాదాలతో మంగళసూత్ర వేడుక',
        'మాలల మార్పిడి మరియు వివాహ ప్రతిజ్ఞలు',
        'దివ్య భోజన సమర్పణ మరియు ప్రసాద పంపిణీ'
      ]
    },
    requirements: {
      en: [
        'Elaborate mandap setup with traditional decorations',
        'Fresh wedding garlands and flower arrangements',
        'Sacred ornaments and jewelry for the deities',
        'Traditional feast items and sweets',
        'Silk clothes and wedding attire for deities',
        'Professional photography setup for memories'
      ],
      te: [
        'సాంప్రదాయ అలంకరణలతో విస్తృత మండప ఏర్పాటు',
        'తాజా వివాహ మాలలు మరియు పూల అమరికలు',
        'దేవతలకు పవిత్ర ఆభరణాలు మరియు నగలు',
        'సాంప్రదాయ భోజన వస్తువులు మరియు తీపిలు',
        'దేవతలకు పట్టు వస్త్రాలు మరియు వివాహ దుస్తులు',
        'జ్ఞాపకాల కోసం వృత్తిపరమైన ఫోటోగ్రఫీ ఏర్పాటు'
      ]
    },
    significance: {
      en: [
        'Represents the divine union of soul and supreme consciousness',
        'Symbolizes the perfect balance of material and spiritual life',
        'Demonstrates the power of divine love and devotion',
        'Establishes the importance of commitment in relationships'
      ],
      te: [
        'ఆత్మ మరియు పరమ చైతన్యం యొక్క దివ్య మిలనాన్ని సూచిస్తుంది',
        'భౌతిక మరియు ఆధ్యాత్మిక జీవితం యొక్క పరిపూర్ణ సమతుల్యతను సూచిస్తుంది',
        'దైవిక ప్రేమ మరియు భక్తి శక్తిని ప్రదర్శిస్తుంది',
        'సంబంధాలలో నిబద్ధత యొక్క ప్రాముఖ్యతను స్థాపిస్తుంది'
      ]
    },
    occasions: {
      en: [
        'Wedding anniversaries',
        'Pre-wedding ceremonies',
        'Seeking marital harmony',
        'Valentine\'s Day celebrations',
        'Family unity events',
        'Relationship blessings'
      ],
      te: [
        'వివాహ వార్షికోత్సవాలు',
        'వివాహ పూర్వ వేడుకలు',
        'వైవాహిక సామరస్యాన్ని కోరుకోవడం',
        'వాలెంటైన్స్ డే వేడుకలు',
        'కుటుంబ ఐక్యత సంఘటనలు',
        'సంబంధాల ఆశీర్వాదాలు'
      ]
    },
    image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&h=600&fit=crop'
  },
  {
    id: 'barasala',
    nameEn: 'Barasala (Naming Ceremony)',
    nameTe: 'బారసాల',
    icon: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    shortDescriptionEn: 'A sacred ceremony celebrating the naming of a newborn child with divine blessings.',
    shortDescriptionTe: 'నవజాత శిశువుకు దైవిక ఆశీర్వాదాలతో నామకరణం చేసే పవిత్ర వేడుక.',
    detailedDescriptionEn: 'Barasala, also known as Namakaran, is one of the most important samskaras (rites of passage) in Hindu tradition. This sacred ceremony marks the formal naming of a newborn child and their introduction to the family lineage and community. Performed typically on the 12th day after birth, this ritual involves the selection of an auspicious name based on the child\'s birth star, time, and astrological calculations. The ceremony includes prayers for the child\'s health, prosperity, and spiritual growth throughout their lifetime.',
    detailedDescriptionTe: 'బారసాల లేదా నామకరణం హిందూ సంప్రదాయంలో అత్యంత ముఖ్యమైన సంస్కారాలలో (జీవిత మార్గ కర్మలలో) ఒకటి. ఈ పవిత్ర వేడుక నవజాత శిశువుకు అధికారిక నామకరణం మరియు కుటుంబ వంశం మరియు సమాజంలో వారి పరిచయాన్ని సూచిస్తుంది.',
    duration: '1-2 hours',
    benefits: {
      en: [
        'Blesses the child with a long, healthy, and prosperous life',
        'Invokes divine protection and guidance for the child',
        'Strengthens family bonds and community connections',
        'Ensures spiritual growth and righteous path in life',
        'Provides astrological harmony and positive influences',
        'Creates lasting memories for family celebrations'
      ],
      te: [
        'శిశువుకు దీర్ఘ, ఆరోగ్యకరమైన మరియు సంపన్న జీవితాన్ని అనుగ్రహిస్తుంది',
        'పిల్లలకు దైవిక రక్షణ మరియు మార్గదర్శకత్వాన్ని కోరుతుంది',
        'కుటుంబ బంధాలు మరియు సమాజ సంబంధాలను బలపరుస్తుంది',
        'ఆధ్యాత్మిక వృద్ధి మరియు జీవితంలో న్యాయమైన మార్గాన్ని నిర్ధారిస్తుంది',
        'జ్యోతిషపరమైన సామరస్యం మరియు సానుకూల ప్రభావాలను అందిస్తుంది',
        'కుటుంబ వేడుకలకు శాశ్వత జ్ఞాపకాలను సృష్టిస్తుంది'
      ]
    },
    rituals: {
      en: [
        'Ganesh Puja for removing obstacles and ensuring blessings',
        'Name selection ceremony based on astrological calculations',
        'Sacred thread blessing and protection rituals',
        'Family elder blessings and community introduction',
        'Horoscope preparation and future predictions',
        'Celebratory feast and gift distribution'
      ],
      te: [
        'అడ్డంకుల తొలగింపు మరియు ఆశీర్వాదాలను నిర్ధారించడానికి గణేశ పూజ',
        'జ్యోతిష గణనల ఆధారంగా నామ ఎంపిక వేడుక',
        'పవిత్ర దార ఆశీర్వాదం మరియు రక్షణ కర్మలు',
        'కుటుంబ పెద్దల ఆశీర్వాదాలు మరియు సమాజ పరిచయం',
        'జాతకం తయారీ మరియు భవిష్యత్ అంచనలు',
        'వేడుక భోజనం మరియు బహుమతుల పంపిణీ'
      ]
    },
    requirements: {
      en: [
        'Sacred thread and protective amulets',
        'Fresh flowers, fruits, and traditional sweets',
        'Turmeric, kumkum, and sandalwood for ceremonies',
        'Silver or gold jewelry for the baby',
        'Astrological charts and calculation materials',
        'Photography arrangements for family memories'
      ],
      te: [
        'పవిత్ర దారం మరియు రక్షణ తవీజులు',
        'తాజా పూలు, పండ్లు మరియు సాంప్రదాయ తీపిలు',
        'వేడుకల కోసం పసుపు, కుంకుమ మరియు చందనం',
        'బిడ్డకు వెండి లేదా బంగారు నగలు',
        'జ్యోతిష చార్టులు మరియు గణన సామగ్రి',
        'కుటుంబ జ్ఞాపకాలను పట్టుకోవడానికి ఫోటోగ్రఫీ ఏర్పాట్లు'
      ]
    },
    significance: {
      en: [
        'Establishes the child\'s identity in the cosmic order',
        'Creates a spiritual foundation for life\'s journey',
        'Connects the child to ancestral lineage and traditions',
        'Invokes divine blessings for protection and growth'
      ],
      te: [
        'విశ్వ క్రమంలో పిల్లల గుర్తింపును స్థాపిస్తుంది',
        'జీవిత ప్రయాణానికి ఆధ్యాత్మిక పునాదిని సృష్టిస్తుంది',
        'పిల్లలను పూర్వీకుల వంశం మరియు సంప్రదాయాలకు కలుపుతుంది',
        'రక్షణ మరియు వృద్ధి కోసం దైవిక ఆశీర్వాదాలను కోరుతుంది'
      ]
    },
    occasions: {
      en: [
        '12th day after birth (traditional)',
        'Auspicious days according to lunar calendar',
        'Family gathering celebrations',
        'Community blessing events',
        'Religious festival days',
        'Customized family preferences'
      ],
      te: [
        'జన్మ తర్వాత 12వ రోజు (సాంప్రదాయ)',
        'చాంద్ర క్యాలెండర్ ప్రకారం శుభ రోజులు',
        'కుటుంబ కూటమి వేడుకలు',
        'సమాజ ఆశీర్వాద సంఘటనలు',
        'మత పండుగ రోజులు',
        'అనుకూలీకరించిన కుటుంబ ప్రాధాన్యతలు'
      ]
    },
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop'
  },
  {
    id: 'gruhapravesam',
    nameEn: 'Gruhapravesam',
    nameTe: 'గృహప్రవేశం',
    icon: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=400&fit=crop',
    shortDescriptionEn: 'A traditional housewarming ceremony for blessing new homes with prosperity.',
    shortDescriptionTe: 'కొత్త ఇళ్లను సంపదతో ఆశీర్వదించే సాంప్రదాయ గృహప్రవేశ వేడుక.',
    detailedDescriptionEn: 'Gruhapravesam is a comprehensive Hindu ceremony performed when entering a new home for the first time. This ancient ritual purifies the dwelling, removes any negative energies, and invites positive vibrations and divine blessings into the new residence. The ceremony includes Vastu Shanti to harmonize the home with natural elements and cosmic forces, ensuring that the dwelling becomes a sanctuary of peace, prosperity, and happiness for all inhabitants.',
    detailedDescriptionTe: 'గృహప్రవేశం కొత్త ఇంటిలోకి మొదటిసారి ప్రవేశించేటప్పుడు నిర్వహించే సమగ్ర హిందూ వేడుక. ఈ పురాతన కర్మ నివాసాన్ని శుద్ధి చేస్తుంది, ఏవైనా ప్రతికూల శక్తులను తొలగిస్తుంది మరియు కొత్త నివాసంలోకి సానుకూల వైబ్రేషన్లు మరియు దైవిక ఆశీర్వాదాలను ఆహ్వానిస్తుంది.',
    duration: '2-3 hours',
    benefits: {
      en: [
        'Purifies the new home from negative energies',
        'Brings prosperity, abundance, and financial growth',
        'Removes obstacles and ensures smooth transition',
        'Ensures family well-being and harmonious living',
        'Creates positive energy flow throughout the house',
        'Establishes divine protection for all residents'
      ],
      te: [
        'కొత్త ఇంటిని ప్రతికూల శక్తుల నుండి శుద్ధి చేస్తుంది',
        'సంపద, అభివృద్ధి మరియు ఆర్థిక వృద్ధిని తెస్తుంది',
        'అడ్డంకులను తొలగిస్తుంది మరియు సాఫీ మార్పిడిని నిర్ధారిస్తుంది',
        'కుటుంబ క్షేమం మరియు సామరస్య జీవనాన్ని నిర్ధారిస్తుంది',
        'ఇల్లు అంతటా సానుకూల శక్తి ప్రవాహాన్ని సృష్టిస్తుంది',
        'అన్ని నివాసులకు దైవిక రక్షణను స్థాపిస్తుంది'
      ]
    },
    rituals: {
      en: [
        'Ganesh Puja for removing obstacles and ensuring success',
        'Vastu Shanti ceremony for harmonizing with natural forces',
        'Kalasha Sthapana with sacred water and divine invocation',
        'Room-by-room purification with holy water and mantras',
        'Aarti and prayers for prosperity and protection',
        'Community feast and housewarming celebration'
      ],
      te: [
        'అడ్డంకుల తొలగింపు మరియు విజయాన్ని నిర్ధారించడానికి గణేశ పూజ',
        'సహజ శక్తులతో సామరస్యం కోసం వాస్తు శాంతి వేడుక',
        'పవిత్ర నీరు మరియు దైవిక ఆవాహనతో కలశ స్థాపన',
        'పవిత్ర నీరు మరియు మంత్రాలతో గది వారీగా శుద్ధీకరణ',
        'సంపద మరియు రక్షణ కోసం ఆరతి మరియు ప్రార్థనలు',
        'సమాజ భోజనం మరియు గృహప్రవేశ వేడుక'
      ]
    },
    requirements: {
      en: [
        'Kalasha with coconut, mango leaves, and sacred water',
        'Fresh flowers, rangoli materials, and decorative items',
        'Rice, turmeric, and traditional puja items',
        'Oil lamps, incense, and camphor for ceremonies',
        'New broom and cleaning materials for purification',
        'Feast preparations for family and guests'
      ],
      te: [
        'కొబ్బరి, మామిడి ఆకులు మరియు పవిత్ర నీటితో కలశ',
        'తాజా పూలు, రంగోలి సామగ్రి మరియు అలంకార వస్తువులు',
        'అన్నం, పసుపు మరియు సాంప్రదాయ పూజా వస్తువులు',
        'వేడుకల కోసం నూనె దీపాలు, అగర్బత్తి మరియు కర్పూరం',
        'శుద్ధీకరణ కోసం కొత్త చీపురు మరియు శుభ్రపరిచే సామగ్రి',
        'కుటుంబం మరియు అతిథుల కోసం భోజన సిద్ధతలు'
      ]
    },
    significance: {
      en: [
        'Transforms house into a sacred home filled with divine presence',
        'Establishes harmony between residents and their environment',
        'Creates a foundation for prosperity and spiritual growth',
        'Ensures protection from natural and supernatural influences'
      ],
      te: [
        'ఇంటిని దైవిక ఉపస్థితితో నిండిన పవిత్ర ఇంటిగా మారుస్తుంది',
        'నివాసులు మరియు వారి పరిసరాల మధ్య సామరస్యాన్ని స్థాపిస్తుంది',
        'సంపద మరియు ఆధ్యాత్మిక వృద్ధికి పునాదిని సృష్టిస్తుంది',
        'సహజ మరియు అతీంద్రియ ప్రభావాల నుండి రక్షణను నిర్ధారిస్తుంది'
      ]
    },
    occasions: {
      en: [
        'Moving into newly constructed homes',
        'Purchasing and occupying new residences',
        'Major home renovations completion',
        'Changing primary residence locations',
        'Business premises inauguration',
        'Rental home blessings'
      ],
      te: [
        'కొత్తగా నిర్మించిన ఇళ్లలోకి మారడం',
        'కొత్త నివాసాలను కొనుగోలు చేసి ఆక్రమించడం',
        'ప్రధాన ఇల్లు మరమ్మతుల పూర్తి',
        'ప్రాథమిక నివాస స్థాన మార్పులు',
        'వ్యాపార స్థలాల ప్రారంభోత్సవం',
        'అద్దె ఇల్లు ఆశీర్వాదాలు'
      ]
    },
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop'
  },
  {
    id: 'wedding',
    nameEn: 'Vivaham (Wedding)',
    nameTe: 'వివాహం',
    icon: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
    shortDescriptionEn: 'Complete traditional Telugu wedding ceremonies with authentic rituals.',
    shortDescriptionTe: 'ప్రామాణిక కర్మలతో పూర్తి సాంప్రదాయ తెలుగు వివాహ వేడుకలు.',
    detailedDescriptionEn: 'Telugu wedding ceremonies are among the most elaborate and spiritually significant rituals in Hindu tradition. These sacred ceremonies unite two souls in holy matrimony through a series of time-honored rituals that span multiple days. Each ritual has deep spiritual meaning and cosmic significance, from the initial Ganesh Puja to the final Gruhapravesh. The ceremonies include Pellikoduku, Pellikuthuru, Kashi Yatra, Jeerakala Bellam, Kanyadaan, Saptapadi, and many other beautiful traditions that create lasting bonds not just between the couple but between their families.',
    detailedDescriptionTe: 'తెలుగు వివాహ వేడుకలు హిందూ సంప్రదాయంలో అత్యంత విస్తృతమైన మరియు ఆధ్యాత్మికంగా ముఖ్యమైన కర్మకాండలలో ఒకవి. ఈ పవిత్ర వేడుకలు అనేక రోజుల పాటు విస్తరించిన సమయం-గౌరవనీయ కర్మల శ్రేణి ద్వారా రెండు ఆత్మలను పవిత్ర వివాహ బంధంలో కలుపుతాయి.',
    duration: '4-6 hours',
    benefits: {
      en: [
        'Sanctifies the marriage bond with divine blessings',
        'Invokes lifelong protection and guidance for the couple',
        'Ensures marital happiness, understanding, and compatibility',
        'Brings prosperity, abundance, and financial stability',
        'Creates strong family bonds and community relationships',
        'Establishes spiritual foundation for future generations'
      ],
      te: [
        'దైవిక ఆశీర్వాదాలతో వివాహ బంధాన్ని పవిత్రం చేస్తుంది',
        'దంపతులకు జీవితకాల రక్షణ మరియు మార్గదర్శకత్వాన్ని కోరుతుంది',
        'వైవాహిక ఆనందం, అవగాహన మరియు అనుకూలతను నిర్ధారిస్తుంది',
        'సంపద, అభివృద్ధి మరియు ఆర్థిక స్థిరత్వాన్ని తెస్తుంది',
        'బలమైన కుటుంబ బంధాలు మరియు సమాజ సంబంధాలను సృష్టిస్తుంది',
        'భవిష్యత్ తరాలకు ఆధ్యాత్మిక పునాదిని స్థాపిస్తుంది'
      ]
    },
    rituals: {
      en: [
        'Ganesh Puja for removing obstacles and blessing the union',
        'Kanyadaan - the sacred giving away of the bride',
        'Saptapadi - seven sacred steps around the holy fire',
        'Mangalsutra ceremony binding the couple spiritually',
        'Exchange of garlands and wedding vows',
        'Final blessings and community celebrations'
      ],
      te: [
        'అడ్డంకుల తొలగింపు మరియు మిలనాన్ని ఆశీర్వదించడానికి గణేశ పూజ',
        'కన్యాదానం - వధువు యొక్క పవిత్ర అప్పగింత',
        'సప్తపది - పవిత్రమైన అగ్ని చుట్టూ ఏడు పవిత్ర అడుగులు',
        'దంపతులను ఆధ్యాత్మికంగా బంధించే మంగళసూత్ర వేడుక',
        'మాలల మార్పిడి మరియు వివాహ ప్రతిజ్ఞలు',
        'చివరి ఆశీర్వాదాలు మరియు సమాజ వేడుకలు'
      ]
    },
    requirements: {
      en: [
        'Sacred fire setup with proper ventilation and safety',
        'Mangalsutra, wedding rings, and ceremonial jewelry',
        'Fresh wedding garlands and flower decorations',
        'Traditional rice, coconut, and ceremonial items',
        'Professional photography and videography arrangements',
        'Elaborate feast preparations for all guests'
      ],
      te: [
        'సరైన వెంటిలేషన్ మరియు భద్రతతో పవిత్రమైన అగ్ని ఏర్పాటు',
        'మంగళసూత్రం, వివాహ ఉంగరాలు మరియు వేడుక నగలు',
        'తాజా వివాహ మాలలు మరియు పూల అలంకరణలు',
        'సాంప్రదాయ అన్నం, కొబ్బరి మరియు వేడుక వస్తువులు',
        'వృత్తిపరమైన ఫోటోగ్రఫీ మరియు వీడియోగ్రఫీ ఏర్పాట్లు',
        'అన్ని అతిథుల కోసం విస్తృత భోజన సిద్ధతలు'
      ]
    },
    significance: {
      en: [
        'Unites two souls in sacred matrimony for seven lifetimes',
        'Creates karmic bonds that transcend physical existence',
        'Establishes dharmic foundation for family and society',
        'Invokes cosmic forces to bless the new beginning'
      ],
      te: [
        'ఏడు జన్మలకు పవిత్ర వైవాహిక బంధంలో రెండు ఆత్మలను కలుపుతుంది',
        'భౌతిక ఉనికిని అధిగమించే కర్మ బంధాలను సృష్టిస్తుంది',
        'కుటుంబం మరియు సమాజానికి ధర్మిక పునాదిని స్థాపిస్తుంది',
        'కొత్త ప్రారంభాన్ని ఆశీర్వదించడానికి విశ్వ శక్తులను ఆహ్వానిస్తుంది'
      ]
    },
    occasions: {
      en: [
        'Traditional wedding ceremonies',
        'Destination wedding celebrations',
        'Anniversary recreations',
        'Renewal of wedding vows',
        'Community marriage events',
        'Cultural celebration weddings'
      ],
      te: [
        'సాంప్రదాయ వివాహ వేడుకలు',
        'డెస్టినేషన్ వెడ్డింగ్ వేడుకలు',
        'వార్షికోత్సవ పునఃసృష్టులు',
        'వివాహ ప్రతిజ్ఞల పునరుద్ధరణ',
        'సమాజ వివాహ సంఘటనలు',
        'సాంస్కృతిక వేడుక వివాహాలు'
      ]
    },
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop'
  },
  {
    id: 'annaprasana',
    nameEn: 'Annaprasana',
    nameTe: 'అన్నప్రాసన',
    icon: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop',
    shortDescriptionEn: "Sacred ceremony marking baby's first solid food with divine blessings.",
    shortDescriptionTe: 'దైవిక ఆశీర్వాదాలతో శిశువుకి మొదటి ఘన ఆహారాన్ని సూచించే పవిత్ర వేడుక.',
    detailedDescriptionEn: 'Annaprasana is a joyous and significant samskara that marks a baby\'s transition from liquid to solid food. This sacred ceremony is typically performed when the child is 6-8 months old and signifies the beginning of a new phase in the child\'s physical and spiritual development. The ritual involves offering the first morsel of food to various deities, seeking their blessings for the child\'s healthy growth, strong digestion, and overall well-being. The ceremony also includes prayers for the child\'s future prosperity, wisdom, and righteous character.',
    detailedDescriptionTe: 'అన్నప్రాసన అనేది శిశువు ద్రవ ఆహారం నుండి ఘన ఆహారానికి మారడాన్ని సూచించే ఆనందకరమైన మరియు ముఖ్యమైన సంస్కార. ఈ పవిత్ర వేడుక సాధారణంగా పిల్లవాడు 6-8 నెలల వయస్సులో నిర్వహించబడుతుంది మరియు పిల్లల భౌతిక మరియు ఆధ్యాత్మిక అభివృద్ధిలో కొత్త దశ ప్రారంభాన్ని సూచిస్తుంది.',
    duration: '1-2 hours',
    benefits: {
      en: [
        'Ensures healthy growth and strong digestive system',
        'Blesses the child with good appetite and nutrition absorption',
        'Invokes divine protection for overall health and immunity',
        'Celebrates important developmental milestone',
        'Strengthens family bonds through joyous celebration',
        'Creates positive associations with food and eating habits'
      ],
      te: [
        'ఆరోగ్యకరమైన వృద్ధి మరియు బలమైన జీర్ణ వ్యవస్థను నిర్ధారిస్తుంది',
        'మంచి ఆకలి మరియు పోషకాహార శోషణతో పిల్లలను ఆశీర్వదిస్తుంది',
        'మొత్తం ఆరోగ్యం మరియు రోగనిరోధక శక్తి కోసం దైవిక రక్షణను కోరుతుంది',
        'ముఖ్యమైన అభివృద్ధి మైలురాయిని జరుపుకుంటుంది',
        'ఆనందకరమైన వేడుక ద్వారా కుటుంబ బంధాలను బలపరుస్తుంది',
        'ఆహారం మరియు తినే అలవాట్లతో సానుకూల అనుబంధాలను సృష్టిస్తుంది'
      ]
    },
    rituals: {
      en: [
        'Ganesh Puja for removing obstacles to healthy growth',
        'Food blessing ceremony with sacred mantras',
        'First feeding ritual with silver spoon and blessed food',
        'Family elder blessings and good wishes',
        'Distribution of sweets and celebratory feast',
        'Photography session to capture precious moments'
      ],
      te: [
        'ఆరోగ్యకరమైన వృద్ధికి అడ్డంకుల తొలగింపు కోసం గణేశ పూజ',
        'పవిత్ర మంత్రాలతో ఆహార ఆశీర్వాద వేడుక',
        'వెండి చెంచా మరియు ఆశీర్వదించబడిన ఆహారంతో మొదటి దాణా కర్మ',
        'కుటుంబ పెద్దల ఆశీర్వాదాలు మరియు శుభాకాంక్షలు',
        'తీపిల పంపిణీ మరియు వేడుక భోజనం',
        'విలువైన క్షణాలను పట్టుకోవడానికి ఫోటోగ్రఫీ సెషన్'
      ]
    },
    requirements: {
      en: [
        'Cooked rice with ghee and traditional preparations',
        'Silver or gold spoon for the first feeding',
        'Fresh fruits, sweets, and baby-friendly foods',
        'Flowers for decoration and offering to deities',
        'Traditional clothing for the baby and family',
        'Camera setup for capturing milestone moments'
      ],
      te: [
        'నెయ్యి మరియు సాంప్రదాయ తయారీలతో వండిన అన్నం',
        'మొదటి దాణా కోసం వెండి లేదా బంగారు చెంచా',
        'తాజా పండ్లు, తీపిలు మరియు బిడ్డకు అనుకూలమైన ఆహారాలు',
        'అలంకరణ మరియు దేవతలకు సమర్పణ కోసం పూలు',
        'బిడ్డ మరియు కుటుంబానికి సాంప్రదాయ దుస్తులు',
        'మైలురాయి క్షణాలను పట్టుకోవడానికి కెమెరా ఏర్పాటు'
      ]
    },
    significance: {
      en: [
        'Marks the beginning of independent nutrition and growth',
        'Invokes divine blessings for healthy physical development',
        'Establishes positive relationship with food and nourishment',
        'Celebrates the child\'s progression in life\'s journey'
      ],
      te: [
        'స్వతంత్ర పోషకాహారం మరియు వృద్ధి ప్రారంభాన్ని సూచిస్తుంది',
        'ఆరోగ్యకరమైన భౌతిక అభివృద్ధి కోసం దైవిక ఆశీర్వాదాలను కోరుతుంది',
        'ఆహారం మరియు పోషకాహారంతో సానుకూల సంబంధాన్ని స్థాపిస్తుంది',
        'జీవిత ప్రయాణంలో పిల్లల పురోగతిని జరుపుకుంటుంది'
      ]
    },
    occasions: {
      en: [
        '6-8 months after birth (traditional timing)',
        'Auspicious days according to family traditions',
        'Weekend family gatherings',
        'Combined celebrations with other milestones',
        'Customized timing based on child\'s readiness',
        'Special family anniversary dates'
      ],
      te: [
        'జన్మ తర్వాత 6-8 నెలలు (సాంప్రదాయ సమయం)',
        'కుటుంబ సంప్రదాయాల ప్రకారం శుభ రోజులు',
        'వారాంతపు కుటుంబ కూటములు',
        'ఇతర మైలురాళ్లతో కలిపి వేడుకలు',
        'పిల్లల సంసిద్ధత ఆధారంగా అనుకూలీకరించిన సమయం',
        'ప్రత్యేక కుటుంబ వార్షికోత్సవ తేదీలు'
      ]
    },
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop'
  },
  {
    id: 'upanayanam',
    nameEn: 'Upanayanam',
    nameTe: 'ఉపనయనం',
    icon: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    shortDescriptionEn: 'Sacred thread ceremony initiating young boys into spiritual learning.',
    shortDescriptionTe: 'బాలురను ఆధ్యాత్మిక అధ్యయనంలోకి దీక్షపరిచే పవిత్రమైన యజ్ఞోపవీతం వేడుక.',
    detailedDescriptionEn: 'Upanayanam is one of the most sacred and transformative samskaras in Hindu tradition, marking a young boy\'s spiritual rebirth and initiation into the ancient tradition of Vedic learning. This ceremony, typically performed between ages 7-16, transforms the child from a simple being into a "dwija" (twice-born), ready to embark on the path of knowledge, righteousness, and spiritual growth. The ritual includes the sacred thread ceremony, Gayatri Mantra initiation, and the formal beginning of Vedic education under a qualified guru.',
    detailedDescriptionTe: 'ఉపనయనం హిందూ సంప్రదాయంలో అత్యంత పవిత్రమైన మరియు రూపాంతరమైన సంస్కారాలలో ఒకటి, ఇది యువకుడి ఆధ్యాత్మిక పునర్జన్మ మరియు వేద అధ్యయనం యొక్క పురాతన సంప్రదాయంలోకి దీక్షను సూచిస్తుంది. సాధారణంగా 7-16 వయస్సుల మధ్య నిర్వహించబడే ఈ వేడుక, పిల్లవాడిని సాధారణ జీవి నుండి "ద్విజ" (రెండుసార్లు జన్మించినవాడు)గా మారుస్తుంది.',
    duration: '3-4 hours',
    benefits: {
      en: [
        'Initiates the spiritual journey and sacred learning path',
        'Purifies the mind and prepares for higher knowledge',
        'Grants divine protection and spiritual guidance',
        'Marks formal entry into studenthood (Brahmacharya ashrama)',
        'Connects the child to ancient Vedic wisdom traditions',
        'Establishes lifelong spiritual discipline and values'
      ],
      te: [
        'ఆధ్యాత్మిక ప్రయాణం మరియు పవిత్ర అధ్యయన మార్గాన్ని ప్రారంభిస్తుంది',
        'మనస్సును శుద్ధి చేసి ఉన్నత జ్ఞానానికి సిద్ధం చేస్తుంది',
        'దైవిక రక్షణ మరియు ఆధ్యాత్మిక మార్గదర్శకత్వాన్ని అనుగ్రహిస్తుంది',
        'విద్యార్థిత్వంలోకి (బ్రహ్మచర్య ఆశ్రమం) అధికారిక ప్రవేశాన్ని సూచిస్తుంది',
        'పురాతన వేద జ్ఞాన సంప్రదాయాలకు పిల్లలను కలుపుతుంది',
        'జీవితకాల ఆధ్యాత్మిక క్రమశిక్షణ మరియు విలువలను స్థాపిస్తుంది'
      ]
    },
    rituals: {
      en: [
        'Sacred thread ceremony with proper Vedic procedures',
        'Gayatri Mantra initiation and first recitation',
        'Symbolic begging for alms (Bhiksha) from family',
        'Vedic fire ceremony and oblations to deities',
        'Guru dakshina and respect to teachers',
        'Community blessings and celebratory feast'
      ],
      te: [
        'సరైన వేద విధానాలతో పవిత్ర దార వేడుక',
        'గాయత్రి మంత్ర దీక్ష మరియు మొదటి పఠనం',
        'కుటుంబం నుండి సంకేతాత్మక భిక్ష (భిక్ష)',
        'వేద అగ్ని వేడుక మరియు ఆహుతులు దేవతలకు',
        'గురు దక్షిణ మరియు ఉపాధ్యాయులకు గౌరవం',
        'సమాజ ఆశీర్వాదాలు మరియు వేడుక భోజనం'
      ]
    },
    requirements: {
      en: [
        'Sacred thread (Yajnopavita) made of cotton or silk',
        'Turmeric, sandalwood paste, and traditional decorations',
        'Sacred fire setup with proper ventilation and safety',
        'Vedic materials including mantras and ceremonial items',
        'Traditional dhoti and upper cloth for the initiate',
        'Guru dakshina and gifts for conducting priest'
      ],
      te: [
        'పత్తి లేదా పట్టుతో తయారు చేసిన పవిత్ర దారం (యజ్ఞోపవీతం)',
        'పసుపు, చందనం పేస్ట్ మరియు సాంప్రదాయ అలంకరణలు',
        'సరైన వెంటిలేషన్ మరియు భద్రతతో పవిత్రమైన అగ్ని ఏర్పాటు',
        'మంత్రాలు మరియు వేడుక వస్తువులతో సహా వేద సామగ్రి',
        'దీక్షితుడికి సాంప్రదాయ ధోవతి మరియు మేలుబట్ట',
        'నిర్వహణ పురోహితుడికి గురు దక్షిణ మరియు బహుమతులు'
      ]
    },
    significance: {
      en: [
        'Represents spiritual rebirth and second birth into knowledge',
        'Establishes connection to cosmic consciousness and divine wisdom',
        'Marks transition from childhood innocence to responsible learning',
        'Creates lifelong commitment to truth, righteousness, and service'
      ],
      te: [
        'ఆధ్యాత్మిక పునర్జన్మ మరియు జ్ఞానంలోకి రెండవ జన్మను సూచిస్తుంది',
        'విశ్వ చైతన్యం మరియు దైవిక జ్ఞానంతో సంబంధాన్ని స్థాపిస్తుంది',
        'బాల్య అమాయకత్వం నుండి బాధ్యతాయుత అధ్యయనానికి మార్పును సూచిస్తుంది',
        'సత్యం, న్యాయం మరియు సేవకు జీవితకాల నిబద్ధతను సృష్టిస్తుంది'
      ]
    },
    occasions: {
      en: [
        'Traditional age of 7-16 years for boys',
        'Auspicious days according to lunar calendar',
        'Family tradition and ancestral customs',
        'Educational milestone celebrations',
        'Community religious gatherings',
        'Special family occasions and festivals'
      ],
      te: [
        'బాలురకు సాంప్రదాయ వయస్సు 7-16 సంవత్సరాలు',
        'చాంద్ర క్యాలెండర్ ప్రకారం శుభ రోజులు',
        'కుటుంబ సంప్రదాయాలు మరియు పూర్వీకుల ఆచారాలు',
        'విద్యా మైలురాయి వేడుకలు',
        'సమాజ మత కూటములు',
        'ప్రత్యేక కుటుంబ సందర్భాలు మరియు పండుగలు'
      ]
    },
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  },
  {
    id: 'samvatsarika-pitru',
    nameEn: 'Samvatsarika Pitru Puja',
    nameTe: 'సంవత్సరిక పితృ పూజ',
    icon: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    shortDescriptionEn: 'Annual ancestral worship ceremony for peace and blessings of departed souls.',
    shortDescriptionTe: 'మరణించిన ఆత్మల శాంతి మరియు ఆశీర్వాదాల కోసం వార్షిక పూర్వీకుల ఆరాధన వేడుక.',
    detailedDescriptionEn: 'Samvatsarika Pitru Puja is a comprehensive annual ceremony dedicated to honoring and seeking blessings from departed ancestors. This sacred ritual is performed to express gratitude to our forefathers, seek their forgiveness for any shortcomings, and ensure their spiritual well-being in the afterlife. The ceremony includes elaborate offerings, sacred recitations, and rituals that help the departed souls attain higher spiritual realms while providing protection and blessings to the living family members. It is believed that performing this puja regularly brings peace to ancestral souls and removes any family-related obstacles or doshas.',
    detailedDescriptionTe: 'సంవత్సరిక పితృ పూజ అనేది మరణించిన పూర్వీకులను గౌరవించడానికి మరియు వారి ఆశీర్వాదాలను కోరడానికి అంకితమైన సమగ్ర వార్షిక వేడుక. ఈ పవిత్రమైన కర్మ మన పూర్వీకులకు కృతజ్ఞతను వ్యక్తం చేయడానికి, ఏవైనా లోపాలకు వారి క్షమాపణను కోరడానికి మరియు మరణానంతర జీవితంలో వారి ఆధ్యాత్మిక క్షేమాన్ని నిర్ధారించడానికి నిర్వహించబడుతుంది.',
    duration: '2-3 hours',
    benefits: {
      en: [
        'Ensures peace and spiritual elevation for departed ancestors',
        'Removes ancestral curses (Pitru doshas) and negative karma',
        'Brings family prosperity, harmony, and overall well-being',
        'Provides spiritual protection and divine blessings',
        'Helps in resolving chronic family problems and obstacles',
        'Creates positive karmic balance for future generations'
      ],
      te: [
        'మరణించిన పూర్వీకులకు శాంతి మరియు ఆధ్యాత్మిక ఉన్నతిని నిర్ధారిస్తుంది',
        'పితృ దోషాలు (పితృ దోషాలు) మరియు ప్రతికూల కర్మను తొలగిస్తుంది',
        'కుటుంబ సంపద, సామరస్యం మరియు మొత్తం క్షేమాన్ని తెస్తుంది',
        'ఆధ్యాత్మిక రక్షణ మరియు దైవిక ఆశీర్వాదాలను అందిస్తుంది',
        'దీర్ఘకాలిక కుటుంబ సమస్యలు మరియు అడ్డంకుల పరిష్కారంలో సహాయపడుతుంది',
        'భవిష్యత్ తరాలకు సానుకూల కర్మ సమతుల్యతను సృష్టిస్తుంది'
      ]
    },
    rituals: {
      en: [
        'Elaborate Pitru invocation with sacred genealogy recitation',
        'Tarpan ceremony with holy water, sesame, and rice offerings',
        'Pinda daan (rice ball offerings) for ancestral nourishment',
        'Brahmin feeding and donation for merit transfer',
        'Sacred fire ceremonies and ancestral prayers',
        'Final blessings and family prosperity prayers'
      ],
      te: [
        'పవిత్ర వంశావళి పఠనంతో విస్తృత పితృ ఆవాహన',
        'పవిత్ర నీరు, నువ్వులు మరియు అన్న సమర్పణలతో తర్పణ వేడుక',
        'పూర్వీకుల పోషణ కోసం పిండ దానం (అన్న గోళా సమర్పణలు)',
        'పుణ్య స్థానాంతరణ కోసం బ్రాహ్మణ భోజనం మరియు దానం',
        'పవిత్రమైన అగ్ని వేడుకలు మరియు పూర్వీకుల ప్రార్థనలు',
        'చివరి ఆశీర్వాదాలు మరియు కుటుంబ సంపద ప్రార్థనలు'
      ]
    },
    requirements: {
      en: [
        'Black sesame seeds, rice, and sacred water for offerings',
        'Copper or silver vessels for ceremonial purposes',
        'Traditional food items for Pinda preparation',
        'Donations for Brahmin feeding and charity',
        'Fresh flowers, incense, and ceremonial lamps',
        'Family genealogy records for proper invocation'
      ],
      te: [
        'నల్ల నువ్వులు, బియ్యం మరియు పవిత్ర నీరు సమర్పణల కోసం',
        'వేడుక ప్రయోజనాల కోసం రాగి లేదా వెండి పాత్రలు',
        'పిండ తయారీ కోసం సాంప్రదాయ ఆహార పదార్థాలు',
        'బ్రాహ్మణ భోజనం మరియు దాతృత్వం కోసం విరాళాలు',
        'తాజా పూలు, అగర్బత్తి మరియు వేడుక దీపాలు',
        'సరైన ఆవాహన కోసం కుటుంబ వంశావళి రికార్డులు'
      ]
    },
    significance: {
      en: [
        'Maintains spiritual connection with ancestral lineage',
        'Ensures continued blessings and protection from forefathers',
        'Resolves karmic debts and family-related obstacles',
        'Creates harmony between physical and spiritual realms'
      ],
      te: [
        'పూర్వీకుల వంశంతో ఆధ్యాత్మిక సంబంధాన్ని కొనసాగిస్తుంది',
        'పూర్వీకుల నుండి నిరంతర ఆశీర్వాదాలు మరియు రక్షణను నిర్ధారిస్తుంది',
        'కర్మ రుణాలు మరియు కుటుంబ-సంబంధిత అడ్డంకులను పరిష్కరిస్తుంది',
        'భౌతిక మరియు ఆధ్యాత్మిక లోకాల మధ్య సామరస్యాన్ని సృష్టిస్తుంది'
      ]
    },
    occasions: {
      en: [
        'Pitru Paksha (Ancestral fortnight) period',
        'Family anniversary and memorial dates',
        'Amavasya (New moon) days throughout the year',
        'Before important family events and celebrations',
        'During Shraddha season and spiritual observances',
        'Times of family difficulties or seeking ancestral guidance'
      ],
      te: [
        'పితృ పక్ష (పూర్వీకుల పక్షం) కాలం',
        'కుటుంబ వార్షికోత్సవం మరియు స్మారక తేదీలు',
        'సంవత్సరం అంతటా అమావాస్య రోజులు',
        'ముఖ్యమైన కుటుంబ సంఘటనలు మరియు వేడుకల ముందు',
        'శ్రాద్ధ సీజన్ మరియు ఆధ్యాత్మిక ఆచరణల సమయంలో',
        'కుటుంబ కష్టాల సమయాలు లేదా పూర్వీకుల మార్గదర్శకత్వం కోరేటప్పుడు'
      ]
    },
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
  },
  {
    id: 'masika-pitru',
    nameEn: 'Masika Pitru Puja',
    nameTe: 'మాసిక పితృ పూజ',
    icon: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
    shortDescriptionEn: 'Monthly ancestral worship ceremony maintaining spiritual connection.',
    shortDescriptionTe: 'ఆధ్యాత్మిక సంబంధాన్ని కొనసాగించే మాసిక పూర్వీకుల ఆరాధన వేడుక.',
    detailedDescriptionEn: 'Masika Pitru Puja is a monthly ritual performed to maintain continuous spiritual connection with departed ancestors and seek their ongoing blessings for family prosperity and protection. This ceremony helps keep the ancestral souls satisfied and peaceful, ensuring they can provide guidance and blessings to their descendants. The monthly observance demonstrates consistent devotion and remembrance, creating a strong spiritual bond that transcends the physical realm and brings stability to family life.',
    detailedDescriptionTe: 'మాసిక పితృ పూజ అనేది మరణించిన పూర్వీకులతో నిరంతర ఆధ్యాత్మిక సంబంధాన్ని కొనసాగించడానికి మరియు కుటుంబ సంపద మరియు రక్షణ కోసం వారి నిరంతర ఆశీర్వాదాలను కోరడానికి నిర్వహించే మాసిక కర్మ. ఈ వేడుక పూర్వీకుల ఆత్మలను సంతృప్తిగా మరియు శాంతియుతంగా ఉంచడంలో సహాయపడుతుంది.',
    duration: '1-2 hours',
    benefits: {
      en: [
        'Provides monthly spiritual cleansing and purification',
        'Maintains continuous ancestral blessings and protection',
        'Ensures family harmony and peaceful relationships',
        'Removes monthly obstacles and negative influences',
        'Strengthens spiritual connection with family lineage',
        'Creates regular positive karmic accumulation'
      ],
      te: [
        'మాసిక ఆధ్యాత్మిక శుద్ధి మరియు పవిత్రీకరణను అందిస్తుంది',
        'నిరంతర పూర్వీకుల ఆశీర్వాదాలు మరియు రక్షణను కొనసాగిస్తుంది',
        'కుటుంబ సామరస్యం మరియు శాంతియుత సంబంధాలను నిర్ధారిస్తుంది',
        'మాసిక అడ్డంకులు మరియు ప్రతికూల ప్రభావాలను తొలగిస్తుంది',
        'కుటుంబ వంశంతో ఆధ్యాత్మిక సంబంధాన్ని బలపరుస్తుంది',
        'నియమిత సానుకూల కర్మ సంచయాన్ని సృష్టిస్తుంది'
      ]
    },
    rituals: {
      en: [
        'New moon day prayers and ancestral invocation',
        'Sacred water offerings with black sesame seeds',
        'Rice ball offerings for ancestral nourishment',
        'Mantra chanting and spiritual meditation',
        'Simple food offerings and incense prayers',
        'Family prayers for continued blessings'
      ],
      te: [
        'అమావాస్య ప్రార్థనలు మరియు పూర్వీకుల ఆవాహన',
        'నల్ల నువ్వులతో పవిత్ర నీరు సమర్పణలు',
        'పూర్వీకుల పోషణ కోసం అన్న పిండం సమర్పణలు',
        'మంత్ర జపం మరియు ఆధ్యాత్మిక ధ్యానం',
        'సాధారణ ఆహార సమర్పణలు మరియు అగర్బత్తి ప్రార్థనలు',
        'నిరంతర ఆశీర్వాదాల కోసం కుటుంబ ప్రార్థనలు'
      ]
    },
    requirements: {
      en: [
        'Rice flour and black sesame for monthly offerings',
        'Copper vessel for water ceremonies and rituals',
        'Simple food items and traditional sweets',
        'Sacred thread and basic puja materials',
        'Incense sticks and oil lamps for prayers',
        'Fresh water for tarpan and ablutions'
      ],
      te: [
        'మాసిక సమర్పణల కోసం బియ్యం పిండి మరియు నల్ల నువ్వులు',
        'నీటి వేడుకలు మరియు కర్మల కోసం రాగి పాత్ర',
        'సాధారణ ఆహార పదార్థాలు మరియు సాంప్రదాయ తీపిలు',
        'పవిత్ర దారం మరియు ప్రాథమిక పూజా సామగ్రి',
        'ప్రార్థనల కోసం అగర్బత్తులు మరియు నూనె దీపాలు',
        'తర్పణ మరియు అభిషేకాల కోసం తాజా నీరు'
      ]
    },
    significance: {
      en: [
        'Demonstrates consistent devotion to ancestral spirits',
        'Maintains regular spiritual discipline and practice',
        'Ensures continuous flow of ancestral blessings',
        'Creates monthly opportunity for spiritual purification'
      ],
      te: [
        'పూర్వీకుల ఆత్మలకు స్థిరమైన భక్తిని ప్రదర్శిస్తుంది',
        'నియమిత ఆధ్యాత్మిక క్రమశిక్షణ మరియు అభ్యాసాన్ని కొనసాగిస్తుంది',
        'పూర్వీకుల ఆశీర్వాదాల నిరంతర ప్రవాహాన్ని నిర్ధారిస్తుంది',
        'ఆధ్యాత్మిక శుద్ధీకరణకు మాసిక అవకాశాన్ని సృష్టిస్తుంది'
      ]
    },
    occasions: {
      en: [
        'Every Amavasya (New moon) day of the month',
        'Ancestral remembrance days and family traditions',
        'Beginning of new ventures or important decisions',
        'Monthly spiritual observance and discipline',
        'Family gathering days and religious occasions',
        'Times seeking ancestral guidance and blessings'
      ],
      te: [
        'నెలలో ప్రతి అమావాస్య రోజు',
        'పూర్వీకుల స్మృతి దినాలు మరియు కుటుంబ సంప్రదాయాలు',
        'కొత్త పనుల ప్రారంభం లేదా ముఖ్యమైన నిర్ణయాలు',
        'మాసిక ఆధ్యాత్మిక ఆచరణ మరియు క్రమశిక్షణ',
        'కుటుంబ కూటమి రోజులు మరియు మత సందర్భాలు',
        'పూర్వీకుల మార్గదర్శకత్వం మరియు ఆశీర్వాదాలను కోరే సమయాలు'
      ]
    },
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop'
  },
  {
    id: 'abdika-pitru',
    nameEn: 'Abdika Pitru Puja',
    nameTe: 'ఆబ్దిక పితృ పూజ',
    icon: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=400&fit=crop',
    shortDescriptionEn: 'Special ancestral worship on death anniversaries.',
    shortDescriptionTe: 'మరణ వార్షికోత్సవంలో ప్రత్యేక పూర్వీకుల ఆరాధన.',
    detailedDescriptionEn: 'Abdika Pitru Puja is performed on the death anniversary of ancestors. This special ceremony is considered one of the most important rituals to ensure the departed soul\'s peace and to receive their blessings for the family\'s well-being. The ceremony includes comprehensive rituals, elaborate offerings, and spiritual practices that help the ancestral soul transcend to higher realms while providing powerful blessings and protection to the living family members. It is believed that performing this puja with devotion and proper procedures grants immense spiritual merit and removes generational karmic burdens.',
    detailedDescriptionTe: 'ఆబ్దిక పితృ పూజ పూర్వీకుల మరణ వార్షికోత్సవంలో నిర్వహించబడుతుంది. మరణించిన ఆత్మ యొక్క శాంతిని నిర్ధారించడానికి ఈ ప్రత్యేక వేడుక అత్యంత ముఖ్యమైన కర్మలలో ఒకటిగా పరిగణించబడుతుంది.',
    duration: '2-3 hours',
    benefits: {
      en: [
        'Grants moksha to ancestors',
        'Removes family doshas',
        'Ensures spiritual progress',
        'Divine protection',
        'Resolves family problems',
        'Creates spiritual merit'
      ],
      te: [
        'పూర్వీకులకు మోక్షాన్ని అనుగ్రహిస్తుంది',
        'కుటుంబ దోషాలను తొలగిస్తుంది',
        'ఆధ్యాత్మిక పురోగతిని నిర్ధారిస్తుంది',
        'దైవిక రక్షణ',
        'కుటుంబ సమస్యలను పరిష్కరిస్తుంది',
        'ఆధ్యాత్మిక పుణ్యాన్ని సృష్టిస్తుంది'
      ]
    },
    rituals: {
      en: [
        'Anniversary rituals with special invocations',
        'Pinda daan for nourishment',
        'Ganga jal offerings',
        'Charity giving',
        'Special prayers for liberation',
        'Final blessings'
      ],
      te: [
        'ప్రత్యేక ఆవాహనలతో వార్షికోత్సవ కర్మలు',
        'పూర్వీకుల పోషణ కోసం పిండ దానం',
        'గంగా జల సమర్పణలు',
        'దాతృత్వం',
        'మోక్షం కోసం ప్రత్యేక ప్రార్థనలు',
        'చివరి ఆశీర్వాదాలు'
      ]
    },
    requirements: {
      en: [
        'Pinda materials and sacred ingredients',
        'Ganga water for purification',
        'White flowers and ceremonial items',
        'Donations for charity',
        'Traditional feast preparations',
        'Professional arrangements for ceremony'
      ],
      te: [
        'పిండ సామగ్రి మరియు పవిత్ర పదార్థాలు',
        'శుద్ధీకరణ కోసం గంగా నీరు',
        'తెల్ల పూలు మరియు వేడుక వస్తువులు',
        'దాతృత్వం కోసం విరాళాలు',
        'సమాజ పంచుకోవడం కోసం సాంప్రదాయ భోజన సిద్ధతలు',
        'విస్తృత వేడుక కోసం వృత్తిపరమైన ఏర్పాట్లు'
      ]
    },
    significance: {
      en: [
        'Represents devotion to ancestors',
        'Ensures peace for departed souls',
        'Creates karmic balance',
        'Establishes spiritual connection'
      ],
      te: [
        'పూర్వీకుల పట్ల భక్తిని సూచిస్తుంది',
        'మరణించిన ఆత్మలకు శాంతిని నిర్ధారిస్తుంది',
        'కర్మ సమతుల్యతను సృష్టిస్తుంది',
        'ఆధ్యాత్మిక సంబంధాన్ని స్థాపిస్తుంది'
      ]
    },
    occasions: {
      en: [
        'Death anniversaries of ancestors',
        'Tithi corresponding to death day',
        'Pitru Paksha period',
        'Family memorial observances',
        'Seeking ancestral blessings',
        'Important family transitions'
      ],
      te: [
        'పూర్వీకుల మరణ వార్షికోత్సవాలు',
        'మరణ రోజుకు అనుగుణమైన తిథి',
        'పితృ పక్ష కాలం',
        'కుటుంబ స్మారక ఆచరణలు',
        'పూర్వీకుల ఆశీర్వాదాలను కోరడం',
        'ముఖ్యమైన కుటుంబ మార్పులు'
      ]
    },
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&h=600&fit=crop'
  },
  {
    id: 'custom',
    nameEn: 'Custom Puja',
    nameTe: 'కస్టమ్ పూజ',
    icon: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=400&fit=crop',
    shortDescriptionEn: 'Personalized puja services tailored to your specific spiritual needs.',
    shortDescriptionTe: 'మీ నిర్దిష్ట ఆధ్యాత్మిక అవసరాలకు అనుకూలీకరించిన వ్యక్తి గతీకరించిన పూజా సేవలు.',
    detailedDescriptionEn: 'Our custom puja services offer completely personalized spiritual ceremonies tailored to meet your unique requirements and circumstances. Whether you need a specific deity worship, special occasion ceremony, problem-solving ritual, or unique combination of traditional practices, Pandit Eswar Prasad Valavalapalli will consult with you to design and perform a customized ceremony. These services can address specific life challenges, personal spiritual goals, or unique family traditions that require specialized attention and expert guidance.',
    detailedDescriptionTe: 'మా కస్టమ్ పూజా సేవలు మీ ప్రత్యేక అవసరాలు మరియు పరిస్థితులను తీర్చడానికి రూపొందించిన పూర్తిగా వ్యక్తిగతీకరించిన ఆధ్యాత్మిక వేడుకలను అందిస్తాయి. మీకు నిర్దిష్ట దేవతా ఆరాధన, ప్రత్యేక సందర్భ వేడుక, సమస్య పరిష్కార కర్మ లేదా సాంప్రదాయ అభ్యాసాల ప్రత్యేక కలయిక అవసరమైనా, పండిత ఈశ్వర్ ప్రసాద్ వలవలపల్లి మీతో సంప్రదించి అనుకూలీకరించిన వేడుకను రూపొందించి నిర్వహిస్తారు.',
    duration: 'Variable based on requirements',
    benefits: {
      en: [
        'Completely personalized spiritual experience and guidance',
        'Targeted solutions for specific life problems and challenges',
        'Flexible timing and arrangements according to your schedule',
        'Customized rituals combining multiple traditional practices',
        'Personal consultation and ongoing spiritual support',
        'Unique ceremonies for special family occasions and needs'
      ],
      te: [
        'పూర్తిగా వ్యక్తిగతీకరించిన ఆధ్యాత్మిక అనుభవం మరియు మార్గదర్శకత్వం',
        'నిర్దిష్ట జీవిత సమస్యలు మరియు సవాళ్లకు లక్ష్య పరిష్కారాలు',
        'మీ షెడ్యూల్ ప్రకారం సౌకర్యవంతమైన సమయం మరియు ఏర్పాట్లు',
        'బహుళ సాంప్రదాయ అభ్యాసాలను కలిపే అనుకూలీకరించిన కర్మలు',
        'వ్యక్తిగత సంప్రదింపులు మరియు కొనసాగుతున్న ఆధ్యాత్మిక మద్దతు',
        'ప్రత్యేక కుటుంబ సందర్భాలు మరియు అవసరాలకు ప్రత్యేక వేడుకలు'
      ]
    },
    rituals: {
      en: [
        'Initial consultation session to understand your needs',
        'Customized ceremony design based on your requirements',
        'Personal prayers and specific deity invocations',
        'Specialized rituals combining traditional and personal elements',
        'Ongoing guidance and follow-up spiritual support',
        'Documentation and explanation of performed ceremonies'
      ],
      te: [
        'మీ అవసరాలను అర్థం చేసుకోవడానికి ప్రారంభ సంప్రదింపుల సెషన్',
        'మీ అవసరాల ఆధారంగా అనుకూలీకరించిన వేడుక రూపకల్పన',
        'వ్యక్తిగత ప్రార్థనలు మరియు నిర్దిష్ట దేవతా ఆవాహనలు',
        'సాంప్రదాయ మరియు వ్యక్తిగత అంశాలను కలిపే ప్రత్యేక కర్మలు',
        'కొనసాగుతున్న మార్గదర్శకత్వం మరియు తదుపరి ఆధ్యాత్మిక మద్దతు',
        'నిర్వహించిన వేడుకల డాక్యుమెంటేషన్ మరియు వివరణ'
      ]
    },
    requirements: {
      en: [
        'Varies completely based on specific ceremony requirements',
        'Initial consultation required to determine needs',
        'Flexible arrangements according to your preferences',
        'Personal preferences and family traditions considered',
        'Location and timing flexibility for your convenience',
        'Customized material list provided after consultation'
      ],
      te: [
        'నిర్దిష్ట వేడుక అవసరాల ఆధారంగా పూర్తిగా మారుతుంది',
        'అవసరాలను నిర్ణయించడానికి ప్రారంభ సంప్రదింపులు అవసరం',
        'మీ ప్రాధాన్యతల ప్రకారం సౌకర్యవంతమైన ఏర్పాట్లు',
        'వ్యక్తిగత ప్రాధాన్యతలు మరియు కుటుంబ సంప్రదాయాలు పరిగణించబడతాయి',
        'మీ సౌకర్యం కోసం స్థానం మరియు సమయ సౌకర్యం',
        'సంప్రదింపుల తర్వాత అనుకూలీకరించిన సామగ్రి జాబితా అందించబడుతుంది'
      ]
    },
    significance: {
      en: [
        'Addresses unique spiritual needs and personal circumstances',
        'Provides targeted divine intervention for specific challenges',
        'Creates personalized spiritual pathway and growth',
        'Honors individual devotion and spiritual aspirations'
      ],
      te: [
        'ప్రత్యేక ఆధ్యాత్మిక అవసరాలు మరియు వ్యక్తిగత పరిస్థితులను పరిష్కరిస్తుంది',
        'నిర్దిష్ట సవాళ్లకు లక్ష్యిత దైవిక జోక్యాన్ని అందిస్తుంది',
        'వ్యక్తిగతీకరించిన ఆధ్యాత్మిక మార్గం మరియు వృద్ధిని సృష్టిస్తుంది',
        'వ్యక్తిగత భక్తి మరియు ఆధ్యాత్మిక ఆకాంక్షలను గౌరవిస్తుంది'
      ]
    },
    occasions: {
      en: [
        'Specific life challenges requiring spiritual intervention',
        'Unique family traditions and personal celebrations',
        'Special deity worship and personal devotional practices',
        'Problem-solving ceremonies for health, career, relationships',
        'Milestone celebrations requiring customized approach',
        'Any occasion where standard ceremonies need personalization'
      ],
      te: [
        'ఆధ్యాత్మిక జోక్యం అవసరమయ్యే నిర్దిష్ట జీవిత సవాళ్లు',
        'ప్రత్యేక కుటుంబ సంప్రదాయాలు మరియు వ్యక్తిగత వేడుకలు',
        'ప్రత్యేక దేవతా ఆరాధన మరియు వ్యక్తిగత భక్తి అభ్యాసాలు',
        'ఆరోగ్యం, కెరీర్, సంబంధాలకు సమస్య పరిష్కార వేడుకలు',
        'అనుకూలీకరించిన విధానం అవసరమయ్యే మైలురాయి వేడుకలు',
        'ప్రామాణిక వేడుకలకు వ్యక్తిగతీకరణ అవసరమయ్యే ఏదైనా సందర్భం'
      ]
    },
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop'
  }
];
