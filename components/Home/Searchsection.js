"use client";
import React ,{useState,useEffect,useContext} from 'react'
import Inputitems from './Inputitems'
import Image from 'next/image';

import { SourceCoordinates } from '@/app/context/SourceCoordinatesContext';
import { DestinationCoordinates } from '@/app/context/DestinationCoordinatesContext';

const SESSION_TOKEN='0497d19c-ba1f-48c1-88ee-a02808e0f0d0'





function Searchsection() {
    const [source ,setSource]=useState();
    const [destination,setDestination]=useState();
    const {sourceCoordinates,setSourceCoordinates}=useContext(SourceCoordinates);
    const{destinationCoordinates,setDestinationCoordinates}=useContext(DestinationCoordinates);
    const [sourceChange ,setSourceChange]=useState(false);
    const [destinationChange,setDestinationChange]=useState(false);

  const [addressList,setAddressList]=useState([]);
 
  useEffect(()=>{
    const delaydebouncefn=setTimeout(()=>{
      getAddressList();
    },1000);
    return ()=>clearTimeout(delaydebouncefn);
  },[source,destination]);

  
  
  const getAddressList=async()=>{
    setAddressList([]);
        const query=sourceChange?source:destination;
        try{
    const res=await fetch('/api/searchaddress?q='+query,{
      headers:{
        "Content-Type":"application/json"
      }
    })
    const result=await res.json();
    // console.log(result);
    setAddressList(result);}
    catch(err){
      console.log(err)
    }
  }


  const onSourceAddressClick=async(item)=>{
    setSource(item.full_address),setAddressList([]),setSourceChange(false)
    // const mapboxid=item.mapbox_id
    try {
      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item?.action?.body),
       
      };
      let response = await fetch(
        'https://api.mapbox.com/search/searchbox/v1/retrieve/'+item.mapbox_id+ '?session_token='+SESSION_TOKEN+'&access_token='+process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,{
        options}
      );
      // console.log(response)
      let result = await response.json();
    //  console.log(result)
    setSourceCoordinates({
      lng:result.features[0].geometry.coordinates[0],
      lat:result.features[0].geometry.coordinates[1],
    })
    } catch (error){
      console.log(error);
    }

  
  }
  const onDestinationClick=async (item)=>{
    setDestination(item.full_address),setAddressList([]),setDestinationChange(false)
    try {
      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item?.action?.body),
       
      };
      let response = await fetch(
        'https://api.mapbox.com/search/searchbox/v1/retrieve/'+item.mapbox_id + '?session_token='+SESSION_TOKEN+'&access_token='+process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,{
        options}
      );
      // console.log(response)
      let result = await response.json();
    //  console.log(result)
    setDestinationCoordinates({
      lng:result.features[0].geometry.coordinates[0],
      lat:result.features[0].geometry.coordinates[1],
    })
    } catch (error){
      console.log(error);
    }
  }

 
  return (
    <>
    <div className='p-2 md:pd-6 border-[2px] rounded-xl relative'>
      <p className='text-[20px] font-bold'>Get a Ride</p>
      <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
        <Image src={'/source.png'
         } width={15} height={15}/>
        <input type='text' placeholder='Pickup Location'className='bg-transparent w-full outline-none'   value={source} onChange={(e)=>{setSource(e.target.value),setSourceChange(true)}}/>
        </div>
       {addressList?.suggestions&&sourceChange?
        <div className='shadow-md p-1 rounded-md absolute w-full bg-white'>
        {addressList?.suggestions.map((items,index)=>( 
           <h2 className='p-3 hover:bg-grey-100 cursor-pointer color-black' onClick={()=>{onSourceAddressClick(items)}}>{items.full_address}</h2>
        ))}</div>:null}
    

    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
        <Image src={
        '/dest.png' } width={15} height={15}/>
        <input type='text' placeholder='DropOff Location' className='bg-transparent w-full outline-none' value={destination} onChange={(e)=>{setDestination(e.target.value),setDestinationChange(true)}}/>
    </div>
    {addressList?.suggestions&&destinationChange?
        <div className='shadow-md p-1 rounded-md absolute w-full bg-white'>
        {addressList?.suggestions.map((items,index)=>( 
           <h2 className='p-3 hover:bg-grey-100 cursor-pointer color-black' onClick={()=>{onDestinationClick(items)}}>{items.full_address}</h2>
        ))}</div>:null}
    
    </div>
    </>
  )
}
export default Searchsection;