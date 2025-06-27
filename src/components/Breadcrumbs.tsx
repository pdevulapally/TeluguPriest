import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

const Breadcrumbs = ({ items = [] }: BreadcrumbsProps) => {
  const location = useLocation();
  const { t } = useLanguage();

  // Generate breadcrumbs based on current path if no items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: t('Home', 'హోమ్'), href: '/' }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Map path segments to readable labels
      let label = segment.charAt(0).toUpperCase() + segment.slice(1);
      
      // Special cases for known routes
      if (segment === 'booking') {
        label = t('Book a Puja', 'పూజ బుక్ చేయండి');
      } else if (segment === 'service') {
        label = t('Services', 'సేవలు');
      } else if (segment === 'admin') {
        label = t('Admin', 'అడ్మిన్');
      } else if (segment === 'dashboard') {
        label = t('Dashboard', 'డాష్‌బోర్డ్');
      } else if (segment === 'login') {
        label = t('Login', 'లాగిన్');
      }

      // Don't make the last item a link
      const isLast = index === pathSegments.length - 1;
      breadcrumbs.push({
        label,
        href: isLast ? undefined : currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = items.length > 0 ? items : generateBreadcrumbs();

  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-white/50 border-b">
      <div className="container mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
              )}
              
              {item.href ? (
                <Link
                  to={item.href}
                  className="text-gray-600 hover:text-primary transition-colors flex items-center gap-1"
                >
                  {index === 0 && <Home className="h-4 w-4" />}
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium flex items-center gap-1">
                  {index === 0 && <Home className="h-4 w-4" />}
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs; 