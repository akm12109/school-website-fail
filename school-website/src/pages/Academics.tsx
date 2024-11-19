import React from "react";
import { FaBook, FaChalkboard, FaFlask, FaLaptopCode, FaGraduationCap } from "react-icons/fa";

const AcademicsPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-blue-800">Academic Programs</h1>
          <p className="text-xl text-blue-600 mt-4">
            Empowering young minds with a comprehensive and modern curriculum.
          </p>
        </div>
      </section>

      {/* Academic Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800">Our Curriculum</h2>
              <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                XYZ School offers a well-rounded curriculum that balances academic rigor with creativity and innovation. 
                We follow a progressive teaching methodology designed to foster critical thinking, collaboration, and lifelong learning.
              </p>
              <ul className="list-disc list-inside mt-6 text-gray-700 space-y-3">
                <li>Focus on foundational subjects: Mathematics, Science, and Language Arts.</li>
                <li>Integration of technology in teaching and learning.</li>
                <li>Project-based learning to enhance problem-solving skills.</li>
                <li>Encouragement of interdisciplinary approaches to education.</li>
              </ul>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/600x400"
                alt="Academics Highlights"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800">Programs Offered</h2>
          <p className="text-lg text-center text-gray-600 mt-4">
            Explore the diverse range of academic programs designed for every stage of learning.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <FaBook className="text-4xl text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Primary Education</h3>
              <p className="text-gray-600 mt-2">
                Building a strong foundation in literacy, numeracy, and critical thinking.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <FaChalkboard className="text-4xl text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Middle School</h3>
              <p className="text-gray-600 mt-2">
                Expanding horizons with advanced concepts and hands-on learning.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <FaFlask className="text-4xl text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Science Program</h3>
              <p className="text-gray-600 mt-2">
                Encouraging inquiry and innovation through modern labs and experiments.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <FaLaptopCode className="text-4xl text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Technology & Coding</h3>
              <p className="text-gray-600 mt-2">
                Preparing students for the digital age with coding and STEM education.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <FaGraduationCap className="text-4xl text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Senior Secondary</h3>
              <p className="text-gray-600 mt-2">
                Specialization in streams like Science, Commerce, and Humanities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <ul className="list-disc list-inside text-gray-700 space-y-4 text-lg">
                <li>Student-centered learning with personalized attention.</li>
                <li>Extensive library resources for academic and recreational reading.</li>
                <li>Highly qualified and experienced faculty members.</li>
                <li>Robust co-curricular programs for all-round development.</li>
                <li>Regular assessments to track and enhance student performance.</li>
              </ul>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/600x400"
                alt="Key Features"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Our Programs */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800">Why Choose Our Academic Programs?</h2>
          <p className="text-lg text-center text-gray-600 mt-4">
            Ensuring a bright future with holistic development and academic excellence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12">
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-semibold mt-4">Comprehensive Learning</h3>
              <p className="text-gray-600 mt-2">
                A curriculum that blends theory, practicals, and projects.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-semibold mt-4">Global Standards</h3>
              <p className="text-gray-600 mt-2">
                Preparing students for global challenges and opportunities.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-semibold mt-4">Innovative Approach</h3>
              <p className="text-gray-600 mt-2">
                Incorporating technology and creative problem-solving in education.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;
