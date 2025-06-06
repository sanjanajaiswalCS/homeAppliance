import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TestimonialsPage from './pages/TestimonialsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import ServicePage from './pages/ServicePage';
import ServiceBrandPage from './pages/ServiceBrandPage';
import NotFoundPage from './pages/NotFoundPage';
import Service from './pages/Service';
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-of-use" element={<TermsOfUsePage />} />
        <Route path="services/:serviceType" element={<ServicePage />} />
        <Route path="services/:serviceType/:brand" element={<ServiceBrandPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/service" element={<Service />} />
      </Route>
    </Routes>
  );
}

export default App;
