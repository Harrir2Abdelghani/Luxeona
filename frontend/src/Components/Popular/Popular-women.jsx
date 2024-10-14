import { useState } from "react";
import {Link } from 'react-router-dom'

function Popular({ data_women_product }) {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div
        className={`container mx-auto px-4 py-12 transform transition-transform duration-1000 ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
        }`}
    >
  <hr className="border-t-2 border-roseGold mb-16  w-1/2 mx-auto" />
  <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-deepPlum">
    Popular in Women 
  </h1>
  <p className="text-center text-lg mx-1 mt-8 text-gray-600 mb-12 font-mono font-bold">
    Discover our top trending dresses that are perfect for any occasion. Whether you're looking for elegance or casual chic, we have something for you ✨.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {data_women_product.map((item) => (
    <div
      key={item.id}
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-500 transform hover:-translate-y-3 p-3 flex flex-col md:flex-row lg:flex-col items-center text-left md:text-left lg:text-center border border-roseGold"
    >
      <div className="relative w-full h-80 overflow-hidden rounded-lg mb-2 md:mb-0 lg:mb-5 md:mr-2 lg:mr-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-96 object-cover rounded-xl transition-transform duration-500 hover:scale-110"
        />
        <span className="absolute top-1 left-0 bg-red-700 text-white text-xs px-3 py-1 rounded-full shadow-lg">
          Trending
        </span>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start lg:items-center">
        <h2 className="text-lg font-bold text-deepPlum font-mono mb-1">
          {item.name}
        </h2>
        <div className="flex flex-row justify-center md:justify-start items-center space-x-4 mb-3">
          <span className="text-lg text-gray-400 font-semibold line-through">
            Dz {item.old_price}
          </span>
          <span className="text-lg text-white font-bold bg-roseGold py-2 px-5 rounded-full shadow-sm">
            Dz {item.new_price}
          </span>
        </div>
        <Link to='/signin'>
          <button className="bg-deepPlum text-white py-2 px-6 rounded-full shadow-lg hover:bg-roseGold hover:shadow-2xl transition-all duration-500">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  ))}
</div>
  <div className="flex justify-center">
    <Link to='/dress'>
      <button className="mt-8 bg-roseGold hover:bg-blushPink text-white py-3 px-8 rounded-full shadow-lg transition duration-300">
        See More    
      </button>
    </Link>
  </div>    
</div>
  );
}
export default Popular;
