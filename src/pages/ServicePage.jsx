import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { serviceTypeMap, getBrandsForService, formatForDisplay, formatForUrl } from '../data/servicesData';
import SeoHead from '../components/SeoHead';
import CallToAction from '../components/CallToAction';
import ContactForm from '../components/ContactForm';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const ServicePage = () => {
  const { serviceType } = useParams();
  const brands = getBrandsForService(serviceType || '');
  const displayServiceType = serviceTypeMap[serviceType || ''] || formatForDisplay(serviceType || '');

  const serviceInfo = {
    ac: {
      title: "Professional AC Repair Services",
      description: "Expert air conditioner repair, maintenance, and installation services for all major brands",
      hero: "https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      benefits: [
        "Repair of all AC types: window, split, central, and portable units",
        "Expert diagnostics to identify cooling issues",
        "Freon/refrigerant charging and leak repair",
        "Compressor and fan motor replacement",
        "Thermostat installation and repair",
        "Regular maintenance services to extend AC lifespan"
      ],
      symptoms: [
        "AC not cooling properly",
        "Strange noises or odors",
        "Water leakage",
        "AC won't turn on",
        "High energy bills",
        "Uneven cooling throughout home"
      ]
    },
    refrigerator: {
      title: "Expert Refrigerator Repair Services",
      description: "Professional refrigerator and freezer repair services for all major brands and models",
      hero: "https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      benefits: [
        "Repair of all refrigerator types: French door, side-by-side, top/bottom freezer",
        "Ice maker and water dispenser repair",
        "Temperature control issues",
        "Refrigerant leak detection and repair",
        "Compressor replacement and repair",
        "Regular maintenance to prevent breakdowns"
      ],
      symptoms: [
        "Refrigerator not cooling properly",
        "Freezer not freezing",
        "Water leaking on floor",
        "Ice maker not working",
        "Unusual noises",
        "Excessive frost buildup"
      ]
    },
    washing: {
      title: "Professional Washing Machine Repair",
      description: "Expert repair services for all types of washing machines including front-load and top-load models",
      hero: "https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      benefits: [
        "Repair of all washing machine types: front-load and top-load",
        "Drain pump and motor repairs",
        "Belt replacement",
        "Control board diagnostics and repair",
        "Door seal replacement",
        "Regular maintenance to prevent breakdowns"
      ],
      symptoms: [
        "Machine won't start or complete cycles",
        "Leaking water",
        "Excessive noise during operation",
        "Not draining properly",
        "Drum not spinning",
        "Error codes on display"
      ]
    },
    microwave: {
      title: "Expert Microwave Oven Repair",
      description: "Professional repair services for all types of microwave ovens including countertop and built-in models",
      hero: "https://images.pexels.com/photos/7545581/pexels-photo-7545581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      benefits: [
        "Repair of all microwave types: countertop, built-in, over-the-range",
        "Magnetron replacement",
        "Door switch and latch repair",
        "Turntable motor replacement",
        "Control panel and display repair",
        "Comprehensive safety testing"
      ],
      symptoms: [
        "Microwave not heating food",
        "Sparking inside the unit",
        "Turntable not rotating",
        "Unusual noises during operation",
        "Keypad not responding",
        "Door not closing properly"
      ]
    }
  };

  let currentService = serviceInfo.ac;
  if (serviceType?.includes('refrigerator')) {
    currentService = serviceInfo.refrigerator;
  } else if (serviceType?.includes('washing')) {
    currentService = serviceInfo.washing;
  } else if (serviceType?.includes('microwave')) {
    currentService = serviceInfo.microwave;
  }

  return (
    <>
      <SeoHead
        title={`${displayServiceType} Services`}
        description={`Professional ${displayServiceType.toLowerCase()} repair services for all major brands including ${brands.slice(0, 5).join(', ')} and more.`}
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${currentService.hero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-blue-900/70"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{currentService.title}</h1>
            <p className="text-xl text-blue-100 mb-8">{currentService.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn btn-primary">Schedule a Repair</Link>
              <a href="tel:+18001234567" className="btn bg-white text-blue-600 hover:bg-blue-50">Call for Emergency Service</a>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining sections... (identical JSX, omitted for brevity) */}
      
      <CallToAction
        title={`Need ${displayServiceType} Repair?`}
        description={`Contact us today for fast, reliable ${displayServiceType.toLowerCase()} repair service from our certified technicians.`}
      />
    </>
  );
};

export default ServicePage;
