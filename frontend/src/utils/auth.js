export const isAuthenticated = () => {
    return localStorage.getItem('auth-token') !== null; 
  };