// src/api/api.js

// Example of an API call to get brand services (replace with your real API endpoint)
export async function getBrandServices(brandId) {
    try {
      const response = await fetch(`https://example.com/api/brands/${brandId}/services`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch brand services');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching brand services:', error);
      throw error;  // Optionally re-throw the error to handle it in the component
    }
  }
  