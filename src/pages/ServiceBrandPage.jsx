import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ServiceBrandPage = () => {
  const { brandId } = useParams();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      if (!brandId) return;

      try {
        const response = await getBrandServices(brandId);
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [brandId]);

  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Services for Brand {brandId}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceBrandPage;
