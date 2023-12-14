"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const page = () => {
    return (
       
<>

            <div id='contact' className={`h-screen`}>
                <div className='max-w-4xl w-full mx-auto'>
                    
                    <div className='md:py-32'>

                        <h2 className='font-semibold text-center md:mt-10 text-4xl text-[#152C4E] justify-center'>In a rush? <br />
                            Get a call from our
                            industry experts
                        </h2>

                        <div className='col-span-1 w-full h-auto rounded-sm lg:p-4'>
                            <div className='p-4'>
                                <form action='#' method='#' encType='multipart/form-data' >
                                    <div className='grid md:grid-cols-2 gap-4 w-full'>
                                        <div className='flex flex-col'>
                                            <label className='uppercase text-sm'>Company Name </label>
                                            <input className='border-b-[1px] border-black flex focus:outline-none focus:border-teal-500' type='text' name='name'
                                            />
                                        </div>

                                        <div className='flex flex-col'>
                                            <label className='uppercase text-sm'>Email</label>
                                            <input className='border-b-[1px] border-black flex focus:outline-none focus:border-teal-500' type='email' name='email' />
                                        </div>

                                        <div className='flex flex-col'>
                                            <label className='uppercase text-sm'>
                                                Contact Name
                                            </label>
                                            <input className='border-b-[1px] border-black flex focus:outline-none focus:border-teal-500' type='text' name='phone' />
                                        </div>

                                        <div className='flex flex-col'>
                                            <label className='uppercase text-sm'>
                                                Phone Number
                                            </label>
                                            <input className='border-b-[1px] border-black flex focus:outline-none focus:border-teal-500' type='text' name='phone' />
                                        </div>

                                    </div>

                                    <button className='w-full p-2 text-xs capitalize text-gray-100 mt-4'>
                                        Submit
                                    </button>

                                </form>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
</>

    );
};

export default page;
