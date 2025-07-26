/* eslint-disable no-shadow */
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: 38.194402,
  lng: -95.7409615,
};

const style = {
  height: "810px",
  width: "100%",
};

function Map() {
  const mapApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <LoadScript googleMapsApiKey={mapApiKey}>
      <GoogleMap mapContainerStyle={style} center={center} zoom={17}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
