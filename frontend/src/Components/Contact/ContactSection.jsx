import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
const ContactSection = () => {
  return (
    <div className="bg-white p-6 md:p-12 lg:px-24 text-gray-800">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6 font-dancing text-deepPlum">Get in Touch</h2>
        <p className="text-xl text-gray-600 font-mono">We’re here to help with any inquiries you may have.</p>
      </div>
      <div className="mt-12 max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-6 text-center text-deepPlum">Send Us a Message</h3>
        <form className="space-y-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-pink-700">Name</label>
            <input type="text" id="name" className="p-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600" />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className=" text-pink-700">Email</label>
            <input type="email" id="email" className="p-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600" />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="message" className="text-pink-700">Message</label>
            <textarea id="message" rows="5" className="p-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600"></textarea>
          </div>
          <div className="text-center">
            <button className="bg-deepPlum text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <hr className="border-t-2 border-roseGold mt-20 w-1/2 mx-auto" />
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-6">Customer Support</h3>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-deepPlum text-2xl" />
            <p className="text-gray-600">support@Luxeona.com</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-deepPlum text-2xl" />
            <p className="text-gray-600">+213 123456789</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-deepPlum text-2xl" />
            <p className="text-gray-600">Algiers, Algeria</p>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-6">Connect with Us</h3>
        <div className="flex justify-center space-x-6">
          <a href="#" target="_blank" className="text-deepPlum  hover:text-indigo-600 transition-colors">
            <FaFacebook size={32} />
          </a>
          <a href="#" target="_blank" className="text-deepPlum hover:text-indigo-600 transition-colors">
            <FaInstagram size={32} />
          </a>
          <a href="#" target="_blank" className="text-deepPlum hover:text-indigo-600 transition-colors">
            <FaEnvelope size={32} />
          </a>
        </div>
      </div>
      <hr className="border-t-2 border-roseGold mt-20 w-1/2 mx-auto" />
      <div className="mt-16 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center text-deepPlum font-dancing">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h4 className="font-bold text-roseGold">How can I track my order?</h4>
            <p className="text-gray-600 mt-2">You can track your order using the tracking number sent to your email.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h4 className="font-bold text-roseGold">What is your return policy?</h4>
            <p className="text-gray-600 mt-2">You can return any item within 30 days of purchase. Please visit our returns page for more details.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h4 className="font-bold text-roseGold">Do you offer international shipping?</h4>
            <p className="text-gray-600 mt-2">Yes, we offer international shipping. Shipping costs and delivery times vary based on your location.</p>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-deepPlum font-dancing">What Our Customers Say</h3>
        <div className="space-y-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic ">"Amazing customer service and beautiful dresses! Highly recommend Luxeona!"</p>
            <p className="text-roseGold font-semibold mt-2">- Dina O.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic">"Fast shipping and great quality. I'm a happy customer!"</p>
            <p className=" font-semibold mt-2 text-roseGold">- Ghani H.</p>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-roseGold mt-20 w-1/2 mx-auto" />
    </div>
  )
}
export default ContactSection