"use client";
import Image from 'next/image';
import React from 'react';
import NavLogo from '/public/assets/images/logo.png'

const Storyteller = () => {
  return (
    <>
      <div id='about' className='mx-auto md:p-4 w-full bg-no-repeat bg-cover text-center md:bg-[#a3f1ee] md:my-20 ' >
       
       <div className='grid grid-cols-3'>

          <div className="rounded-lg flex justify-center">
            <Image width={"1000"} height={"1000"} src={NavLogo} className='md:w-[50%] md:h-[30%] md:mt-16' alt='/' />
          </div>

          <div className='md:max-w-[500px]'>
            <h2 className="font-bold md:text-2xl text-2xl text-black text-left py-4">Why Clients Trust Our Expertise and
              Choose to Partner with Us</h2>
            <h6 className='mb-2 text-[#F05108] text-justify'>
              {`SLRIS - Where Trust and Partnership Meet Excellence`}
            </h6>
            <p className='text-[#152C4E] text-justify text-xs mb-2'>
              {`Embrace the confidence in our proven
                expertise as we turn your vision into reality.
                Our comprehensive range of services paves
                the way for your business's unparalleled
                success. Join our esteemed clients who
                have unlocked their potential and
                partnered with excellence.`}
            </p>
            {/* <button type="button" className="float-left hover:scale-105 ease-in duration-100 text-white bg-[#152C4E] focus:ring-4 font-medium mb-2 capitalize dark:focus:ring-[#152C4E] px-6 py-2 text-[14px]">Get started</button> */}
          </div>

          {/* <div className="rounded-lg flex justify-center">
            <Image width={"1000"} height={"1000"} src={"../assets/images/sap-partner.png"} className='md:w-[50%] md:h-[50%] md:mt-10' alt='/' />
          </div> */}

       </div>

      </div>
    </>
  );
};

export default Storyteller;
