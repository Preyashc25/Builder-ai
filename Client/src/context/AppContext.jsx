import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import api from "../api/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AppContext = createContext(undefined);

export function AppContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const navigate = useNavigate();

  const checkSession = async () => {
    try {
      const { data } = await api.get("/api/auth/me");
      setUser(data.user)
    } catch (error) {
      setUser(null);
    } finally {
      setLoadingUser(false);
    }
  };
  useEffect(() => {
    checkSession();
  }, [checkSession]);

  const login = async (email, password) => {
    try {
      const { data } = await api.post("/api/auth/login", { email, password });
      setUser(data.user);
      toast.success("Welcome Back!");
      navigate("/");
    } catch {
      console.error("Login Failed:", err);
      const errMsg = err?.response?.data?.error || "Invalid Email or Password";
      toast.error(errMsg);
      throw new Error(errMsg);
    }
  };
  const register = async (name, email, password) => {
    try {
      const { data } = await api.post("/api/auth/register", {
        name,
        email,
        password,
      });
      setUser(data.user);
      toast.success("Account created successfully!");
      navigate("/");
    } catch(err){
      console.error("Registration Failed:", err);
      const errMsg = err?.response?.data?.error || "Invalid Email or Password";
      toast.error(errMsg);
      throw new Error(errMsg);
    }
  };

  return (
    <AppContext.Provider
      value={{ user, setUser,loadingUser, login, register }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context == undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
}
