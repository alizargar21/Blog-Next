"use client";
import { getUserApi, signinApi, signupApi } from "@/services/authService";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthentication: false,
  isLoading: true,
  error: false,
};
const authReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "signin":
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    case "signup":
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    case "user/loaded":
      return {
        user: action.payload,
        isAuthenticated: true,
      };
  }
};
export default function AuthProvider({ children }) {
  const router = useRouter();

  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  async function signin(values) {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signinApi(values);
      dispatch({ type: "signin", payload: user });
      toast.success(message);
      router.push("/");
    } catch (error) {
      const errMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errMsg });
      toast.error(errMsg);
    }
  }
  async function signup(values) {
    try {
      const { user, message } = await signupApi(values);
      dispatch({ type: "signup", payload: user });
      toast.success(message);
      router.push("/");
    } catch (error) {
      const errMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errMsg });
      toast.error(errMsg);
    }
  }
  async function getUser() {
    dispatch({ type: "loading" });
    try {
      //       await new Promise((resolve) => setTimeout(resolve, 3000));
      const { user, message } = await getUserApi();

      dispatch({ type: "user/loaded", payload: user });
      // console.log(message);
      // toast.success(message);
    } catch (error) {
      const errMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errMsg });
            // toast.error(errMsg);
    }
  }
  useEffect(() => {
    async function fetchData() {
      await getUser();
    }
    fetchData();
  }, []);
  return (
    <AuthContext.Provider value={{ user, signin, signup, isLoading, getUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("not found auth context");
  return context;
}
