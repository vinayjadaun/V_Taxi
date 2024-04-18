"use client";

import Image from "next/image";
import React,{useState,useEffect, useContext} from "react";
import './globals.css'
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import Searchsection from "@/components/Home/Searchsection";
import Googlesection from "@/components/Home/Googlesection";
import Cars from "@/components/Home/Cars";
import Cards from "@/components/Home/Cards";
import Mapbox from "@/components/Home/mapbox";
import { UserLocationContext } from "@/app/context/UserLocationContext";
import { SourceCoordinates } from "./context/SourceCoordinatesContext";
import { DestinationCoordinates } from "./context/DestinationCoordinatesContext";
import { DirectionDataContext } from "./context/DirectionDataContext";
import { SelectedCarAmount } from "./context/SelectedCarAmount";
// import { useRouter } from 'next/navigation'
import Button from '@/components/Home/button'



function MyApp() {
  const [userLocation,setUserLocation]=useState();
  const [sourceCoordinates,setSourceCoordinates]=useState([]);
  const[destinationCoordinates,setDestinationCoordinates]=useState([]);
  const[direction,setDirection]=useState([]);
  const[caramount,setCarAmount]=useState();
  
  // const router=useRouter();
  useEffect(()=>{
    getUserLocation();
  },[])
  const getUserLocation=()=>{
    navigator.geolocation.getCurrentPosition(function(pos){
      setUserLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
    })
  }
  return (      
    <>  
    {/*  */}
    <UserLocationContext.Provider value={{userLocation,setUserLocation}}>
      <SourceCoordinates.Provider value={{sourceCoordinates,setSourceCoordinates}}>
        <DestinationCoordinates.Provider value={{destinationCoordinates,setDestinationCoordinates}}>
          <DirectionDataContext.Provider value={{direction,setDirection}}>
            <SelectedCarAmount.Provider value={{caramount,setCarAmount}}>

         
   <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-5'>
   
    <div>
   <Searchsection/>
   <Cars/>
   <Cards/>
   <Button/>
    </div>

    <div className='col-span-2'>
     {/* <Googlesection/> */}
     <Mapbox/>
    </div>
   </div></SelectedCarAmount.Provider>
   </DirectionDataContext.Provider>
   </DestinationCoordinates.Provider>
   </SourceCoordinates.Provider>
   </UserLocationContext.Provider>
   </>  
  );
}
export default MyApp;
