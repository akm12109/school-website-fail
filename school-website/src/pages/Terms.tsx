import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TermsAndConditions: React.FC = () => {
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
            Terms and Conditions
          </h1>
          <p className="text-xl mt-4 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="500">
            Please read these terms and conditions carefully before using our website or enrolling
            in our programs.
          </p>
        </div>
      </section>

      {/* Terms Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-blue-400" data-aos="fade-up">
              General Terms
            </h2>
            <p className="text-lg text-gray-300 mt-4 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              By accessing or using our website, you agree to comply with and be bound by the
              following terms and conditions. These terms apply to all visitors, users, and others
              who access or use the website.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-400" data-aos="fade-up">
              1. Use of Website
            </h3>
            <p className="text-gray-300 mt-2 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              The content on this website is for general information purposes only. We reserve the
              right to modify or discontinue the website (or any part of it) without notice at any
              time.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-400" data-aos="fade-up">
              2. Admissions Policy
            </h3>
            <p className="text-gray-300 mt-2 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              Admission to XYZ School is subject to the rules and guidelines set by the institution.
              Submitting false or incomplete information during the admission process may result in
              denial or termination of admission.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-400" data-aos="fade-up">
              3. Fees and Payment
            </h3>
            <p className="text-gray-300 mt-2 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              All fees must be paid according to the schedule outlined by the school. Failure to pay
              fees on time may result in penalties, suspension, or termination of enrollment.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-400" data-aos="fade-up">
              4. Code of Conduct
            </h3>
            <p className="text-gray-300 mt-2 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              Students, parents, and staff are expected to adhere to the code of conduct outlined by
              the school. Any breach of this code may result in disciplinary action.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-400" data-aos="fade-up">
              5. Privacy Policy
            </h3>
            <p className="text-gray-300 mt-2 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              Your privacy is important to us. We are committed to protecting your personal
              information and ensuring its confidentiality. For more details, please refer to our
              Privacy Policy.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-400" data-aos="fade-up">
              6. Limitation of Liability
            </h3>
            <p className="text-gray-300 mt-2 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              XYZ School will not be liable for any indirect, incidental, special, or consequential
              damages arising from the use of this website or the services provided by the school.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-400" data-aos="fade-up">
              7. Governing Law
            </h3>
            <p className="text-gray-300 mt-2 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              These terms and conditions are governed by and construed in accordance with the laws
              of the jurisdiction where the school operates.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-black text-center">
        <h2 className="text-3xl font-bold text-blue-300" data-aos="fade-up">
          Need More Information?
        </h2>
        <p className="text-gray-300 mt-4" data-aos="fade-up" data-aos-delay="300">
          If you have any questions about our terms and conditions, feel free to contact us.
        </p>
        <button
          className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          data-aos="zoom-in"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default TermsAndConditions;
