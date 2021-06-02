import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{ marginLeft: '-15px', marginTop: '-55px' }}><img width='30px' height='60px' marginLeft='-30px' src="/googleMapIcon.svg" alt="Our Location" /></div>;

const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 38.194576,
      lng: -95.74085
    },
    zoom: 17
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '90vh', width: '100%', align: 'center' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAVgbRI-G5CNsfM9sT_aOQp2gJ6gRT7sKw" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <AnyReactComponent
            lat={38.194446}
            lng={-95.74090}
            text="God's Storehouse"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;