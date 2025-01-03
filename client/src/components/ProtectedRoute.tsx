import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  console.log("ProtectedRoute - isAuthenticated:", isAuthenticated);
  console.log("ProtectedRoute - current location:", location.pathname);

  if (!isAuthenticated) {
    console.log("ProtectedRoute - Redirecting to login due to no auth");
    return <Navigate to={`/login?from=${encodeURIComponent(location.pathname)}`} replace />;
  }

  console.log("ProtectedRoute - Auth verified, rendering protected content");
  return <>{children}</>;
}