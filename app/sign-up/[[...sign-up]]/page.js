import { SignUp } from "@clerk/nextjs";
 import Image from "next/image";
export default function Page() {
  return ( 
  <>
  <div>
    <Image src='/VRIDE.jpg' width={1280} height={832} className="object-contain h-full w-full"/>
 <div className="absolute top-20 right-20">
 <SignUp />
 </div>
    </div>
    </>
  );
}