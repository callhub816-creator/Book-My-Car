import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Car className="h-6 w-6 text-brand-500" />
              <span className="text-xl font-bold">BookMyCar.live</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Your trusted companion for road trips, car rentals, and travel safety advice in India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-400 hover:text-white text-sm">Travel Blog</Link></li>
              <li><Link to="/rules" className="text-gray-400 hover:text-white text-sm">Rental Rules</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer" className="text-gray-400 hover:text-white text-sm">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-500"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-500"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-500"><Instagram className="h-5 w-5" /></a>
            </div>
            <div className="mt-6">
              <p className="text-xs text-gray-500">© {new Date().getFullYear()} BookMyCar.live. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;