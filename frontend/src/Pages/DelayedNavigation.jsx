import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';

function DelayedNavigation({ path }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate(path);
    }, 1500); 

    return () => clearTimeout(timer);
  }, [navigate, path]);

  return loading ? <LoadingScreen /> : null;
}
export default DelayedNavigation;

