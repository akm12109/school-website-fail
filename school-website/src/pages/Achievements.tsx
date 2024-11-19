import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTrophy, FaMedal, FaStar, FaUsers, FaAward } from "react-icons/fa";

const Achievements: React.FC = () => {
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
            backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Replace with an actual image URL
          }}
        ></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-extrabold text-blue-300" data-aos="fade-down">
            Our Achievements
          </h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="500">
            A legacy of excellence in academics, sports, and extracurricular activities. We take
            pride in our students and staff who make these achievements possible.
          </p>
        </div>
      </section>

      {/* Section 1: Awards and Recognitions */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400" data-aos="fade-up">
            Awards & Recognitions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Best School Award"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <FaTrophy className="text-6xl text-blue-500 mx-auto" />
                <h3 className="text-2xl font-bold mt-4">Best School Award</h3>
                <p className="text-gray-300 mt-2">Honored with the "Best School in Academics" award in 2022.</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Excellence in Sports"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <FaMedal className="text-6xl text-blue-500 mx-auto" />
                <h3 className="text-2xl font-bold mt-4">Excellence in Sports</h3>
                <p className="text-gray-300 mt-2">Our sports teams have won over 50 championships nationwide.</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Top-10 Ranking"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <FaStar className="text-6xl text-blue-500 mx-auto" />
                <h3 className="text-2xl font-bold mt-4">Top-10 Ranking</h3>
                <p className="text-gray-300 mt-2">Consistently ranked in the top 10 schools in the region.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Milestones */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400" data-aos="fade-up">
            Our Milestones
          </h2>
          <div className="mt-12 space-y-8" data-aos="fade-up" data-aos-delay="300">
            <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-lg p-6">
              <FaUsers className="text-6xl text-blue-500 mr-6" />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-blue-300">20,000+ Alumni</h3>
                <p className="text-gray-300 mt-2">
                  Our alumni network spans across the globe, making a difference in various industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
