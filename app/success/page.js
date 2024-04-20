"use client";
import React from 'react'
import Link from 'next/link';


const page = () => {
   
    // const handleSubmit=async()=>{
       
    //     router.push('/');

    // }
  return (
    <div className='flex items-center justify-center'>
    <div className="container  h-full md:h-auto">
    <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="message-box _success">
          <i className="fa fa-check-circle" aria-hidden="true" />
          <h2> Your payment was successful </h2>
          <p>
            {" "}
            Thank you for your payment. we will <br />
            be in contact with more details shortly{" "}
          </p>
          <div  className='p-2 flex items-center justify-center w-full md:w-[200px] mt-[100px] md:mt-7 bg-green-500 font-sans text-[20px] rounded-lg font-weight-800'>
          <Link href="/">Back to Home</Link>
          </div>
          </div>  
      </div>
     
    </div>
    <hr />
  </div></div>
  )
}

export default page