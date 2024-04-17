"use client";
import React ,{useState,useEffect} from 'react'
import Inputitems from './Inputitems'
import Image from 'next/image';

function Searchsection() {
    const [source ,setSource]=useState();
    const [destination,setDestination]=useState();
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
    const res=await fetch('/api/searchaddress?q='+query,{
      headers:{
        "Content-Type":"application/json"
      }
    })
    const result=await res.json();
    setAddressList(result);
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
           <h2 className='p-3 hover:bg-grey-100 cursor-pointer color-black' onClick={()=>{setSource(items.full_address),setAddressList([]),setSourceChange(false)}}>{items.full_address}</h2>
        ))}</div>:null}
    

    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
        <Image src={
        '/dest.png' } width={15} height={15}/>
        <input type='text' placeholder='DropOff Location' className='bg-transparent w-full outline-none' value={destination} onChange={(e)=>{setDestination(e.target.value),setDestinationChange(true)}}/>
    </div>
    {addressList?.suggestions&&destinationChange?
        <div className='shadow-md p-1 rounded-md absolute w-full bg-white'>
        {addressList?.suggestions.map((items,index)=>( 
           <h2 className='p-3 hover:bg-grey-100 cursor-pointer color-black' onClick={()=>{setDestination(items.full_address),setAddressList([]),setDestinationChange(false)}}>{items.full_address}</h2>
        ))}</div>:null}
    
    </div>
    </>
  )
}

export default Searchsection