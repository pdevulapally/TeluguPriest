
import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { LogOut } from "lucide-react";

const AdminLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return null;
  }
  
  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-lg font-bold text-maroon">🕉️ Telugu Priest Admin</div>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleLogout}
            className="flex items-center gap-1"
          >
            <LogOut size={16} /> Logout
          </Button>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>
      
      <footer className="bg-white border-t mt-auto">
        <div className="container mx-auto px-4 py-3 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Telugu Priest Admin Dashboard
        </div>
      </footer>
    </div>
  );
};

export default AdminLayout;
