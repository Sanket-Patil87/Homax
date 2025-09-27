import React from 'react';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import Logo from '/fav2.svg';
const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center lg:items-start">
                <h2 className="text-2xl font-bold text-purple-400 mb-4">            <img src={Logo} alt="logo" className='flex flex-row  w-10'/>Homely</h2>
            <p className="text-gray-300 text-sm text-center lg:text-left">
              Your trusted partner for professional cleaning services, delivering spotless results every time.
            </p>
          </div>

          {/* Services Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-lg font-semibold text-purple-300 mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="/deep-cleaning" className="hover:text-purple-400 transition">
                  Home Deep Cleaning
                </a>
              </li>
              <li>
                <a href="/kitchen-cleaning" className="hover:text-purple-400 transition">
                  Kitchen Cleaning
                </a>
              </li>
              <li>
                <a href="/bathroom-cleaning" className="hover:text-purple-400 transition">
                  Bathroom Cleaning
                </a>
              </li>
              <li>
                <a href="/carpet-cleaning" className="hover:text-purple-400 transition">
                  Carpet Cleaning
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-lg font-semibold text-purple-300 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="mailto:support@cleanease.com" className="hover:text-purple-400 transition">
                  Email: support@cleanease.com
                </a>
              </li>
              <li>
                <a href="tel:+911234567890" className="hover:text-purple-400 transition">
                  Phone: +91 123 456 7890
                </a>
              </li>
              <li>Address: 123 Clean St, Mumbai, India</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-lg font-semibold text-purple-300 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
                aria-label="Follow us on Facebook"
              >
                <Facebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
                aria-label="Follow us on Twitter"
              >
                <Twitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
                aria-label="Follow us on Instagram"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Homely. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;