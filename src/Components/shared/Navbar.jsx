import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Primary Nav Links */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to={"/"}><a href="#home" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 hover:text-yellow-300 transition duration-300">Home</a></Link>
              <a href="#contact" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 hover:text-yellow-300 transition duration-300">Contact</a>
              <a href="#blog" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 hover:text-yellow-300 transition duration-300">Blog</a>
              <a href="#product" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 hover:text-yellow-300 transition duration-300">Product</a>
            </div>
          </div>
          {/* Secondary Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
           <Link to={"/login"}> <a href="/login" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 hover:text-yellow-300 transition duration-300">Student Information Form</a></Link>
            <a href="/registration" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 hover:text-yellow-300 transition duration-300">Registration</a>
          </div>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;