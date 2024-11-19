import React from "react";
import { FaGraduationCap, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion"; // Animation
import { Parallax } from "react-parallax"; // Scroll Effect
import { Canvas } from "@react-three/fiber"; // 3D
import { OrbitControls, Stars } from "@react-three/drei"; // 3D Controls and Effects
import { Tooltip } from "react-tooltip"; // Hover Tooltip

const PrincipalMessage: React.FC = () => {
  return (
    <div className="bg-black text-gray-200">
      {/* Hero Section with 3D Background */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Canvas>
            <Stars radius={100} depth={50} count={5000} factor={4} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
          </Canvas>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl font-extrabold text-white tracking-wide drop-shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Message from the Principal
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 mt-4 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            "Education is not preparation for life; education is life itself." – John Dewey
          </motion.p>
        </div>
      </section>

      {/* Principal's Introduction with Hover Effects */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div whileHover={{ scale: 1.1 }} className="transition">
            <img
              src="https://via.placeholder.com/400x400"
              alt="Principal"
              className="rounded-full shadow-2xl mx-auto"
              data-tooltip-id="principal-tooltip"
            />
            <Tooltip id="principal-tooltip" content="Principal: Dr. John Doe" place="top" />
          </motion.div>
          <div>
            <h2 className="text-4xl font-extrabold text-white">Dr. John Doe</h2>
            <h4 className="text-2xl font-semibold text-blue-400 mt-2">
              Principal, XYZ School
            </h4>
            <p className="text-lg text-gray-300 mt-4 leading-relaxed">
              With over 20 years of experience in education, Dr. John Doe has dedicated his life
              to fostering a culture of excellence and innovation in learning. A passionate
              educator and visionary leader, he believes in empowering every student to reach
              their fullest potential.
            </p>
          </div>
        </div>
      </section>

      {/* Principal's Message with Parallax Scroll */}
      <Parallax bgImage="https://via.placeholder.com/1500x800" strength={500}>
        <section className="py-16 text-center text-white">
          <motion.h2
            className="text-4xl font-extrabold mb-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            A Message to Our Students and Parents
          </motion.h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            "Welcome to XYZ School, where we strive to nurture and develop young minds to become
            future leaders. Education, to me, is not just about academic excellence but also about
            building character, resilience, and empathy in our students."
          </p>
          <div className="mt-8">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
              className="inline-block"
            >
              <FaGraduationCap className="text-6xl text-blue-400" />
            </motion.div>
          </div>
        </section>
      </Parallax>

      {/* Vision and Philosophy */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-white">
            Our Vision and Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <motion.div
              className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 shadow-xl rounded-lg"
              whileHover={{ scale: 1.1 }}
            >
              <h3 className="text-2xl font-bold text-blue-400">Vision</h3>
              <p className="text-gray-300 mt-4">
                To create a community of empowered learners in an atmosphere of mutual respect and
                trust. We aim to provide an innovative and inclusive environment that fosters
                growth, learning, and success.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 shadow-xl rounded-lg"
              whileHover={{ scale: 1.1 }}
            >
              <h3 className="text-2xl font-bold text-blue-400">Philosophy</h3>
              <p className="text-gray-300 mt-4">
                We believe that every child is unique and has the potential to achieve greatness.
                By blending traditional values with modern approaches, we aim to inspire students
                to become lifelong learners and compassionate global citizens.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">Reach Out to the Principal</h2>
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-blue-500 text-white py-3 px-8 rounded-lg text-lg hover:bg-blue-600 shadow-xl transition"
            >
              <FaEnvelope className="inline mr-2" /> Email
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-green-500 text-white py-3 px-8 rounded-lg text-lg hover:bg-green-600 shadow-xl transition"
            >
              <FaPhoneAlt className="inline mr-2" /> Call
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrincipalMessage;
