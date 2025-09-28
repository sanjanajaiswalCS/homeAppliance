import React from 'react';
import { Shield, Award, ThumbsUp, Users } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import CallToAction from '../components/CallToAction';

const AboutPage = () => {
  return (
    <>
      <SeoHead
        title="About Us"
        description="Learn about CustomerServicesCenter's commitment to providing high-quality appliance repair services with certified technicians and customer satisfaction."
      />

      {/* Page Header */}
      <section className="bg-slate-900 py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Dedicated to providing exceptional appliance repair services with integrity and expertise.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-slate-600 mb-4">
                Founded in 2018, CustomerServicesCenter began with a simple mission: to provide honest, reliable, and efficient appliance repair services. What started as a small family business has grown into a trusted name in home appliance repairs across the country.
              </p>
              <p className="text-slate-600 mb-4">
                Our journey has been guided by our commitment to technical excellence and customer satisfaction. We've built our reputation one repair at a time, ensuring that each customer receives the highest quality service possible.
              </p>
              <p className="text-slate-600">
                Today, we continue to expand our service areas and expertise while maintaining the personal touch and attention to detail that has defined us from the beginning.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-custom">
              <img 
                src="https://images.pexels.com/photos/8961251/pexels-photo-8961251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="CustomerServicesCenter team" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              These principles guide every aspect of our business and ensure we deliver exceptional service every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-slate-600">
                We operate with complete transparency, providing honest recommendations and fair pricing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-custom">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <Award className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-slate-600">
                We strive for technical perfection in every repair, using quality parts and proven methods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-custom">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <ThumbsUp className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-slate-600">
                We show up when promised and stand behind our work with robust warranties.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-custom">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-slate-600">
                We put customers at the center of everything we do, ensuring satisfaction with every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      
      {/* Our Commitment */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
            <p className="text-slate-600 mb-8">
              At CustomerServicesCenter, we're committed to more than just fixing appliances – we're dedicated to providing peace of mind. We understand that when your appliances break down, it disrupts your daily life. That's why we respond quickly, diagnose accurately, and fix efficiently, getting your life back to normal as soon as possible.
            </p>
            <p className="text-slate-600 mb-8">
              We're also committed to honest pricing, quality workmanship, and exceptional customer service. We'll never recommend unnecessary repairs or replacements, and we'll always treat your home with respect.
            </p>
            <p className="text-slate-600">
              Our goal is to earn your trust and become your go-to appliance repair service for years to come. That's our promise to every customer, every time.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Ready to Experience Our Service?"
        description="Contact us today to schedule a service call with one of our expert technicians."
      />
    </>
  );
};

export default AboutPage;
