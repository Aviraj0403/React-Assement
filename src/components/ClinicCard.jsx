import React from "react";

const ClinicCard = ({ name, address, type, rating, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-start gap-4">
      <img
        src={imageUrl}
        alt={name}
        className="w-16 h-16 object-cover rounded-lg"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-blue-900">{name}</h3>
        <p className="text-sm text-gray-600">{address}</p>
        <p className="text-sm text-gray-500">{type}</p>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-yellow-500 text-lg font-semibold">{rating}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-yellow-500"
        >
          <path d="M12 2l3.09 6.26 6.91 1.01-5 4.87 1.18 6.86L12 17.27l-6.18 3.24L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
    </div>
  );
};

export default ClinicCard;
