import { UserLocationContext } from "@/app/context/UserLocationContext";
import { SourceCoordinates } from "@/app/context/SourceCoordinatesContext.js";
import { DestinationCoordinates } from "@/app/context/DestinationCoordinatesContext.js";
import { DirectionDataContext } from "@/app/context/DirectionDataContext.js";
import React, { useContext, useEffect, useRef } from 'react'
import {Map} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Marker from './markers.js'
import DistanceTime from './DistanceTime';
import MapboxRoute from "./mapboxroute.js";
const URL_Drive='https://api.mapbox.com/directions/v5/mapbox/driving/'

const mapbox = () => {
  const {userLocation,setUserLocation}=useContext(UserLocationContext);
  const {sourceCoordinates,setSourceCoordinates}=useContext(SourceCoordinates);
  const{destinationCoordinates,setDestinationCoordinates}=useContext(DestinationCoordinates);
  const{direction,setDirection}=useContext(DirectionDataContext);
  const mapref=useRef();
  useEffect(()=>{
       if(sourceCoordinates){
        mapref.current?.flyTo({
          center:[sourceCoordinates.lng,
          sourceCoordinates.lat],duration:4500
        })
       }
  },[sourceCoordinates])
  useEffect(()=>{
    if(destinationCoordinates){
      mapref.current?.flyTo({
        center:[destinationCoordinates.lng,
        destinationCoordinates.lat],duration:4500
      })
     }
     if(sourceCoordinates&&destinationCoordinates){
      getDirectionRoute();
     }
  },[destinationCoordinates])

  const getDirectionRoute=async()=>{
    const res=await fetch(URL_Drive+sourceCoordinates.lng+","+sourceCoordinates.lat+";"+destinationCoordinates.lng+","+destinationCoordinates.lat+
  "?overview=full&geometries=geojson"+
"&access_token="+process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,{
  headers:{
      "Content-Type":"application/json",
  }
  

})
const result=await res.json();
// console.log(result);
setDirection(result);
  }
 

  return (
    <div >
        <h2 className='text-[20px] font-semibold'>MAP</h2>
        <div className='rounded-lg overflow-hidden'>
       {userLocation? <Map
       ref={mapref}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: userLocation?.lng,
        latitude: userLocation?.lat,
        zoom: 14
      }}
      style={{width: '100%', height: 550,borderRadius: 10}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
       <Marker/>
       {direction?.routes?(
      <MapboxRoute
      coordinates={direction?.routes[0]?.geometry?.coordinates}
      />
    ):null}
    </Map>:null}
    </div>
    <div>
      <DistanceTime/>
    </div>
   
    </div>
)
}
export default mapbox;