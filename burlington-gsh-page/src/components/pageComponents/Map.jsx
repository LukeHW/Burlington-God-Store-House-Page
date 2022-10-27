/* eslint-disable no-shadow */
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const center = {
  lat: 38.194402,
  lng: -95.7409615
};

const style = { 
  height: '100%', 
  width: '100%',
};

function Map() { 

  return (
    // Important! Always set the container height explicitly
    <LoadScript googleMapsApiKey='AIzaSyDnfUEw60TW9NJRkKOu72OaxucqKkmwmVo'>
      <GoogleMap
        mapContainerStyle={style}
        center={center}
        zoom={17}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;