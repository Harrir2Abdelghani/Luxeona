import React from 'react';
import logo from '../Components/Assets/logo.png'; 

function LoadingScreen() {
  return (
    <div className="flex justify-center items-center h-screen bg-offWhite">
      <div className="text-center">
        <img 
          src={logo} 
          alt="Luxeona Logo" 
          className="w-28 h-24 mx-auto opacity-0 animate-fadeIn" 
          style={{ animation: 'fadeIn 1s ease-out forwards' }}
        />
        <h1 
          className="mt-4 text-2xl font-pacifico text-deepPlum opacity-0 animate-fadeIn" 
          style={{ animation: 'fadeIn 1s ease-out 0.5s forwards, slideUp 1s ease-out 0.5s forwards' }}
        >
          Luxeona | Find Your Luxe, Live Your Style
        </h1>
      </div>
    </div>
  );
}

export default LoadingScreen;;
