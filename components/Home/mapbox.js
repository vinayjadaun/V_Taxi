import { UserLocationContext } from "@/app/context/UserLocationContext";
import React, { useContext } from 'react'
import {Map,Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const mapbox = () => {
  const {userLocation,setUserLocation}=useContext(UserLocationContext);
  return (
    <div >
        <h2 className='text-[20px] font-semibold'>MAP</h2>
        <div className='rounded-lg overflow-hidden'>
       {userLocation? <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: userLocation?.lng,
        latitude: userLocation?.lat,
        zoom: 14
      }}
      style={{width: '100%', height: 550,borderRadius: 10}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
         <Marker longitude={ userLocation?.lng} latitude={userLocation?.lat} anchor="bottom" >
      <img src="./pin.png" className='w-10 h-10'/>
    </Marker>
    </Map>:null}
    </div>
   
    </div>
)
}
export default mapbox;