import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaChalkboardTeacher,
  FaBriefcase,
  FaImage,
  FaPhoneAlt,
  FaCalendarAlt,
  FaNewspaper,
} from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";

const Sidebar: React.FC = () => {
  const [dropdown, setDropdown] = useState<{ [key: string]: boolean }>({
    about: false,
    academics: false,
    admission: false,
    facilities: false,
    legal: false,
  });

  // Toggle dropdown visibility
  const toggleDropdown = (menu: string) => {
    setDropdown((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div
      className="absolute top-0 left-0 w-64 h-full z-50"
      style={{
        background: "linear-gradient(to bottom, #1f2937, #1e40af)", // Solid gradient
        backdropFilter: "blur(0)", // Prevent any image bleed-through
      }}
    >
      <ul className="space-y-4 px-6 py-8 text-white">
        {/* Home */}
        <li>
          <Link to="/" className="flex items-center space-x-2 hover:underline">
            <FaHome className="text-xl" />
            <span>Home</span>
          </Link>
        </li>

        {/* About Dropdown */}
        <li>
          <div
            className="flex items-center space-x-2 cursor-pointer hover:underline"
            onClick={() => toggleDropdown("about")}
          >
            <FaInfoCircle className="text-xl" />
            <span>About</span>
          </div>
          {dropdown.about && (
            <ul className="ml-4 mt-2 space-y-2">
              <li>
                <Link to="/about" className="block hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/principalmessage" className="block hover:underline">
                  Principal's Message
                </Link>
              </li>
              <li>
                <Link to="/missionvision" className="block hover:underline">
                  Mission & Vision
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Academics Dropdown */}
        <li>
          <div
            className="flex items-center space-x-2 cursor-pointer hover:underline"
            onClick={() => toggleDropdown("academics")}
          >
            <FaChalkboardTeacher className="text-xl" />
            <span>Academics</span>
          </div>
          {dropdown.academics && (
            <ul className="ml-4 mt-2 space-y-2">
              <li>
                <Link to="/academics" className="block hover:underline">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/academiccalendar" className="block hover:underline">
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="block hover:underline">
                  Achievements
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Admissions Dropdown */}
        <li>
          <div
            className="flex items-center space-x-2 cursor-pointer hover:underline"
            onClick={() => toggleDropdown("admission")}
          >
            <FaBriefcase className="text-xl" />
            <span>Admissions</span>
          </div>
          {dropdown.admission && (
            <ul className="ml-4 mt-2 space-y-2">
              <li>
                <Link to="/admissions" className="block hover:underline">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/parentportal" className="block hover:underline">
                  Parent Portal
                </Link>
              </li>
              <li>
                <Link to="/careers" className="block hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Facilities Dropdown */}
        <li>
          <div
            className="flex items-center space-x-2 cursor-pointer hover:underline"
            onClick={() => toggleDropdown("facilities")}
          >
            <FaImage className="text-xl" />
            <span>Facilities</span>
          </div>
          {dropdown.facilities && (
            <ul className="ml-4 mt-2 space-y-2">
              <li>
                <Link to="/facilities" className="block hover:underline">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/transport" className="block hover:underline">
                  Transport
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Legal Dropdown */}
        <li>
          <div
            className="flex items-center space-x-2 cursor-pointer hover:underline"
            onClick={() => toggleDropdown("legal")}
          >
            <BsFillShieldLockFill className="text-xl" />
            <span>Legal</span>
          </div>
          {dropdown.legal && (
            <ul className="ml-4 mt-2 space-y-2">
              <li>
                <Link to="/terms" className="block hover:underline">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/privacypolicy" className="block hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Contact, Gallery, Events, News */}
        <li>
          <Link to="/contact" className="flex items-center space-x-2 hover:underline">
            <FaPhoneAlt className="text-xl" />
            <span>Contact</span>
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="flex items-center space-x-2 hover:underline">
            <FaImage className="text-xl" />
            <span>Gallery</span>
          </Link>
        </li>
        {/* <li>
          <Link to="/events" className="flex items-center space-x-2 hover:underline">
            <FaCalendarAlt className="text-xl" />
            <span>Events</span>
          </Link>
        </li>
        <li>
          <Link to="/news" className="flex items-center space-x-2 hover:underline">
            <FaNewspaper className="text-xl" />
            <span>News</span>
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
