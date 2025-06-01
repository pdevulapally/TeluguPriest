
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { exchangeCodeForToken } from '@/services/zoomService';
import { storeZoomTokens } from '@/services/firebaseZoomService';

const ZoomCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get('code');
      const error = searchParams.get('error');

      if (error) {
        toast.error('Zoom authorization failed');
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
          toast.error('Failed to connect Zoom account');
          navigate('/admin/dashboard');
        }
      }
    };

    handleCallback();
  }, [searchParams, navigate]);

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
