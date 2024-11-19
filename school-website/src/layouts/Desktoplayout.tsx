import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaAward, FaLaptop, FaQuoteLeft, FaSchool } from "react-icons/fa";
import SchoolBuildingModel from "../components/Model"; // Import the 3D model component
import Slide from "../components/Slide";

const HomePage: React.FC = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS for smooth transitions
    AOS.refresh(); // Refresh AOS for dynamic content if needed
  }, []);

  return (
    <div className="text-white">
      {/* Section 1: Hero Section with 3D Model */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-black">
  <div
    className="absolute inset-0 bg-cover bg-center opacity-20"
    style={{
      backgroundImage:
        "url('https://raw.githubusercontent.com/akm12109/image_bg_assets/main/assets/1.png')", // Same background image
    }}
  ></div>
  {/* 3D Model Scene */}
  <div className="absolute inset-0 z-0">
    <Canvas>
      {/* Enable user controls with restricted zoom */}
      <OrbitControls
        enableZoom={true}
        minDistance={5}
        maxDistance={20}
        target={[0, 0, 0]}
      />

      {/* Lighting for the scene */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.7} />

      {/* Render the SchoolBuildingModel */}
      <SchoolBuildingModel scale={[1.5, 1.5, 1.5]} position={[0, -1, 0]} />
    </Canvas>
  </div>

  {/* Title and Tagline */}
  <div className="relative z-10 text-center">
    <h1
      className="text-6xl font-extrabold text-blue-300"
      data-aos="fade-down"
    >
      Welcome to XYZ School
    </h1>
    <p
      className="text-xl mt-4 max-w-2xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      Shaping Young Minds for a Bright Future
    </p>
  </div>
</section>
    <Slide/>

      {/* Section 2: About the School */}
      <section 
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/akm12109/image_bg_assets/main/assets/2.png')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className="relative rounded-lg shadow-lg"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src="https://via.placeholder.com/600x400"
              alt="School Building"
              className="rounded-lg"
            />
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <h2 className="text-4xl font-bold text-blue-400">About XYZ School</h2>
            <p className="text-lg text-gray-300 mt-4 leading-relaxed">
              XYZ School is a pioneer in delivering holistic education, blending
              traditional values with modern teaching methods. Our vibrant
              community nurtures creativity, critical thinking, and character
              building in a world-class environment.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Facilities */}
      <section
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/akm12109/image_bg_assets/main/assets/3.png')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400">Our Facilities</h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <FaLaptop className="text-4xl text-blue-400 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Smart Classrooms</h3>
              <p className="text-gray-300 mt-2">
                Technology-driven classrooms to enhance the learning experience.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <FaAward className="text-4xl text-blue-400 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Awards & Recognitions</h3>
              <p className="text-gray-300 mt-2">
                A legacy of excellence in academics and extracurriculars.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
              <FaSchool className="text-4xl text-blue-400 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Sports Facilities</h3>
              <p className="text-gray-300 mt-2">
                World-class infrastructure for sports and physical education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Achievements */}
      <section
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/akm12109/image_bg_assets/main/assets/4.png')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400">Our Achievements</h2>
          <p className="text-lg text-gray-300 mt-4">
            Recognized as one of the top schools in the region for academic
            excellence and extracurricular achievements.
          </p>
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/akm12109/image_bg_assets/main/assets/5.png')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400">What People Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12">
            <div
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500"
              data-aos="flip-left"
            >
              <FaQuoteLeft className="text-2xl text-blue-400" />
              <p className="text-gray-300 mt-4">
                "XYZ School provides an exceptional learning environment for
                students."
              </p>
              <p className="mt-4 text-blue-300">- Parent, Sarah Miller</p>
            </div>
            <div
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-500"
              data-aos="flip-right"
            >
              <FaQuoteLeft className="text-2xl text-blue-400" />
              <p className="text-gray-300 mt-4">
                "The teachers and facilities here are the best I’ve
                experienced."
              </p>
              <p className="mt-4 text-blue-300">- Student, Mark James</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
