import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaAward, FaLaptop, FaQuoteLeft, FaSchool } from "react-icons/fa";
import SchoolBuildingModel from "../components/Model";

const MobileHome: React.FC = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="text-white">
      {/* Section 1: Hero Section with 3D Model */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/akm12109/image_bg_assets/main/assets/Black%20and%20Blue%20Professional%20Technology%20Business%20Project%20Presentation.png')",
        }}
      >
        <div className="absolute inset-0 z-0">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.7} />
            <SchoolBuildingModel scale={[1, 1, 1]} position={[0, -0.5, 0]} />
          </Canvas>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-bold" data-aos="fade-up">
            Welcome to XYZ School
          </h1>
          <p className="text-sm mt-2" data-aos="fade-up" data-aos-delay="300">
            Shaping Young Minds for a Bright Future
          </p>
        </div>
      </section>

      {/* Section 2: About the School */}
      <section
        className="py-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/akm12109/image_bg_assets/main/assets/2.png')",
        }}
      >
        <div className="px-4 text-center">
          <h2 className="text-2xl font-bold text-blue-400">About XYZ School</h2>
          <p className="text-sm text-gray-300 mt-4">
            XYZ School is a pioneer in delivering holistic education, blending
            traditional values with modern teaching methods. Our vibrant
            community nurtures creativity, critical thinking, and character
            building in a world-class environment.
          </p>
        </div>
      </section>

      {/* Section 3: Facilities */}
      <section
        className="py-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/akm12109/image_bg_assets/main/assets/3.png')",
        }}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-400">Our Facilities</h2>
          <div className="grid grid-cols-1 gap-6 mt-6">
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <FaLaptop className="text-3xl text-blue-400 mx-auto" />
              <h3 className="text-lg font-bold mt-2">Smart Classrooms</h3>
              <p className="text-sm text-gray-300">
                Technology-driven classrooms to enhance the learning experience.
              </p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <FaAward className="text-3xl text-blue-400 mx-auto" />
              <h3 className="text-lg font-bold mt-2">Awards & Recognitions</h3>
              <p className="text-sm text-gray-300">
                A legacy of excellence in academics and extracurriculars.
              </p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <FaSchool className="text-3xl text-blue-400 mx-auto" />
              <h3 className="text-lg font-bold mt-2">Sports Facilities</h3>
              <p className="text-sm text-gray-300">
                World-class infrastructure for sports and physical education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Achievements */}
      <section
        className="py-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/akm12109/image_bg_assets/main/assets/4.png')",
        }}
      >
        <div className="px-4 text-center">
          <h2 className="text-2xl font-bold text-blue-400">Our Achievements</h2>
          <p className="text-sm text-gray-300 mt-4">
            Recognized as one of the top schools in the region for academic
            excellence and extracurricular achievements.
          </p>
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section
        className="py-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/akm12109/image_bg_assets/main/assets/5.png')",
        }}
      >
        <div className="px-4 text-center">
          <h2 className="text-2xl font-bold text-blue-400">What People Say</h2>
          <div className="grid grid-cols-1 gap-6 mt-6">
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <FaQuoteLeft className="text-xl text-blue-400" />
              <p className="text-sm mt-2">
                "XYZ School provides an exceptional learning environment for
                students."
              </p>
              <p className="mt-2 text-sm text-blue-300">- Parent, Sarah Miller</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <FaQuoteLeft className="text-xl text-blue-400" />
              <p className="text-sm mt-2">
                "The teachers and facilities here are the best I’ve
                experienced."
              </p>
              <p className="mt-2 text-sm text-blue-300">- Student, Mark James</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileHome;
