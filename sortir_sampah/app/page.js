"use client"
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <div className="min-h-screen relative bg-green-100 space-y-4 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${'/images/start.jpg'})`, backgroundPositionY: -30 }}>
      <h1 className='font-cartoon text-center text-7xl bg-gradient-to-b pt-44 drop-shadow-2xl from-green-800 to-green-500 bg-clip-text text-transparent '>Zero Waste</h1>
      <p className='text-center text-lg font-cartoon text-teal-800 drop-shadow-2xl'>Game edukasi jenis sampah</p>
      <img src="/images/play.png" alt="" className='w-44 drop-shadow-2xl cursor-pointer hover:w-48 block mx-auto' onClick={()=>router.push('/intro')}/>
      <img src="/images/close.png" alt="" className='w-14 absolute right-5 bottom-6 hover:scale-150 cursor-pointer'/>
    </div>
  );
}
