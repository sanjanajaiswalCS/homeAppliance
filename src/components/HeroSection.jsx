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
    <section className="relative max-w-screen py-16 md:py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-blue-900/70"></div>
      </div>
      
      <div className="container max-w-screen relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl  text-blue-600  p-2 rounded md:text-5xl font-bold mb-4 leading-tight">
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
              <a href="tel:+18002022413" className="btn bg-white text-blue-600 hover:bg-blue-50">
                Call Now
              </a>
            </div>
          </div>
          
          {/* Form card - can be hidden on smaller screens if space is tight */}
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
