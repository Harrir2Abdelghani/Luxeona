import React from 'react'
import { useState, useEffect } from 'react';
const ListProduct = () => {
    const [allproducts, setAllProducts] = useState([]);
    const fetchInfo = async () => {
        await fetch('http://192.168.1.38:4000/allproducts').then((res) => {
            res.json().then((data) => {
                setAllProducts(data);
            })
        })
    }
    useEffect(() => {
        fetchInfo();
    }, [])
  return (
    <div className="container mx-auto p-4">
  <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">All List Products</h1>
  <div className="divide-y divide-gray-300 mt-4 space-y-6">
    {allproducts.map((product, index) => (
      <div 
        key={index} 
        className="flex flex-col sm:grid sm:grid-cols-5 gap-4 py-4 items-center bg-white sm:bg-transparent shadow-lg sm:shadow-none rounded-lg p-4 sm:p-0 mb-4 sm:mb-0"
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full sm:w-20 sm:h-20 object-cover rounded-lg mb-2 sm:mb-0" 
        />
        <p className=" text-gray-800">{product.name}</p>
        <p className="text-gray-600">${product.price}</p>
        <p className="text-gray-800 text-center sm:text-left">{product.category}</p>
        <p className="text-gray-800 text-center sm:text-left">Yes</p>
      </div>
    ))}
  </div>
</div>
  )
}
export default ListProduct