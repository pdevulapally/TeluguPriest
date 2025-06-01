
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { exchangeCodeForToken } from '@/services/zoomService';
import { storeZoomTokens } from '@/services/firebaseZoomService';

const ZoomCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setIsLoading(false);
      
      if (!user) {
        toast.error('You must be logged in as admin to connect Zoom');
        navigate('/admin/login');
        return;
      }
      
      // Only proceed with Zoom callback if user is authenticated
      if (user) {
        handleCallback();
      }
    });
    
    return () => unsubscribe();
  }, [searchParams, navigate]);

  const handleCallback = async () => {
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
      console.error('Zoom authorization error:', error);
      toast.error(`Zoom authorization failed: ${error}`);
      navigate('/admin/dashboard');
      return;
    }

    if (code) {
      try {
        console.log('Exchanging code for token...');
        const tokenData = await exchangeCodeForToken(code);
        
        console.log('Storing tokens in Firebase...');
        await storeZoomTokens(tokenData);
        
        toast.success('Zoom connected successfully!');
        navigate('/admin/dashboard');
      } catch (error) {
        console.error('Error during Zoom callback:', error);
        toast.error('Failed to connect Zoom account. Please try again.');
        navigate('/admin/dashboard');
      }
    } else {
      toast.error('No authorization code received from Zoom');
      navigate('/admin/dashboard');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-lg">Connecting to Zoom...</p>
      </div>
    </div>
  );
};

export default ZoomCallback;
