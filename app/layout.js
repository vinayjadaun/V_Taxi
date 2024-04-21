import { Inter,Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Header from '@/components/Header'
import  { Metadata } from "next";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata={
  title:"VJRides",
  description: "VJRide-Taxi sharing app with payment integration",
 
  keywords:"coding,software,education,application,app,webapp",
  og:{
    title:"VJRide-Taxi sharing app with payment integration",
    description:"Vinay Jadaun's Ride sharing application with payment and real time traking system",
    image:"./favicon.png",
    url:"www.vjride.world",
    type:"website",

  },
  canonical:"https://vjride.world"
 
  
  

};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">

      <body className={inter.className}>
      <Header/>
        {children}
    </body>  
    </html>
    </ClerkProvider>
  );
}
