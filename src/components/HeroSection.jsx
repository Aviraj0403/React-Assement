import React from "react";
import AppointmentForm from "./AppointmentForm";
import SurgerySection from "./SurgerySection";

const HeroSection = () => {
  return (
    <div className="bg-gray-50">
      {/* Top Navigation Links */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-center gap-4 text-gray-600 text-sm md:text-base">
            <a href="#" className="hover:text-blue-900">Proctology</a>
            <a href="#" className="hover:text-blue-900">Laparoscopy</a>
            <a href="#" className="hover:text-blue-900">Gynaecology</a>
            <a href="#" className="hover:text-blue-900">ENT</a>
            <a href="#" className="hover:text-blue-900">Urology</a>
            <a href="#" className="hover:text-blue-900">Vascular</a>
            <a href="#" className="hover:text-blue-900">Aesthetics</a>
            <a href="#" className="hover:text-blue-900">Orthopedics</a>
            <a href="#" className="hover:text-blue-900">Ophthalmology</a>
            <a href="#" className="hover:text-blue-900">Fertility</a>
            <a href="#" className="hover:text-blue-900">Weight Loss</a>
            <a href="#" className="hover:text-blue-900">Wellness</a>
            <span className="text-green-500 font-semibold">new</span>
          </div>
        </div>
      </div>

      {/* Main Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap lg:flex-nowrap items-start">
          {/* Left Content */}
          <div className="w-full lg:w-2/3 pr-8 mb-10 lg:mb-0">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                Simplifying Surgery Experience in Delhi
              </h1>
              <p className="text-lg text-gray-700">
                Book Free Appointments With Our Expert Doctors Near You
              </p>
            </div>

            {/* Feature Section */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <img
                  src="https://img.pristyncare.com/HomePage%2FComponent%2017%20%E2%80%93%201%403x.png"
                  alt="Get consultation for 50+ diseases across India"
                  className="mr-4"
                  width="50"
                  height="28"
                />
                <p className="text-gray-600">
                  Get consultation for 50+ diseases across India
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src="https://img.pristyncare.com/HomePage%2Fdoctor%20(6)%403x.png"
                  alt="In-person and online consultation with experienced doctors"
                  className="mr-4"
                  width="50"
                  height="28"
                />
                <p className="text-gray-600">
                  In-person and online consultation with experienced doctors
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src="https://img.pristyncare.com/HomePage%2FComponent%2016%20%E2%80%93%201%403x.png"
                  alt="Extensive medical assistance throughout your treatment"
                  className="mr-4"
                  width="50"
                  height="28"
                />
                <p className="text-gray-600">
                  Extensive medical assistance throughout your treatment
                </p>
              </div>
            </div>

            {/* Call Button */}
            <div className="mt-10">
              <a
                href="tel:+918527488190"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 gap-2 inline-block"
              >
                 Call Us <span>📞</span> 8527-488-190
              </a>
            </div>
          </div>

          {/* Right Content: Appointment Form */}
          <div className="w-full lg:w-1/3 bg-blue-900 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-6 text-center">
              Book FREE Doctor Appointment
            </h2>
            <AppointmentForm />
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto mt-8 px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {[{
              count: "200K+",
              label: "Happy Patients"
            }, {
              count: "60K+",
              label: "Surgeries"
            }, {
              count: "800+",
              label: "Hospitals"
            }, {
              count: "400+",
              label: "Doctors"
            }, {
              count: "45+",
              label: "Cities"
            }, {
              count: "150+",
              label: "Clinics"
          }].map((stat, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
              <h3 className="text-3xl font-bold text-blue-900">{stat.count}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Surgery Section */}
      <SurgerySection />
    </div>
  );
};

export default HeroSection;
