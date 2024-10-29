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

export const metadata = {
  title: "Your Page Title",
  description: "A brief description of your page for SEO",
  keywords: ["nextjs", "seo", "your", "keywords"],
  openGraph: {
    title: "Your Open Graph Title",
    description: "Your Open Graph Description",
    url: "https://example.com/page",
    images: [
      {
        url: "https://example.com/your-image.jpg",
        width: 800,
        height: 600,
        alt: "Image Description",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Your Twitter Title",
    description: "Your Twitter Description",
    images: ["https://example.com/your-image.jpg"],
  },
};

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
   
    <div className="ml-3">
   <Searchsection />
   <Cars/>
   <div className="ml-5">
   <Cards/></div>
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
