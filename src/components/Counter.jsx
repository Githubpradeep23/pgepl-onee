import Image from 'next/image';
import React from 'react'

const Counter = () => {
  return (
    <>
      <div className="mx-auto px-[8px] md:px-[36px] mt-[50px] xl:px-4 lg:mt-[20px] py-5">
        <div className="bg-opacity-50 rounded-full opacity-50 blur-2xl absolute -translate-x-4 max-w-full w-[562px] h-[562px] translate-y-1/3"></div>

        <div className="lg:grid lg:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px] gap-[100px] px-8">

          <div className="flex-1 lg:gap-[20px] xl:gap-[30px] md:ml-16">
            <h2 className="font-bold md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 text-left ml-8 md:mb-[60px] lg:mb-[5px]">OUR METRICS</h2>
            <p className="md:text-[30px] font-bold text-2xl leading-10 text-[#152C4E] mb-[50px] text-left ml-8">What Sets Us Apart as Your Business Consulting Partner
            </p>
          </div>

          <div className="relative mr-16">

            <Image width={"1000"} height={"1000"} src={"../assets/images/Asset-2.png"} className='object-cover mx-auto mb-[30px] lg:mb-0 lg:flex-1 w-[25%] fade opacity-50' alt='/' />
            <Image width={"1000"} height={"1000"} src={"../assets/images/Asset-1.png"} className='absolute shadow-3 rounded-2xl top-1 right-[85px] animate-float w-[40%] opacity-50' alt='/' />
            <Image width={"1000"} height={"1000"} src={"../assets/images/Asset-3.png"} className='absolute shadow-3 rounded-2xl right-[85px] animate-float -bottom-5 w-[30%] opacity-50' alt='/' />

          </div>

        </div>

        <div className="md:grid md:grid-cols-4 md:gap-y-[34px] lg:gap-x-[70px] mt-20 px-32">

          <div className="mb-[30px] lg:mb-0">
            <h2 className="font-bold lg:text-display-3 border-b-4 border-[#75EAE2] md:text-[40px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-gray-900">2,000+
            </h2>
            <div className="mb-[17px]">
              <h4 className="text-heading-6 my-4 font-normal text-sm">Projects</h4>
            </div>
          </div>

          <div className="mb-[30px] lg:mb-0">
            <h2 className="font-bold lg:text-display-3 border-b-4 border-[#75EAE2] md:text-[40px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-gray-900">10+
            </h2>
            <div className="mb-[17px]">
              <h4 className="text-heading-6 my-4 font-normal text-sm">Years</h4>
            </div>
          </div>

          <div className="mb-[30px] lg:mb-0">
            <h2 className="font-bold lg:text-display-3 border-b-4 border-[#75EAE2] md:text-[40px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-gray-900">100,000+
            </h2>
            <div className="mb-[17px]">
              <h4 className="text-heading-6 my-4 font-normal text-sm">Clients</h4>
            </div>
          </div>

          <div className="mb-[30px] lg:mb-0">
            <h2 className="font-bold lg:text-display-3 border-b-4 border-[#75EAE2] md:text-[40px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-gray-900">2Bn+
            </h2>
            <div className="mb-[17px]">
              <h4 className="text-heading-6 my-4 font-normal text-sm">Team</h4>
            </div>
          </div>

        </div>
        
      </div>

    </>
  )
}
export default Counter;
