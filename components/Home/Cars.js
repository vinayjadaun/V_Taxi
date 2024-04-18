"use client";
import React,{useState,useContext} from 'react'
import CarsList from '@/data/CarsList'
import Image from 'next/image'
import { DirectionDataContext } from '@/app/context/DirectionDataContext';
import { SelectedCarAmount } from '@/app/context/SelectedCarAmount';
const Cars = () => {
  const[carselected,setcarselected]=useState();
  const{direction,setDirection}=useContext(DirectionDataContext);
  const{caramount,setCarAmount}=useContext(SelectedCarAmount);

  const getCost=(charges)=>{
    return (charges*direction.routes[0].distance*0.000321371192*83.52).toFixed(2)

  }
  return (
    <>
    <div className='mt-3'><h2 className='font-semibold'>
      SELECT CAR
      </h2>
      <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 p-2'>
        {CarsList.map((item,index)=>(
          <div key={index} className={`m-2 p-2 border-[2px] rounded-md hover:cursor-pointer ${index==carselected?`border-yellow-400`:null}`} onClick={()=>{setcarselected(index);
            setCarAmount(getCost(item.charges))}}>
           
            <Image src={item.image}
            alt={item.name}
            width={75}
            height={90} className='w-full'/>
            <h2 className='text-[10px] text-grey-500 mt-1'>{item.name}
            {direction.routes?
              
            <span className='float-right font-bold  text-black'>{getCost(item.charges) }₹</span>:null}</h2>
            </div>
        ))}
      </div>
      </div></>
  )
}

export default Cars