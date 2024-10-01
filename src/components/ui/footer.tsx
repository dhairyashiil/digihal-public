import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex sm:flex-row justify-between items-center">
          {/* <div className="text-2xl font-bold">Digiहल</div> */}
          <a href="/" target="_blank" className="text-2xl font-bold text-white">
              Digiहल
            </a>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0">
            {/* <a href="/" target='_blank' className="hover:text-yellow-400 transition duration-300">About Us</a> */}
            <a href="/contactUs" target='_blank' className="font-bold hover:text-yellow-400 transition duration-300">Contact Us</a>
            {/* <a href="/privacy" className="hover:text-yellow-400 transition duration-300">Privacy Policy</a> */}
            {/* <a href="/terms" className="hover:text-yellow-400 transition duration-300">Terms of Service</a> */}
          </div>
        </div>

        {/* Social Media Icons */}
        {/* <div className="mt-4 flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaLinkedin />
          </a>
        </div> */}

        {/* Copyright Section */}
        <div className="text-center mt-6 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Digiहल. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
