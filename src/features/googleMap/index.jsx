import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { MdLocationPin } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import AwesomeSlider from 'react-awesome-slider';
import { useSelector } from 'react-redux';
import school from '../../assets/school.png';
import cutlery from '../../assets/cutlery.png'
import "./map.css"

const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
    lat: 3.8480,
    lng: 11.5021
};
  

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

  const service = useSelector(state => state.data.data);
  console.log(service)
  
    return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
      >
   {service.map(marker => (
        <MarkerF
          key={marker.id}
          position={marker.location.position}
          title={marker.title}
          onClick={() => handleMarkerClick(marker)}
          options={{
            icon: {
              url: (marker.category == "Schools") ? school : cutlery,
              scaledSize: new window.google.maps.Size(50, 50),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(25, 50)
            }
          }}
        />
      ))}
      {selectedMarker && (
        <InfoWindowF
          position={selectedMarker.location.position}
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
                  {
                    selectedMarker.images?.map((image) => (
                      <div>
                      <img
                        className='bgImg'
                        alt="Wow"
                        src={image}
                      />
                  </div>
                    ))
                  }
                </AwesomeSlider>
            <div className='flex  flex-col gap-1 mb-1'>
              <h1 className=' pt-1 pl-1 text-sm font-[900] font-comfortaa'> {selectedMarker.title}</h1>
              <p className='pl-1 text-xs flex'><MdLocationPin style={{ fontSize: '1rem' }} className='text-primaryColor' /><span>{selectedMarker.location.description}</span></p>
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
  