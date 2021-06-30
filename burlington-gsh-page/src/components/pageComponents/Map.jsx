import React, { Component, useState } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => <div style={{ marginLeft: '-15px', marginTop: '-55px' }}><img width='30px' height='60px' src="/googleMapIcon.svg" alt="Our Location" /></div>;

function Map() { 

  const [start, setStart] = useState({
    center: {
      lat: 38.194576,
      lng: -95.74085
    },
    zoom: 17
  });

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%', align: 'center' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAVgbRI-G5CNsfM9sT_aOQp2gJ6gRT7sKw" }}
        defaultCenter={start.center}
        defaultZoom={start.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent
          lat={38.194446}
          lng={-95.74090}
          text="God's Storehouse"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;