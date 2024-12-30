import React from "react";

const DoctorCard = ({
  doctorName,
  qualifications,
  experience,
  consultationFee,
  rating,
  location,
  contactNumber,
  imageUrl,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
      {/* Doctor Image and Info */}
      <div className="flex items-start">
        <div className="relative">
          <img
            src={imageUrl}
            alt={doctorName}
            className="rounded-full w-16 h-16 mr-4"
          />
          {/* Green Dot inside the bottom-right corner of the image */}
          <div className="absolute bottom-1 right-1 h-3 w-3 bg-green-500 rounded-full blink-image border border-white"></div>
        </div>
        {/* Doctor Info */}
        <div>
          <h3 className="text-lg font-semibold text-blue-900">
            {doctorName}
          </h3>
          <p className="text-sm text-gray-600">{qualifications}</p>
          {/* Display Consultation Fee */}
          <div className="flex items-center text-sm text-gray-700 mt-2">
            <span className="line-through text-red-500 mr-2">
              {consultationFee.original}
            </span>
            <span className="text-green-600 font-bold">
              {consultationFee.discounted}
            </span>
          </div>
        </div>
      </div>

      {/* Rating and Experience */}
      <div className="mt-4 flex items-center">
        {/* Rating */}
        <div className="flex items-center bg-yellow-100 p-1 rounded-full mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="text-yellow-500"
          >
            <path d="M3.612 15.443c-.396.2-.902-.086-.812-.522l.765-3.338-2.522-2.27c-.329-.297-.158-.86.283-.882l3.462-.16 1.292-3.163a.537.537 0 0 1 .963 0l1.292 3.163 3.462.16c.441.022.612.585.283.882l-2.522 2.27.765 3.338c.09.436-.416.722-.812.522L8 13.187l-2.389 2.256z" />
          </svg>
        </div>
        <p className="text-sm mr-4">{rating}/5</p>
        {/* Experience */}
        <p className="text-sm text-gray-500">{experience} Years Exp.</p>
      </div>

      {/* Location */}
      <div className="flex items-center mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-orange-500 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2C8.686 2 6 4.686 6 8c0 3.314 4.686 10 6 10s6-6.686 6-10c0-3.314-2.686-6-6-6zm0 8c-1.105 0-2-1.105-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"
          />
        </svg>
        <p className="text-gray-600 text-sm">{location}</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
        <a
          href={`tel:${contactNumber}`}
          className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 w-full sm:w-auto"
        >
          Call Us 📞 {contactNumber}
        </a>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full sm:w-auto">
          Book Free Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
