"use client";
import React, { useState } from 'react';

const Contact = () => {
  return (
    <div id='contact' className='w-full py-2'>
      <div className='md:max-w-[1100px] m-auto px-2 py-16 md:py-0 w-full '>
        {/* <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p> */}

        <div className='grid lg:grid-cols-2 gap-8'>
          {/* left */}

          <div className='max-w-[200px] md:mt-0'>

            <h2 className='py-2 text-xl text-[#152C4E]'>In a rush? <br />
              Get a call from our
              industry experts
            </h2>

          </div>

          {/* right */}
          <div className='col-span-1 w-full h-auto rounded-sm lg:p-4'>
            <div className='p-4'>
              <form action='#' method='#' encType='multipart/form-data'
              >
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

                <div className='grid md:grid-cols-3 gap-4 w-full mt-4'>

                  {/* <div className='flex flex-col'>
                    <label className='uppercase text-sm'>
                      Date *
                    </label>
                    <input className='border-b-[1px] border-black flex focus:outline-none focus:border-teal-500' type='date' name='phone' />
                  </div> */}

                  {/* <div className='flex flex-col'>
                    <label className='uppercase text-sm'>
                      Time *
                    </label>
                    <input className='border-b-[1px] border-black flex focus:outline-none focus:border-teal-500' type='time' name='phone' />
                  </div> */}

                  <button className='w-full p-2 text-xs capitalize text-gray-100 mt-4'>
                    Submit
                  </button>

                </div>

              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
