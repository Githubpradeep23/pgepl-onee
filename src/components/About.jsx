"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '/public/assets/images/home-banner/mobile-about-2.png';

const About = () => {
  return (
    <div id='about' className='mx-auto md:p-4 w-full md:h-screen bg-no-repeat bg-cover text-center md:bg-enabled_decks md:mt-5' >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-8'>

        <div className='bg-mpbile_enabled_decks bg-no-repeat bg-cover md:mt-20 px-2'>
          <h2 className="font-bold md:text-4xl text-2xl text-[#152C4E] text-left">UI-Apps-SAP Accelerated Payroll Solutions Tool</h2>
          <p className='py-2 text-gray-600 text-left'>
            An easy-to-use role-based UI application that provides a simple and secure way to migrate
            (Import/Export) your employee payroll data
            securely into the SAP Success Factors
            Employee Central Payroll or SAP Private Cloud
            Payroll Systems.
          </p>
          <h2 className="font-bold md:text-1xl text-2xl text-[#152C4E] mb-[20px] text-left">Automated Data Processing, Accelerated
            Payroll Runs & Compliance Assurance</h2>
          <button type="button" className="float-left hover:scale-105 ease-in duration-100 text-white bg-[#152C4E] focus:ring-4 font-medium mb-2 capitalize dark:focus:ring-[#152C4E] px-6 py-2 text-[14px]">Explore with a live demo</button>
        </div>

        <div className='w-full h-auto -mt-20 m-auto flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image width={"1000"} height={"1000"} src={AboutImg} className='w-full' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
