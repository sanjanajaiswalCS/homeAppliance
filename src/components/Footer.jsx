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
              <span className="text-xl font-bold text-white">CustomerServicesCenter</span>
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
                  AC Repair & Maintenance Services
                </Link>
              </li>
              <li>
                <Link to="/services/refrigerator-repair" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Refrigerator Repair Services
                </Link>
              </li>
              <li>
                <Link to="services/microwave-oven-repair" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Microwave Oven Repair Services
                </Link>
              </li>
              <li>
                <Link to="/services/kitchen-chimney-clearning-and-maintenance" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Kitchen Chimney Clearning and Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services/washing-machine-repair" className="text-slate-300 hover:text-blue-400 transition-colors">
                 Washing Machine Repair
                </Link>
              </li>
              <li>
                <Link to="/services/cctv" className="text-slate-300 hover:text-blue-400 transition-colors">
                  CCTV
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
                  <a href="tel:18008892801" className="text-white hover:text-blue-400 transition-colors">
                    1800 889 2801
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                {/* <Mail className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" /> */}
                {/* <div>
                  <p className="text-slate-300">Email:</p>
                  <a href="mailto:at@atyourservicesupport.com" className="text-white hover:text-blue-400 transition-colors">
                    at@atyourservicesupport.com
                  </a>
                </div> */}
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">Address:</p>
                  <p className="text-white">
                    Mumbai, Maharashtra
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">Business Hours:</p>
                  <p className="text-white">
                    Sun-Sat: 8:00 AM - 8:00 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4"> Refund Policy</h3>
            <p className="text-gray-400">
              At customerservicescenter.com, refunds are available if we cannot provide a scheduled service or fail to meet agreed-upon standards.

              No refunds will be issued for completed services, customer no-shows, or failure to meet service requirements.

              Refund requests must be made within 2 days via email and will be processed within 7 working days. Contact us at [1800-889-2801] for assistance.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-400 mb-4">
              Disclaimer: Customer Services Center is an independent service provider and not an authorized dealer or representative of any brand. All trademarks and brand names belong to their respective owners.
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Our services are not affiliated with or endorsed by any manufacturer, and we are not responsible for warranty voidance or brand-specific claims. For official support, please contact the authorized service center.
            </p>
            <p className="text-sm text-gray-400 mb-4">
              All products are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation/endorsement by them with us.
            </p>
            <p className="text-sm text-gray-500">
              Copyright © Customer Services Center {new Date().getFullYear()} | Powered by Customer Services Center
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
