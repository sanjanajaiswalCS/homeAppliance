// src/pages/ServicePage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { serviceTypeMap, getBrandsForService, formatForDisplay } from '../data/servicesData';
import SeoHead from '../components/SeoHead';
import CallToAction from '../components/CallToAction';
import ContactForm from '../components/ContactForm';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const serviceInfo = {
  ac: {
    title: "Air Conditioner Repair & Service",
    description: "Efficient AC Repair, Servicing & Installation. Is your AC not cooling properly or making noise? Our technicians handle split and window AC repairs, gas refills, routine servicing, and installations with care and precision.",
    hero: "https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg",
    benefits: [
      "Jet AC Servicing",
      "Split & Window AC Installation",
      "Gas Refilling",
      "Compressor Issues",
      "PCB & Sensor Repairs"
    ],
    symptoms: [
      "AC not cooling properly",
      "Unusual noise during operation",
      "Water leakage",
      "AC not turning on",
      "High electricity bills",
      "Uneven room cooling"
    ],
    brands: "We provide services for models across major brands like LG, Samsung, Voltas, Daikin, and others (note: not affiliated with these brands)."
  },
  refrigerator: {
    title: "Refrigerator Repair Services",
    description: "Quick, Reliable Refrigerator Repairs. Facing cooling issues, frost buildup, or unusual noises? Our team ensures effective diagnosis and solutions for single, double-door, and side-by-side refrigerators.",
    hero: "https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg",
    benefits: [
      "Compressor & Fan Issues",
      "Thermostat Replacement",
      "Door Seal Leaks",
      "Gas Charging",
      "Cooling Malfunctions"
    ],
    symptoms: [
      "Fridge not cooling properly",
      "Freezer not freezing",
      "Water leaking on floor",
      "Unusual sounds",
      "Excessive frost build-up",
      "Fluctuating temperature"
    ]
  },
  microwave: {
    title: "Microwave Oven Repair",
    description: "Microwave Not Heating? We Can Help. From heating problems to electrical faults, we provide complete microwave repairs for solo, grill, and convection models.",
    hero: "https://images.pexels.com/photos/7545581/pexels-photo-7545581.jpeg",
    benefits: [
      "Magnetron Replacement",
      "Turntable & Motor Issues",
      "Control Panel Repair",
      "Door Switch Replacement"
    ],
    symptoms: [
      "Microwave not heating",
      "Sparking inside microwave",
      "Turntable not rotating",
      "Unresponsive keypad",
      "Unusual buzzing or noises",
      "Door not closing properly"
    ]
  },
  washing: {
    title: "Washing Machine Repair",
    description: "Smooth Laundry Starts Here. Whether your washing machine is noisy, not spinning, or leaking, we provide prompt repair solutions for top-load, front-load, and semi-automatic models.",
    hero: "https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg",
    benefits: [
      "Drum & Motor Failures",
      "Water Drainage Problems",
      "Electrical Panel Repairs",
      "Inlet/Outlet Valve Replacement"
    ],
    symptoms: [
      "Washer not spinning or draining",
      "Water leakage during operation",
      "Error codes on display",
      "Machine stops mid-cycle",
      "Drum not rotating",
      "Noisy operation"
    ]
  },
  others: {
    title: "Other Appliance Repairs",
    description: "We also provide reliable repair services for other appliances like kitchen chimneys, exhaust fans, and CCTV systems.",
    hero: "https://images.pexels.com/photos/3739387/pexels-photo-3739387.jpeg",
    benefits: [
      "Chimney suction and filter cleaning",
      "Exhaust fan repair and maintenance",
      "CCTV installation and diagnostics"
    ],
    symptoms: [
      "Poor chimney ventilation",
      "Exhaust not starting",
      "No CCTV display or recording",
      "Loose wiring or static in video feed",
      "Camera power issues"
    ]
  }
};

const ServicePage = () => {
  const { serviceType } = useParams();
  const brands = getBrandsForService(serviceType || '');
  const displayServiceType = serviceTypeMap[serviceType || ''] || formatForDisplay(serviceType || '');

  let currentService = serviceInfo.ac;
  if (serviceType?.includes('refrigerator')) currentService = serviceInfo.refrigerator;
  else if (serviceType?.includes('washing')) currentService = serviceInfo.washing;
  else if (serviceType?.includes('microwave')) currentService = serviceInfo.microwave;

  return (
    <>
      <SeoHead 
        title={`${displayServiceType} Services`}
        description={`Professional ${displayServiceType.toLowerCase()} repair services for all major brands including ${brands.slice(0, 5).join(', ')} and more.`}
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${currentService.hero})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-blue-900/70"></div>
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl text-blue-600  p-2 rounded-3xl md:text-5xl font-bold mb-4">{currentService.title}</h1>
            <p className="text-xl mb-8">{currentService.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn btn-primary">Schedule a Repair</Link>
              <a href="tel:+18001234567" className="btn bg-white text-blue-600 hover:bg-blue-50">Call for Emergency Service</a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-6">What We Fix</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside">
            {currentService.benefits.map((item, index) => (
              <li key={index} className="text-blue-800 font-medium">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-6">Common Issues</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside">
            {currentService.symptoms.map((item, index) => (
              <li key={index} className="text-slate-700">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Brand Info */}
      {currentService.brands && (
        <section className="py-10 bg-white">
          <div className="container">
            <p className="text-center text-lg text-slate-600">{currentService.brands}</p>
          </div>
        </section>
      )}

    
      <CallToAction
        title={`Need ${displayServiceType} Repair?`}
        description={`Contact us today for fast, reliable ${displayServiceType.toLowerCase()} repair service from our certified technicians.`}
      />

      {/* Contact Form */}
      
    </>
  );
};

export default ServicePage;
