"use client";

import React,{useState} from 'react'
import CardsList from '@/data/CardsList'
import Image from 'next/image'

const Cards = () => {
    const[card,setcard]=useState();
  return (
    <div><h2 className='text-14[px] font-medium mb-3 mt-3'>Payment Method
        </h2>
        
        <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 mt-3'>

            {CardsList.map((item,index)=>(
                 <div className={`w-[82px] border-[2px] flex items-center justify-center rounded-md 
                ${index==card?`border-yellow-400`:null}
                 hover:scale-110 transition-all cursor-pointer mb-1`} onClick={()=>setcard(index)}>
                    <Image src={item.image}
                    alt={item.name}
                    width={30}
                    height={50}/>
                    </div>
            ))}
            </div></div>
  )
}

export default Cards