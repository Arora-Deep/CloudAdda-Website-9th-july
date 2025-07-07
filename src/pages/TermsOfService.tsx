
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Terms of Service Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="text-sm text-gray-600 mb-8">Last updated: January 1, 2024</div>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using CloudAdda's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
            <p className="text-gray-700 mb-4">
              CloudAdda provides cloud infrastructure services including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Virtual Training Labs</li>
              <li>Cloud Desktops (DaaS)</li>
              <li>Virtual Private Servers (VPS)</li>
              <li>Related cloud infrastructure services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use services in compliance with applicable laws</li>
              <li>Not engage in prohibited activities (spam, illegal content, etc.)</li>
              <li>Pay all applicable fees on time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
            <p className="text-gray-700 mb-4">
              Payment for services is due according to the billing cycle selected. Fees are non-refundable except as expressly stated in our refund policy.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>All fees are exclusive of taxes</li>
              <li>Late payments may result in service suspension</li>
              <li>Price changes will be communicated in advance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service Level Agreement</h2>
            <p className="text-gray-700">
              We strive to maintain 99.9% uptime for our services. Service credits may be available for qualifying outages as detailed in our SLA document.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data and Privacy</h2>
            <p className="text-gray-700">
              Your data privacy and security are important to us. Please review our Privacy Policy for details on how we collect, use, and protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700">
              CloudAdda's liability is limited to the amount paid for services in the preceding 12 months. We are not liable for indirect, incidental, or consequential damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
            <p className="text-gray-700">
              Either party may terminate this agreement with proper notice. Upon termination, your access to services will cease, and data may be deleted according to our data retention policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. Changes will be effective upon posting, and continued use constitutes acceptance of new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
            <p className="text-gray-700">
              For questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 text-gray-700">
              <p>Email: legal@cloudadda.com</p>
              <p>Address: CloudAdda, India</p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 CloudAdda. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
