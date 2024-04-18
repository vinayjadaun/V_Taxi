import { SignIn } from "@clerk/nextjs";
 import Image from "next/image";
export default function Page() {
  return ( 
    <>
    <div>
      <Image src='/VRIDE.jpg' width={1500} height={300} className="object-contain hidden md:block h-full w-full" />
      <Image src='/vride (2).jpg' width={703} height={1280} className="object-contain block md:hidden h-full w-full" />
   <div className="absolute top-20 md:top-20 right-1.5 md:right-20">
   <SignIn />
   </div>
      </div>
      </>
    );
}