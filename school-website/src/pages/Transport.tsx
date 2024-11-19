import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBus, FaRoute, FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";

const Transport: React.FC = () => {
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
            Transportation Services
          </h1>
          <p className="text-xl mt-4 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="500">
            Safe, reliable, and efficient transport services for all our students.
          </p>
        </div>
      </section>

      {/* Section 1: Overview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className="rounded-lg shadow-lg"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src="https://via.placeholder.com/600x400"
              alt="School Bus"
              className="rounded-lg"
            />
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <h2 className="text-4xl font-bold text-blue-400">Our Transport System</h2>
            <p className="text-lg text-gray-300 mt-4 leading-relaxed">
              XYZ School provides a well-organized and reliable transport system to ensure
              students' safety and punctuality. Our fleet of modern buses covers multiple routes,
              providing doorstep pickup and drop services.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Key Features */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500"
              data-aos="zoom-in"
            >
              <FaBus className="text-4xl text-blue-400 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Modern Fleet</h3>
              <p className="text-gray-300 mt-2">
                Equipped with GPS, air conditioning, and CCTV for safety and comfort.
              </p>
            </div>
            <div
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <FaRoute className="text-4xl text-blue-400 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Extensive Routes</h3>
              <p className="text-gray-300 mt-2">
                Covers multiple areas for convenience and accessibility.
              </p>
            </div>
            <div
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <FaShieldAlt className="text-4xl text-blue-400 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Safety First</h3>
              <p className="text-gray-300 mt-2">
                Regular maintenance and trained drivers ensure safe travel.
              </p>
            </div>
            <div
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <FaMapMarkerAlt className="text-4xl text-blue-400 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Real-Time Tracking</h3>
              <p className="text-gray-300 mt-2">
                GPS-enabled buses allow parents to track routes and timings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Routes and Schedule */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-400 text-center">Routes and Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up">
              <h3 className="text-2xl font-bold text-blue-400">Route 1: City Center</h3>
              <p className="text-gray-300 mt-2">
                Stops: Central Park → City Mall → Main Square → XYZ School
              </p>
              <p className="text-gray-300 mt-2">Morning Pickup: 7:30 AM</p>
              <p className="text-gray-300 mt-2">Evening Drop: 4:00 PM</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up">
              <h3 className="text-2xl font-bold text-blue-400">Route 2: Suburban Area</h3>
              <p className="text-gray-300 mt-2">
                Stops: Green Valley → Hilltop Plaza → Main Avenue → XYZ School
              </p>
              <p className="text-gray-300 mt-2">Morning Pickup: 7:00 AM</p>
              <p className="text-gray-300 mt-2">Evening Drop: 4:30 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Safety Measures */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400">Safety Measures</h2>
          <p className="text-lg text-gray-300 mt-4">
            Ensuring safety is our top priority. Here’s what we do to keep your children safe:
          </p>
          <ul className="list-disc text-left mt-8 space-y-4 text-gray-300 max-w-4xl mx-auto">
            <li>Regular driver training and background checks.</li>
            <li>Periodic vehicle maintenance and inspections.</li>
            <li>On-board CCTV cameras for surveillance.</li>
            <li>Real-time tracking through our parent portal.</li>
            <li>Emergency contact system for any incidents.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-blue-300" data-aos="fade-up">
          Interested in Our Transportation Services?
        </h2>
        <p className="text-gray-300 mt-4" data-aos="fade-up" data-aos-delay="300">
          Contact us to know more about the routes, timings, and availability.
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

export default Transport;
