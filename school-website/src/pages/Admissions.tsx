import React from "react";
import { FaClipboardCheck, FaUserPlus, FaPaperPlane, FaRegFileAlt } from "react-icons/fa";
const Admissions: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-blue-800">Admission Process</h1>
          <p className="text-xl text-blue-600 mt-4">
            Join us in shaping the future with an education that inspires and empowers.
          </p>
        </div>
      </section>

      {/* Admission Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center">How to Apply?</h2>
          <p className="text-lg text-gray-600 mt-4 text-center">
            Our admission process is designed to ensure that every candidate receives the best chance to be a part of our family.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="text-gray-600">
              <h3 className="text-2xl font-semibold">Steps for Admission</h3>
              <ul className="list-decimal list-inside space-y-4 mt-6">
                <li>
                  <strong>Step 1:</strong> Fill out the online application form through our website or visit the school office for an offline form.
                </li>
                <li>
                  <strong>Step 2:</strong> Submit required documents, including previous academic records and identification proof.
                </li>
                <li>
                  <strong>Step 3:</strong> Attend the admission interview or entrance test (depending on the grade applied for).
                </li>
                <li>
                  <strong>Step 4:</strong> If selected, complete the admission formalities, including fee payment and confirmation of seat.
                </li>
                <li>
                  <strong>Step 5:</strong> Welcome to XYZ School! Receive your student ID and orientation details.
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/600x400"
                alt="Admission Process"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Eligibility Criteria */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800">Eligibility Criteria</h2>
          <p className="text-lg text-gray-600 mt-4 text-center">
            We welcome students from diverse backgrounds. Here are the basic eligibility requirements:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
                <li>Age criteria as per grade level (e.g., 5-6 years for Grade 1).</li>
                <li>Completion of the previous grade with satisfactory marks.</li>
                <li>For higher grades, prior academic records and/or entrance exam scores may be required.</li>
                <li>English language proficiency (for non-native English speakers).</li>
              </ul>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/600x400"
                alt="Eligibility Criteria"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800">Documents Required</h2>
          <p className="text-lg text-gray-600 mt-4 text-center">
            To complete the admission process, please ensure you have the following documents ready:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg text-center">
              <FaRegFileAlt className="text-4xl text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Birth Certificate</h3>
              <p className="text-gray-600 mt-2">
                A valid birth certificate to verify the age of the student.
              </p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg text-center">
              <FaClipboardCheck className="text-4xl text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Previous Academic Records</h3>
              <p className="text-gray-600 mt-2">
                Transcripts or report cards from the previous academic institution.
              </p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg text-center">
              <FaUserPlus className="text-4xl text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Passport-size Photograph</h3>
              <p className="text-gray-600 mt-2">
                A recent passport-size photograph of the student.
              </p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg text-center">
              <FaPaperPlane className="text-4xl text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Parent/Guardian ID Proof</h3>
              <p className="text-gray-600 mt-2">
                A valid ID proof (Aadhar card, voter ID, etc.) of the parent/guardian.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition Fees */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800">Tuition Fees</h2>
          <p className="text-lg text-gray-600 mt-4 text-center">
            We offer competitive tuition fees, ensuring affordability without compromising quality.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-semibold mt-4">Primary Grades (1-5)</h3>
              <p className="text-gray-600 mt-2">
                $1000 per semester
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-semibold mt-4">Middle Grades (6-8)</h3>
              <p className="text-gray-600 mt-2">
                $1200 per semester
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-semibold mt-4">Senior Grades (9-12)</h3>
              <p className="text-gray-600 mt-2">
                $1500 per semester
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Need Help?</h2>
          <p className="text-lg text-gray-600 mt-4">
            If you have any questions or need assistance with the admission process, feel free to reach out.
          </p>
          <div className="mt-6">
            <button className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg">
              Contact Admissions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
