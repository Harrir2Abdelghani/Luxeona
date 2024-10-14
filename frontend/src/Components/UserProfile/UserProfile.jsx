import React, { useState, useEffect } from 'react';
import { FiPhone, FiLogOut, FiShoppingBag, FiMessageSquare, FiShare2, FiGlobe } from 'react-icons/fi';
import { useLocation,Link } from 'react-router-dom';
import { FaHome, FaShoppingBag, FaHeart, FaUser } from 'react-icons/fa';

export const UserProfile = () => {
    const location = useLocation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || null);
    const [isPhoneEditable, setIsPhoneEditable] = useState(true);
    const [username, setUsername] = useState('');
    useEffect(() => {
      const storedUsername = localStorage.getItem('username'); 
      
      if (storedUsername) {
        setUsername(storedUsername);
      }

    }, []);

  useEffect(() => {
    const storedPhoneNumber = localStorage.getItem('phoneNumber');
    if (storedPhoneNumber) {
      setPhoneNumber(storedPhoneNumber);
      setIsPhoneEditable(false);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      localStorage.setItem('profileImage', imageUrl);  
    }
  }
  const handleAddPhoneNumber = () => {
    if (phoneNumber) {
      localStorage.setItem('phoneNumber', phoneNumber);  
      setIsPhoneEditable(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('auth-token');  
    window.location.href = '/'; 
  };

  const handleContactUs = () => {
    window.location.href = '/contact'; 
  };

  const handleShareApp = () => {
    const shareLink = 'http://localhost:3000';

    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareLink)
        .then(() => alert('App link copied to clipboard!'))
        .catch(() => alert('Failed to copy the link'));
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = shareLink;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('App link copied to clipboard!');
    }
  };

  return (
    <div>
     <div className="min-h-screen bg-gray-100 p-6 mb-8">
  <div className="bg-white rounded-xl shadow-lg p-6 mb-8 max-w-md mx-auto">
    <div className="flex flex-col items-center">
      <div className="relative mb-4">
        <img
          src={profileImage || "https://via.placeholder.com/150"}
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
        />
        <label className="absolute bottom-0 right-0 bg-roseGold p-2 rounded-full text-white cursor-pointer">
          <input
            type="file"
            className="hidden"
            onChange={handleImageChange}
          />
          Edit
        </label>
      </div>
      <h2 className="text-xl font-semibold mb-4">Welcome, {username || 'User'}!</h2> 
      <div className="text-center">
        <div className="flex items-center justify-center mb-2">
          <FiPhone className="text-roseGold mr-2" />
          <input
            type="text"
            placeholder="Add Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            disabled={!isPhoneEditable}
            className={`border border-gray-300 rounded-md p-2 text-center w-48 ${!isPhoneEditable ? 'bg-gray-200 cursor-not-allowed' : ''}`}
          />
          {isPhoneEditable && (
            <button
              onClick={handleAddPhoneNumber}
              className="ml-2 bg-roseGold text-white py-2 px-4 rounded-md hover:bg-pink-600 transition"
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  </div>

  <div className="grid gap-4 max-w-md mx-auto">

     <div className="bg-white rounded-xl shadow-lg p-6 text-deepPlum">
      <h3 className="text-lg font-bold">About Us</h3>
      <p className="mt-2 text-gray-600">
        We are a company that provides premium fashion products for both men & women. Our mission is to offer a seamless shopping experience with style and elegance.
      </p>
    </div>

    <Link to='/favorites'>
    <button className="flex items-center w-full bg-white rounded-xl shadow-lg p-4 text-deepPlum  transition">
      <FiShoppingBag className="text-roseGold text-xl mr-4" />
      Purchase History
    </button>
    </Link>
 
    <button
      onClick={handleContactUs}
      className="flex items-center w-full bg-white rounded-xl shadow-lg p-4 text-deepPlum  transition"
    >
      <FiMessageSquare className="text-roseGold text-xl mr-4" />
      Contact Us
    </button>
 
    <button
      onClick={handleShareApp}
      className="flex items-center w-full bg-white rounded-xl shadow-lg p-4 text-deepPlum  transition"
    >
      <FiShare2 className="text-roseGold text-xl mr-4" />
      Share App
    </button>
 
    <button className="flex items-center w-full bg-white rounded-xl shadow-lg p-4 text-deepPlum  transition">
      <FiGlobe className="text-roseGold text-xl mr-4" />
      Change Language
    </button>

<div className='flex justify-center'>
  <button
    onClick={handleLogout}
    className="flex items-center font-bold text-lg justify-center text-center bg-roseGold rounded-xl shadow-lg w-1/2 p-4 text-deepPlum  transition"
  >
    <FiLogOut className="text-deepPlum font-bold text-xl " />
    <span className="ml-1">Logout</span>
  </button>
</div>
  </div>
</div>

      <div className="fixed bottom-0 left-0 right-0 bg-roseGold p-0 shadow-lg flex justify-around items-center space-x-8 rounded-t-3xl ">
        <Link to="/user">
          <button
            className={`group flex flex-col items-center font-bold p-2  transition duration-300 ease-in-out
              ${location.pathname === '/user' ? ' text-white scale-105' : 'text-deepPlum hover:scale-105'}`}
          >
            <FaHome className="text-2xl mb-1 transition duration-300" />
          </button>
        </Link>
        <Link to="/shop">
          <button
            className={`group flex flex-col items-center font-bold p-2  transition duration-300 ease-in-out
              ${location.pathname === '/shop' ? ' text-white scale-105' : 'text-deepPlum hover:scale-105'}`}
          >
            <FaShoppingBag className="text-2xl mb-1 transition duration-300" />
          </button>
        </Link>
        <Link to="/favorites">
          <button
            className={`group flex flex-col items-center font-bold p-2  transition duration-300 ease-in-out
              ${location.pathname === '/favorites' ? ' text-white scale-105' : 'text-deepPlum hover:scale-105'}`}
          >
            <FaHeart className="text-2xl mb-1 transition duration-300" />
          </button>
        </Link>
        <Link to="/profile">
          <button
            className={`group flex flex-col items-center font-bold p-2  transition duration-300 ease-in-out
              ${location.pathname === '/profile' ? ' text-white scale-105' : 'text-deepPlum hover:scale-105'}`}
          >
            <FaUser className="text-2xl mb-1 transition duration-300" />
          </button>
        </Link>
      </div>
    </div>
  )
}
