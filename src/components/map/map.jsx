import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyles = {
  width: '75%',
  height: '60%',
  marginTop:'5%',
  marginLeft:'12.5%',
};


export class MapContainer extends Component {
    
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 43.651070,
            lng:  -79.347015
          }
        }
      >
        <Marker />
          <Marker position={{lat: 43.651070,
            lng:  -79.347015}} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCuoV9BJwaPgpoAM_KL5BNc946CVK4sLxk'
})(MapContainer);