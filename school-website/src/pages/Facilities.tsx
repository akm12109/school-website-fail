import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDesktop, FaTree, FaBasketballBall, FaMicroscope, FaBook, FaMusic } from "react-icons/fa";

const Facilities: React.FC = () => {
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
            Our Facilities
          </h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="500">
            At XYZ School, we take pride in offering world-class facilities to support academic
            excellence and holistic development.
          </p>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400" data-aos="fade-up">
            Explore Our State-of-the-Art Facilities
          </h2>
          <p className="text-lg text-gray-300 mt-4" data-aos="fade-up" data-aos-delay="300">
            From technology-driven classrooms to lush green surroundings, we ensure a conducive
            environment for learning and growth.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {/* Facility 1 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <FaDesktop className="text-6xl text-blue-500 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Smart Classrooms</h3>
              <p className="text-gray-300 mt-2">
                Equipped with the latest technology, our classrooms enable interactive and
                engaging learning experiences.
              </p>
            </div>

            {/* Facility 2 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <FaTree className="text-6xl text-blue-500 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Green Campus</h3>
              <p className="text-gray-300 mt-2">
                Our lush, eco-friendly campus creates a serene and inspiring environment for
                students and staff.
              </p>
            </div>

            {/* Facility 3 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <FaBasketballBall className="text-6xl text-blue-500 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Sports Complex</h3>
              <p className="text-gray-300 mt-2">
                From basketball courts to swimming pools, we offer facilities to nurture every
                student's athletic potential.
              </p>
            </div>

            {/* Facility 4 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <FaMicroscope className="text-6xl text-blue-500 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Science Labs</h3>
              <p className="text-gray-300 mt-2">
                Advanced laboratories for hands-on experiments in Physics, Chemistry, and
                Biology.
              </p>
            </div>

            {/* Facility 5 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <FaBook className="text-6xl text-blue-500 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Library</h3>
              <p className="text-gray-300 mt-2">
                A vast collection of books, journals, and digital resources to fuel intellectual
                curiosity.
              </p>
            </div>

            {/* Facility 6 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <FaMusic className="text-6xl text-blue-500 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Music & Arts Studio</h3>
              <p className="text-gray-300 mt-2">
                Creative spaces for students to explore their talents in music, painting, and
                performing arts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400" data-aos="fade-up">
            Experience Excellence at XYZ School
          </h2>
          <p className="text-lg text-gray-300 mt-4" data-aos="fade-up" data-aos-delay="300">
            Come and visit our campus to witness the facilities that make learning a truly
            rewarding experience.
          </p>
          <button
            className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Schedule a Visit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
