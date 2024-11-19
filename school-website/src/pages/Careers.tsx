import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBriefcase, FaEnvelope, FaUserTie, FaUsers, FaBuilding } from "react-icons/fa";

const CareerPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Replace with a relevant background
          }}
        ></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-extrabold text-blue-300" data-aos="fade-down">
            Join Our Team
          </h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="500">
            Discover exciting opportunities to grow your career with us. Explore openings, benefits, 
            and our culture of excellence.
          </p>
        </div>
      </section>

      {/* Section 1: Why Work With Us */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400" data-aos="fade-up">
            Why Work With Us?
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <FaBuilding className="text-6xl text-blue-500 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Great Work Environment</h3>
              <p className="text-gray-300 mt-2">
                Collaborate with a team that fosters innovation and growth.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <FaUsers className="text-6xl text-blue-500 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Team Collaboration</h3>
              <p className="text-gray-300 mt-2">
                Work with experienced professionals dedicated to success.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <FaBriefcase className="text-6xl text-blue-500 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Career Growth</h3>
              <p className="text-gray-300 mt-2">
                Get opportunities for continuous learning and skill development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Current Openings */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400" data-aos="fade-up">
            Current Openings
          </h2>
          <p className="text-lg text-gray-300 mt-4" data-aos="fade-up" data-aos-delay="300">
            Explore the positions available and apply today to join our dynamic team.
          </p>
          <div
            className="mt-12 space-y-8"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {/* Job Opening 1 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-300">Mathematics Teacher</h3>
              <p className="text-gray-300 mt-2">
                Full-time | Location: New York, USA
              </p>
              <p className="text-gray-400 mt-2">
                We are looking for a passionate Mathematics teacher to inspire students and lead
                innovative learning techniques.
              </p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
                Apply Now
              </button>
            </div>

            {/* Job Opening 2 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-300">Physics Teacher</h3>
              <p className="text-gray-300 mt-2">
                Part-time | Location: Remote
              </p>
              <p className="text-gray-400 mt-2">
                Seeking a Physics teacher for online sessions. Expertise in interactive teaching methods is a must.
              </p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How to Apply */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400" data-aos="fade-up">
            How to Apply
          </h2>
          <p className="text-lg text-gray-300 mt-4" data-aos="fade-up" data-aos-delay="300">
            Follow these simple steps to submit your application:
          </p>
          <div
            className="mt-12 space-y-8"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
              <FaEnvelope className="text-6xl text-blue-500 mr-6" />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-blue-300">Step 1: Submit Your Resume</h3>
                <p className="text-gray-300 mt-2">
                  Send your CV to our HR email: careers@xyzschool.com.
                </p>
              </div>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
              <FaUserTie className="text-6xl text-blue-500 mr-6" />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-blue-300">Step 2: Attend the Interview</h3>
                <p className="text-gray-300 mt-2">
                  Our team will review your application and schedule an interview if you qualify.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
