import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram } from 'lucide-react';
import logo from '../public/logo.png'

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
            <img
            src={logo}
            className='h-36 w-36 mr-2'
            alt='Intellitax Solutions'
            />
              <span className="text-2xl font-bold text-gray-800">INTELLITAX SOLUTIONS</span>
            </Link>
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link className="nav-link text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" to="/">
                Home
              </Link>
              <Link className="nav-link text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" to="/ourservice">
                Our Service
              </Link>
              <Link className="nav-link text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" to="/guidance">
                Guidance
              </Link>
              <Link className="nav-link text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" to="/contact">
                Contact Us
              </Link>
            </div>
            
            <div className="ml-6 flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/in/kumaravel-k-06bb30197"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/intellitax.solution"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;