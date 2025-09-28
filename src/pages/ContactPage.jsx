import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <>
      <SeoHead
        title="Contact Us"
        description="Get in touch with CustomerServicesCenter for all your appliance repair needs. 24/7 emergency service available."
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
      <section className="section py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-slate-600 mb-8">
                Have a question or need to schedule a service? Contact us through any of the methods below, or use the form to send us a message directly.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-slate-600">Customer Service:</p>
                    <p className="text-lg font-medium">
                      <a href="tel:+18002022413" className="text-blue-600 hover:text-blue-800">
                        1800 889 2801

                      </a>
                    </p>
                    
                
                  </div>
                </div>

                {/* Email
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-slate-600">General Inquiries:</p>
                    <p className="text-lg font-medium">
                      <a href="mailto:at@atyourservicesupport.com" className="text-blue-600 hover:text-blue-800">
                        at@atyourservicesupport.com
                      </a>
                    </p>
                    <p className="text-slate-600 mt-3">Customer Support:</p>
                    <p className="text-lg font-medium">
                      <a href="mailto:at@atyourservicesupport.com" className="text-blue-600 hover:text-blue-800">
                        at@atyourservicesupport.com
                      </a>
                    </p>
                  </div>
                </div> */}

                {/* Address */}
                
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className='mt-14'>
            <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Address</h3>
                    <p className="text-slate-600">Main Office:</p>
                    <p className="text-lg">Mumbai, Maharashtra.</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-slate-600">Service Hours:</p>
                    <p className="mb-2">Sunday - Saturday: 8:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">
                      <strong>Note:</strong> Emergency services are available 24/7
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
