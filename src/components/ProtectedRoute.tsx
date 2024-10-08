import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

interface UserData {
  name: string;
  roomId: string;
}

interface ProtectedRouteProps {
  element: React.FC<{ userData: UserData }>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element: Element,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const verifyToken = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.post<{
          valid: boolean;
          name: string;
          roomId: string;
        }>(
          VITE_BACKEND_URL + "/api/verify-token",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200 && response.data.valid) {
          setIsAuthenticated(true);
          setUserData({
            name: response.data.name,
            roomId: response.data.roomId,
          });
        }
      } catch (error) {
        console.error("Token verification failed:", error);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#0A1929] flex w-full h-screen justify-center items-center">
        <LoaderCircle className="animate-spin text-white" />
      </div>
    );
  }

  return isAuthenticated && userData ? (
    <Element userData={userData} />
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoute;
