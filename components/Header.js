"use client";
import React,{useState} from 'react'
import Image from "next/image"
import { UserButton } from '@clerk/nextjs'
function Header() {
  const [Hactive,setHactive]=useState(0);
  const headerMenu=[ 
     { 
      id:1,
      name:'Ride',
      icon:'/taxi.png'
     },
     { 
      id:2,
      name:'Package',
      icon:'/box.png'
     }
    ]
  return (
    <div className='p-5 pb-3 pl-10 border-b-[3px] border-gray-200 flex items-center justify-between'>
      <div className='flex gap-24 items-center'>
        <Image src='/logo1.png' width={90} height={90} alt='logo'/>
        <div className='flex gap-6 items-center'>
          {headerMenu.map((item,index)=>( 
            <div className={`flex gap-2 items-center p-2 hover:cursor-pointer rounded-md ${index==Hactive?`bg-grey-500 border-[1px] shadow-md border-black-400`:null} `}  onClick={()=>setHactive(index)}>
                   <Image src={item.icon} height={17} width={17}/>
                   <h2 className='text-[14px] font-medium'>{item.name}</h2>
              </div>
          ))}
        </div>
      </div>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default Header