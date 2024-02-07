import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import lof from '../../assets/logoTwo.jpg'

const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
    lat: -37.8136,
    lng: 144.9631
};

const markers = [
    { id: 1, position: { lat: -37.9136, lng: 144.9631 }, title: "Marker 1", image: "image1.jpg" },
    { id: 2, position: { lat: -37.1036, lng: 144.9631 }, title: "Marker 2", image: "image2.jpg" },
    { id: 3, position: { lat: -37.5936, lng: 144.9631 }, title: "Marker 3", image: "image3.jpg" },
    { id: 4, position: { lat: -37.2836, lng: -37.8136 }, title: "Marker 4", image: "image4.jpg" }
  ];

  

function GooglesMap() {
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
        center={center}
        zoom={13}
      >
   {markers.map(marker => (
        <MarkerF
          key={marker.id}
          position={marker.position}
          title={marker.title}
          onClick={() => handleMarkerClick(marker)}
        />
      ))}
      {selectedMarker && (
        <InfoWindowF
          position={selectedMarker.position}
          onCloseClick={handleCloseInfoWindow}
        >
          <div className='w-2 h-2'>
            <img src={selectedMarker.image} alt={selectedMarker.title} style={{ width: '100%', height: 'auto' }} />
            <p>{selectedMarker.title}</p>
          </div>
        </InfoWindowF>
      )}

      </GoogleMap>
    ) : <>
    <div className='w-full h-[600px]'>

    </div>
    </>;
  }
  
  export default React.memo(GooglesMap);
  