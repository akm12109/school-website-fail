import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  FaHome, 
  FaPhoneAlt, 
  FaInfoCircle, 
  FaChalkboardTeacher, 
  FaBriefcase, 
  FaImage, 
  FaCalendarAlt, 
  FaNewspaper, 
  FaBars, 
  FaTimes, 
  FaCaretDown 
} from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import Sidebar from "./Sidebar";

const Navbar: React.FC = () => {
  const [dropdown, setDropdown] = useState<{ [key: string]: boolean }>({
    about: false,
    academics: false,
    admission: false,
    facilities: false,
    legal: false,
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Toggle dropdown visibility
  const toggleDropdown = (menu: string) => {
    setDropdown((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdown((prev) => {
          const updatedDropdown = { ...prev };
          Object.keys(updatedDropdown).forEach((key) => {
            updatedDropdown[key] = false;
          });
          return updatedDropdown;
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <nav className="bg-black text-white py-4 px-6 shadow-md relative">
      {/* Desktop Navbar */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">School Name</h1>
        <button
          onClick={toggleSidebar}
          className="text-2xl lg:hidden focus:outline-none"
        >
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link to="/" className="flex items-center space-x-2 hover:text-gray-400">
              <FaHome className="text-xl" />
              <span>Home</span>
            </Link>
          </li>

          {/* About Dropdown */}
          <li className="relative group" onClick={() => toggleDropdown("about")}>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
              <FaInfoCircle className="text-xl transition duration-200" />
              <span className="transition duration-200">About</span>
              <FaCaretDown className={`ml-2 transition-transform duration-300 ${dropdown.about ? "rotate-180" : "rotate-0"}`} />
            </div>
            {dropdown.about && (
              <div 
                ref={dropdownRef}
                className="absolute left-0 bg-gray-800 text-white py-2 px-4 mt-1 rounded-lg shadow-lg w-48 z-50 transform scale-95 transition-all duration-200 ease-in-out"
              >
                <Link to="/about" className="block px-2 py-1 hover:bg-gray-700 transition duration-150">About</Link>
                <Link to="/principalmessage" className="block px-2 py-1 hover:bg-gray-700 transition duration-150">Principal's Message</Link>
                <Link to="/missionvision" className="block px-2 py-1 hover:bg-gray-700 transition duration-150">Mission & Vision</Link>
              </div>
            )}
          </li>

          {/* Academics Dropdown */}
          <li className="relative group" onClick={() => toggleDropdown("academics")}>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
              <FaChalkboardTeacher className="text-xl transition duration-200" />
              <span className="transition duration-200">Academics</span>
              <FaCaretDown className={`ml-2 transition-transform duration-300 ${dropdown.academics ? "rotate-180" : "rotate-0"}`} />
            </div>
            {dropdown.academics && (
              <div 
                ref={dropdownRef}
                className="absolute left-0 bg-gray-800 text-white py-2 px-4 mt-1 rounded-lg shadow-lg w-48 z-50 transform scale-95 transition-all duration-200 ease-in-out"
              >
                <Link to="/academics" className="block px-2 py-1 hover:bg-gray-700 transition duration-150">Academics</Link>
                <Link to="/academiccalendar" className="block px-2 py-1 hover:bg-gray-700 transition duration-150">Academic Calendar</Link>
                <Link to="/achievements" className="block px-2 py-1 hover:bg-gray-700 transition duration-150">Achievements</Link>
              </div>
            )}
          </li>

          {/* Admission Dropdown */}
          <li className="relative group" onClick={() => toggleDropdown("admission")}>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
              <FaBriefcase className="text-xl transition duration-200" />
              <span className="transition duration-200">Admissions</span>
              <FaCaretDown className={`ml-2 transition-transform duration-300 ${dropdown.admission ? "rotate-180" : "rotate-0"}`} />
            </div>
            {dropdown.admission && (
              <div 
                ref={dropdownRef}
                className="absolute left-0 bg-gray-800 text-white py-2 px-4 mt-1 rounded-lg shadow-lg w-48 z-50 transform scale-95 transition-all duration-200 ease-in-out"
              >
                <Link to="/admissions" className="block px-2 py-1 hover:bg-gray-700 transition duration-150">Admissions</Link>
                <Link to="/parentportal" className="block px-2 py-1 hover:bg-gray-700 transition duration-150">Parent Portal</Link>
                <Link to="/careers" className="block px-2 py-1 hover:bg-gray-700 transition duration-150">Careers</Link>
              </div>
            )}
          </li>

          {/* Facilities Dropdown */}
          <li className="relative group" onClick={() => toggleDropdown("facilities")}>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
              <FaImage className="text-xl transition duration-200" />
              <span className="transition duration-200">Facilities</span>
              <FaCaretDown className={`ml-2 transition-transform duration-300 ${dropdown.facilities ? "rotate-180" : "rotate-0"}`} />
            </div>
            {dropdown.facilities && (
              <div 
                ref={dropdownRef}
                className="absolute left-0 bg-gray-800 text-white py-2 px-4 mt-1 rounded-lg shadow-lg w-48 z-50 transform scale-95 transition-all duration-200 ease-in-out"
              >
                <Link to="/facilities" className="block px-2 py-1 hover:bg-gray-700 transition duration-150">Facilities</Link>
                <Link to="/transport" className="block px-2 py-1 hover:bg-gray-700 transition duration-150">Transport</Link>
              </div>
            )}
          </li>

          {/* Legal Dropdown */}
          <li className="relative group" onClick={() => toggleDropdown("legal")}>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
              <BsFillShieldLockFill className="text-xl transition duration-200" />
              <span className="transition duration-200">Legal</span>
              <FaCaretDown className={`ml-2 transition-transform duration-300 ${dropdown.legal ? "rotate-180" : "rotate-0"}`} />
            </div>
            {dropdown.legal && (
              <div 
                ref={dropdownRef}
                className="absolute left-0 bg-gray-800 text-white py-2 px-4 mt-1 rounded-lg shadow-lg w-48 z-50 transform scale-95 transition-all duration-200 ease-in-out"
              >
                <Link to="/terms" className="block px-2 py-1 hover:bg-gray-700 transition duration-150">Terms</Link>
                <Link to="/privacypolicy" className="block px-2 py-1 hover:bg-gray-700 transition duration-150">Privacy Policy</Link>
              </div>
            )}
          </li>

          {/* Additional Links */}
          <li>
            <Link to="/contact" className="flex items-center space-x-2 hover:text-gray-400">
              <FaPhoneAlt className="text-xl" />
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="flex items-center space-x-2 hover:text-gray-400">
              <FaImage className="text-xl" />
              <span>Gallery</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/events" className="flex items-center space-x-2 hover:text-gray-400">
              <FaCalendarAlt className="text-xl" />
              <span>Events</span>
            </Link>
          </li> */}
          {/* <li>
            <Link to="/news" className="flex items-center space-x-2 hover:text-gray-400">
              <FaNewspaper className="text-xl" />
              <span>News</span>
            </Link>
          </li> */}
        </ul>
      </div>

      {/* Sidebar for Mobile View */}
      {sidebarOpen && <Sidebar />}
    </nav>
  );
};

export default Navbar;
