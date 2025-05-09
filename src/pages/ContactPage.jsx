import React from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <>
      <SeoHead
        title="Contact Us"
        description="Get in touch with AppliancePro for all your appliance repair needs. 24/7 emergency service available."
      />

      {/* Page Header */}
      <section className="bg-slate-900 py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            We're here to help with all your appliance repair needs. Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-slate-600 mb-8">
                Have a question or need to schedule a service? Contact us through any of the methods below, or use the form to send us a message directly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-slate-600 mb-1">Customer Service:</p>
                    <p className="text-lg font-medium">
                      <a href="tel:+18001234567" className="text-blue-600 hover:text-blue-800">
                        1-800-123-4567
                      </a>
                    </p>
                    <p className="text-slate-600 mt-2 mb-1">Emergency Service (24/7):</p>
                    <p className="text-lg font-medium">
                      <a href="tel:+18009876543" className="text-blue-600 hover:text-blue-800">
                        1-800-987-6543
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-slate-600 mb-1">General Inquiries:</p>
                    <p className="text-lg font-medium">
                      <a href="mailto:info@appliancepro.com" className="text-blue-600 hover:text-blue-800">
                        info@appliancepro.com
                      </a>
                    </p>
                    <p className="text-slate-600 mt-2 mb-1">Customer Support:</p>
                    <p className="text-lg font-medium">
                      <a href="mailto:support@appliancepro.com" className="text-blue-600 hover:text-blue-800">
                        support@appliancepro.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Address</h3>
                    <p className="text-slate-600 mb-1">Main Office:</p>
                    <p className="text-lg">
                      123 Repair Street<br />
                      Appliance City, AC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-slate-600 mb-1">Office Hours:</p>
                    <p className="mb-2">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-slate-600 mb-1">Service Hours:</p>
                    <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
                    <p className="text-slate-600 mt-2">
                      <strong>Note:</strong> Emergency services are available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Areas</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              We provide appliance repair services across the following regions. If you don't see your area listed, please contact us to check availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h3 className="text-xl font-semibold mb-4">Northeast Region</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>New York City and surrounding areas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Boston metropolitan area</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Philadelphia and suburbs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Washington DC metro area</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h3 className="text-xl font-semibold mb-4">Midwest Region</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Chicago and suburbs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Detroit metropolitan area</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Cleveland and surrounding areas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Minneapolis-St. Paul metro</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h3 className="text-xl font-semibold mb-4">West Coast Region</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Los Angeles and Orange County</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>San Francisco Bay Area</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Seattle metropolitan area</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Portland and surrounding areas</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h3 className="text-xl font-semibold mb-4">Southern Region</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Miami-Dade County</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Atlanta metropolitan area</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Houston and surrounding areas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Dallas-Fort Worth metroplex</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h3 className="text-xl font-semibold mb-4">Southwest Region</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Phoenix metropolitan area</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Las Vegas and surrounding areas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Albuquerque and Santa Fe</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>El Paso metropolitan area</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h3 className="text-xl font-semibold mb-4">Northwest Region</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Seattle and Tacoma</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Portland metropolitan area</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Boise and surrounding areas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Spokane metropolitan area</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Visit our main office or contact us to find the nearest service center.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-custom">
            {/* Embedded Google Maps would go here in production */}
            <div className="bg-slate-200 h-[400px] rounded-lg flex items-center justify-center">
              <p className="text-slate-600">Google Maps will be embedded here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
