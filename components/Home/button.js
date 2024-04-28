import React, {  useContext } from 'react'
import { useRouter } from 'next/navigation'
import { SelectedCarAmount } from '@/app/context/SelectedCarAmount';
// import { SelectedCarAmount } from '@/app/context/SelectedCarAmount';
const button = () => {
  
    const{caramount,setCarAmount}=useContext(SelectedCarAmount);
    const router=useRouter();
  return (
    <div><button className={`p-3 bg-black w-full mt-8 text-white rounded-lg ${!caramount?'bg-gray-200':null}`} disabled={!caramount} onClick={()=>router.push('/payment?amount='+(caramount))}>Confirm Booking</button></div>
  )
}

export default button