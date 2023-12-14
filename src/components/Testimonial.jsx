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
      <div id='testimonial' className='w-full p-2 py-10'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
         <div className='mx-auto'>
            <h2 className="font-bold md:text-4xl text-2xl text-[#202124] mb-[50px] text-center">What our <span className='text-[#2c7b55]'>clients</span> and 
              <span className='text-[#2a8144]'> business partners</span> say about us
            </h2>
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
              rows: 0,
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

                <SwiperSlide className='' key={index}>
                  <div className='bg-white shadow-md-2 hover:shadow-xl rounded-lg overflow-hidden hover:border-[#3f9c59] border-2 w-fit h-auto'>
                    
                    <p className='py-2 text-gray-900 text-[12px] text-justify p-2'>
                      {option.description}
                    </p>

                    <h3 className='text-[12px] text-[#3f9c59] text-right p-2'>{option.name}</h3>
                    <h3 className='text-[12px] text-[#3f9c59] text-right p-2'>{option.designation}</h3>

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