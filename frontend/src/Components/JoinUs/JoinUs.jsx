import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const JoinUs = () => {
    const [animate, setAnimate] = useState(true);
  return (
    <section
      className="container mx-auto text-black py-16 px-8"
    >
      <div
        className={`max-w-4xl mx-auto text-center transition-transform duration-1000 ease-out ${
          animate ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-full opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold mb-6 text-deepPlum">
          Be a Part of Something Special!
        </h2>
        <p className="text-lg mb-8 text-gray-600">
          Create an account or log in to explore exclusive collections, manage your orders, and get personalized recommendations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to='/signin'>
            <button
              className="bg-deepPlum  text-white px-4 py-2 rounded-full hover:bg-roseGold transition duration-300 shadow-md"
            >
              Sign In
            </button>
            </Link>
            <Link to='/signin'>
            <button
              className="bg-blushPink  text-white px-4 py-2 rounded-full hover:bg-roseGold transition duration-300 shadow-md"
            >
              Sign Up
            </button>
            </Link>
        </div>
      </div>
    </section>
  );
}
export default JoinUs