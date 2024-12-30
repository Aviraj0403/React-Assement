import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#001E3C] text-white">
      <div className=" w-[1400px] mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <a href="https://www.pristyncare.com/">
            <img
              src="https://img.pristyncare.com/new_brand%2Felements%2Flogo.svg"
              alt="Pristyn Care Logo"
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* Navigation & Search Bar */}
        <div className="hidden md:flex flex-1 items-center justify-between ml-4">
          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-sm border border-gray-300 w-full max-w-md">
            <div className="flex items-center px-4">
              <img
                src="https://img.pristyncare.com/New%20Homepage%20Images%2Fselect_city.svg"
                alt="location"
                className="w-5 h-5"
              />
              <span className="ml-2 text-gray-600">Delhi</span>
            </div>
            <div className="flex items-center px-4 border-l border-gray-300">
              <img
                src="https://img.pristyncare.com/website-search-icon%2Fget-my-location.svg"
                alt="Get my Location"
                className="w-5 h-5"
              />
            </div>
            <input
              type="text"
              placeholder="Search disease, doctors, treatment"
              className="flex-1 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <div className="px-4">
              <img
                src="https://img.pristyncare.com/website-search-icon%2Fsearch-icon.svg"
                alt="search icon"
                className="w-5 h-5"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {/* For Patients Dropdown */}
            <div className="relative group">
              <button className="text-white font-medium">For Patients</button>
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  FAQs
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Videos
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Our Doctors
                </a>
              </div>
            </div>

            {/* Our Company Dropdown */}
            <div className="relative group">
              <button className="text-white font-medium">Our Company</button>
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  About Us
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Careers
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Media Coverage
                </a>
              </div>
            </div>

            {/* Book Appointment Button */}
            <button className=" bg-transparent border-white border-2 hover:bg-orange-600 text-white px-6 py-2 rounded-md shadow-md">
              Book Free Appointment
            </button>

            {/* Language Selector */}
            <div className="relative group">
              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  src="https://img.pristyncare.com/new_brand%2Felements%2FGlobe_icon-white.svg.png"
                  alt="Language Selector"
                  className="w-5 h-5"
                />
                <span>English</span>
              </div>
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  English
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  हिंदी
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  தமிழ்
                </a>
              </div>
            </div>

            {/* Select City */}
            <div className="flex items-center gap-2">
              <img
                src="https://img.pristyncare.com/New%20Homepage%20Images%2Fselect_city.svg"
                alt="Select City"
                className="w-5 h-5"
              />
              <span>Select City</span>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            className="ml-4 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="h-1 w-6 bg-white mb-1"></div>
            <div className="h-1 w-6 bg-white mb-1"></div>
            <div className="h-1 w-6 bg-white"></div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-[#001E3C] text-white p-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                src="https://img.pristyncare.com/New%20Homepage%20Images%2Fselect_city.svg"
                alt="location"
                className="w-5 h-5"
              />
              <span>Delhi</span>
            </div>
            <input
              type="text"
              placeholder="Search disease, doctors, treatment"
              className="border rounded-lg py-2 px-4 w-full"
            />
            <div className="flex flex-col gap-2">
              <button className="text-left">For Patients</button>
              <button className="text-left">Our Company</button>
              <button className="text-left">Book Free Appointment</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;