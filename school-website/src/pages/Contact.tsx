import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      {/* Header Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-800 to-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://via.placeholder.com/1920x1080')",
          }}
        ></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-extrabold text-blue-300" data-aos="fade-down">
            Contact Us
          </h1>
          <p
            className="text-xl mt-4 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Get in touch with us for any inquiries, admissions, or support. We’re here to help!
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold text-blue-400">Our Contact Information</h2>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Feel free to reach out to us via phone, email, or visit our campus. Our team is
              dedicated to addressing your questions promptly.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-400 text-2xl" />
                <span className="text-gray-300">
                  123 XYZ Road, ABC City, Country 456789
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <FaPhoneAlt className="text-blue-400 text-2xl" />
                <span className="text-gray-300">+1 234-567-890</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-400 text-2xl" />
                <span className="text-gray-300">contact@xyzschool.com</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div
            className="p-8 bg-gray-800 rounded-lg shadow-lg"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2 className="text-4xl font-bold text-blue-400">Send Us a Message</h2>
            <form className="mt-6 space-y-6">
              <div>
                <label className="block text-gray-300 text-sm mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2" htmlFor="email">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[50vh]">
        <iframe
          title="School Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345091346!2d-122.41941518468115!3d37.77492977975817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a29186f9%3A0x4f439d0787e8f0a1!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1634179980016!5m2!1sen!2sin"
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allowFullScreen={false}
          aria-hidden="false"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
