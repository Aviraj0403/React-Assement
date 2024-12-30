import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://img.pristyncare.com/map-marker-icon-orange.webp",
  iconSize: [30, 40],
});

const clinics = [
  {
    name: "Pristyn Care",
    link: "https://maps.google.com/maps?cid=7279659560217469454",
    imageUrl: "https://img.pristyncare.com/static_pages%2F012.jpg",
    fallbackImage:
      "https://img.pristyncare.com/new_brand%2Felements%2FPristyn-Care-Logo.jpg",
    rating: 4.7,
    address:
      "H/56, Ground Floor, Sector 51, Near Diamond Crown Banquet Hall, Noida, Uttar Pradesh 201301",
    category: "Surgical Clinic",
    coordinates: [28.535516, 77.391026], // Example coordinates for Noida
  },
  {
    name: "Pristyn Care",
    link: "https://maps.google.com/maps?cid=9872437935515725814",
    imageUrl:
      "https://img.pristyncare.com/clinics_images%2F(20)Pristyncare%20Clinic.webp",
    fallbackImage:
      "https://img.pristyncare.com/new_brand%2Felements%2FPristyn-Care-Logo.jpg",
    rating: 4.7,
    address:
      "No 142, Avtar Enclave, Choudhary Balbir Singh Marg, Paschim Vihar, New Delhi, Delhi 110063",
    category: "Surgical Clinic",
    coordinates: [28.6692, 77.1222], // Example coordinates for Paschim Vihar
  },
  {
    name: "Pristyn Care",
    link: "https://maps.google.com/maps?cid=1386354896913271691",
    imageUrl:
      "https://img.pristyncare.com/new_brand%2Felements%2FPristyn-Care-Logo.jpg",
    fallbackImage:
      "https://img.pristyncare.com/new_brand%2Felements%2FPristyn-Care-Logo.jpg",
    rating: 4.5,
    address:
      "No C 65 & 66, Nawada Housing Complex, Nawada, Opposite Pillar No 795, New Delhi, Delhi 110059",
    category: "Surgical Clinic",
    coordinates: [28.6096, 77.0301], // Example coordinates for Nawada
  },
];

const ClinicsSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Our Clinics in Delhi
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map Section */}
        <div className="order-2 lg:order-1">
          <MapContainer
            center={[28.6139, 77.209]}
            zoom={11}
            scrollWheelZoom={false}
            style={{ height: "500px", width: "100%" }}
            className="rounded-lg shadow-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {clinics.map((clinic, index) => (
              <Marker
                key={index}
                position={clinic.coordinates}
                icon={customIcon}
              >
                <Popup>
                  <div>
                    <h3 className="text-lg font-bold">{clinic.name}</h3>
                    <p>{clinic.address}</p>
                    <a
                      href={clinic.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Clinic Cards */}
        <div className="order-1 lg:order-2 grid grid-cols-1 gap-6">
          {clinics.map((clinic, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg overflow-hidden bg-white"
            >
              <a
                href={clinic.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={clinic.imageUrl}
                  alt={`${clinic.name} Image`}
                  onError={(e) => (e.target.src = clinic.fallbackImage)}
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold">
                    <a
                      href={clinic.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-700"
                    >
                      {clinic.name}
                    </a>
                  </h3>
                  <p className="flex items-center text-yellow-500">
                    {clinic.rating}
                    <img
                      src="https://img.pristyncare.com/star-icon-in-yellow.svg"
                      alt="Star Icon"
                      className="w-4 h-4 ml-1"
                    />
                  </p>
                </div>
                <div className="flex items-center mb-2 text-gray-600">
                  <img
                    src="https://img.pristyncare.com/map-marker-icon-orange.webp"
                    alt="Map-marker Icon"
                    className="w-4 h-4 mr-2"
                  />
                  <p>{clinic.address}</p>
                </div>
                <div className="flex items-center text-gray-600">
                  <img
                    src="https://img.pristyncare.com/doctor-icon-orange.webp"
                    alt="Doctor Icon"
                    className="w-4 h-4 mr-2"
                  />
                  <ul>
                    <li>{clinic.category}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClinicsSection;
