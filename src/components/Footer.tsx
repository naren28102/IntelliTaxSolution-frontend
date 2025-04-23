import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+919445321852" className="flex items-center hover:text-gray-300">
                <Phone size={20} className="mr-2" />
                +91 9445321852
              </a>
              <a href="mailto:intellitaxsolution.kad@gmail.com" className="flex items-center hover:text-gray-300">
                <Mail size={20} className="mr-2" />
                intellitaxsolution.kad@gmail.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Our Locations</h3>
            <div className="space-y-3">
              <a 
                href="https://maps.app.goo.gl/u9XtHV4fbaq5LA3y8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-gray-300"
              >
                <MapPin size={20} className="mr-2" />
                34/60, Kandappa St, opp. Super Saravana Stores, Perumalpet, Purasaiwakkam, Chennai, Tamil Nadu 600007
              </a>
              <a 
                href="https://maps.google.com/?q=10,+Angalamman+Kovil+Street,+Govindapuram,+Pattalam,+Perambur+Barracks,+Chennai+-+600012"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-gray-300"
              >
                <MapPin size={20} className="mr-2" />
                10, Angalamman Kovil Street, Govindapuram, Pattalam, Chennai - 600012
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/intellitaxsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/intellitax.solution"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} INTELLITAX Solution. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-white">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;