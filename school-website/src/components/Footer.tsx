import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-14">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Column 1: Basic Information */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">School Name</h2>
          <p className="text-lg">Address: 123 School St, City, State, 12345</p>
          <p className="text-lg">Phone: (123) 456-7890</p>
          <p className="text-lg">Email: info@schoolname.com</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/academics" className="footer-link">Academics</Link></li>
            <li><Link to="/admissions" className="footer-link">Admissions</Link></li>
            <li><Link to="/facilities" className="footer-link">Facilities</Link></li>
          </ul>
        </div>

        {/* Column 3: Social Media Links */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook className="text-4xl hover:text-blue-600 transform transition-all duration-300"/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter className="text-4xl hover:text-blue-400 transform transition-all duration-300"/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram className="text-4xl hover:text-pink-500 transform transition-all duration-300"/>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin className="text-4xl hover:text-blue-700 transform transition-all duration-300"/>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black text-white py-4 text-center mt-12 text-sm shadow-md rounded-t-lg">
        <p>© 2024 School Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
