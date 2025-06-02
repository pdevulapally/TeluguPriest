
// Om Ganesha Namah 🕉️
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import '@/lib/firebase'; // Import to ensure Firebase is initialized

const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes in milliseconds

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockoutEndTime, setLockoutEndTime] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(0);

  // Check for existing lockout on component mount
  useEffect(() => {
    const storedAttempts = localStorage.getItem('admin_login_attempts');
    const storedLockoutTime = localStorage.getItem('admin_lockout_time');
    
    if (storedAttempts) {
      setAttempts(parseInt(storedAttempts));
    }
    
    if (storedLockoutTime) {
      const lockoutTime = parseInt(storedLockoutTime);
      const now = Date.now();
      
      if (now < lockoutTime) {
        setIsLocked(true);
        setLockoutEndTime(lockoutTime);
      } else {
        // Lockout expired, clear storage
        localStorage.removeItem('admin_login_attempts');
        localStorage.removeItem('admin_lockout_time');
      }
    }
  }, []);

  // Update remaining time for locked accounts
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isLocked && lockoutEndTime) {
      interval = setInterval(() => {
        const now = Date.now();
        const remaining = Math.max(0, lockoutEndTime - now);
        setRemainingTime(remaining);
        
        if (remaining === 0) {
          setIsLocked(false);
          setLockoutEndTime(null);
          setAttempts(0);
          localStorage.removeItem('admin_login_attempts');
          localStorage.removeItem('admin_lockout_time');
          toast.success("Account unlocked. You can try logging in again.");
        }
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isLocked, lockoutEndTime]);

  const formatRemainingTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLocked) {
      toast.error(`Account locked. Try again in ${formatRemainingTime(remainingTime)}`);
      return;
    }
    
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }
    
    setIsLoading(true);
    
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      
      // Successful login - clear attempts
      setAttempts(0);
      localStorage.removeItem('admin_login_attempts');
      localStorage.removeItem('admin_lockout_time');
      
      toast.success("Login successful");
      navigate("/admin/dashboard");
    } catch (error: any) {
      console.error("Login error:", error);
      
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      localStorage.setItem('admin_login_attempts', newAttempts.toString());
      
      if (newAttempts >= MAX_ATTEMPTS) {
        const lockoutTime = Date.now() + LOCKOUT_DURATION;
        setIsLocked(true);
        setLockoutEndTime(lockoutTime);
        localStorage.setItem('admin_lockout_time', lockoutTime.toString());
        
        toast.error(`Too many failed attempts. Account locked for 15 minutes.`);
      } else {
        const remainingAttempts = MAX_ATTEMPTS - newAttempts;
        toast.error(`Invalid credentials. ${remainingAttempts} attempt(s) remaining before lockout.`);
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-maroon mb-2">🕉️ Admin Login</h1>
          <p className="text-muted-foreground">Enter your credentials to access the admin dashboard</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          {isLocked && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-700 text-sm font-medium">
                Account temporarily locked due to multiple failed login attempts.
              </p>
              <p className="text-red-600 text-sm mt-1">
                Time remaining: {formatRemainingTime(remainingTime)}
              </p>
            </div>
          )}
          
          {attempts > 0 && !isLocked && (
            <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
              <p className="text-yellow-700 text-sm">
                Warning: {attempts}/{MAX_ATTEMPTS} failed attempts. 
                Account will be locked after {MAX_ATTEMPTS - attempts} more failed attempt(s).
              </p>
            </div>
          )}
          
          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  required
                  disabled={isLocked}
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                  required
                  disabled={isLocked}
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isLoading || isLocked}
              >
                {isLoading ? "Logging in..." : isLocked ? "Account Locked" : "Login"}
              </Button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <a 
              href="/" 
              className="text-sm text-primary hover:underline"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
