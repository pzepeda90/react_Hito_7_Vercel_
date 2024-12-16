import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({
  isAuthenticated: true,
  login: () => {},
  logout: () => {}
});

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <UserContext.Provider 
      value={{ 
        isAuthenticated, 
        login, 
        logout 
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
