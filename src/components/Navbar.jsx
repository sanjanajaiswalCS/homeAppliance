import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Wrench } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const Navbar = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Wrench className="text-blue-600 h-8 w-8" />
          <span className="text-xl font-bold text-blue-600">AppliancePro</span>
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
            <button className="nav-link flex items-center">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {hoveredCategory === 'services' && (
              <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md py-2 z-50">
                {Object.keys(servicesData).map((serviceType) => (
                  <Link
                    key={serviceType}
                    to={`/services/${serviceType.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-4 py-2 hover:bg-slate-50 hover:text-blue-600"
                  >
                    {serviceType}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Brands Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setHoveredCategory('brands')}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <button className="nav-link flex items-center">
              Brands <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {hoveredCategory === 'brands' && (
              <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md py-2 z-50">
                {Object.entries(servicesData).map(([serviceType, brands]) => (
                  <div key={serviceType} className="px-4 py-2">
                    <div className="font-medium text-slate-900 mb-1">{serviceType}</div>
                    <div className="pl-2 space-y-1">
                      {brands.map((brand) => (
                        <Link
                          key={brand}
                          to={`/services/${serviceType.toLowerCase().replace(/\s+/g, '-')}/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-sm text-slate-600 hover:text-blue-600 py-1"
                        >
                          {brand}
                        </Link>
                      ))}
                    </div>
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
        </nav>

        {/* Call Button */}
        <a
          href="tel:+18001234567"
          className="hidden md:flex items-center gap-2 btn btn-primary"
        >
          <Phone className="h-4 w-4" />
          <span>1-800-123-4567</span>
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
            <div className="space-y-2">
              <p className="font-medium px-3 text-slate-900">Services</p>
              {Object.keys(servicesData).map((serviceType) => (
                <div key={serviceType} className="ml-4 space-y-2">
                  <NavLink
                    to={`/services/${serviceType.toLowerCase().replace(/\s+/g, '-')}`}
                    className={({ isActive }) =>
                      isActive ? 'block nav-link-active' : 'block nav-link'
                    }
                    onClick={toggleMenu}
                  >
                    {serviceType}
                  </NavLink>
                  <div className="ml-4 space-y-1">
                    {servicesData[serviceType].map((brand) => (
                      <NavLink
                        key={brand}
                        to={`/services/${serviceType.toLowerCase().replace(/\s+/g, '-')}/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                        className={({ isActive }) =>
                          isActive
                            ? 'block text-sm nav-link-active'
                            : 'block text-sm text-slate-500 hover:text-blue-600'
                        }
                        onClick={toggleMenu}
                      >
                        {brand}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}
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

            {/* Mobile Call Button */}
            <a
              href="tel:+18001234567"
              className="flex items-center justify-center gap-2 btn btn-primary w-full"
              onClick={toggleMenu}
            >
              <Phone className="h-4 w-4" />
              <span>1-800-123-4567</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
