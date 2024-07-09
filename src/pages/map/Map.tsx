import React, { useEffect, useState } from 'react';
import { LoadScript, GoogleMap, Marker, Circle } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import GetLocation from '../../models/GetLocation';
import PostNearbySearch from '../../models/PostNearbySearch';
import { AppState } from '../../store/slice/searchSlice';
import { toast, ToastContainer } from 'react-toastify';

type Props = {
  values: PostNearbySearch;
};

const Map: React.FC<Props> = (props) => {
  const { places } = useSelector((state: any) => state.place);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const containerStyle: React.CSSProperties = {
    width: '85%',
    margin: '0 auto',
    height: '1000px',
    border: '5px solid black',
    maxWidth: '100%',
  };

  const initialZoom = 13;

  let center = {
    lat: places[0]?.geometry?.location?.lat || 39,
    lng: places[0]?.geometry?.location?.lng || 35,
  };



  return (
    <React.Fragment>
      <div className="container-fluid">
        <LoadScript googleMapsApiKey="AIzaSyCHmU3huCPE8L3lvlCkdEwAbCti2_hP7Cc">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={initialZoom}
            onLoad={(map) => setMap(map as google.maps.Map)}
          >
            {

             

                places.map((place: GetLocation) => (
                  <Marker
                    key={place.place_id}
                    position={{
                      lat: place?.geometry?.location?.lat,
                      lng: place?.geometry?.location?.lng,
                    }}
                    label={place.name}
                  />
                ))
               }



          </GoogleMap>
        </LoadScript>
        <ToastContainer />
      </div>
    </React.Fragment>
  );
};

export default Map;
