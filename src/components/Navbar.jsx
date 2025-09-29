import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Wrench, ChevronRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const Navbar = ({ isScrolled }) => {
  const customLabels = {
    "Washing Machine Repair": "Washing Machine Repair Service",
    "AC Repair & Maintenance": "AC Repair",
    "Refrigerator Repair": "Refrigerator Repair Service",
    "Microwave Oven Repair": "Microwave Oven Repair Service",
    "Kitchen Chimney Clearning and Maintenance": "Kitchen Chimney Service",
    "CCTV": "CCTV Installation Service"
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-3'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Wrench className="text-blue-600 h-8 w-8" />
          <span className="text-xl font-bold text-blue-600">CustomerServicesCenter</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            About Us
          </NavLink>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setHoveredCategory('services')}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <NavLink   to="/service" className="nav-link flex items-center" onClick={toggleMenu}>
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </NavLink>

            {/* First level dropdown - Services */}
            {hoveredCategory === 'services' && (
              <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md z-50">
                {Object.keys(servicesData).map((serviceType) => (
                  <div
                    key={serviceType}
                    className="relative group"
                    onMouseEnter={() => setHoveredService(serviceType)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <Link
                      to={`/services/${serviceType.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center justify-between px-4 py-2 hover:bg-slate-50 hover:text-blue-600"
                    >
                      <span>{serviceType}</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>

                    {hoveredService === serviceType && (
                      <div className="absolute top-0 left-full w-64 bg-white shadow-lg rounded-md py-2 ml-1 z-50">
                        {servicesData[serviceType].map((brand) => (
                          <Link
                            key={brand}
                            to={`/services/${serviceType.toLowerCase().replace(/\s+/g, '-')}/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-4 py-2 hover:bg-slate-50 hover:text-blue-600"
                          >
                            {customLabels[serviceType]
                              ? `${brand} ${customLabels[serviceType].replace(/Service$/, '')} Service`
                              : `${brand} Repair Service`}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/testimonials"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Testimonials
          </NavLink>
          <NavLink
            to="/terms-of-use"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Terms of Use
          </NavLink>
          <NavLink
            to="/Privacy-Policy"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Privacy Policy
          </NavLink>
        </nav>

        {/* Call Button */}
        <a
          href="tel:+18008892801"
          className="hidden md:flex items-center gap-2 btn btn-primary"
        >
          <Phone className="h-4 w-4" />
          <span>18008892801</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-slate-700" />
          ) : (
            <Menu className="h-6 w-6 text-slate-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container py-4 space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'block nav-link-active' : 'block nav-link'
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'block nav-link-active' : 'block nav-link'
              }
              onClick={toggleMenu}
            >
              About Us
            </NavLink>

            {/* Mobile Services Menu */}
            <div className="relative">
              <button
                className="flex items-center justify-between w-full nav-link"
                onClick={() => setHoveredCategory(hoveredCategory === 'mobile-services' ? null : 'mobile-services')}
              >
                <NavLink to='/service' onClick={toggleMenu}>
                  Services
                </NavLink>
                <ChevronDown className={`h-4 w-4 transition-transform ${
                  hoveredCategory === 'mobile-services' ? 'rotate-180' : ''
                }`} />
              </button>

              {hoveredCategory === 'mobile-services' && (
                <div className="pl-4 mt-2 space-y-2">
                  {Object.keys(servicesData).map((serviceType) => (
                    <div key={serviceType} className="relative">
                      <button
                        className="flex items-center justify-between w-full nav-link"
                        onClick={() => setHoveredService(hoveredService === serviceType ? null : serviceType)}
                      >
                        <span>{serviceType}</span>
                        <ChevronRight className="h-4 w-4" />
                      </button>

                      {hoveredService === serviceType && (
                        <div className="pl-4 mt-2 space-y-2">
                          {servicesData[serviceType].map((brand) => (
                            <Link
                              key={brand}
                              to={`/services/${serviceType.toLowerCase().replace(/\s+/g, '-')}/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block nav-link"
                              onClick={toggleMenu}
                            >
                              {customLabels[serviceType]
                                ? `${brand} ${customLabels[serviceType].replace(/Service$/, '')} Service`
                                : `${brand} Repair Service`}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'block nav-link-active' : 'block nav-link'
              }
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/testimonials"
              className={({ isActive }) =>
                isActive ? 'block nav-link-active' : 'block nav-link'
              }
              onClick={toggleMenu}
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/terms-of-use"
              className={({ isActive }) =>
                isActive ? 'block nav-link-active' : 'block nav-link'
              }
              onClick={toggleMenu}
            >
              Terms of Use
            </NavLink>
            <NavLink
              to="/Privacy-Policy"
              className={({ isActive }) =>
                isActive ? 'block nav-link-active' : 'block nav-link'
              }
              onClick={toggleMenu}
            >
              Privacy Policy
            </NavLink>

            {/* Mobile Call Button */}
            <a
              href="tel:+18008892801"
              className="flex items-center justify-center gap-2 btn btn-primary w-full"
              onClick={toggleMenu}
            >
              <Phone className="h-4 w-4" />
              <span>18008892801</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;