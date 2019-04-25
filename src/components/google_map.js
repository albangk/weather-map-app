import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const GoogleMapView = withGoogleMap(props => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lon }}>
    <Marker position={{ lat: props.lat, lng: props.lon }} />
  </GoogleMap>
))

export default GoogleMapView
