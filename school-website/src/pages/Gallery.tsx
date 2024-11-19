import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaImage, FaVideo } from "react-icons/fa";
import Modal from "react-modal";

// Modal styling
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#1f2937", // Dark background for modal
    color: "white",
    borderRadius: "10px",
    padding: "20px",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent background
  },
};

const Gallery: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh();
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string | undefined>();

  const images = [
    "https://via.placeholder.com/400x300?text=Event+1",
    "https://via.placeholder.com/400x300?text=Event+2",
    "https://via.placeholder.com/400x300?text=Event+3",
    "https://via.placeholder.com/400x300?text=Event+4",
    "https://via.placeholder.com/400x300?text=Event+5",
  ];

  const videos = [
    "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
  ];

  const openModal = (content: string) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalContent(undefined);
    setModalIsOpen(false);
  };

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
            Gallery
          </h1>
          <p
            className="text-xl mt-4 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Explore moments captured during school events, activities, and daily campus life.
          </p>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400 mb-12">Image Gallery</h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            data-aos="fade-up"
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="relative cursor-pointer hover:scale-105 transform transition duration-500"
                onClick={() => openModal(src)}
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="rounded-lg shadow-lg w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center text-blue-400">
                  <FaImage className="text-4xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400 mb-12">Video Gallery</h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            data-aos="fade-up"
          >
            {videos.map((src, index) => (
              <div
                key={index}
                className="relative cursor-pointer hover:scale-105 transform transition duration-500"
                onClick={() => openModal(src)}
              >
                <video
                  src={src}
                  className="rounded-lg shadow-lg w-full h-60 object-cover"
                  muted
                  autoPlay
                  loop
                ></video>
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center text-blue-400">
                  <FaVideo className="text-4xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} ariaHideApp={false}>
        {modalContent?.endsWith(".mp4") ? (
          <video src={modalContent} controls className="w-full h-full rounded-lg"></video>
        ) : (
          <img src={modalContent || undefined} alt="Gallery Item" className="w-full h-full rounded-lg" />
        )}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white text-lg bg-blue-400 px-3 py-1 rounded-lg"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Gallery;
