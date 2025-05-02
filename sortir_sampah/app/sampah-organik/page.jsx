"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const OrganikPage = () => {

    const router = useRouter();

    return (
        <div style={{ backgroundImage: `url(${"/images/bg-devide.png"})` }} className='h-screen justify-between flex bg-gradient-to-b from-blue-400 to-white bg-cover bg-bottom p-6'>
            <div className='w-[750px] pt-32'>
                <h1 className='font-cartoon text-teal-900 text-5xl text-center mb-6'>Sampah Organik</h1>
                <p className='font-bold text-teal-900'>Sampah organik itu seperti sisa-sisa makanan atau daun-daun yang jatuh dari pohon, seperti kulit pisang atau sayuran yang udah nggak segar lagi. Sampah ini asalnya dari makhluk hidup, seperti kita, hewan, dan tumbuhan. Nah, hebatnya, sampah organik ini bisa diurai sama teman-teman kecil kita, yaitu bakteri dan makhluk kecil lainnya di tanah. Mereka makan sampah ini, terus mengubahnya jadi sesuatu yang berguna buat tanaman, seperti pupuk! Contohnya, kalau kita punya kulit buah atau sisa sayuran, jangan dibuang sembarangan ya, bisa kita kumpulkan buat bikin pupuk sendiri di rumah. Jadi, sampah organik itu bukan cuma sampah biasa, tapi bisa jadi teman baik kita dan lingkungan!</p>
                <img src="/images/lanjut.png" alt="" className='w-28 mx-auto mt-4 cursor-pointer hover:scale-125' onClick={()=>router.push("/sampah-non-organik")}/>
            </div>
            <img src="/images/organik.png" alt="" className='max-w-96 drop-shadow-2xl h-auto object-contain'/>
        </div>
    )
}

export default OrganikPage;