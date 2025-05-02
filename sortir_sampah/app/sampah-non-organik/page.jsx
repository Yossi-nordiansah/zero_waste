"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const NonOrganikPage = () => {

    const router = useRouter();

    return (
        <div style={{ backgroundImage: `url(${"/images/bg-devide.png"})` }} className='h-screen justify-between flex bg-gradient-to-b from-blue-400 to-white bg-cover bg-bottom p-6'>
            <div className='w-[750px] pt-32'>
                <h1 className='font-cartoon text-teal-900 text-5xl text-center mb-6'>Sampah Non Organik</h1>
                <p className='font-bold text-teal-900'>kalau tadi kita sudah kenalan sama sampah organik yang bisa diurai, sekarang kita kenalan sama sampah non-organik, ya! Sampah non-organik itu sampah yang nggak bisa diurai oleh teman-teman bakteri kecil di tanah. Jadi, sampah ini akan tetap ada dalam waktu yang lama sekali. Contohnya itu kayak botol plastik bekas minuman, bungkus permen, kaleng bekas, tas kresek, atau mainan plastik yang sudah rusak. Karena nggak bisa diurai, sampah non-organik ini bisa bikin lingkungan kita jadi kotor dan nggak sehat. Tapi, jangan sedih! Kita bisa kok mengurangi sampah non-organik ini dengan cara memilahnya dan mendaur ulangnya jadi barang-barang yang berguna lagi. Misalnya, botol plastik bisa kita kreasikan jadi pot tanaman atau tempat pensil yang lucu. Jadi, yuk kita bijak dalam menggunakan barang-barang dan jangan lupa pilah sampah non-organik supaya bumi kita tetap bersih dan sehat!</p>
                <img src="/images/lanjut.png" alt="" className='w-28 mx-auto mt-4 cursor-pointer hover:scale-125' onClick={()=>router.push("/sampah-berbahaya")}/>
            </div>
            <img src="/images/non-organik.png" alt="" className='max-w-96 drop-shadow-2xl h-auto object-contain'/>
        </div>
    )
}

export default NonOrganikPage;