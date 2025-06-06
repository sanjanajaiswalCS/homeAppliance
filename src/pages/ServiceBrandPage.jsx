import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const serviceData = {
  "ac-repair-&-maintenance": {
    displayName: "AC Repair & Maintenance",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Our certified technicians provide comprehensive AC repair and maintenance services to ensure optimal performance and energy efficiency. We service all major brands with same-day availability for most repairs.",
    problems: [
      "AC not cooling sufficiently",
      "Water leakage from indoor unit",
      "Strange noise during operation",
      "Remote control not working",
      "AC frequently turning on and off",
      "Unpleasant odors from AC vents",
      "Thermostat issues causing inaccurate temperature",
    ],
    benefits: [
      "24/7 emergency service",
      "90-day warranty on all repairs",
      "Free diagnostic with repair",
      "EPA-certified technicians",
      "Transparent pricing"
    ]
  },
  "washing-machine-repair": {
    displayName: "Washing Machine Repair",
    image: "https://images.unsplash.com/photo-1581586482889-07e29f6be982?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Expert washing machine repairs for all major brands. Our technicians are factory-trained to diagnose and fix issues quickly, minimizing downtime for your laundry routine.",
    problems: [
      "Washing machine not spinning",
      "Water not draining properly",
      "Excessive vibration or noise",
      "Door or lid won't open/close",
      "Detergent dispenser issues",
      "Washer not filling with water",
      "Error codes or flashing lights",
    ],
    benefits: [
      "Same-day service available",
      "Genuine replacement parts",
      "No hidden fees",
      "Senior discounts available",
      "Eco-friendly repair options"
    ]
  },
  "microwave-oven-repair": {
    displayName: "Microwave Oven Repair",
    image: "https://images.unsplash.com/photo-1569827743917-c930b1461aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Professional microwave repair services that restore your appliance to full functionality. We handle everything from simple button replacements to complex magnetron issues.",
    problems: [
      "Microwave not heating food",
      "Turntable not rotating",
      "Sparking or arcing inside oven",
      "Buttons or touchpad not responding",
      "Microwave door won't close properly",
      "Strange noise while running",
    ],
    benefits: [
      "60-minute response time",
      "Free safety inspection",
      "Extended warranty options",
      "Commercial-grade repairs",
      "Certified appliance technicians"
    ]
  },
  "kitchen-chimney-cleaning-and-maintenance": {
    displayName: "Kitchen Chimney Cleaning & Maintenance",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Professional deep cleaning and maintenance services for kitchen chimneys that improve efficiency, reduce fire hazards, and eliminate cooking odors.",
    problems: [
      "Decreased suction power",
      "Excessive smoke inside kitchen",
      "Noise from chimney motor",
      "Lights not working",
      "Oil collector getting filled quickly",
      "Remote control or switch issues",
    ],
    benefits: [
      "Eco-friendly cleaning solutions",
      "Protective coating application",
      "Motor lubrication service",
      "Filter replacement options",
      "Annual maintenance packages"
    ]
  },
  "cctv-repair-and-installation": {
    displayName: "CCTV Repair & Installation",
    image: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Comprehensive security solutions including CCTV installation, maintenance, and repair. We provide customized systems for residential and commercial properties.",
    problems: [
      "Camera feed not displaying",
      "Poor video quality",
      "No recording or playback",
      "Motion detection not working",
      "Wiring and connectivity issues",
      "Power supply problems",
    ],
    benefits: [
      "Free system evaluation",
      "Latest technology solutions",
      "Remote monitoring setup",
      "Night vision optimization",
      "Data recovery services"
    ]
  },
};

const ServiceBrandPage = () => {
  const { serviceType, brand } = useParams();

  const serviceInfo = serviceData[serviceType] || {
    displayName: serviceType ? serviceType.replace(/-/g, " ") : "Service",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Premium service solutions tailored to your specific needs. Our certified professionals deliver exceptional results with industry-leading expertise.",
    problems: ["Contact us for a detailed assessment of your service needs."],
    benefits: [
      "Certified professionals",
      "Quality guaranteed",
      "Timely service",
      "Competitive pricing",
      "Customer satisfaction focus"
    ]
  };

  const brandName = brand ? brand.replace(/-/g, " ") : "your brand";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 pt-20 pb-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl text-center font-bold pb-10 text-gray-900">
  Professional {serviceInfo.displayName} Services for {brandName.charAt(0).toUpperCase() + brandName.slice(1)}
</h2>

        {/* Hero Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-xl h-96 lg:h-[500px]"
            >
              <img
                src={serviceInfo.image}
                alt={`${serviceInfo.displayName} service`}
                className="absolute inset-0 w-full h-full object-cover transform transition-all duration-500 hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-indigo-600 rounded-full mb-2">
                  Expert Service
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {serviceInfo.displayName}
                </h1>
                <p className="text-xl text-gray-200">
                  For {brandName} appliances
                </p>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
             
              <p className="text-lg text-gray-600 leading-relaxed">
                {serviceInfo.description}
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Service Benefits
                </h3>
                <motion.ul 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3"
                >
                  {serviceInfo.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="flex items-start"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-500 mt-0.5 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div className="pt-6">
                <button className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg">
                  Schedule Service Now
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full mb-3">
              Common Issues
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We Solve These {serviceInfo.problems.length}+ Common Problems
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-500">
              Our technicians are trained to diagnose and repair all these issues and more.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {serviceInfo.problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-50 p-2 rounded-lg">
                      <svg
                        className="h-6 w-6 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {problem}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="bg-indigo-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to restore your {serviceInfo.displayName}?
              </h2>
              <p className="text-lg text-indigo-100 mb-6">
                Contact us today for fast, reliable service from certified technicians.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  Call Now: (555) 123-4567
                </button>
                <button className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-indigo-600 transition-colors duration-300">
                  Schedule Online
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-800 opacity-90" />
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Technician working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </motion.main>
  );
};

export default ServiceBrandPage;