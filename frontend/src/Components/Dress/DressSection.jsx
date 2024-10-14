import React, { useState, useEffect } from 'react';
import banner from '../Assets/banner.jpg'
import {Link} from 'react-router-dom'
import product2 from '../Assets/product_2.jpg'
import product3 from '../Assets/product_3.jpg'
import product4 from '../Assets/product_4.jpg'
import product5 from '../Assets/product_5.jpg'
const DressSection = () => {
  const [animate, setAnimate] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const dresses = [
    
    {
      id: 2,
      title: 'Chic',
      description: 'A breezy and stylish dress for summer days.',
      price: 2500,
      image: product3,
    },
    {
      id: 3,
      title: 'Classic',
      description: 'A timeless black dress suitable .',
      price: 2200,
      image: product2,
    },
    {
      id: 4,
      title: 'Floral',
      description: 'A vibrant floral print dress for.',
      price: 1700,
      image: product4,
    },
    {
      id: 5,
      title: 'Elegant',
      description: 'A bold and beautiful red dress for evening.',
      price: 1500,
      image: product5,
    },
    
  ];
  const sortedDresses = [...dresses].sort((a, b) => {
    if (sortOption === 'price-asc') {
      return a.price - b.price;
    } else if (sortOption === 'price-desc') {
      return b.price - a.price;
    }
    return 0;
  });
  const filteredDresses = sortedDresses.filter(dress =>
    dress.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    setAnimate(true); 
  }, []);
  return (
    <>
    <section className="relative bg-cover bg-center h-96  text-dark font-dancing -mt-8">
    <div className="absolute inset-0 bg-opacity-50">
      <img src={banner} /> 
      </div> 
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
      <div className="text-center mt-60">
      <h1
        className={`text-3xl md:text-6xl font-bold transition-all duration-700 ease-out mt-10  ${
          animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        Explore Our Latest Dresses
      </h1>
      <p
        className={`mt-4  text-sm md:text-2xl font-mono transition-all duration-700 ease-out delay-200 ${
          animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        Luxury and Elegance in Every Stitch
      </p>
      <Link to='/signin'>
      <button
        className={`mt-6 px-4 py-3 bg-deepPlum hover:bg-roseGold text-white text-lg font-medium rounded-full font-sans shadow-lg transition-all duration-700 ease-out delay-500 transform ${
          animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } hover:bg-gray-700 hover:scale-105`}
      >
        Shop Now
      </button>
      </Link>
      </div>
    </div>
    <hr className="border-t-2 border-roseGold mt-20 w-1/2 mx-auto" />
  </section>
  <section className="py-8 px-4 mt-40">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-1">
        <input
          type="text"
          placeholder="Search dresses..."
          className="p-2 border font-dancing text-xl font-bold border-deepPlum rounded-lg w-full max-w-xs focus:ring-roseGold focus:border-roseGold mb-4 sm:mb-0"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 mb-2 border font-bold border-gray-300 rounded-lg text-deepPlum focus:ring-roseGold focus:border-roseGold"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
  {filteredDresses.length > 0 ? (
    filteredDresses.map((dress) => (
      <div
        key={dress.id}
        className="relative bg-gradient-to-br from-gray-300 via-white to-gray-200 border border-gray-200 rounded-xl shadow-lg "
      >
        {dress.discount && (
          <span className="absolute top-4 left-4 bg-roseGold text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {dress.discount}% OFF
          </span>
        )}
        <div className="overflow-hidden rounded-t-xl">
          <img
            src={dress.image}
            alt={dress.title}
            className="w-full h-64 object-cover transform transition duration-500 hover:scale-110"
          />
        </div>
        <div className="p-5 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2 text-black text-center font-mono">
            {dress.title}
          </h2>
          <div className="flex justify-center items-center space-x-4 mb-2">
            {dress.old_price && (
              <span className="text-lg text-gray-400 font-semibold line-through">
                Dz {dress.old_price}
              </span>
            )}
            <span className="text-lg text-white font-bold bg-deepPlum py-2 px-4 rounded-full shadow-md">
              Dz {dress.price}
            </span>
          </div>
          <Link to='/signin'>
          <button className="bg-roseGold mt-4 text-white py-2 px-6 rounded-full shadow-lg hover:bg-deepPlum transition-all duration-500">
            Add 
          </button>
          </Link>
        </div>
      </div>
    ))
  ) : (
    <p className="col-span-full text-center text-gray-600">No dresses found</p>
  )}
</div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
      <div className="text-center mt-10">
      <Link to='/signin'>
      <button
        className={`mt-6 px-6 py-3 bg-deepPlum hover:bg-roseGold text-white text-lg font-medium rounded-full font-sans shadow-lg transition-all duration-700 ease-out delay-500 transform ${
          animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } hover:bg-gray-700 hover:scale-105`}
      >
        Shop Now
      </button>
      </Link>
      </div>
    </div>
      <hr className="border-t-2 border-roseGold mt-20 w-1/2 mx-auto" />
    </section>
</>
  )
}
export default DressSection