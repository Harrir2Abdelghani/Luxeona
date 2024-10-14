import React, { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart, FaTimes, FaTrash, FaArrowLeft,FaPlus, FaMinus } from 'react-icons/fa'; 
import dress1 from '../Assets/dress-collection.jpg';
import men from '../Assets/product1.jpg';
import all from '../Assets/logo2.png';
import { FaHome, FaShoppingBag, FaHeart, FaUser } from 'react-icons/fa';
import {  useLocation, Link } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';


const categories = [
  { name: 'All', image: all },
  { name: 'Women', image: dress1 },
  { name: 'Men', image: men },
];
const UserShop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });
  const [cartVisible, setCartVisible] = useState(false); 
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const location = useLocation();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://192.168.1.38:4000/allproducts'); 
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory.toLowerCase();
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, products]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

    const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item._id === product._id);

    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setSelectedProduct(null); 
  };
  const deleteFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item._id !== productId));
  };
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.new_price * item.quantity, 0);
  };
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const [swiped, setSwiped] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [orderId, setOrderId] = useState(null); 
  const handleCheckout = () => {
    const generatedOrderId = Math.floor(Math.random() * 1000000);
    setOrderId(generatedOrderId);
    localStorage.setItem('orderId', generatedOrderId);
    setIsPopupVisible(true);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen mb-12">
      <div className="w-1/4 p-4 mt-20">
        <ul className="space-y-4">
          {categories.map((category) => (
            <li
              key={category.name}
              className={`cursor-pointer p-2 rounded-lg text-center ${
                selectedCategory === category.name ? 'bg-roseGold text-white' : 'bg-transparent '
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-12 h-12 rounded-full mx-auto mb-2 object-cover"
              />
              <p className="text-sm font-bold font-mono text-deepPlum">{category.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 p-4">
        <div className="flex justify-between items-center mb-4 -ml-24">
          <div>
            <h1 className="text-2xl font-bold text-deepPlum">Discover</h1>
            <p className=" text-sm text-gray-500">Explore Our New Collections</p>
          </div>
          <div className="relative">
            <FaShoppingCart
              className="text-red-500 text-2xl cursor-pointer"
              onClick={() => setCartVisible(!cartVisible)} 
            />
            {cartItems.length > 0 && (
              <span className="absolute -top-5 -right-3 bg-roseGold text-deepPlum text-sm font-bold rounded-full px-2 py-1">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>

        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search for Products..."
            className="w-full p-3 pl-10 rounded-full border-2 bg-white border-gray-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-4 text-deepPlum" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              onClick={() => handleProductClick(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-100 container m-8 -mt-4 p-3 rounded-3xl max-w-lg w-full relative">
            <button
              className="absolute top-0 right-2 text-red-500 font-extrabold text-2xl"
              onClick={() => setSelectedProduct(null)} 
            >
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-72  mb-4 rounded-2xl"
            />
            <h3 className="text-2xl font-bold text-deepPlum mb-2 text-center">{selectedProduct.name}</h3>
            <p className="text-gray-500 mb-6 text-center ">Price: {selectedProduct.new_price} Dz</p>
            <div className="flex justify-center">
                    <button
                        onClick={() => addToCart(selectedProduct)} 
                        className="w-1/2 bg-roseGold text-white py-2 rounded-lg  transition"
                    >
                        Add to Cart
                    </button>
            </div>
          </div>
        </div>
      )}

      {cartVisible && (
        <div className="fixed inset-0 z-50 bg-gray-100  p-5  ">
        <button
          className="absolute top-2 left-2 text-deepPlum hover:text-deepPlum-dark font-bold text-xl"
          onClick={() => setCartVisible(false)} 
        >
          <FaArrowLeft />
        </button>
        <div className="container  bg-white w-full inset-0 z-50  bg-opacity-95 p-4 pb-16  max-w-4xl rounded-2xl overflow-auto shadow-lg relative">
          <button
            className="absolute top-1 right-1  text-red-500 font-bold text-2xl"
            onClick={() => setCartVisible(false)} 
          >
            <FaTimes />
          </button>
          <div className=''>
            <h2 className="text-3xl text-deepPlum font-bold mb-5 text-center">Your Cart</h2>
          </div>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              <ul className="space-y-4 mt-4   rounded-lg p-1">
                {cartItems.map((item) => (
           <li
           key={item._id}
           className="relative flex items-center bg-gray-200 rounded-lg shadow-lg p-2 mb-2 transform transition-all duration-300 ease-in-out"
         >

           <div
             className={`absolute right-7 -top-2  flex  w-8 bg-transparent rounded-2xl transition-transform duration-300 ease-in-out ${
              swiped ? "translate-x-0" : "translate-x-full"
             }`}
           >
             <button
               onClick={() => deleteFromCart(item._id)}
               className="text-red-500 hover:text-gray-100 p-3"
             >
               <FaTrash className="w-4 h-4" />
             </button>
           </div>
     
           <div className="w-24 h-28 rounded-lg overflow-hidden ">
             <img
               src={item.image}
               alt={item.name}
               className="w-full h-full object-cover"
             />
           </div>

           <div className="flex-1 ml-4">
             <span className="block text-md font-semibold text-gray-900">{item.name}</span>
             <span className="block text-sm text-gray-500 mt-1">{item.new_price}  Dz</span>
             <span className="block text-sm text-gray-400 mt-1">Size: {item.size}</span>
           </div>

           <div className="flex flex-col items-center space-y-2  p-1 mr-4">
             <button
               onClick={() => increaseQuantity(item._id)}
               className="text-deepPlum font-bold bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow-md"
             >
               <FaPlus className="w-4 h-4" />
             </button>
     
             <span className="text-gray-700 text-sm font-semibold">{item.quantity}</span>
     
             <button
               onClick={() => decreaseQuantity(item._id)}
               className="text-deepPlum font-bold bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow-md"
             >
               <FaMinus className="w-4 h-4" />
             </button>
           </div>
         </li>
                ))}
              </ul>
      
              <div className="mt-6 px-4">
                <p className="text-lg font-semibold mb-4 text-center">Total: {calculateTotalPrice()} Dz</p>
                <button onClick={handleCheckout} className="w-full bg-roseGold text-white py-2 rounded-lg hover:bg-pink-600 transition duration-300">
                  Checkout
                </button>
                {isPopupVisible && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md mx-4 transform transition-all duration-300 ease-in-out scale-100 hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-center text-deepPlum">Order Created Successfully!</h2>
          <p className="text-center text-gray-600 mb-6">
            Your order has been successfully placed. Thank you for shopping with us!
          </p>
          <div className="flex justify-center mb-6">
            <div className="border-4 border-deepPlum p-4 rounded-lg shadow-lg">
              <QRCodeCanvas value={`Order ID: ${orderId}`} />
            </div>
          </div>
          <p className="text-center text-gray-600 mb-4">
            Go to the <Link to='/favorites' className="text-deepPlum font-semibold hover:underline">Order</Link> page to track your order.
          </p>
          <Link to='/shop'>
            <div className="flex justify-center">
              <button
                className="w-1/3 bg-roseGold text-deepPlum py-1 text-xl font-bold rounded-full shadow-md hover:bg-deepPlum hover:text-white transition-all duration-300"
                onClick={() => setIsPopupVisible(false)}
              >
                Close
              </button>
            </div>
          </Link>
        </div>
      </div>

      )}
              </div>
            </>
          )}
        </div>
      </div>
      )}

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
  );
};
export default UserShop;
