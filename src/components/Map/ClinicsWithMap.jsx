import React from "react";
import ClinicsSection from "./ClinicsSection";
import Map from "./Map";

const ClinicsWithMap = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Our Clinics in Delhi
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map Section */}
        <div className="w-full h-full">
          <Map />
        </div>

        {/* Clinics Section */}
        <div>
          <ClinicsSection />
        </div>
      </div>
    </div>
  );
};

export default ClinicsWithMap;
