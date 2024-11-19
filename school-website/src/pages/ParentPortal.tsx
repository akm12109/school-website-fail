import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserTie, FaChalkboardTeacher, FaCalendarAlt, FaBell, FaBook } from "react-icons/fa";

const ParentPortal: React.FC = () => {
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
            Parent Portal
          </h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="500">
            Stay connected to your child’s education journey with real-time updates, performance
            insights, and notifications—all in one place.
          </p>
        </div>
      </section>

      {/* Section 1: Portal Features */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400" data-aos="fade-up">
            Key Features
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <FaUserTie className="text-6xl text-blue-500 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Profile Management</h3>
              <p className="text-gray-300 mt-2">
                Update personal details and preferences securely.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <FaChalkboardTeacher className="text-6xl text-blue-500 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Teacher Interactions</h3>
              <p className="text-gray-300 mt-2">
                Communicate directly with teachers to track your child’s progress.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <FaCalendarAlt className="text-6xl text-blue-500 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Event Calendar</h3>
              <p className="text-gray-300 mt-2">
                View and stay updated on school events, holidays, and activities.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <FaBell className="text-6xl text-blue-500 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Notifications</h3>
              <p className="text-gray-300 mt-2">
                Get real-time alerts for announcements, grades, and attendance.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <FaBook className="text-6xl text-blue-500 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Progress Reports</h3>
              <p className="text-gray-300 mt-2">
                Access detailed academic reports, including grades and feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How to Use the Portal */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400" data-aos="fade-up">
            How to Use the Portal
          </h2>
          <div className="mt-12 space-y-8" data-aos="fade-up" data-aos-delay="300">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
              <FaUserTie className="text-6xl text-blue-500 mr-6" />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-blue-300">Step 1: Log In</h3>
                <p className="text-gray-300 mt-2">
                  Use your unique credentials to log in securely to the Parent Portal.
                </p>
              </div>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
              <FaChalkboardTeacher className="text-6xl text-blue-500 mr-6" />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-blue-300">Step 2: Navigate Features</h3>
                <p className="text-gray-300 mt-2">
                  Explore various sections like grades, attendance, notifications, and more.
                </p>
              </div>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
              <FaCalendarAlt className="text-6xl text-blue-500 mr-6" />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-blue-300">Step 3: Stay Updated</h3>
                <p className="text-gray-300 mt-2">
                  Receive important updates and monitor your child’s educational progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Benefits */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400" data-aos="fade-up">
            Benefits of the Parent Portal
          </h2>
          <p className="text-lg text-gray-300 mt-4" data-aos="fade-up" data-aos-delay="300">
            Discover how the portal enhances communication and keeps you informed.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <h3 className="text-2xl font-bold text-blue-300">Transparency</h3>
              <p className="text-gray-300 mt-2">
                View real-time data on your child’s attendance, grades, and behavior.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <h3 className="text-2xl font-bold text-blue-300">Convenience</h3>
              <p className="text-gray-300 mt-2">
                Access the portal anytime, anywhere, on your preferred device.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <h3 className="text-2xl font-bold text-blue-300">Engagement</h3>
              <p className="text-gray-300 mt-2">
                Be actively involved in your child’s education journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParentPortal;
