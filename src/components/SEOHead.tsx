import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  noindex?: boolean;
}

const SEOHead = ({
  title = "Professional Hindu Priest Services Worldwide | Pandit Eswar Prasad | Book Online +44 7438 618486",
  description = "Book professional Hindu Priest Pandit Eswar Prasad Valavalapalli for authentic ceremonies worldwide. Expert in Satyanarayana Vratam, Gruhapravesam, Hindu weddings, Vedic rituals. Available in-person & online globally. Call +44 7438 618486 for immediate booking.",
  keywords = "hindu priest worldwide, professional pandit online, Book Pandit For Pooja In London and Worldwide, satyanarayana vratam priest, gruhapravesam ceremony expert, hindu wedding officiant, vedic rituals priest, online puja services, hindu priest booking, pandit eswar prasad, telugu priest global, authentic hindu ceremonies, virtual puja services, nri hindu priest, hindu priest usa uk canada australia, vedic scholar, sanskrit mantras expert, hindu dharma guidance, multicultural wedding priest, barasala ceremony, pitru paksha rituals, upanayanam thread ceremony, seemantham baby shower, annaprasana first rice, ganesha lakshmi puja, durga navratri ceremonies, horoscope matching astrologer, muhurtham consultation, temple collaborations, hindu community priest, spiritual guidance online, traditional vedic knowledge, certified brahmin priest",
  canonical = "https://telugupriest.com",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  ogType = "website",
  structuredData,
  noindex = false
}: SEOHeadProps) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Professional Hindu Priest - Pandit Eswar Prasad Valavalapalli",
    "description": description,
    "url": canonical,
    "telephone": "+44 7438 618486",
    "email": "contact@telugupriest.com",
    "areaServed": [
      "United Kingdom", "United States", "Canada", "Australia", "Germany", "France", "Netherlands", "Belgium", "Switzerland", "Italy", "Spain", "Norway", "Sweden", "Denmark", "Ireland", "New Zealand", "Singapore", "Malaysia", "Dubai", "UAE", "Qatar", "Kuwait", "Saudi Arabia", "Bahrain", "Oman", "Japan", "South Korea", "South Africa", "India", "Worldwide"
    ],
    "serviceType": "Religious Services",
    "priceRange": "$$",
    "currenciesAccepted": "GBP, USD, EUR, CAD, AUD, INR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer, PayPal, Online Payment",
    "availableLanguage": ["English", "Telugu", "Hindi", "Sanskrit"],
    "provider": {
      "@type": "Person",
      "name": "Pandit Eswar Prasad Valavalapalli",
      "jobTitle": "Professional Hindu Priest & Vedic Scholar",
      "expertise": "Hindu Ceremonies, Vedic Rituals, Hindu Traditions, Sanskrit Mantras, Spiritual Guidance",
      "telephone": "+44 7438 618486",
      "knowsLanguage": ["English", "Telugu", "Hindi", "Sanskrit"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "United Kingdom",
      "addressRegion": "Worldwide Service"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.5074",
      "longitude": "-0.1278"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44 7438 618486",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Telugu", "Hindi"],
      "hoursAvailable": "Mo-Su 09:00-20:00"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Pandit Eswar Prasad Valavalapalli - Professional Hindu Priest" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Professional Hindu Priest - Pandit Eswar Prasad Valavalapalli" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:phone_number" content="+44 7438 618486" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@hindupriest" />
      <meta name="twitter:creator" content="@hindupriest" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Language Alternates */}
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="te" href={`${canonical}/te`} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />
    </Helmet>
  );
};

export default SEOHead;
