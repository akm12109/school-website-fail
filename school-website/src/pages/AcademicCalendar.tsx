import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCalendarAlt, FaDownload, FaExclamationCircle } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const AcademicCalendar: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh();
  }, []);

  // Sample Pie Chart Data (for January)
  const pieData = {
    labels: ["School Days", "Sundays", "Holidays", "Events"],
    datasets: [
      {
        data: [20, 5, 3, 3], // Example values for January
        backgroundColor: ["#4caf50", "#2196f3", "#ff9800", "#f44336"],
        borderWidth: 1,
      },
    ],
  };

  // Upcoming Events Data
  const upcomingEvents = [
    { date: "2024-11-20", title: "Science Exhibition" },
    { date: "2024-12-15", title: "Christmas Celebration" },
    { date: "2025-01-10", title: "Annual Sports Meet" },
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Replace with a suitable image
          }}
        ></div>
        <div className="relative z-10 text-center">
          <h1
            className="text-6xl font-extrabold text-blue-300"
            data-aos="fade-down"
          >
            Academic Calendar
          </h1>
          <p
            className="text-xl mt-4 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Stay updated with our academic schedule, key events, and holidays.
          </p>
        </div>
      </section>

      {/* Monthly Pie Charts */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-blue-400 text-center"
            data-aos="fade-up"
          >
            Monthly Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {["January", "February", "March", "April"].map((month, index) => (
              <div
                key={month}
                className="p-6 bg-gray-800 rounded-lg shadow-lg"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <h3 className="text-2xl font-bold text-blue-300 mb-4">
                  {month}
                </h3>
                <Pie data={pieData} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India's Annual Holidays Chart */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-blue-400 text-center"
            data-aos="fade-up"
          >
            India's Annual Holidays
          </h2>
          <div
            className="mt-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <iframe
              title="India Annual Holidays"
              src="https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata"
              style={{ border: 0 }}
              width="100%"
              height="600px"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-blue-400 text-center"
            data-aos="fade-up"
          >
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.date}
                className="p-6 bg-gray-800 rounded-lg shadow-lg"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <h3 className="text-2xl font-bold text-blue-300">
                  {event.title}
                </h3>
                <p className="text-gray-300 mt-2">
                  Date: {new Date(event.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Model Section */}
      <section className="relative h-[60vh]">
        <Canvas>
          <OrbitControls enableZoom={true} minDistance={5} maxDistance={20} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.7} />
          <mesh>
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color="#4caf50" />
          </mesh>
        </Canvas>
      </section>
    </div>
  );
};

export default AcademicCalendar;
