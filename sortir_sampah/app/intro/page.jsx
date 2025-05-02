"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const IntroPage = () => {

    const router = useRouter();

    return (
        <div style={{ backgroundImage: `url(${"/images/bg-intro2.png"})` }} className='h-screen justify-between flex bg-gradient-to-b from-blue-400 to-white bg-cover bg-bottom p-6'>
            <img src="/images/img-intro.png" alt="" className='w-[500px] drop-shadow-2xl h-auto object-contain pt-28'/>
            <div className=''>
                <h1 className='font-cartoon text-teal-900 text-3xl mb-6 pl-38'>Kenapa sampah harus dibedakan?</h1>
                <p className='font-semibold text-teal-900 pl-28'>Memilah sampah itu penting. Sampah organik, seperti sisa makanan dan daun, bisa jadi pupuk buat tanaman, biar tumbuh subur dan kita nggak perlu pakai pupuk kimia yang jahat. Sampah non-organik, seperti botol plastik dan kertas, bisa didaur ulang jadi barang baru lagi, jadi kita nggak perlu tebang pohon atau bikin plastik baru terus-menerus.Kalau sampah nggak dipilah, sampah makanan bisa bikin gas yang bikin bumi kita makin panas, dan sampah berbahaya bisa bikin tanah dan air jadi kotor. Memilah sampah juga bikin kita nggak gampang sakit, karena nggak ada kuman dan binatang nakal yang datang. Dengan memilah sampah, kita bantu bumi jadi lebih bersih dan sehat, dan kita juga jadi pahlawan lingkungan! Kita jadi hemat sumber daya alam dan bikin barang-barang baru dari sampah yang sudah ada. Jadi, ayo kita pilah sampah bersama</p>
                <img src="/images/lanjut.png" alt="" className='w-28 mx-auto mt-4 cursor-pointer hover:scale-125' onClick={()=>router.push("/sampah-organik")}/>
            </div>
        </div>
    )
}

export default IntroPage