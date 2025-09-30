// src/pages/ServicePage.jsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { serviceTypeMap, getBrandsForService, formatForDisplay } from '../data/servicesData';
import SeoHead from '../components/SeoHead';
import CallToAction from '../components/CallToAction';
import { ArrowRight, CheckCircle2, Phone, Calendar } from 'lucide-react';

const serviceInfo = {
  ac: {
    title: "Air Conditioner Repair & Service",
    description: "Efficient AC Repair, Servicing & Installation. Is your AC not cooling properly or making noise? Our technicians handle split and window AC repairs, gas refills, routine servicing, and installations with care and precision.",
    hero: "https://content.jdmagicbox.com/v2/comp/kolkata/b1/033pxx33.xx33.190103193514.i2b1/catalogue/airtech-enterprise-tiljala-kolkata-ac-dealers-daikin-8tvrib9sq3.jpg",
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
    brands: "We provide services for models across major brands like LG, Samsung, Voltas, Daikin, and others (note: not affiliated with these brands).",
    icon: "❄️"
  },
  cctv: {
    title: "CCTV Installation & Repair Services",
    description: "Professional CCTV camera installation, maintenance, and repair services. Secure your home or business with our expert surveillance solutions including camera setup, DVR/NVR configuration, and system troubleshooting.",
    hero: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg",
    benefits: [
      "CCTV Camera Installation",
      "DVR/NVR Setup & Configuration",
      "Camera Positioning & Alignment",
      "Wiring & Cable Management",
      "Remote Viewing Setup",
      "System Upgrades & Expansion"
    ],
    symptoms: [
      "No video display or recording",
      "Camera not powering on",
      "Poor image quality or distortion",
      "DVR/NVR not responding",
      "Loose or damaged wiring",
      "Remote access not working",
      "Night vision not functioning"
    ],
    brands: "We work with all major CCTV brands including Hikvision, Dahua, CP Plus, Honeywell, Samsung, and others.",
    icon: "📹"
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
    hero: "https://content.jdmagicbox.com/comp/def_content/microwave-oven-repair-and-services/screenshot-7-microwave-oven-repair-and-services-7-b06ts.jpg",
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
  chimney: {
    title: "Kitchen Chimney Cleaning & Maintenance",
    description: "Comprehensive chimney cleaning, filter replacement, and maintenance to keep your kitchen smoke-free and hygienic.",
    hero: "https://5.imimg.com/data5/SELLER/Default/2025/2/491723607/BT/BL/LL/74511152/kitchen-chimney-repairing-service-500x500.png",
    benefits: [
      "Chimney suction and filter cleaning",
      "Deep cleaning & oil residue removal",
      "Motor & fan servicing",
      "Duct pipe inspection",
      "Replacement of worn-out filters"
    ],
    symptoms: [
      "Excessive smoke in kitchen",
      "Chimney suction not working",
      "Unusual noise while operating",
      "Oil dripping from filters",
      "Bad smell from chimney"
    ],
    brands: "We service all major kitchen chimney brands like Faber, Elica, Hindware, Glen, Kaff, and others.",
    icon: "🍳"
  },
  
  others: {
    title: "Other Appliance Repairs",
    description: "We also provide reliable repair services for other appliances like kitchen chimneys, exhaust fans, and CCTV systems.",
    hero: "https://5.imimg.com/data5/SELLER/Default/2025/2/491723607/BT/BL/LL/74511152/kitchen-chimney-repairing-service-500x500.png",
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
  },
  // ... other services with added 'icon' property
};

const ServicePage = () => {
  const { serviceType } = useParams();
  const brands = getBrandsForService(serviceType || '');
  const displayServiceType = serviceTypeMap[serviceType || ''] || formatForDisplay(serviceType || '');

  let currentService = serviceInfo.ac;
  if (serviceType?.includes('refrigerator')) currentService = serviceInfo.refrigerator;
  else if (serviceType?.includes('washing')) currentService = serviceInfo.washing;
  else if (serviceType?.includes('microwave')) currentService = serviceInfo.microwave;
  else if (serviceType?.includes('cctv')) {
    currentService = serviceInfo.cctv;
  }
  else if (serviceType?.includes('chimney')) {
    currentService = serviceInfo.chimney;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceType]);

  return (
    <>
      <SeoHead 
        title={`${displayServiceType} Services`}
        description={`Professional ${displayServiceType.toLowerCase()} repair services for all major brands including ${brands.slice(0, 5).join(', ')} and more.`}
      />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative py-28 lg:py-36 overflow-hidden"
      >
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${currentService.hero})`,
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}></div>
        
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center mb-4"
            >
              <span className="text-4xl mr-3">{currentService.icon}</span>
              <span className="text-sm font-semibold tracking-wider text-blue-300 uppercase">
                {displayServiceType} Services
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <p className="text-center text-sky-400">
              {currentService.title}
              </p>
            
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto"
            >
              {currentService.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to="/contact" 
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Calendar size={18} />
                Schedule a Repair
              </Link>
              <a 
                href="tel:+18001234567" 
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Emergency Service
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              What We <span className="text-blue-600">Fix</span>
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions for all your {displayServiceType.toLowerCase()} problems
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentService.benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <CheckCircle2 className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{item}</h3>
                </div>
                <p className="text-gray-600 pl-14">
                  Expert diagnosis and repair for this common issue with quick turnaround times.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              Warning Signs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Common <span className="text-blue-600">Issues</span>
            </h2>
            <p className="text-lg text-gray-600">
              Don't ignore these symptoms - early repair can prevent bigger problems
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {currentService.symptoms.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start"
              >
                <div className="bg-red-100 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{item}</h3>
                  <p className="text-gray-600 mt-1">
                    This could indicate a serious issue that needs professional attention.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Info */}
      {currentService.brands && (
        <section className="py-16 bg-blue-600 text-white">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Trusted Across Major Brands
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                {currentService.brands}
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {brands.slice(0, 5).map((brand, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full"
                  >
                    <span className="font-medium">{brand}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <CallToAction
        title={`Need ${displayServiceType} Repair?`}
        description={`Contact us today for fast, reliable ${displayServiceType.toLowerCase()} repair service from our certified technicians.`}
      />
    </>
  );
};

export default ServicePage;