// Service categories and brands
export const servicesData: Record<string, string[]> = {
  "AC Repair": [
    "Haier",
    "Voltas",
    "Mitsubishi",
    "OGeneral",
    "LG",
    "IFB",
    "Llyod",
    "Bluestar",
    "Carrier",
    "Panasonic",
    "Samsung",
    "Daikin",
    "Hitachi"
  ],
  "Refrigerator Repair": [
    "LG",
    "Samsung",
    "Siemens",
    "Haier",
    "Bosch",
    "Electrolux",
    "Whirlpool",
    "Panasonic",
    "Hitachi"
  ],
  "Washing Machine Repair": [
    "LG",
    "Samsung",
    "Haier",
    "Bosch",
    "IFB",
    "Whirlpool",
    "Onida",
    "Siemens",
    "Panasonic"
  ],
  "Microwave Oven Repair": [
    "Onida",
    "Whirlpool",
    "Panasonic",
    "Electrolux",
    "IFB",
    "Bosch",
    "Haier",
    "Samsung",
    "LG"
  ]
};

// Map for URL segments to readable service types
export const serviceTypeMap: Record<string, string> = {
  "ac-repair": "AC Repair",
  "refrigerator-repair": "Refrigerator Repair",
  "washing-machine-repair": "Washing Machine Repair",
  "microwave-oven-repair": "Microwave Oven Repair"
};

// Function to convert service type and brand to URL format
export const formatForUrl = (text: string): string => {
  return text.toLowerCase().replace(/\s+/g, '-');
};

// Function to convert URL format to display format
export const formatForDisplay = (text: string): string => {
  return text
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Get brand list for a specific service type
export const getBrandsForService = (serviceType: string): string[] => {
  const formattedType = serviceTypeMap[serviceType] || serviceType;
  return servicesData[formattedType] || [];
};

// Get all service pages for sitemap
export const getAllServicePages = (): { service: string, brand: string }[] => {
  const pages: { service: string, brand: string }[] = [];
  
  Object.keys(servicesData).forEach(service => {
    const serviceUrl = formatForUrl(service);
    
    // Add the main service page
    pages.push({ service: serviceUrl, brand: "" });
    
    // Add each brand page
    servicesData[service].forEach(brand => {
      pages.push({ service: serviceUrl, brand: formatForUrl(brand) });
    });
  });
  
  return pages;
};