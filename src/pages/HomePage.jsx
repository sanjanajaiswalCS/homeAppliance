import React from "react";
import { Link } from "react-router-dom";
import {
  AirVent,
  Refrigerator,
  WashingMachine,
  Microwave,
  Clock,
  ShieldCheck,
  ThumbsUp,
  Banknote,
  ArrowRight,
} from "lucide-react";
import SeoHead from "../components/SeoHead";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import CallToAction from "../components/CallToAction";

// Updated customer testimonials data for Indian customers
const testimonials = [
  {
    id: 1,
    name: "Ravi Kumar",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "The service was excellent, and the technician was very professional. Highly recommend for appliance repairs.",
    date: "2025-04-15",
    appliance: "Washing Machine",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Thane, Maharashtra",
    rating: 4,
    text: "Quick and efficient service. My microwave was fixed in no time. Great experience!",
    date: "2025-03-30",
    appliance: "Microwave Oven",
  },
  {
    id: 3,
    name: "Anil Patel",
    location: "Navi Mumbai, Maharashtra",
    rating: 5,
    text: "Very satisfied with the fridge repair service. The technician arrived on time and fixed the issue swiftly.",
    date: "2025-04-05",
    appliance: "Refrigerator",
  },
];

const HomePage = () => {
  return (
    <>
      <SeoHead
        title="Home Appliance Repair Services"
        description="CustomerServicesCenter offers professional repair services for AC, refrigerator, washing machine, and microwave oven. 24/7 emergency service available."
      />

      <HeroSection
        title="Professional Home Appliance Repair & Services at Your Doorstep
"
        subtitle="Professional and reliable repairs for all major appliance brands. Fast service, guaranteed satisfaction."
        image="https://images.pexels.com/photos/3637739/pexels-photo-3637739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Repair Services</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              we comprehensive repair solutions for all major home appliances.
              Our expert technicians are trained to fix any issues with your
              appliances quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="AC Repair"
              description="Professional repair services for all AC brands including installation, maintenance, and troubleshooting."
              icon={<AirVent className="h-8 w-8" />}
              url="/services/ac-repair"
            />
            <ServiceCard
              title="Refrigerator Repair"
              description="Expert repairs for all refrigerator issues including cooling problems, ice maker issues, and strange noises."
              icon={<Refrigerator className="h-8 w-8" />}
              url="/services/refrigerator-repair"
            />
            <ServiceCard
              title="Washing Machine Repair"
              description="Comprehensive repair services for washing machines including leaks, spin problems, and electrical issues."
              icon={<WashingMachine className="h-8 w-8" />}
              url="/services/washing-machine-repair"
            />
            <ServiceCard
              title="Microwave Oven Repair"
              description="Quick and reliable microwave repair services for all brands and models."
              icon={<Microwave className="h-8 w-8" />}
              url="/services/microwave-oven-repair"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              We pride ourselves on providing exceptional appliance repair
              services with a focus on customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-slate-600">
                We're available around the clock for emergency repairs when you
                need us most.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Warranty Guaranteed
              </h3>
              <p className="text-slate-600">
                All our repairs come with a 90-day warranty for your peace of
                mind.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <ThumbsUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p className="text-slate-600">
                Our certified technicians have years of experience with all
                major brands.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Banknote className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
              <p className="text-slate-600">
                Competitive and transparent pricing with no hidden fees or
                charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              We take pride in our high customer satisfaction. Here's what some
              of our clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
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

          <div className="mt-10 text-center">
            <Link to="/testimonials" className="btn btn-outline">
              View All Testimonials <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="text-center mb-12 mt-12">
          <h2 className="text-3xl font-bold mb-4">
            COMPANY NAME: Venkatesh Enterprises
          </h2>
         <div>
         OWNER NAME:Sumit Harinath Tiwari MSME 
         </div>
         <div>
         REGISTRATION NUMBER:UDYAM-MH-18-0440333
         </div>
          
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Our simple process ensures you get fast, effective repairs with
              minimal hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative p-6 bg-white rounded-lg shadow-custom border border-slate-100">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 pt-2">Contact Us</h3>
              <p className="text-slate-600">
                Call us or submit an online request to describe your appliance
                issue.
              </p>
            </div>

            <div className="relative p-6 bg-white rounded-lg shadow-custom border border-slate-100">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 pt-2">Diagnosis</h3>
              <p className="text-slate-600">
                Our technician will diagnose the issue and provide a transparent
                quote.
              </p>
            </div>

            <div className="relative p-6 bg-white rounded-lg shadow-custom border border-slate-100">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 pt-2">
                Repair & Completion
              </h3>
              <p className="text-slate-600">
                We perform the repair and ensure your appliance is working
                perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  );
};

export default HomePage;
