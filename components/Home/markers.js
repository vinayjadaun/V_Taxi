import React,{useContext} from 'react'
import {Map,Marker} from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
import { UserLocationContext } from "@/app/context/UserLocationContext";
import { SourceCoordinates } from '@/app/context/SourceCoordinatesContext';
import { DestinationCoordinates } from '@/app/context/DestinationCoordinatesContext';

const markers = () => {
    const {userLocation,setUserLocation}=useContext(UserLocationContext);
    const {sourceCoordinates,setSourceCoordinates}=useContext(SourceCoordinates);
    const{destinationCoordinates,setDestinationCoordinates}=useContext(DestinationCoordinates);
   
  return (
    
    <div>
      {/* userlocationmarker */}
       <Marker longitude={ userLocation?.lng} latitude={userLocation?.lat} anchor="bottom" >
      <img src="./pin.png" className='w-10 h-10'/>
    </Marker>
    {sourceCoordinates.length!=0?<Marker longitude={ sourceCoordinates?.lng} latitude={sourceCoordinates?.lat} anchor="bottom" >
      <img src="./pin.png" className='w-10 h-10'/>
    </Marker>:null}
   {destinationCoordinates.length!=0?<Marker longitude={ destinationCoordinates?.lng} latitude={destinationCoordinates?.lat} anchor="bottom" >
      <img src="./pin.png" className='w-10 h-10'/>
    </Marker>
    :null}
   
    </div>
  )
}

export default markers