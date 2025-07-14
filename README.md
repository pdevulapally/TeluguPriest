# 🕉️ Telugu Priest - Professional Hindu Priest Services Website

A modern, SEO-optimised website for Pandit Eswar Prasad Valavalapalli, offering professional Hindu priest services worldwide. Built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

### ✨ Core Functionality
- **Multi-language Support**: English and Telugu with seamless language switching
- **Service Booking System**: Easy online booking for various Hindu ceremonies
- **Admin Dashboard**: Complete booking management system
- **Real-time Availability**: Calendar-based availability checking
- **Zoom Integration**: Virtual ceremony support
- **Responsive Design**: Mobile-first approach for all devices

### 🎯 SEO Optimized
- **Dynamic Meta Tags**: Page-specific SEO with react-helmet-async
- **Structured Data**: Comprehensive Schema.org markup
- **SEO-Friendly URLs**: Clean, descriptive URLs for all services
- **XML Sitemap**: Complete sitemap with language alternates
- **Breadcrumb Navigation**: Enhanced user experience and SEO
- **Open Graph Tags**: Optimized social media sharing

### 🏛️ Services Offered
- **Satyanarayana Vratam**: Traditional prosperity ceremony
- **Gruhapravesam**: House warming ceremonies
- **Hindu Weddings**: Complete wedding rituals
- **Barasala**: Naming ceremonies
- **Upanayanam**: Thread ceremonies
- **Seemantham**: Baby shower ceremonies
- **Annaprasana**: First rice ceremonies
- **Pitra Paksha**: Ancestral rituals
- **Ganesha Puja**: Lord Ganesha worship
- **Lakshmi Puja**: Goddess Lakshmi worship
- **Durga Puja**: Goddess Durga worship
- **Online Puja**: Virtual ceremonies worldwide

## 🚀 Tech Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **React Query**: Server state management

### UI Components
- **Shadcn/ui**: Modern, accessible component library
- **Lucide React**: Beautiful icon library
- **React Hook Form**: Form handling and validation
- **Date-fns**: Date manipulation utilities

### Backend & Services
- **Firebase**: Authentication, database, and hosting
- **Firestore**: NoSQL database for bookings and data
- **Firebase Auth**: Secure user authentication
- **Zoom API**: Video conferencing integration

### SEO & Performance
- **React Helmet Async**: Dynamic meta tag management
- **Structured Data**: Schema.org markup for rich snippets
- **Image Optimization**: Optimized images for performance
- **Lazy Loading**: Component and image lazy loading

## 📁 Project Structure

```
TeluguPriest/
├── public/                 # Static assets
│   ├── Images/            # Service and logo images
│   │   ├── sitemap.xml        # SEO sitemap
│   │   └── robots.txt         # Search engine directives
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── ui/           # Shadcn/ui components
│   │   │   ├── Header.tsx    # Navigation header
│   │   │   ├── Footer.tsx    # Site footer
│   │   │   ├── SEOHead.tsx   # SEO meta tags component
│   │   │   └── Breadcrumbs.tsx # Navigation breadcrumbs
│   │   ├── pages/            # Page components
│   │   │   ├── Index.tsx     # Homepage
│   │   │   ├── BookingPage.tsx # Booking form
│   │   │   └── ServiceDetailPage.tsx # Service details
│   │   ├── contexts/         # React contexts
│   │   │   └── LanguageContext.tsx # Language management
│   │   ├── services/         # API and service functions
│   │   ├── types/           # TypeScript type definitions
│   │   ├── data/            # Static data and content
│   │   ├── lib/             # Utility functions
│   │   └── hooks/           # Custom React hooks
│   ├── package.json          # Dependencies and scripts
│   ├── tailwind.config.ts    # Tailwind configuration
│   └── vite.config.ts       # Vite configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind configuration
└── vite.config.ts       # Vite configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase account
- Zoom API credentials (optional)

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/telugu-priest.git
cd telugu-priest
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_ZOOM_CLIENT_ID=your_zoom_client_id
VITE_ZOOM_CLIENT_SECRET=your_zoom_client_secret
```

### 4. Firebase Setup
1. Create a new Firebase project
2. Enable Authentication (Email/Password)
3. Create Firestore database
4. Set up security rules
5. Add your Firebase config to environment variables

### 5. Run Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build & Deployment

### Development Build
```bash
npm run build
# or
yarn build
```

### Production Deployment
The project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy to Firebase Hosting
firebase deploy
```

## 🌐 SEO Configuration

### Meta Tags
Each page includes dynamic meta tags:
- Title tags with service-specific keywords
- Meta descriptions optimized for search
- Open Graph tags for social sharing
- Twitter Card tags for Twitter sharing

### Structured Data
Comprehensive Schema.org markup:
- ProfessionalService schema
- Person schema for Pandit Eswar Prasad
- Service schema for individual ceremonies
- ContactPoint schema for business information

### URL Structure
SEO-friendly URLs implemented:
- `/satyanarayana-vratam` - Direct service URLs
- `/booking` - Booking page
- `/te/` - Telugu language prefix
- Clean, descriptive URLs for all services

## 🔧 Configuration

### Language Support
The website supports English and Telugu:
- Automatic language detection
- Manual language switching
- URL-based language routing (`/te/` prefix)
- SEO-optimized with hreflang tags

### Admin Dashboard
Secure admin area for booking management:
- Authentication required
- Booking overview and management
- Availability calendar
- Customer communication tools

### Booking System
Comprehensive booking functionality:
- Service selection
- Date and time booking
- Customer information collection
- Real-time availability checking
- Email notifications
- Zoom meeting integration

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first design approach
- Tablet and desktop optimizations
- Touch-friendly interface
- Fast loading on all devices
- Progressive Web App features

## 🔒 Security Features

- Firebase Authentication for admin access
- Secure API endpoints
- Input validation and sanitization
- HTTPS enforcement
- XSS protection
- CSRF protection

## 📊 Performance Optimization

- Code splitting and lazy loading
- Image optimization and compression
- Minified CSS and JavaScript
- CDN integration for static assets
- Caching strategies
- Core Web Vitals optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

### Business Contact
- **Pandit Eswar Prasad Valavalapalli**
- Phone: +44 7438 618486
- Email: contact@telugupriest.com
- Website: https://telugupriest.com

### Technical Support
For technical issues or questions about the codebase:
- Create an issue on GitHub
- Email: support@telugupriest.com

## 🙏 Acknowledgments

- **Shadcn/ui** for the beautiful component library
- **Tailwind CSS** for the utility-first styling
- **Firebase** for the robust backend services
- **Vite** for the fast development experience
- **React Community** for the excellent ecosystem

## 📈 Roadmap

### Planned Features
- [ ] Blog section for spiritual content
- [ ] Customer testimonials and reviews
- [ ] Advanced analytics dashboard
- [ ] Multi-currency payment integration
- [ ] SMS notifications
- [ ] WhatsApp Business integration
- [ ] Video testimonials
- [ ] Ceremony preparation guides

### Performance Improvements
- [ ] Service Worker for offline functionality
- [ ] Advanced image optimization
- [ ] Database query optimization
- [ ] CDN implementation
- [ ] Advanced caching strategies

---

**🕉️ Om Ganesha Namah** - May Lord Ganesha bless this project and all its users with success and prosperity.

