import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBullseye, FaLightbulb, FaStar, FaUsers, FaGlobe } from "react-icons/fa";

const MissionVision: React.FC = () => {
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
            backgroundImage: "url('https://raw.githubusercontent.com/akm12109/image_bg_assets/main/assets/1.png')", // Replace with a relevant mission-related background
          }}
        ></div>
        <div className="relative z-10 text-center">
          <h1
            className="text-6xl font-extrabold text-blue-300"
            data-aos="fade-down"
          >
            Our Mission & Vision
          </h1>
          <p
            className="text-xl mt-4 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Driving excellence, empowering communities, and fostering a brighter
            future for all.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className="relative rounded-lg shadow-lg"
            data-aos="fade-right"
          >
            <img
              src="https://via.placeholder.com/600x400"
              alt="Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-4xl font-bold text-blue-400">Our Mission</h2>
            <p className="text-lg text-gray-300 mt-4 leading-relaxed">
              Our mission is to provide quality education that fosters creativity,
              critical thinking, and social responsibility. We aim to empower
              individuals to achieve their fullest potential and contribute
              meaningfully to society.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start space-x-4">
                <FaBullseye className="text-3xl text-blue-500" />
                <p className="text-gray-300">
                  Deliver a curriculum that is globally relevant and locally impactful.
                </p>
              </li>
              <li className="flex items-start space-x-4">
                <FaLightbulb className="text-3xl text-blue-500" />
                <p className="text-gray-300">
                  Inspire a passion for lifelong learning and innovation.
                </p>
              </li>
              <li className="flex items-start space-x-4">
                <FaUsers className="text-3xl text-blue-500" />
                <p className="text-gray-300">
                  Build a collaborative environment that nurtures growth and
                  inclusivity.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold text-blue-400">Our Vision</h2>
            <p className="text-lg text-gray-300 mt-4 leading-relaxed">
              We envision a world where education transforms lives, builds
              sustainable communities, and creates global citizens with
              unparalleled integrity and competence.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start space-x-4">
                <FaStar className="text-3xl text-blue-500" />
                <p className="text-gray-300">
                  Achieve excellence in academics, arts, and sports.
                </p>
              </li>
              <li className="flex items-start space-x-4">
                <FaGlobe className="text-3xl text-blue-500" />
                <p className="text-gray-300">
                  Foster global awareness and leadership skills.
                </p>
              </li>
              <li className="flex items-start space-x-4">
                <FaUsers className="text-3xl text-blue-500" />
                <p className="text-gray-300">
                  Create a community where every individual thrives.
                </p>
              </li>
            </ul>
          </div>
          <div
            className="relative rounded-lg shadow-lg"
            data-aos="fade-left"
          >
            <img
              src="https://via.placeholder.com/600x400"
              alt="Vision"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400">Our Core Values</h2>
          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            Our values define who we are and guide us in our mission and vision.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12"
            data-aos="zoom-in"
          >
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <FaBullseye className="text-4xl text-blue-400 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Excellence</h3>
              <p className="text-gray-300 mt-2">
                Striving for the highest standards in all endeavors.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <FaUsers className="text-4xl text-blue-400 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Collaboration</h3>
              <p className="text-gray-300 mt-2">
                Building strong partnerships and teamwork.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <FaGlobe className="text-4xl text-blue-400 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Global Perspective</h3>
              <p className="text-gray-300 mt-2">
                Preparing individuals to thrive in an interconnected world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
