import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [service, setService] = useState([]);
  const [user,setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLocalStorage = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  const isLogin = !!token;

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  const getService = async () => {
    try {
      
      const response = await fetch("http://localhost:8080/service", {
        method: "GET",
      });
      const res_data = await response.json();
      setService(res_data);
    } catch (error) {
      console.log("You have an Error in Service part....");
    }
  };

  const getUser = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/user", {
        method: "GET",
        headers : {
          authorization : authorizationToken
        }
      });
      const res_data = await response.json();
      setUser(res_data);
      setIsLoading(false);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getService();
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ storeTokenInLocalStorage, LogoutUser, isLogin, service,user,authorizationToken,isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthComsumer = () => {
  const AuthContextValue = useContext(AuthContext);
  return AuthContextValue;
};
