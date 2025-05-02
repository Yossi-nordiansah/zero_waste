"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const NonOrganikPage = () => {

    const router = useRouter();

    return (
        <div style={{ backgroundImage: `url(${"/images/bg-devide.png"})` }} className='h-screen justify-between flex bg-gradient-to-b from-blue-400 to-white bg-cover bg-bottom p-6'>
            <div className='w-[750px] pt-32'>
                <h1 className='font-cartoon text-teal-900 text-5xl text-center mb-6'>Sampah Berbahaya</h1>
                <p className='font-bold text-teal-900'>Selain sampah organik dan non-organik, ada juga lho jenis sampah yang harus kita waspadai, namanya sampah berbahaya! Sampah berbahaya ini beda dari sampah lainnya karena bisa membahayakan kesehatan kita dan lingkungan kalau tidak ditangani dengan benar. Bayangin aja, sampah ini seperti barang-barang yang punya kekuatan tersembunyi yang bisa bikin kita sakit atau merusak alam. Contohnya itu seperti baterai bekas jam atau handphone, lampu neon yang sudah mati, obat-obatan kadaluarsa, botol bekas cairan pembersih lantai, atau kaleng cat yang sudah kosong. Sampah-sampah ini mengandung bahan kimia yang bisa meracuni tanah, air, dan udara kalau dibuang sembarangan. Jadi, kita harus hati-hati ya kalau ketemu sampah berbahaya ini. Jangan dipegang atau dibuang sembarangan, tapi beritahu orang dewasa supaya mereka bisa membuangnya di tempat khusus yang aman.</p>
                <img src="/images/lanjut.png" alt="" className='w-28 mx-auto mt-4 cursor-pointer hover:scale-125' onClick={()=>router.push("/sortir-sampah")}/>
            </div>
            <img src="/images/berbahaya.png" alt="" className='max-w-96 cursor-pointer drop-shadow-2xl h-auto object-contain'/>
        </div>
    )
}

export default NonOrganikPage;