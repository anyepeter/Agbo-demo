import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import lof from '../../assets/logoTwo.jpg'
import { MdLocationPin } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import AwesomeSlider from 'react-awesome-slider';
import "./map.css"

const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
    lat: 3.8480,
    lng: 11.5021
};

const markers = [
    { id: 1, position: { lat: 3.8490, lng: 11.6021 }, title: "Marker 1", image: "image1.jpg" },
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
        zoom={11}
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
          className="maps"
        >
          <div className='w-56 '>
          <AwesomeSlider
                organicArrows={false}
                buttonContentRight={<p className='buttonStyle'>{">"}</p>}
                buttonContentLeft={<p  className='buttonStyle '>{"<"}</p>}
                bullets={false}
              className=' awesomeHigh'
                >
                    <div>
                        <img
                          className='bgImg'
                          alt="Wow"
                          src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
                        />
                    </div>
                    <div>
                        <img
                          className='bgImg'
                          alt="Wow"
                          src=""
                        />
                    </div>
                    <div>
                        <img
                          className='bgImg'
                          alt="Wow"
                          src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
                        />
                    </div>
                </AwesomeSlider>
            <div className='flex  flex-col gap-1 mb-1'>
              <h1 className=' pt-1 pl-1 text-sm font-[900] font-comfortaa'> dsfsd</h1>
              <p className='pl-1 text-xs flex'><MdLocationPin style={{ fontSize: '1rem' }} className='text-primaryColor' />Location</p>
              <div className='self-end mt-2 mb-2 flex pr-2'>
                        <MdStar style={{ fontSize: '1rem' }} className='text-primaryColor' />
                        <MdStar style={{ fontSize: '1rem' }} className='text-primaryColor'/>
                        <MdStar style={{ fontSize: '1rem' }} className='text-primaryColor'/>
                        <MdStarBorder style={{ fontSize: '1rem' }} className='text-primaryColor' />
                        <MdStarBorder style={{ fontSize: '1rem' }} className='text-primaryColor'/>
              </div>
            </div>
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
  