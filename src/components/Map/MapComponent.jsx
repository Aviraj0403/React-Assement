import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 28.6139,
  lng: 77.209,
};

const markers = [
  { id: 1, position: { lat: 28.6139, lng: 77.209 } },
  { id: 2, position: { lat: 28.5355, lng: 77.391 } },
  // Add more marker coordinates
];

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
