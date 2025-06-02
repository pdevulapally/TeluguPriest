interface ServiceDetail {
  id: string;
  nameEn: string;
  nameTe: string;
  shortDescriptionEn: string;
  shortDescriptionTe: string;
  detailedDescriptionEn: string;
  detailedDescriptionTe: string;
  benefits: { en: string[]; te: string[] };
  rituals: { en: string[]; te: string[] };
  requirements: { en: string[]; te: string[] };
  significance: { en: string[]; te: string[] };
  occasions: { en: string[]; te: string[] };
  icon: string;
  image: string;
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: 'ganapati-homam',
    nameEn: 'Ganapati Homam',
    nameTe: 'గణపతి హోమం',
    shortDescriptionEn:
      'Removes obstacles and brings good fortune. Invoke Lord Ganesha for success.',
    shortDescriptionTe:
      'అడ్డంకులు తొలగించి, అదృష్టాన్ని తెస్తుంది. విజయం కోసం గణేశుడిని ప్రార్థించండి.',
    detailedDescriptionEn:
      'Ganapati Homam is a sacred ritual dedicated to Lord Ganesha, the remover of obstacles and the god of new beginnings. Performing this homam brings good fortune, success, and spiritual growth. It is ideal to perform before starting any new venture or project.',
    detailedDescriptionTe:
      'గణపతి హోమం అనేది విఘ్నాలను తొలగించే మరియు కొత్త ప్రారంభాలకు దేవుడైన గణేశుడికి అంకితం చేయబడిన ఒక పవిత్రమైన ఆచారం. ఈ హోమం చేయడం వలన అదృష్టం, విజయం మరియు ఆధ్యాత్మిక అభివృద్ధి లభిస్తాయి. ఏదైనా కొత్త వెంచర్ లేదా ప్రాజెక్ట్ ప్రారంభించే ముందు దీనిని చేయడం చాలా మంచిది.',
    benefits: {
      en: [
        'Removes obstacles',
        'Brings good fortune',
        'Ensures success in new ventures',
        'Promotes spiritual growth',
      ],
      te: [
        'అడ్డంకులు తొలగిస్తుంది',
        'అదృష్టాన్ని తెస్తుంది',
        'కొత్త వెంచర్లలో విజయాన్ని అందిస్తుంది',
        'ఆధ్యాత్మిక అభివృద్ధిని ప్రోత్సహిస్తుంది',
      ],
    },
    rituals: {
      en: [
        'Invocation of Lord Ganesha',
        'Offering of modaks and durva grass',
        'Chanting of Ganapati mantras',
        'Final offering (Purnahuti)',
      ],
      te: [
        'గణేశుడిని ప్రార్థించడం',
        'మోదకాలు మరియు దుర్వా గడ్డిని సమర్పించడం',
        'గణపతి మంత్రాల పఠనం',
        'చివరి సమర్పణ (పూర్ణాహుతి)',
      ],
    },
    requirements: {
      en: [
        'Fresh flowers and fruits',
        'Modaks and durva grass',
        'Ghee and other homam items',
        'A clean and sacred space',
      ],
      te: [
        'తాజా పువ్వులు మరియు పండ్లు',
        'మోదకాలు మరియు దుర్వా గడ్డి',
        'నెయ్యి మరియు ఇతర హోమ వస్తువులు',
        'శుభ్రమైన మరియు పవిత్రమైన స్థలం',
      ],
    },
    significance: {
      en: [
        'Lord Ganesha is the first god to be worshipped before any new beginning.',
        'He removes obstacles and ensures success.',
        'The homam purifies the environment and brings positive energy.',
      ],
      te: [
        'గణేశుడు ఏ కొత్త ప్రారంభానికైనా ముందుగా పూజించబడే మొదటి దేవుడు.',
        'అతను అడ్డంకులను తొలగించి విజయాన్ని అందిస్తాడు.',
        'హోమం పరిసరాలను శుద్ధి చేస్తుంది మరియు సానుకూల శక్తిని తెస్తుంది.',
      ],
    },
    occasions: {
      en: [
        'Before starting a new business',
        'Before moving into a new house',
        'Before any auspicious event',
        'For overall well-being and success',
      ],
      te: [
        'కొత్త వ్యాపారం ప్రారంభించే ముందు',
        'కొత్త ఇంటికి మారే ముందు',
        'ఏదైనా శుభ కార్యక్రమం ముందు',
        'మొత్తం శ్రేయస్సు మరియు విజయం కోసం',
      ],
    },
    icon: '/ganesha.png',
    image: '/ganapati-homam.jpg',
  },
  {
    id: 'srinivasa-kalyanam',
    nameEn: 'Srinivasa Kalyanam',
    nameTe: 'శ్రీనివాస కల్యాణం',
    shortDescriptionEn:
      'Celestial wedding ceremony of Lord Venkateswara and Goddess Padmavathi.',
    shortDescriptionTe:
      'వెంకటేశ్వర స్వామి మరియు పద్మావతి అమ్మవారి దివ్య వివాహ వేడుక.',
    detailedDescriptionEn:
      'Srinivasa Kalyanam is the divine wedding ceremony of Lord Venkateswara and Goddess Padmavathi. Performing or attending this ceremony is considered highly auspicious and brings marital bliss, prosperity, and spiritual growth. It is a celebration of divine love and union.',
    detailedDescriptionTe:
      'శ్రీనివాస కల్యాణం అనేది వెంకటేశ్వర స్వామి మరియు పద్మావతి అమ్మవారి దివ్య వివాహ వేడుక. ఈ వేడుకను నిర్వహించడం లేదా హాజరు కావడం చాలా శుభప్రదంగా భావిస్తారు మరియు వైవాహిక ఆనందం, శ్రేయస్సు మరియు ఆధ్యాత్మిక అభివృద్ధిని తెస్తుంది. ఇది దైవిక ప్రేమ మరియు ఐక్యత యొక్క వేడుక.',
    benefits: {
      en: [
        'Brings marital bliss',
        'Ensures prosperity and wealth',
        'Promotes spiritual growth',
        'Blessings for a happy family life',
      ],
      te: [
        'వైవాహిక ఆనందాన్ని తెస్తుంది',
        'శ్రేయస్సు మరియు సంపదను నిర్ధారిస్తుంది',
        'ఆధ్యాత్మిక అభివృద్ధిని ప్రోత్సహిస్తుంది',
        'సంతోషకరమైన కుటుంబ జీవితానికి ఆశీస్సులు',
      ],
    },
    rituals: {
      en: [
        'Invocation of Lord Venkateswara and Goddess Padmavathi',
        'Exchange of garlands',
        'Tying of the Mangalsutra',
        'Circumambulation around the sacred fire',
      ],
      te: [
        'వెంకటేశ్వర స్వామి మరియు పద్మావతి అమ్మవారిని ప్రార్థించడం',
        'పూల దండలు మార్చుకోవడం',
        'మంగళసూత్రం కట్టడం',
        'పవిత్రమైన అగ్ని చుట్టూ ప్రదక్షిణలు',
      ],
    },
    requirements: {
      en: [
        'Idols of Lord Venkateswara and Goddess Padmavathi',
        'Wedding attire and jewelry',
        'Flowers and garlands',
        'A sacred space for the ceremony',
      ],
      te: [
        'వెంకటేశ్వర స్వామి మరియు పద్మావతి అమ్మవారి విగ్రహాలు',
        'వివాహ దుస్తులు మరియు ఆభరణాలు',
        'పువ్వులు మరియు పూల దండలు',
        'వేడుక కోసం పవిత్రమైన స్థలం',
      ],
    },
    significance: {
      en: [
        'Lord Venkateswara and Goddess Padmavathi represent the ideal couple.',
        'The ceremony symbolizes divine love and union.',
        'It brings blessings for a happy and prosperous married life.',
      ],
      te: [
        'వెంకటేశ్వర స్వామి మరియు పద్మావతి అమ్మవారు ఆదర్శ దంపతులను సూచిస్తారు.',
        'ఈ వేడుక దైవిక ప్రేమ మరియు ఐక్యతకు చిహ్నం.',
        'ఇది సంతోషకరమైన మరియు సంపన్నమైన వివాహ జీవితానికి ఆశీర్వాదాలను తెస్తుంది.',
      ],
    },
    occasions: {
      en: [
        'For newly married couples',
        'For those seeking marital bliss',
        'During auspicious occasions and festivals',
        'For overall well-being and prosperity',
      ],
      te: [
        'కొత్తగా వివాహం చేసుకున్న జంటల కోసం',
        'వైవాహిక ఆనందం కోసం చూస్తున్నవారికి',
        'శుభ సందర్భాలు మరియు పండుగల సమయంలో',
        'మొత్తం శ్రేయస్సు మరియు శ్రేయస్సు కోసం',
      ],
    },
    icon: '/srinivasa-kalyanam-icon.png',
    image: '/srinivasa-kalyanam.jpg',
  },
  {
    id: 'barasala',
    nameEn: 'Barasala (Naming Ceremony)',
    nameTe: 'బరసాల (నామకరణం)',
    shortDescriptionEn: 'Traditional Hindu naming ceremony for newborn babies.',
    shortDescriptionTe: 'పుట్టిన శిశువుల కోసం సాంప్రదాయ హిందూ నామకరణ వేడుక.',
    detailedDescriptionEn:
      'Barasala, also known as the naming ceremony, is a traditional Hindu ritual performed to name a newborn baby. This ceremony is of great cultural and spiritual significance, as the name given to the child is believed to influence their destiny and identity. The ceremony involves Vedic chants, prayers, and blessings for the baby\'s health and well-being.',
    detailedDescriptionTe:
      'బారసాల, నామకరణ వేడుక అని కూడా పిలుస్తారు, ఇది పుట్టిన శిశువుకు పేరు పెట్టడానికి నిర్వహించే సాంప్రదాయ హిందూ ఆచారం. ఈ వేడుక గొప్ప సాంస్కృతిక మరియు ఆధ్యాత్మిక ప్రాముఖ్యతను కలిగి ఉంది, ఎందుకంటే బిడ్డకు ఇచ్చిన పేరు వారి విధి మరియు గుర్తింపును ప్రభావితం చేస్తుందని నమ్ముతారు. ఈ వేడుకలో వేద మంత్రాలు, ప్రార్థనలు మరియు బిడ్డ ఆరోగ్యం మరియు శ్రేయస్సు కోసం ఆశీర్వాదాలు ఉంటాయి.',
    benefits: {
      en: [
        'Blessings for the newborn baby',
        'Cultural and spiritual significance',
        'A celebration of new life',
        'Strengthens family bonds',
      ],
      te: [
        'పుట్టిన బిడ్డకు ఆశీస్సులు',
        'సాంస్కృతిక మరియు ఆధ్యాత్మిక ప్రాముఖ్యత',
        'కొత్త జీవిత వేడుక',
        'కుటుంబ బంధాలను బలపరుస్తుంది',
      ],
    },
    rituals: {
      en: [
        'Vedic chants and prayers',
        'Whispering the name in the baby\'s ear',
        'Blessing the baby with sacred items',
        'Distribution of sweets and gifts',
      ],
      te: [
        'వేద మంత్రాలు మరియు ప్రార్థనలు',
        'బిడ్డ చెవిలో పేరును గుసగుసలాడటం',
        'పవిత్రమైన వస్తువులతో బిడ్డను ఆశీర్వదించడం',
        'స్వీట్లు మరియు బహుమతులు పంపిణీ',
      ],
    },
    requirements: {
      en: [
        'Auspicious date and time',
        'Traditional clothing for the baby',
        'Sacred items for the ceremony',
        'A clean and decorated space',
      ],
      te: [
        'శుభ తేదీ మరియు సమయం',
        'బిడ్డ కోసం సాంప్రదాయ దుస్తులు',
        'వేడుక కోసం పవిత్రమైన వస్తువులు',
        'శుభ్రమైన మరియు అలంకరించబడిన స్థలం',
      ],
    },
    significance: {
      en: [
        'The naming ceremony is a significant milestone in a child\'s life.',
        'The name given to the child is believed to influence their destiny.',
        'It is a celebration of new life and family.',
      ],
      te: [
        'నామకరణ వేడుక పిల్లల జీవితంలో ఒక ముఖ్యమైన మైలురాయి.',
        'బిడ్డకు ఇచ్చిన పేరు వారి విధిని ప్రభావితం చేస్తుందని నమ్ముతారు.',
        'ఇది కొత్త జీవితం మరియు కుటుంబ వేడుక.',
      ],
    },
    occasions: {
      en: [
        '11th or 21st day after the baby\'s birth',
        'During auspicious months and festivals',
        'For seeking blessings for the child\'s future',
        'For celebrating the arrival of a new family member',
      ],
      te: [
        'బిడ్డ పుట్టిన 11 లేదా 21 రోజుల తర్వాత',
        'శుభ మాసాలు మరియు పండుగల సమయంలో',
        'పిల్లల భవిష్యత్తు కోసం ఆశీర్వాదాలు కోరడం కోసం',
        'కొత్త కుటుంబ సభ్యుని రాకను జరుపుకోవడం కోసం',
      ],
    },
    icon: '/barasala-icon.png',
    image: '/barasala.jpg',
  },
  {
    id: 'satyanarayana-vratam',
    nameEn: 'Satyanarayana Vratam',
    nameTe: 'సత్యనారాయణ వ్రతం',
    shortDescriptionEn:
      'A popular Hindu ritual to invoke Lord Satyanarayana for blessings and prosperity.',
    shortDescriptionTe:
      'ఆశీస్సులు మరియు శ్రేయస్సు కోసం సత్యనారాయణ స్వామిని ప్రార్థించడానికి ఒక ప్రసిద్ధ హిందూ ఆచారం.',
    detailedDescriptionEn:
      'Satyanarayana Vratam is a widely performed Hindu ritual dedicated to Lord Satyanarayana, an incarnation of Lord Vishnu. This vratam is performed to seek blessings for health, wealth, and happiness. It involves reciting the Satyanarayana Katha and offering prayers and prasadam to the Lord.',
    detailedDescriptionTe:
      'సత్యనారాయణ వ్రతం అనేది విష్ణువు అవతారమైన సత్యనారాయణ స్వామికి అంకితం చేయబడిన ఒక విస్తృతంగా నిర్వహించబడే హిందూ ఆచారం. ఈ వ్రతం ఆరోగ్యం, సంపద మరియు సంతోషం కోసం ఆశీర్వాదాలు కోరడానికి చేస్తారు. ఇందులో సత్యనారాయణ కథను చదవడం మరియు స్వామికి ప్రార్థనలు మరియు ప్రసాదం సమర్పించడం ఉంటాయి.',
    benefits: {
      en: [
        'Blessings for health, wealth, and happiness',
        'Fulfillment of desires',
        'Spiritual purification',
        'Protection from negative influences',
      ],
      te: [
        'ఆరోగ్యం, సంపద మరియు సంతోషం కోసం ఆశీస్సులు',
        'కోరికల నెరవేర్పు',
        'ఆధ్యాత్మిక శుద్ధి',
        'ప్రతికూల ప్రభావాల నుండి రక్షణ',
      ],
    },
    rituals: {
      en: [
        'Invocation of Lord Satyanarayana',
        'Recitation of Satyanarayana Katha',
        'Offering of prayers and prasadam',
        'Distribution of prasadam to devotees',
      ],
      te: [
        'సత్యనారాయణ స్వామిని ప్రార్థించడం',
        'సత్యనారాయణ కథ పఠనం',
        'ప్రార్థనలు మరియు ప్రసాదం సమర్పించడం',
        'భక్తులకు ప్రసాదం పంపిణీ',
      ],
    },
    requirements: {
      en: [
        'Idol or picture of Lord Satyanarayana',
        'Flowers and fruits',
        'Prasadam ingredients (rava, sugar, ghee, etc.)',
        'A clean and sacred space',
      ],
      te: [
        'సత్యనారాయణ స్వామి విగ్రహం లేదా చిత్రం',
        'పువ్వులు మరియు పండ్లు',
        'ప్రసాదం పదార్థాలు (రవ్వ, చక్కెర, నెయ్యి మొదలైనవి)',
        'శుభ్రమైన మరియు పవిత్రమైన స్థలం',
      ],
    },
    significance: {
      en: [
        'Lord Satyanarayana is the embodiment of truth and righteousness.',
        'The vratam brings blessings for a happy and prosperous life.',
        'It is a way to express gratitude to the Lord.',
      ],
      te: [
        'సత్యనారాయణ స్వామి సత్యం మరియు ధర్మం యొక్క స్వరూపం.',
        'ఈ వ్రతం సంతోషకరమైన మరియు సంపన్నమైన జీవితానికి ఆశీర్వాదాలను తెస్తుంది.',
        'ఇది స్వామికి కృతజ్ఞతలు తెలిపే మార్గం.',
      ],
    },
    occasions: {
      en: [
        'On full moon days (Purnima)',
        'Before or after auspicious events',
        'For seeking blessings for new ventures',
        'For overall well-being and prosperity',
      ],
      te: [
        'పౌర్ణమి రోజులలో',
        'శుభ కార్యాల ముందు లేదా తర్వాత',
        'కొత్త వెంచర్ల కోసం ఆశీర్వాదాలు కోరడం కోసం',
        'మొత్తం శ్రేయస్సు మరియు శ్రేయస్సు కోసం',
      ],
    },
    icon: '/satyanarayana-icon.png',
    image: '/satyanarayana-vratam.jpg',
  },
  {
    id: 'griha-pravesam',
    nameEn: 'Griha Pravesam',
    nameTe: 'గృహ ప్రవేశం',
    shortDescriptionEn:
      'A traditional Hindu ceremony performed when moving into a new house.',
    shortDescriptionTe:
      'కొత్త ఇంటికి మారినప్పుడు నిర్వహించే సాంప్రదాయ హిందూ వేడుక.',
    detailedDescriptionEn:
      'Griha Pravesam is a sacred Hindu ceremony performed when moving into a new house. This ceremony is conducted to purify the house and seek blessings from the deities for peace, prosperity, and happiness. It involves various rituals such as Vastu Puja, Ganapati Homam, and Navagraha Puja.',
    detailedDescriptionTe:
      'గృహ ప్రవేశం అనేది కొత్త ఇంటికి మారినప్పుడు నిర్వహించే పవిత్రమైన హిందూ వేడుక. ఈ వేడుక ఇంటిని శుద్ధి చేయడానికి మరియు శాంతి, శ్రేయస్సు మరియు సంతోషం కోసం దేవతల నుండి ఆశీర్వాదాలు కోరడానికి నిర్వహిస్తారు. ఇందులో వాస్తు పూజ, గణపతి హోమం మరియు నవగ్రహ పూజ వంటి వివిధ ఆచారాలు ఉంటాయి.',
    benefits: {
      en: [
        'Purification of the new house',
        'Blessings for peace and prosperity',
        'Protection from negative energies',
        'Ensures harmony and happiness',
      ],
      te: [
        'కొత్త ఇంటి శుద్ధి',
        'శాంతి మరియు శ్రేయస్సు కోసం ఆశీస్సులు',
        'ప్రతికూల శక్తుల నుండి రక్షణ',
        'సఖ్యత మరియు సంతోషాన్ని నిర్ధారిస్తుంది',
      ],
    },
    rituals: {
      en: [
        'Vastu Puja',
        'Ganapati Homam',
        'Navagraha Puja',
        'Kalasha Sthapana',
      ],
      te: [
        'వాస్తు పూజ',
        'గణపతి హోమం',
        'నవగ్రహ పూజ',
        'కలశ స్థాపన',
      ],
    },
    requirements: {
      en: [
        'Auspicious date and time',
        'Puja items (flowers, fruits, incense, etc.)',
        'Homam items (ghee, wood, etc.)',
        'A clean and decorated house',
      ],
      te: [
        'శుభ తేదీ మరియు సమయం',
        'పూజ వస్తువులు (పువ్వులు, పండ్లు, ధూపం మొదలైనవి)',
        'హోమ వస్తువులు (నెయ్యి, కలప మొదలైనవి)',
        'శుభ్రమైన మరియు అలంకరించబడిన ఇల్లు',
      ],
    },
    significance: {
      en: [
        'Griha Pravesam is a way to sanctify the new house.',
        'It invokes the blessings of the deities for a happy life.',
        'It ensures the well-being of the family members.',
      ],
      te: [
        'గృహ ప్రవేశం అనేది కొత్త ఇంటిని పవిత్రం చేసే మార్గం.',
        'ఇది సంతోషకరమైన జీవితం కోసం దేవతల ఆశీర్వాదాలను ఆహ్వానిస్తుంది.',
        'ఇది కుటుంబ సభ్యుల శ్రేయస్సును నిర్ధారిస్తుంది.',
      ],
    },
    occasions: {
      en: [
        'When moving into a new house',
        'After construction or renovation',
        'For seeking blessings for a new beginning',
        'For overall well-being and happiness',
      ],
      te: [
        'కొత్త ఇంటికి మారినప్పుడు',
        'నిర్మాణం లేదా పునరుద్ధరణ తర్వాత',
        'కొత్త ప్రారంభం కోసం ఆశీర్వాదాలు కోరడం కోసం',
        'మొత్తం శ్రేయస్సు మరియు సంతోషం కోసం',
      ],
    },
    icon: '/griha-pravesam-icon.png',
    image: '/griha-pravesam.jpg',
  },
];
