
import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { LogOut } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const AdminLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setIsLoading(false);
      
      if (!user) {
        navigate("/admin/login");
      }
    });
    
    return () => unsubscribe();
  }, [navigate]);
  
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate("/admin/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to log out");
    }
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream px-4">
        <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return null;
  }
  
  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-sm sm:text-lg font-bold text-maroon">
              🕉️ Telugu Priest Admin
            </div>
          </div>
          <Button 
            variant="outline" 
            size={isMobile ? "sm" : "sm"}
            onClick={handleLogout}
            className="flex items-center gap-1 text-xs sm:text-sm"
          >
            <LogOut size={isMobile ? 14 : 16} /> 
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </header>
      
      <main className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <Outlet />
      </main>
      
      <footer className="bg-white border-t mt-auto">
        <div className="container mx-auto px-3 sm:px-4 py-3 text-center text-xs sm:text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Telugu Priest Admin Dashboard
        </div>
      </footer>
    </div>
  );
};

export default AdminLayout;
