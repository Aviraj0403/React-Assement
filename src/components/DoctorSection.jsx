import React, { useState } from "react";
import DoctorCard from "./DoctorCard";

const DoctorsSection = () => {
  const doctors = [
    {
      doctorName: "Dr. Debashish Chanda",
      qualifications: "MBBS, MS-Orthopedics",
      specialty: "Orthopedics",
      experience: 23,
      consultationFee: {
        original: "₹2400",
        discounted: "₹1200 Consultation Fee",
      },
      rating: 4.8,
      location: "Delhi",
      contactNumber: "9355-517-566",
      imageUrl:
        "https://img.pristyncare.com/Medical_Services_Dashboard/2024-09-14T11:43:14.161Z_Dr-Debashish 2.jpg/1726314193921_ban-Icon.png",
    },
    {
      doctorName: "Dr. Ankit Sharma",
      qualifications: "MBBS, MS-Orthopedics",
      specialty: "Orthopedics",
      experience: 15,
      consultationFee: {
        original: "₹2000",
        discounted: "₹1000 Consultation Fee",
      },
      rating: 4.7,
      location: "Delhi",
      contactNumber: "9355-517-567",
      imageUrl:
        "https://img.pristyncare.com/Medical_Services_Dashboard/2024-09-14T11:43:14.161Z_Dr-Debashish 2.jpg/1726314193921_ban-Icon.png",
    },
    {
      doctorName: "Dr. Richa Verma",
      qualifications: "MBBS, MS-ENT",
      specialty: "ENT",
      experience: 18,
      consultationFee: {
        original: "₹2200",
        discounted: "₹1100 Consultation Fee",
      },
      rating: 4.6,
      location: "Delhi",
      contactNumber: "9355-517-568",
      imageUrl:
        "https://img.pristyncare.com/Medical_Services_Dashboard/2024-09-14T11:43:14.161Z_Dr-Debashish 2.jpg/1726314193921_ban-Icon.png",
    },
    {
      doctorName: "Dr. Sameer Khanna",
      qualifications: "MBBS, MS-General Surgery",
      specialty: "General Surgery",
      experience: 20,
      consultationFee: {
        original: "₹2500",
        discounted: "₹1250 Consultation Fee",
      },
      rating: 4.9,
      location: "Delhi",
      contactNumber: "9355-517-569",
      imageUrl:
        "https://img.pristyncare.com/Medical_Services_Dashboard/2024-09-14T11:43:14.161Z_Dr-Debashish 2.jpg/1726314193921_ban-Icon.png",
    },
    {
      doctorName: "Dr. Priya Malhotra",
      qualifications: "MBBS, MS-Gynecology",
      specialty: "Gynecology",
      experience: 22,
      consultationFee: {
        original: "₹2300",
        discounted: "₹1150 Consultation Fee",
      },
      rating: 4.8,
      location: "Delhi",
      contactNumber: "9355-517-570",
      imageUrl:
        "https://img.pristyncare.com/Medical_Services_Dashboard/2024-09-14T11:43:14.161Z_Dr-Debashish 2.jpg/1726314193921_ban-Icon.png",
    },
    {
      doctorName: "Dr. Rahul Gupta",
      qualifications: "MBBS, MS-Orthopedics",
      specialty: "Orthopedics",
      experience: 19,
      consultationFee: {
        original: "₹2100",
        discounted: "₹1050 Consultation Fee",
      },
      rating: 4.7,
      location: "Delhi",
      contactNumber: "9355-517-571",
      imageUrl:
        "https://img.pristyncare.com/Medical_Services_Dashboard/2024-09-14T11:43:14.161Z_Dr-Debashish 2.jpg/1726314193921_ban-Icon.png",
    },
  ];

  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const specialties = ["All", "Orthopedics", "ENT", "General Surgery", "Gynecology"];

  const filteredDoctors =
    selectedSpecialty === "All"
      ? doctors
      : doctors.filter((doctor) => doctor.specialty === selectedSpecialty);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Our Doctors In Delhi
      </h2>

      {/* Filter by Specialists */}
      <div className="mb-6">
        <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">
          Filter by Specialists
        </label>
        <select
          id="specialty"
          value={selectedSpecialty}
          onChange={(e) => setSelectedSpecialty(e.target.value)}
          className="mt-1 block w-full sm:w-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          {specialties.map((specialty) => (
            <option key={specialty} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDoctors.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
          View More
        </button>
      </div>
    </div>
  );
};

export default DoctorsSection;
