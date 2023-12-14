"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Brands = () => {
  return (
    <div id='skills' className='w-full lg:h-screen mt-10 p-2 py-10'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-1xl tracking-widest text-left uppercase text-black'>
          BRAND RECOGNITION
        </p>
        <h2 className='py-2 mb-4 text-left'>Slyding Success</h2>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>

          <div className='p-4 hover:scale-105 ease-in duration-300'>
            <div className='m-auto'>
              <Image width={"0"} height={"0"} src={"../assets/images/yourstoryn-logo.png"} className='w-full max-w-[150px] fill-current text-red-600' alt='/' />
              <h3 className='border-b-4 border-[#75EAE2]'>Your Story</h3>
              <p className='my-2 text-sm'>{"PPT demo at Construkt fest lands Slyds with funding from Bonito Designs"}</p>
            </div>
          </div>

          <div className='p-4 hover:scale-105 ease-in duration-300'>
            <div className='m-auto'>
              <Image width={"0"} height={"0"} src={"../assets/images/yourstoryn-logo.png"} className='w-full max-w-[150px]' alt='/' />
              <h3 className='border-b-4 border-[#75EAE2]'>Silicon India</h3>
              <p className='my-2 text-sm'>{"10 Most Promising Corporate Presentation Services Providers 2020"}</p>
            </div>
          </div>

          <div className='p-4 hover:scale-105 ease-in duration-300'>
            <div className='m-auto'>
              <Image width={"0"} height={"0"} src={"../assets/images/yourstoryn-logo.png"} className='w-full max-w-[150px]' alt='/' />
              <h3 className='border-b-4 border-[#75EAE2]'>Your Story</h3>
              <p className='my-2 text-sm'>{"How SlydS helps you steal the show with your slide shows"}</p>
            </div>
          </div>

          <div className='p-4 hover:scale-105 ease-in duration-300'>
            <div className='m-auto'>
              <Image width={"0"} height={"0"} src={"../assets/images/bm-logo.png"} className='w-full max-w-[150px]' alt='/' />
              <h3 className='border-b-4 border-[#75EAE2]'>Bangalore Mirror</h3>
              <p className='my-2 text-sm'>{"PPT Magician"}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Brands;
