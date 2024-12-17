import { Navigate, useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(UserContext);
    
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    
    return children;
  };

export const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext);
  
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};