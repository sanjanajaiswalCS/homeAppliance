import React from 'react';
import SeoHead from '../components/SeoHead';
import TestimonialCard from '../components/TestimonialCard';
import CallToAction from '../components/CallToAction';
import { testimonials } from '../data/testimonialsData';

const TestimonialsPage = () => {
  return (
    <>
      <SeoHead
        title="Customer Testimonials"
        description="Read what our customers have to say about AppliancePro's repair services. Real reviews from satisfied customers."
      />

      {/* Page Header */}
      <section className="bg-slate-900 py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Customer Testimonials</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Don't just take our word for it. Read what our customers have to say about our services.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section">
        <div className="container">
          <div className="mb-12 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Real Feedback from Real Customers</h2>
            <p className="text-slate-600">
              We're proud of the service we provide and value the feedback we receive from our customers. 
              Here are some of the reviews and testimonials from people who have experienced our services firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
                text={testimonial.text}
                date={testimonial.date}
                appliance={testimonial.appliance}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success Story */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="mb-12 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Customer Success Stories</h2>
            <p className="text-slate-600">
              Learn about some of our most challenging repairs and how we helped our customers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-custom max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src="https://images.pexels.com/photos/5699720/pexels-photo-5699720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Satisfied customer with repaired refrigerator"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">The Case of the Mysterious Leak</h3>
                <p className="text-slate-600 mb-4">
                  The Wilson family reached out to us after discovering a water leak that had damaged their kitchen floor. Multiple plumbers couldn't identify the source of the leak, but our technician suspected it might be coming from their refrigerator's water line.
                </p>
                <p className="text-slate-600 mb-4">
                  Upon thorough inspection, we discovered a hairline crack in the water supply line hidden behind the refrigerator. We not only replaced the damaged line but also installed a water leak detector to prevent future incidents.
                </p>
                <p className="text-slate-600 italic">
                  "After weeks of frustration and thousands in damage, AppliancePro solved our mystery leak in under an hour. Their technician's attention to detail saved us from further damage and gave us peace of mind." - The Wilson Family
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leave a Testimonial */}
      <section className="section">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
            <p className="text-slate-600">
              We value your feedback! If you've recently used our services, we'd love to hear about your experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-custom">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" id="name" className="input" placeholder="John Smith" required />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-1">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <input type="text" id="location" className="input" placeholder="New York, NY" required />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">
                  Service Used <span className="text-red-500">*</span>
                </label>
                <select id="service" className="input" required>
                  <option value="">Select a service</option>
                  <option value="ac-repair">AC Repair</option>
                  <option value="refrigerator-repair">Refrigerator Repair</option>
                  <option value="washing-machine-repair">Washing Machine Repair</option>
                  <option value="microwave-oven-repair">Microwave Oven Repair</option>
                </select>
              </div>

              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-slate-700 mb-1">
                  Your Rating <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="text-yellow-400 hover:text-yellow-500 focus:outline-none"
                    >
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="testimonial" className="block text-sm font-medium text-slate-700 mb-1">
                  Your Testimonial <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="testimonial"
                  rows={5}
                  className="input resize-none"
                  placeholder="Share your experience with our service..."
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Submit Testimonial
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Ready to Experience Our Service?"
        description="Join our satisfied customers by scheduling a service call today."
      />
    </>
  );
};

export default TestimonialsPage;
