import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Menu, X } from 'lucide-react';
import logo from '../public/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} className="h-18 w-20 mr-2" alt="Intellitax Solution" />
              <span className="text-xl font-bold text-gray-800">INTELLITAX SOLUTION</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link className="text-gray-700 hover:text-gray-900 text-sm font-medium" to="/">Home</Link>
            <Link className="text-gray-700 hover:text-gray-900 text-sm font-medium" to="/ourservice">Our Service</Link>
            <Link className="text-gray-700 hover:text-gray-900 text-sm font-medium" to="/guidance">Guidance</Link>
            <Link className="text-gray-700 hover:text-gray-900 text-sm font-medium" to="/contact">Contact Us</Link>
          </div>
          
          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.linkedin.com/company/intellitaxsolutions" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/intellitax.solution" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
              <Instagram size={24} />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-3 flex flex-col space-y-3">
            <Link className="text-gray-700 hover:text-gray-900 text-base font-medium" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link className="text-gray-700 hover:text-gray-900 text-base font-medium" to="/ourservice" onClick={() => setMenuOpen(false)}>Our Service</Link>
            <Link className="text-gray-700 hover:text-gray-900 text-base font-medium" to="/guidance" onClick={() => setMenuOpen(false)}>Guidance</Link>
            <Link className="text-gray-700 hover:text-gray-900 text-base font-medium" to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            
            {/* Social Links in Mobile Menu */}
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/company/intellitaxsolutions" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/intellitax.solution" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;