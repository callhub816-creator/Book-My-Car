import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* 1. Brand & Authority */}
          <div className="col-span-1">
            <Link
              to="/"
              title="BookMyCar.live – India's Best Road Trip & Rental Guide"
              className="flex items-center space-x-2 mb-4 group"
            >
              <div className="bg-brand-600 p-1.5 rounded-lg group-hover:bg-brand-500 transition-colors">
                <Car className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                BookMyCar<span className="text-brand-500">.live</span>
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              BookMyCar.live is an independent informational platform for Indian road trips and self-drive car rules. We publish human-written, unbiased guides — no bookings, no affiliations.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="text-gray-400 hover:text-brand-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="text-gray-400 hover:text-brand-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-gray-400 hover:text-brand-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* 2. Explore Navigation */}
<nav aria-label="Footer navigation">
  <h3 className="text-xs font-bold text-gray-200 uppercase tracking-widest mb-6">
    Explore
  </h3>
  <ul className="space-y-3">
    <li>
      <Link
        to="/"
        className="text-gray-400 hover:text-white text-sm transition-colors"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="/blog"
        className="text-gray-400 hover:text-white text-sm transition-colors"
      >
        Blog
      </Link>
    </li>
    <li>
      <Link
        to="/rules"
        className="text-gray-400 hover:text-white text-sm transition-colors"
      >
        Travel Rules
      </Link>
    </li>
    <li>
      <Link
        to="/about"
        className="text-gray-400 hover:text-white text-sm transition-colors"
      >
        About
      </Link>
    </li>
    <li>
      <Link
        to="/contact"
        className="text-gray-400 hover:text-white text-sm transition-colors"
      >
        Contact
      </Link>
    </li>
  </ul>
</nav>


          {/* 3. Legal & Support (High Trust Signals) */}
          <nav aria-label="Legal links">
            <h3 className="text-xs font-bold text-gray-200 uppercase tracking-widest mb-6">
              Transparency
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Full Disclaimer
                </Link>
              </li>

              {/* ✅ Clickable Email (Mailto) */}
              <li className="flex items-center text-gray-400 text-sm pt-2">
                <Mail className="h-4 w-4 mr-2 text-brand-500" />
                <a
                  href="mailto:support@bookmycar.live"
                  aria-label="Email BookMyCar.live support"
                  title="Send us an email"
                  className="hover:text-brand-500 transition-colors underline decoration-gray-700 underline-offset-4"
                >
                  support@bookmycar.live
                </a>
              </li>
            </ul>
          </nav>

          {/* 4. EEAT / Disclaimer Box */}
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h3 className="text-xs font-bold text-gray-200 uppercase tracking-widest mb-3">
              Important Notice
            </h3>
            <p className="text-[11px] text-gray-400 leading-relaxed italic">
              <strong>BookMyCar.live is an informational blog only.</strong> We do not provide car rental,
              taxi, or booking services. We are not affiliated with Zoomcar, Revv, or any rental brand.
              All information is published for educational purposes only.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-center gap-4">
          <p className="text-[11px] text-gray-500 uppercase tracking-wider">
            © {currentYear} BookMyCar.live. Designed for Indian road trip enthusiasts.
          </p>
          <div className="text-[10px] text-gray-600 font-medium">
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;