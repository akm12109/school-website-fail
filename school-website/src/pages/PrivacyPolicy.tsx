import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      {/* Header Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-gray-800 to-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://via.placeholder.com/1920x1080')",
          }}
        ></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-extrabold text-blue-300" data-aos="fade-down">
            Privacy Policy
          </h1>
          <p className="text-xl mt-4 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="500">
            Your privacy is important to us. Learn how we collect, use, and protect your data.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-400 mb-8" data-aos="fade-up">
            Privacy Policy Overview
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="200">
            At XYZ School, we are committed to protecting your privacy. This Privacy Policy outlines how we
            collect, use, and safeguard the information you provide to us when visiting our website or using
            our services.
          </p>

          {/* Sections of the Privacy Policy */}
          <div className="space-y-12">
            {/* Section 1 */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-3xl font-bold text-blue-400">1. Information We Collect</h3>
              <p className="text-gray-300 mt-4 leading-relaxed">
                We may collect personal information when you:
              </p>
              <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300">
                <li>Submit forms on our website (e.g., admission forms, contact forms).</li>
                <li>Register for events or newsletters.</li>
                <li>Access and use our parent portal or other online services.</li>
              </ul>
              <p className="text-gray-300 mt-4">
                This information may include your name, email address, phone number, address, and other
                relevant details.
              </p>
            </div>

            {/* Section 2 */}
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-3xl font-bold text-blue-400">2. How We Use Your Information</h3>
              <p className="text-gray-300 mt-4 leading-relaxed">
                The information we collect is used to:
              </p>
              <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300">
                <li>Provide you with information about our school, services, and events.</li>
                <li>Respond to inquiries or requests.</li>
                <li>Process admissions or enrollments.</li>
                <li>Enhance user experience on our website.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div data-aos="fade-up" data-aos-delay="500">
              <h3 className="text-3xl font-bold text-blue-400">3. Data Protection</h3>
              <p className="text-gray-300 mt-4 leading-relaxed">
                We take data protection seriously. Our measures include:
              </p>
              <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300">
                <li>Secure storage of user data with encryption.</li>
                <li>Regular security audits to protect against unauthorized access.</li>
                <li>Strict access controls to ensure only authorized personnel can access sensitive
                  information.
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div data-aos="fade-up" data-aos-delay="600">
              <h3 className="text-3xl font-bold text-blue-400">4. Sharing Your Information</h3>
              <p className="text-gray-300 mt-4 leading-relaxed">
                We do not sell or share your personal information with third parties, except when:
              </p>
              <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300">
                <li>Required by law or legal processes.</li>
                <li>Necessary to provide services you have requested.</li>
                <li>Authorized by you explicitly.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div data-aos="fade-up" data-aos-delay="700">
              <h3 className="text-3xl font-bold text-blue-400">5. Cookies and Tracking</h3>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Our website uses cookies to enhance your browsing experience. These cookies help us:
              </p>
              <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300">
                <li>Understand user behavior and improve our website.</li>
                <li>Deliver a more personalized experience.</li>
              </ul>
              <p className="text-gray-300 mt-4">
                You can disable cookies in your browser settings, though some website features may not
                function properly without them.
              </p>
            </div>

            {/* Section 6 */}
            <div data-aos="fade-up" data-aos-delay="800">
              <h3 className="text-3xl font-bold text-blue-400">6. Updates to this Policy</h3>
              <p className="text-gray-300 mt-4 leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page,
                and we encourage you to review it periodically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-black text-center">
        <h2 className="text-3xl font-bold text-blue-300" data-aos="fade-up">
          Have Questions About Our Privacy Policy?
        </h2>
        <p className="text-gray-300 mt-4" data-aos="fade-up" data-aos-delay="300">
          If you have any concerns or require further details, please contact us at:
        </p>
        <p className="text-gray-300 mt-2">Email: privacy@xyzschool.com</p>
        <p className="text-gray-300">Phone: +1 234-567-890</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
