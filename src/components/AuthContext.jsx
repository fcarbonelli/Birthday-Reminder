import React, { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [email, setEmail] = useState("");

  const checkAuthStatus = () => {
    const token = localStorage.getItem('accessToken');
    const idToken = localStorage.getItem('idToken');
  
    if (token) {
      const decodedToken = jwt_decode(token);

      const emailToken = jwt_decode(idToken);
      setEmail(emailToken.email)

      const expirationTime = decodedToken.exp * 1000; 

      const isTokenExpired = Date.now() > expirationTime;

      if (!isTokenExpired) {
        setIsAuthenticated(true);
        setAccessToken(token);
      } else {
        handleSignOut();
      }
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('idToken');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, accessToken, email, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
