"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Image from 'next/image';
import Css from '/public/assets/skills/css.png';
// import required modules
import { Autoplay, Grid, Pagination } from 'swiper/modules';
import { TestimonialData } from "../json_data/TestiminialData";
import { AiFillLinkedin } from 'react-icons/ai';

const Testimonial = () => {
  return (
    <>
      <div id='testimonial' className='w-full lg:h-screen p-2 py-10'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
         <div className='mb-4'>
            <p className='text-1xl tracking-widest uppercase text-black'>
              SEE WHAT THEY SAY
            </p>
            <h2 className='py-4'>Testimonials from our Customers</h2>
         </div>

          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 1,
              },
              639: {
                slidesPerView: 3,
              },
              865: {
                slidesPerView: 4
              },
              1000: {
                slidesPerView: 3
              },
              1500: {
                slidesPerView: 6
              },
              1700: {
                slidesPerView: 7
              }
            }}
            slidesPerView={3}
            spaceBetween={20}
            grid={{
              rows: 2,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Grid]}
            // modules={[Autoplay, Grid, Pagination]}
            className="mySwiper"
          >

            {TestimonialData.map((option, index) => {
              return (

                <SwiperSlide key={index}>
                  <div className='p-2 rounded-sm border-[0.5px] hover:scale-105 ease-in duration-300'>
                    
                    <div className='flex justify-center items-center'>

                      <div className='m-auto'>
                        <Image src={Css} width={'50'} height={'50'} alt='/' />
                      </div>

                      <div className='m-auto'>
                        <h3>{option.name}</h3>
                        <p className=' text-sm'>{option.designation}</p>
                      </div>

                      <AiFillLinkedin className='m-auto mt-[0px]' />

                    </div>

                    <p className='py-2 text-gray-900 text-[12px] text-justify'>
                      {option.description}
                    </p>

                  </div>
                </SwiperSlide>

              );
            })}

          </Swiper>

        </div>
      </div>

    </>
  )
}
export default Testimonial;