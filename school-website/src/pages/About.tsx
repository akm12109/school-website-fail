import React from "react";
import { FaSchool, FaHistory, FaUserTie, FaChalkboardTeacher, FaAward, FaHandHoldingHeart } from "react-icons/fa";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-800">About XYZ School</h1>
          <p className="text-xl text-gray-600 mt-4">
            A legacy of excellence in education, shaping leaders of tomorrow.
          </p>
        </div>
      </section>

      {/* School History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800">Our Journey</h2>
              <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                Established in 1990, XYZ School has been a cornerstone of quality education for over 30 years. From humble beginnings with just a handful of students, the school has grown into a thriving institution known for academic excellence, extracurricular achievements, and a commitment to holistic development. 
              </p>
              <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                With state-of-the-art facilities, a modern curriculum, and a team of dedicated educators, XYZ School continues to uphold its mission of shaping future leaders. We pride ourselves on fostering a nurturing environment where students can thrive intellectually, socially, and emotionally.
              </p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/600x400"
                alt="School Journey"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Core Values</h2>
          <p className="text-lg text-gray-600 mt-4">
            At XYZ School, we believe in nurturing every student to reach their full potential through our core values.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <FaHandHoldingHeart className="text-4xl text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Integrity</h3>
              <p className="text-gray-600 mt-2">
                Building a strong foundation of honesty and ethics in every student.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <FaAward className="text-4xl text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Excellence</h3>
              <p className="text-gray-600 mt-2">
                Striving for the highest standards in academics and personal growth.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <FaChalkboardTeacher className="text-4xl text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Leadership</h3>
              <p className="text-gray-600 mt-2">
                Encouraging students to lead with confidence and compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Meet Our Team</h2>
          <p className="text-lg text-gray-600 mt-4">
            Dedicated educators and visionary leaders who make it all possible.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12">
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <FaUserTie className="text-4xl text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Dr. John Smith</h3>
              <p className="text-gray-600 mt-2">Principal</p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <FaUserTie className="text-4xl text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Mrs. Jane Doe</h3>
              <p className="text-gray-600 mt-2">Vice Principal</p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <FaUserTie className="text-4xl text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Mr. Alan Brown</h3>
              <p className="text-gray-600 mt-2">Head of Academics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Achievements</h2>
          <p className="text-lg text-gray-600 mt-4">
            Recognizing milestones that mark our journey to excellence.
          </p>
          <div className="mt-12">
            <ul className="list-disc list-inside text-left text-gray-700 max-w-3xl mx-auto">
              <li>Best School of the Year - 2023</li>
              <li>100% Board Exam Results for 5 Consecutive Years</li>
              <li>Top 5 in Regional Science Competitions</li>
              <li>International Recognition for Cultural Programs</li>
              <li>State Championship Winners in Sports</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Why Choose XYZ School?</h2>
          <p className="text-lg text-gray-600 mt-4">
            Experience the difference in quality education and holistic development.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12">
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <FaSchool className="text-4xl text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Modern Facilities</h3>
              <p className="text-gray-600 mt-2">
                State-of-the-art infrastructure for academics and extracurricular activities.
              </p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <FaHistory className="text-4xl text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Rich Legacy</h3>
              <p className="text-gray-600 mt-2">
                Decades of experience in delivering quality education.
              </p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <FaAward className="text-4xl text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Award-Winning Faculty</h3>
              <p className="text-gray-600 mt-2">
                Recognized educators who inspire excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
