import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ title, description, icon, url }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-custom group hover:shadow-lg transition-all duration-300 border border-slate-100">
      <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <Link 
        to={url} 
        className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700"
      >
        Learn More 
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;
