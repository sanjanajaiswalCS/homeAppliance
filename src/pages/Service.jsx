import React from 'react';
import { Link } from 'react-router-dom';
import { serviceTypeMap } from '../data/servicesData';

const services = [
  {
    type: 'ac-repair-&-maintenance',
    title: 'Air Conditioner Repair & Service',
    description: 'Efficient AC Repair, Servicing & Installation.',
    image: 'https://content.jdmagicbox.com/v2/comp/kolkata/b1/033pxx33.xx33.190103193514.i2b1/catalogue/airtech-enterprise-tiljala-kolkata-ac-dealers-daikin-8tvrib9sq3.jpg',
  },
  {
    type: 'refrigerator-repairx',
    title: 'Refrigerator Repair Services',
    description: 'Quick, Reliable Refrigerator Repairs.',
    image: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg',
  },
  {
    type: 'microwave',
    title: 'Microwave Oven Repair',
    description: 'Microwave Not Heating? We Can Help.',
    image: 'https://content.jdmagicbox.com/comp/def_content/microwave-oven-repair-and-services/screenshot-7-microwave-oven-repair-and-services-7-b06ts.jpg',
  },
  {
    type: 'washing',
    title: 'Washing Machine Repair',
    description: 'Smooth Laundry Starts Here.',
    image: 'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg',
  },
  {
    type: 'others',
    title: 'Other Appliance Repairs',
    description: 'Reliable repair services for other appliances.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/2/491723607/BT/BL/LL/74511152/kitchen-chimney-repairing-service-500x500.png',
  },
];

const Service = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.type} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-600">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
              <Link to={`/services/${service.type}`} className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
