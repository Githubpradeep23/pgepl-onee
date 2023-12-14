"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Image from 'next/image';
// import required modules
import { Autoplay, Grid, Pagination } from 'swiper/modules';

const Brandss = () => {

  const ourBrands = [
    { imageUrl: "/assets/images/home-banner/mits.png" },
    { imageUrl: "/assets/images/home-banner/whirl.png" },
    { imageUrl: "/assets/images/home-banner/bwc.png" },
    { imageUrl: "/assets/images/home-banner/alight.png" },
    { imageUrl: "/assets/images/home-banner/3crore.png" },
    { imageUrl: "/assets/images/home-banner/geico.png" },
    { imageUrl: "/assets/images/home-banner/VDart.png" },
    { imageUrl: "/assets/images/home-banner/stefanini.png" },
    { imageUrl: "/assets/images/home-banner/connexion.png" },
    { imageUrl: "/assets/images/home-banner/tek.png" },
    { imageUrl: "/assets/images/home-banner/global.png" },
    {
      imageUrl: "/assets/images/home-banner/Sierra-Digital.png"
    },

  ];

  return (
    <>
      <div id='testimonial' className='w-full p-1 py-1 mx-auto container'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
          <div className='mx-auto'>
            <h2 className="font-bold md:text-xl text-2xl text-[#202124] mb-[50px] text-center">Grateful for the trust and support of our valued clients and partners, propelling us forward in our journey
            <div className="w-1/6 border border-[#2f9754] border-b-4 border-l-0 border-r-0 border-t-0 mt-1 ml-96">
            </div>
            </h2>
            
          </div>

          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              400: {
                slidesPerView: 4,
              },
              639: {
                slidesPerView: 6,
              },
              865: {
                slidesPerView: 8
              },
              1000: {
                slidesPerView: 10
              },
              1500: {
                slidesPerView: 12
              },
              1700: {
                slidesPerView: 14
              }
            }}
            slidesPerView={10}
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
            className="mySwiper"
          >

            {ourBrands.map((option, index) => {
              return (
                <SwiperSlide className='' key={index}>
                  {/* Removed the card container */}
                  <div className='flex justify-center items-center hover:scale-90 '>
                    <Image src={option.imageUrl} className='w-[100px]' width={"1000"} height={"1000"} alt='/' />
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
export default Brandss;