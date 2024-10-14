import React, { useEffect, useState } from 'react';
import { FaHome, FaShoppingBag, FaHeart, FaUser } from 'react-icons/fa';
import { useLocation, Link } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Q84BsRp7scwrB2N4utSv5Rhw4RiI57sdGHXHRJJP5P2kCLlxF7XR8I9DcBJuHfaw3sE3BI2UwbV7aE14SBTvxcY00K58FChZU'); 

const CheckoutForm = ({ orderId, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const { error, paymentIntent } = await stripe.confirmCardPayment(orderId, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'ABDELGHANI Harrir', 
        },
      },
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      setError(null);
      setSucceeded(true);
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-4 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-700 text-center mb-4">Complete Your Payment</h2>
      <CardElement
        className="border border-gray-300 p-3 rounded-lg mb-4"
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={processing || !stripe || !elements}
        className="w-full bg-deepPlum text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-200"
      >
        {processing ? 'Processing...' : 'Pay Now'}
      </button>
      {error && <div className="text-red-500 mt-3">{error}</div>}
      {succeeded && <div className="text-green-500 mt-3">Payment successful!</div>}
    </form>
  );
};

const UserFavorites = () => {
  const location = useLocation();
  const [orderId, setOrderId] = useState(null);
  const [orderCreatedTime, setOrderCreatedTime] = useState('');
  const [amount, setAmount] = useState(5000); 

  useEffect(() => {
    const storedOrderId = localStorage.getItem('orderId');
    const storedOrderTime = localStorage.getItem('orderCreatedTime');
    if (storedOrderId) {
      setOrderId(storedOrderId);
      setOrderCreatedTime(storedOrderTime || new Date().toLocaleString());
      localStorage.setItem('orderCreatedTime', storedOrderTime || new Date().toLocaleString());
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-deepPlum mb-10">Order Summary</h1>

        {orderId ? (
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl mx-auto">
            <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">Order Details</h2>
            <div className="text-center text-gray-500 mb-6">
              <p>Order ID: <span className="font-semibold text-gray-700">{orderId}</span></p>
              <p>Order Created: <span className="font-semibold text-gray-700">{orderCreatedTime}</span></p>
            </div>
            <div className="flex justify-center mb-8">
              <QRCodeCanvas value={`Order ID: ${orderId}`} size={140} className="shadow-md border border-gray-200 p-2 rounded-lg" />
            </div>
            <Elements stripe={stripePromise}>
              <CheckoutForm orderId={orderId} amount={amount} />
            </Elements>
          </div>
        ) : (
          <div className="text-center text-gray-500">No order found. Please make a purchase first.</div>
        )}
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
  );
};

export default UserFavorites;
