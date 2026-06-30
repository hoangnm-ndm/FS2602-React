import { authApi } from "@/api/authApi";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
export const AuthContext = createContext(null);

function setTokens(accessToken, refreshToken) {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
}

function clearTokens(accessToken, refreshToken) {
  localStorage.removeItem("accessToken", accessToken);
  localStorage.removeItem("refreshToken", refreshToken);
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setIsLoading(false);
      return;
    }

    authApi.authGetMe
      .then(setUser)
      .catch(() => clearTokens())
      .finally(() => setIsLoading(false));
  });

  const register = useCallback(async (body) => {
    const { data } = await authApi.authRegister(body);
    setTokens(data.accessToken, data.refreshToken);
    setUser(data.data);
  }, []);

  const login = useCallback(async (body) => {
    const { data } = await authApi.authLogin(body);
    setTokens(data.accessToken, data.refreshToken);
    setUser(data.data);
  }, []);

  const logout = useCallback(async () => {
    // * Nhiệm vụ của logout là khoá token (dù token vẫn còn hạn sử dụng) -> gửi token hiện tại về cho backend đưa vào black list.
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      try {
        await authApi.authLogout(refreshToken);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("AuthContext is failed!");
  }
  return context;
}

export default AuthProvider;
