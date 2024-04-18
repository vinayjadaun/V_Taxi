"use client";
import React,{useContext} from 'react'
// import { SelectedCarAmount } from '../context/SelectedCarAmount';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from '@/components/Home/CheckOutForm';
const Payment = () => {
  // const{caramount,setCarAmount}=useContext(SelectedCarAmount);
  const StripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
   const options={
    mode:'payment',
    amount:58,
    currency:'usd'
   }
  return (
    <Elements stripe={StripePromise} options={options}>

      <CheckOutForm/>
    </Elements>
  )
}

export default Payment