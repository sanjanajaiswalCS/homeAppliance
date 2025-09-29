import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = ({
  title = "Need Immediate Assistance?",
  description = "Our expert technicians are available 24/7 to solve your appliance issues.",
  phoneNumber = "18008892801"
}) => {
  return (
    <section className="bg-blue-600 py-16">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <a
            href={`tel:+${phoneNumber.replace(/\D/g, '')}`}
            className="btn bg-white text-blue-600 hover:bg-blue-50 flex-1"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call {phoneNumber}
          </a>
          <Link
            to="/contact"
            className="btn bg-blue-800 text-white hover:bg-blue-900 flex-1"
          >
            Book a Service
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
