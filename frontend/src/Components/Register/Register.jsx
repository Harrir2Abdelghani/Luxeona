import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaFacebookF, FaGoogle, FaApple } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    }
  };
  const signup = async () => {
    if (emailError) {
      alert('Please correct the errors before submitting');
      return;
    }
    let responseData;
    await fetch('http://192.168.1.38:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.authToken);
      navigate('/user');
    } else {
      alert(responseData.errors);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 -mt-32">
      <div className="bg-white shadow-lg rounded-2xl p-8 sm:p-10 w-full max-w-md">
        <h1 className="text-deepPlum  text-3xl font-bold text-center mb-6">Register</h1>
        <p className="text-gray-500 text-center mb-8">Create your new account</p>
        <form className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <FaUser className="text-roseGold" />
            <input 
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text" 
              placeholder="Full Name" 
              className="ml-3 w-full focus:outline-none"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <FaEnvelope className="text-roseGold" />
            <input 
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="email" 
              placeholder="user@mail.com" 
              className="ml-3 w-full focus:outline-none"
              required
            />
          </div>
          {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <FaLock className="text-roseGold" />
            <input 
              name="password"
              value={formData.password}
              onChange={changeHandler}
              type="password" 
              placeholder="Password" 
              className="ml-3 w-full focus:outline-none"
            />
          </div>
        </form>
        <button 
          onClick={signup} 
          className="w-full bg-deepPlum text-white py-3 rounded-lg mt-6 shadow-lg hover:bg-roseGold transition duration-300"
        >
          Register
        </button>
        <div className="mt-8 flex items-center justify-between">
          <hr className="w-full border-gray-300" />
          <p className="text-gray-500 px-4 flex items-center">Or:</p>
          <hr className="w-full border-gray-300" />
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <button className="bg-white shadow-md rounded-full p-3 text-blue-600">
            <FaFacebookF />
          </button>
          <button className="bg-white shadow-md rounded-full p-3 text-red-600">
            <FaGoogle />
          </button>
          <button className="bg-white shadow-md rounded-full p-3 text-black">
            <FaApple />
          </button>
        </div>
        <p className="text-center mt-8 text-sm text-gray-600">
          Already have an account? <a href="/signin" className="text-deepPlum font-semibold">Sign in</a>
        </p>
      </div>
    </div>
  );
};
export default Register;
