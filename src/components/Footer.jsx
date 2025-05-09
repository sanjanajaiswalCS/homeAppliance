import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Wrench } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="text-blue-400 h-8 w-8" />
              <span className="text-xl font-bold text-white">AppliancePro</span>
            </div>
            <p className="text-slate-300 mb-4">
              Your trusted partner for professional appliance repair services. Quality service guaranteed.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services/ac-repair" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/ac-repair" className="text-slate-300 hover:text-blue-400 transition-colors">
                  AC Repair Services
                </Link>
              </li>
              <li>
                <Link to="/services/refrigerator-repair" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Refrigerator Repair Services
                </Link>
              </li>
              <li>
                <Link to="/services/washing-machine-repair" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Washing Machine Repair Services
                </Link>
              </li>
              <li>
                <Link to="/services/microwave-oven-repair" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Microwave Oven Repair Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">Call Us:</p>
                  <a href="tel:+18001234567" className="text-white hover:text-blue-400 transition-colors">
                    1-800-123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">Email:</p>
                  <a href="mailto:info@appliancepro.com" className="text-white hover:text-blue-400 transition-colors">
                    info@appliancepro.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">Address:</p>
                  <p className="text-white">
                    123 Repair Street, Appliance City, AC 12345
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">Business Hours:</p>
                  <p className="text-white">
                    Mon-Sat: 8:00 AM - 8:00 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-700 text-center md:flex md:justify-between md:items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AppliancePro. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/privacy-policy" className="text-slate-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="text-slate-400 hover:text-blue-400 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
