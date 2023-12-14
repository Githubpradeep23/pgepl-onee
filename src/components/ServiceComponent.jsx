import Image from 'next/image';
import React from 'react'

const ServiceComponent = () => {
    return (
        <>
            <section className="pt-10 pb-5 lg:pt-[20px] lg:pb-[40px] py-10">
                <div className="container">

                    <div className="md:grid grid-cols-3 gap-20">

                        <div className="">

                            <Image width={"1000"} height={"1000"} src={"../assets/images/home-banner/servicenew.png"} className='w-full object-cover' alt='/' />

                        </div>

                        <div className="md:col-span-2">
                            <div className="-mx-4 flex flex-wrap">
                                <div className="w-full px-4">

                                    <div className="mx-auto mb-12 max-w-[100%] text-center lg:mb-10 mt-2">
                                        <h2 className="font-bold md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 text-left ml-8 md:mb-[60px] lg:mb-[5px]">OUR SERVICES</h2>
                                        <h2 className="font-bold md:text-4xl text-2xl text-[#202124] mb-[50px] text-left ml-8">We Served as your wish for success
                                        </h2>
                                    </div>

                                </div>
                            </div>
                            <div className="-mx-4 grid grid-cols-3 px-4">

                                <div className="w-full px-4">
                                    <div className="mb-8 rounded-[20px] bg-white">
                                        <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                                            <Image width={"1000"} height={"1000"} src={"../assets/images/servicen1.png"} className='object-cover w-32' alt='/' />

                                        </div>
                                        <h4 className="text-dark mb-3 text-sm font-semibold">
                                            Software Development
                                        </h4>
                                        <p className="text-body-color text-xs">
                                            Custom software solutions for seamless business operations.
                                        </p>
                                        <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-4">
                                    <div className="mb-8 rounded-[20px] bg-white">
                                        <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                                            <Image width={"1000"} height={"1000"} src={"../assets/images/servicen2.png"} className='object-cover w-32' alt='/' />

                                        </div>
                                        <h4 className="text-dark mb-3 text-sm font-semibold">
                                            Web Development
                                        </h4>
                                        <p className="text-body-color text-xs">
                                            Crafting captivating and functional websites tailored to your brand.
                                        </p>
                                        <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-4">
                                    <div className="mb-8 rounded-[20px] bg-white">
                                        <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                                            <Image width={"1000"} height={"1000"} src={"../assets/images/servicen3n.png"} className='object-cover w-32' alt='/' />

                                        </div>
                                        <h4 className="text-dark mb-3 text-sm font-semibold">Mobile App Development</h4>
                                        <p className="text-body-color text-xs">
                                            Creating innovative mobile applications that set your business apart.
                                        </p>
                                        <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-4">
                                    <div className="mb-8 rounded-[20px] bg-white">
                                        <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                                            <Image width={"1000"} height={"1000"} src={"../assets/images/servicen3.png"} className='object-cover w-32' alt='/' />

                                        </div>
                                        <h4 className="text-dark mb-3 text-sm font-semibold">IT Staffing</h4>
                                        <p className="text-body-color text-xs">
                                            Crafting captivating and functional websites tailored to your brand.
                                        </p>
                                        <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-4">
                                    <div className="mb-8 rounded-[20px] bg-white">
                                        <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                                            <Image width={"1000"} height={"1000"} src={"../assets/images/servicen5.png"} className='object-cover w-32' alt='/' />

                                        </div>
                                        <h4 className="text-dark mb-3 text-sm font-semibold">
                                            SAP Payroll Management Tool
                                        </h4>
                                        <p className="text-body-color text-xs">
                                            Crafting captivating and functional websites tailored to your brand.
                                        </p>
                                        <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-4">
                                    <div className="mb-8 rounded-[20px] bg-white">
                                        <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                                            <Image width={"1000"} height={"1000"} src={"../assets/images/servicen6.png"} className='object-cover w-32' alt='/' />

                                        </div>
                                        <h4 className="text-dark mb-3 text-sm font-semibold">Digital Marketing Services</h4>
                                        <p className="text-body-color text-xs">
                                            Enhance your online presence and drive success through digital marketing strategies.
                                        </p>
                                        <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
export default ServiceComponent;
