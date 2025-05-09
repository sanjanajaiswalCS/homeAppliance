import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = ({
  title,
  subtitle,
  image,
  benefits = [
    "24/7 Emergency Service",
    "Certified Technicians",
    "90-Day Repair Warranty",
    "Affordable Pricing"
  ]
}) => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-blue-900/70"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-lg">
              {subtitle}
            </p>
            
            {/* Benefits */}
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-blue-50">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn btn-primary">
                Book a Service
              </Link>
              <a href="tel:+18001234567" className="btn bg-white text-blue-600 hover:bg-blue-50">
                Call Now
              </a>
            </div>
          </div>
          
          {/* Form card - can be hidden on smaller screens if space is tight */}
          <div className="bg-white p-6 rounded-lg shadow-lg hidden lg:block">
            <h3 className="text-xl font-semibold mb-4">Request a Service Call</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="hero-name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="hero-name"
                  className="input"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="hero-phone" className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="hero-phone"
                  className="input"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="hero-service" className="block text-sm font-medium text-slate-700 mb-1">
                  Service Required
                </label>
                <select
                  id="hero-service"
                  className="input"
                >
                  <option value="">Select a service</option>
                  <option value="ac-repair">AC Repair</option>
                  <option value="refrigerator-repair">Refrigerator Repair</option>
                  <option value="washing-machine-repair">Washing Machine Repair</option>
                  <option value="microwave-oven-repair">Microwave Oven Repair</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
