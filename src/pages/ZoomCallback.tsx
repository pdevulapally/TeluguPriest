
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';

const ZoomCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
      toast.error('Zoom authorization failed');
      navigate('/admin/dashboard');
      return;
    }

    if (code) {
      // Store the authorization code in localStorage for now
      // In a real app, you'd exchange this for an access token on the backend
      localStorage.setItem('zoom_auth_code', code);
      toast.success('Zoom connected successfully!');
      navigate('/admin/dashboard');
    }
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
