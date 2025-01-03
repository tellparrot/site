import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { login as apiLogin, register as apiRegister } from "@/api/auth";

type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  console.log("AuthContext - Current accessToken:", localStorage.getItem('accessToken'));

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const hasToken = !!token;
    console.log("AuthContext - isAuthenticated value:", hasToken);
    setIsAuthenticated(hasToken);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await apiLogin(email, password);
      if (response?.refreshToken && response?.accessToken) {
        localStorage.setItem("refreshToken", response.refreshToken);
        localStorage.setItem("accessToken", response.accessToken);
        setIsAuthenticated(true);
      } else {
        throw new Error('Login failed - Invalid response from server');
      }
    } catch (error) {
      console.error("Login error:", error);
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
      setIsAuthenticated(false);
      throw error;
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const response = await apiRegister(email, password);
      if (response?.accessToken) {
        localStorage.setItem("accessToken", response.accessToken);
        if (response.refreshToken) {
          localStorage.setItem("refreshToken", response.refreshToken);
        }
        setIsAuthenticated(true);
      } else {
        throw new Error('Registration failed - Invalid response from server');
      }
    } catch (error) {
      console.error("Registration error:", error);
      localStorage.removeItem("refreshToken"); 
      localStorage.removeItem("accessToken");
      setIsAuthenticated(false);
      throw error;
    }
  };

  const logout = () => {
    console.log("Logging out user");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}