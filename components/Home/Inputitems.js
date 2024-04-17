import React from 'react'
import Image from 'next/image'

function Inputitems({type}) {
//   const [source ,setSource]=useState();
//   const [addressList,setAddressList]=useState([]);
//   useEffect(()=>{
//     const delaydebouncefn=setTimeout(()=>{
//       getAddressList();
//     },1000);
//     return ()=>clearTimeout(delaydebouncefn);
//   },[source]);
  
//   const getAddressList=async()=>{
//     const res=await fetch('/api/searchaddress?q='+source,{
//       headers:{
//         "Content-Type":"application/json"
//       }
//     })
//     const result=await res.json();
//     setAddressList(result);
//   }
  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
        <Image src={type=='source'?'/source.png':
        '/dest.png' } width={15} height={15}/>
        <input type='text' placeholder={type=='source'?'Pickup Location':'DropOff Location'} className='bg-transparent w-full outline-none'  />
       {/* {addressList?.suggestions?
        <div>
        {addressList?.suggestions.map((items,index)=>( 
           <h2>{items.full_address}</h2>
        ))}</div>:null} */}
    </div>
  )
}

export default Inputitems