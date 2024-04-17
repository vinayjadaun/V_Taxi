"use client";

import Image from "next/image";
import React,{useState,useEffect} from "react";
import './globals.css'
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import Searchsection from "@/components/Home/Searchsection";
import Googlesection from "@/components/Home/Googlesection";
import Cars from "@/components/Home/Cars";
import Cards from "@/components/Home/Cards";
import Mapbox from "@/components/Home/mapbox";
import { UserLocationContext } from "@/app/context/UserLocationContext";



function MyApp() {
  const [userLocation,setUserLocation]=useState();
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
   <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-5'>
   
    <div>
   <Searchsection/>
   <Cars/>
   <Cards/>
   <button className='p-3 bg-black w-full mt-8 text-white rounded-lg'>Confirm Booking</button>
    </div>

    <div className='col-span-2'>
     {/* <Googlesection/> */}
     <Mapbox/>
    </div>
   </div></UserLocationContext.Provider>
   </>  
  );
}
export default MyApp;
