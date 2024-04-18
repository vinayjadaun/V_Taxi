import { useStripe,useElements,Elements,PaymentElement } from '@stripe/react-stripe-js'
import React from 'react'

const CheckOutForm = () => {
  const stripe=useStripe();
  const elements=useElements();
 const handleSubmit=async(event)=>{
         event.preventDefault();
         if(elements==null){
          return;
         }
         const {error:submitError} = await elements.submit();
         if(submitError){
          return;
         }
        const res=await fetch("/api/create-intent",{
          method:"POST",
          body:JSON.stringify({
            amount:58,
          }),
        });

        const sec=await res.json();
        console.log(sec);
        const{error}=await stripe.confirmPayment(
          {
            clientSecret:sec,
            elements,
            confirmParams:{
              return_url:"http://localhost:3000/",
            }

          }
        )





        //  const result = await stripe.confirmPayment({
        //   //`Elements` instance that was used to create the Payment Element
        //   elements,
        //   confirmParams: {
        //     return_url: "https://localhost:3000/",
        //   },
        // });
    
        // if (result.error) {
        //   // Show error to your customer (for example, payment details incomplete)
        //   console.log(result.error.message);
        // } else {
        //   // Your customer will be redirected to your `return_url`. For some payment
        //   // methods like iDEAL, your customer will be redirected to an intermediate
        //   // site first to authorize the payment, then redirected to the `return_url`.
        // }
      };
 
  return (
    <div className='flex flex-col items-center justify-center h-[500px] w-full  '>
    <form onSubmit={handleSubmit} className='max-w-md p-5 border-[2px] border-gray-300 rounded-lg'>
      <PaymentElement/>
      <button type="submit" disabled={!stripe||!elements} className='w-full bg-yellow-500 p-2 rounded-lg mt-2'>
        Pay
      </button>
    </form>
    </div>
  );
}


export default CheckOutForm;