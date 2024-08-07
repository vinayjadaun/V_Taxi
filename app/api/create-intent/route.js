import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY,{
    typescript:false,
    apiVersion:"2024-04-10"
})
export async function POST(request){
   
      const data =await request.json();
      const amount=data.amount;

      try{
        const paymentIntent=await stripe.paymentIntents.create({
            amount:Number(amount),
            currency:'USD'
        })
        return NextResponse.json(paymentIntent.client_secret,{status:200})
      }catch(error){
        return new NextResponse(error,{
            status:400,
        })
      }
}