import React from 'react';
import SeoHead from '../components/SeoHead';

const TermsOfUsePage = () => {
  return (
    <>
      <SeoHead
        title="Terms of Use"
        description="Read the terms and conditions that govern your use of CustomerServicesCenter's website and services."
      />

      {/* Page Header */}
      <section className="bg-slate-900 py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Use</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            The terms and conditions that govern your use of our website and services.
          </p>
        </div>
      </section>

      {/* Terms of Use Content */}
      <section className="section">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-custom">
            <div className="prose max-w-none">
              <p className="mb-6"><strong>Last Updated:</strong> June 1, 2024</p>

              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="mb-6">
                These Terms of Use constitute a legally binding agreement between you and CustomerServicesCenter concerning your use of our website and services.
              </p>

              <h2 className="text-2xl font-bold mb-4">2. Services</h2>
              <p className="mb-6">
                CustomerServicesCenter provides appliance repair services and may modify or discontinue any part of our services without notice.
              </p>

              <h2 className="text-2xl font-bold mb-4">3. Service Appointments and Cancellations</h2>
              <p className="mb-4">When scheduling a service appointment, you agree to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Ensure someone over Adult (18+ age) is present</li>
                <li>Provide reasonable access to the appliance</li>
              </ul>
              <p className="mb-6">
                Please provide 24 hours' notice for cancellations or reschedules.
              </p>

              <h2 className="text-2xl font-bold mb-4">4. Warranties and Repairs</h2>
              <p className="mb-4">Repairs include a 90-day warranty unless otherwise stated. This does not cover:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Damage from misuse or neglect</li>
                <li>Issues unrelated to the original repair</li>
                <li>Unauthorized modifications</li>
                <li>Normal wear and tear</li>
              </ul>
              <p className="mb-6">
                Contact customer service for warranty claims.
              </p>

              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property Rights</h2>
              <p className="mb-6">
                All site content is owned by CustomerServicesCenter or licensors and is protected by intellectual property laws.
              </p>

              <h2 className="text-2xl font-bold mb-4">6. User Representations</h2>
              <p className="mb-4">You represent that:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>You are at least 18 years old</li>
                <li>You can enter a legal agreement</li>
                <li>Your provided information is accurate</li>
                <li>You will not use our services illegally</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">7. Prohibited Activities</h2>
              <p className="mb-4">You may not use the site to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Damage or impair the site</li>
                <li>Bypass security</li>
                <li>Harvest data</li>
                <li>Misrepresent or deceive</li>
                <li>Advertise unauthorized products</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p className="mb-6">
                CustomerServicesCenter is not liable for any damages resulting from your use of the site or services.
              </p>

              <h2 className="text-2xl font-bold mb-4">9. Indemnification</h2>
              <p className="mb-6">
                You agree to indemnify CustomerServicesCenter for any losses resulting from your violation of these Terms.
              </p>

              <h2 className="text-2xl font-bold mb-4">10. Governing Law and Jurisdiction</h2>
              <p className="mb-6">
                These Terms are governed by India's law. Disputes must be resolved in Indian courts.
              </p>

              <h2 className="text-2xl font-bold mb-4">11. Changes to These Terms</h2>
              <p className="mb-6">
                We may update these Terms at any time. Continued use constitutes acceptance.
              </p>

              <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
              <p>
                
              <strong>Phone:</strong> <a href="tel:+18008892801" className="t text-blue-400 transition-colors">
                    1800 889 2801
                  </a> <br />
                <strong>Address:</strong> Mumbai, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfUsePage;
