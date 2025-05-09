import React from 'react';
import SeoHead from '../components/SeoHead';

const PrivacyPolicyPage = () => {
  return (
    <>
      <SeoHead
        title="Privacy Policy"
        description="Learn about AppliancePro's privacy policy and how we protect your personal information."
      />

      {/* Page Header */}
      <section className="bg-slate-900 py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Learn how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-custom">
            <div className="prose max-w-none">
              <p className="mb-6">
                <strong>Last Updated:</strong> June 1, 2024
              </p>

              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="mb-4">
                AppliancePro ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or communicate with us.
              </p>
              <p className="mb-6">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our services.
              </p>

              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-2">2.1 Personal Information</h3>
              <p className="mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Fill out forms on our website</li>
                <li>Request a service call or quote</li>
                <li>Contact us via phone, email, or social media</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Name, address, email address, and phone number</li>
                <li>Information about your appliances</li>
                <li>Service history and preferences</li>
                <li>Payment information (processed through secure third-party processors)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">2.2 Automatically Collected Information</h3>
              <p className="mb-4">
                When you visit our website or use our services, we may automatically collect certain information about your device and usage patterns. This may include:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referral sources</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">
                We may use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing and fulfilling service requests</li>
                <li>Communicating with you about appointments, services, and promotions</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Analyzing usage patterns to enhance user experience</li>
                <li>Protecting against fraud and unauthorized transactions</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
              <p className="mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, and contractors who perform services on our behalf.</li>
                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                <li><strong>With Your Consent:</strong> We may share your information with your consent or as otherwise disclosed at the time of collection.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="mb-6">
                We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Accessing, correcting, or deleting your personal information</li>
                <li>Withdrawing consent where processing is based on consent</li>
                <li>Requesting restriction of processing or objecting to processing</li>
                <li>Data portability</li>
                <li>Opting out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
              <p className="mb-6">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>

              <h2 className="text-2xl font-bold mb-4">8. Changes to This Privacy Policy</h2>
              <p className="mb-6">
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
              </p>

              <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
              <p className="mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> privacy@appliancepro.com<br />
                <strong>Phone:</strong> 1-800-123-4567<br />
                <strong>Address:</strong> 123 Repair Street, Appliance City, AC 12345
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
