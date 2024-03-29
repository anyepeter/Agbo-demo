import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import lof from '../../assets/logoTwo.jpg'

const containerStyle = {
  width: '100%',
  height: '300px'
};


const markers = [
    { id: 1, position: { lat: -37.9136, lng: 144.9631 }, title: "Marker 1", image: "image1.jpg" },
    { id: 2, position: { lat: -37.1036, lng: 144.9631 }, title: "Marker 2", image: "image2.jpg" },
    { id: 3, position: { lat: -37.5936, lng: 144.9631 }, title: "Marker 3", image: "image3.jpg" },
    { id: 4, position: { lat: -37.2836, lng: -37.8136 }, title: "Marker 4", image: "image4.jpg" }
  ];

  

function GooglesDetails({service}) {

  console.log(service);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAFMbjca_jtUOeaQoeBZIiDbXmdyrN0Di0"
  })

  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleCloseInfoWindow = () => {
    setSelectedMarker(null);
  };
  
    return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={service.position}
        zoom={13}
      >
        <MarkerF
          position={service.position}
        
        />
      </GoogleMap>
    ) : <>
    <div className='w-full h-[200px]'>

    </div>
    </>;
  }
  
  export default React.memo(GooglesDetails);
  