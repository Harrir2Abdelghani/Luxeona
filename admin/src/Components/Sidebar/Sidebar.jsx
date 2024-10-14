import React, { useState } from 'react';
import { FaHome, FaUsers, FaCog } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { IoArrowBack } from 'react-icons/io5';
import {Link} from 'react-router-dom'
import { PiDresserFill } from "react-icons/pi";
import { IoBagAdd } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && !isOpen) {
      setIsOpen(true); 
    } else if (window.innerWidth < 768 && isOpen) {
      setIsOpen(false);
    }
  });
  return (
    <div className={`flex ${isOpen ? 'w-64' : 'w-20'} h-screen bg-customBlue transition-all duration-300`}>
      <div className="flex flex-col justify-between w-full h-full">
        <div>
          <div className="flex items-center justify-between p-4 text-center">
            {isOpen && <h1 className="text-3xl font-bold text-white font-mono">Luxeona</h1>}
            <button onClick={toggleSidebar} className="text-black">
              {isOpen ? (
                <MdClose size={24} /> 
              ) : (
                <FaCog size={24} /> 
              )}
            </button>
          </div>
          <nav className="mt-4">
            <ul>
              <Link to='/' >
              <li className="flex items-center hover:bg-customPurple hover:rounded-2xl">
                <button className="flex items-center w-full text-left text-black p-4  transition-all">
                  <FaHome size={24} className="mr-3" />
                  {isOpen && <span>Dashboard</span>}
                </button>
              </li>
              </Link>
              <li className="flex items-center hover:bg-customPurple hover:rounded-2xl">
                <Link to='/users'>
                <button className="flex items-center w-full text-left text-black p-4  transition-all">
                  <FaUsers size={24} className="mr-3" />
                  {isOpen && <span>Users</span>}
                </button>
                </Link>
              </li>
              <li className="flex items-center hover:bg-customPurple hover:rounded-2xl">
                <Link to='/listproduct'>
                <button className="flex items-center w-full text-left text-black p-4  transition-all">
                  <PiDresserFill size={24} className="mr-3"/>
                  {isOpen && <span>Products</span>}
                </button>
                </Link>    
              </li>
              <li className="flex items-center hover:bg-customPurple hover:rounded-2xl">
              <Link to='/addproduct'>
                <button className="flex items-center w-full text-left text-black p-4  transition-all">
                  <IoBagAdd size={24} className="mr-3"/>
                  {isOpen && <span>Add</span>}
                </button>
                </Link>
                </li>
                <li className="flex items-center hover:bg-customPurple hover:rounded-2xl">
              <Link to='/deletproduct'>
                <button className="flex items-center w-full text-left text-black p-4  transition-all">
                  <MdDelete size={24} className="mr-3"/>
                  {isOpen && <span>Delete</span>}
                </button>
                </Link>
                </li>
              <li className="flex items-center hover:bg-customPurple hover:rounded-2xl">
                <button className="flex items-center w-full text-left text-black p-4 hover:bg-customPurple hover:rounded-2xl transition-all">
                  <FaCog size={24} className="mr-3" />
                  {isOpen && <span>Settings</span>}
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-4 ">
          <button className="w-full flex items-center justify-center text-black p-4 bg-red-500 hover:bg-red-600 transition-all rounded-md lg:hidden">
            <IoArrowBack size={24} /> 
          </button>
          <button className="w-full  items-center justify-center text-black p-4 bg-blue-100 rounded-2xl hover:bg-blue-200 hover:rounded-2xl transition-all rounded-md hidden lg:flex">
            Exit 
          </button>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
