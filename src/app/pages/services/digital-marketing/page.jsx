import Contact from '@/components/Contact'
import Image from 'next/image'
import { BsPlusCircleFill } from 'react-icons/bs'

const page = () => {
    return (

        <>

            <div id='home' className={`md:h-screen md:bg-digital_marketing md:w-full h-[250px] bg-cover bg-center bg-no-repeat`} >
                <div className='md:max-w-[1240px] w-full mx-auto md:p-16 p-6 flex justify-start items-center'>
                    <div className='md:mt-24 mt-8'>

                        <div className='md:ml-10'>
                            <div className='mt-2'>
                                <h1 className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#152C4E] to-[#75EAE4]'>
                                    {"Digital Marketing"}<br />{"Solutions"}
                                </h1>
                                <p className='md:max-w-[460px] py-4 text-[#202124] m-auto font-inter font-semibold text-[14px]'>
                                    {"Explore our comprehensive Digital Marketing services designed to boost your online presence and drive success."}
                                </p>
                            </div>

                            <button type="button" className="md:ml-1 rounded-full hover:scale-105 ease-in duration-100 text-white items-start bg-[#152C4E] focus:ring-4 font-medium mb-2 capitalize dark:focus:ring-[#152C4E] px-6 py-2 text-[14px]">{"HIRE US ->"} </button>

                        </div>

                    </div>

                </div>
            </div>

            <section className="pt-10 pb-12 lg:pt-[10px] lg:pb-[5px] py-10">
                <div className="container">

                    <div className="md:grid grid-cols-3">

                        <div className="md:mt-40">

                            <Image width={"1000"} height={"1000"} src={"../../assets/images/home-banner/digital-serivces.png"} className='w-full object-cover' alt='/' />

                        </div>

                        <div className="md:col-span-2">
                            <div className="-mx-4 flex flex-wrap">
                                <div className="w-full px-4">

                                    <div className="mx-auto mb-12 max-w-[100%] text-center lg:mb-10 mt-8">
                                        <h2 className="font-bold md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 text-left ml-8 md:mb-[60px] lg:mb-[20px]">OUR SERVICES</h2>
                                        <h2 className="font-bold md:text-4xl text-2xl text-[#202124] mb-[50px] text-left ml-8">We Served as your wish for success
                                        </h2>
                                    </div>

                                </div>
                            </div>
                            <div className="-mx-4 grid grid-cols-3 px-4">

                                <div className="w-full px-4">
                                    <div className="mb-8 rounded-[20px] bg-white">
                                        <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                                            <Image width={"1000"} height={"1000"} src={"../../assets/images/servicen1.png"} className='object-cover md:w-32' alt='/' />

                                        </div>
                                        <h4 className="text-dark mb-3 text-sm font-semibold">
                                            {` Search Engine Optimization (SEO)`}
                                        </h4>
                                        <p className="text-body-color text-xs">
                                            {`Enhance your online visibility and rankings with our cutting-edge SEO techniques, driving organic traffic to your website.`}</p>
                                        <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-4">
                                    <div className="mb-8 rounded-[20px] bg-white">
                                        <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                                            <Image width={"1000"} height={"1000"} src={"../../assets/images/servicen2.png"} className='object-cover md:w-32' alt='/' />

                                        </div>
                                        <h4 className="text-dark mb-3 text-sm font-semibold">
                                            Google Ads
                                        </h4>
                                        <p className="text-body-color text-xs">
                                            {`Reach your target audience swiftly and efficiently through our Google Ads campaigns, optimizing your ROI with precision targeting. `}</p>
                                        <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-4">
                                    <div className="mb-8 rounded-[20px] bg-white">
                                        <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                                            <Image width={"1000"} height={"1000"} src={"../../assets/images/servicen3n.png"} className='object-cover md:w-32' alt='/' />

                                        </div>
                                        <h4 className="text-dark mb-3 text-sm font-semibold">Social Media Marketing</h4>
                                        <p className="text-body-color text-xs">
                                            {`Harness the power of social platforms to engage, convert, and delight your audience, building a strong online community`}</p>
                                        <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-4">
                                    <div className="mb-8 rounded-[20px] bg-white">
                                        <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                                            <Image width={"1000"} height={"1000"} src={"../../assets/images/servicen3.png"} className='object-cover md:w-32' alt='/' />

                                        </div>
                                        <h4 className="text-dark mb-3 text-sm font-semibold">Lead Generation</h4>
                                        <p className="text-body-color text-xs">
                                            {`Fuel your sales pipeline with high-quality leads using our strategic lead generation tactics, tailored to your business.`}
                                        </p>
                                        <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-4">
                                    <div className="mb-8 rounded-[20px] bg-white">
                                        <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                                            <Image width={"1000"} height={"1000"} src={"../../assets/images/servicen5.png"} className='object-cover md:w-32' alt='/' />

                                        </div>
                                        <h4 className="text-dark mb-3 text-sm font-semibold">
                                            Branding
                                        </h4>
                                        <p className="text-body-color text-xs">
                                            {`Craft a compelling brand identity that resonates with your audience, leaving a lasting impression and fostering brand loyalty.`}
                                        </p>
                                        <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-4">
                                    <div className="mb-8 rounded-[20px] bg-white">
                                        <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                                            <Image width={"1000"} height={"1000"} src={"../../assets/images/servicen6.png"} className='object-cover md:w-32' alt='/' />

                                        </div>
                                        <h4 className="text-dark mb-3 text-sm font-semibold">Email Marketing</h4>
                                        <p className="text-body-color text-xs">
                                            {`Leverage personalized email campaigns to nurture leads, retain customers, and drive conversions, all while enhancing your brand's reputation.`}
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

            <div id='about' className='mx-auto md:p-4 w-full md:h-screen bg-no-repeat bg-cover text-center md:bg-choose_excellence py-5' >
                <div className='max-w-[1100px] m-auto md:grid grid-cols-2 gap-8'>

                    <div className='bg-mpbile_enabled_decks bg-no-repeat bg-cover md:mt-32 px-2'>
                        <h1 className="font-bold md:text-4xl text-2xl text-[#152C4E] text-left">Choosing Excellence <br /> in Digital Marketing</h1>
                        <p className='py-2 text-gray-600 text-left text-sm md:mt-2'>
                            {`We stand out as your trusted digital marketing partner. Our seasoned experts in SEO, Google Ads, Social Media, Branding, and Lead generation bring years of experience to deliver exceptional results. We tailor strategies to your unique goals, staying ahead of industry trends with cutting-edge techniques. We're dedicated to your success and`}
                        </p>
                        <ul className='md:text-left md:text-xs md:p-2 md:ml-2 md:gap-2 list-disc'>
                            <li className='text-[#75EAE4]'>
                                <span class="text-black">Proven Expertise</span>
                            </li>
                            <li className='text-[#75EAE4]'>
                                <span class="text-black">Customized Strategies</span>
                            </li>
                            <li className='text-[#75EAE4]'>
                                <span class="text-black">Adaptable Approach</span>
                            </li>
                            <li className='text-[#75EAE4]'>
                                <span class="text-black"> Dedicated Support</span>
                            </li>
                        </ul>

                    </div>

                    <div className='w-full h-auto -mt-20 m-auto flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                        {/* <Image src={"AboutImg"} className='' alt='/' /> */}
                    </div>
                </div>
            </div>

            <div className='w-full md:mt-16'>
                <div className='md:max-w-[1000px] m-auto px-2 py-16 md:py-0 w-full flex justify-center items-center'>

                    <div className='grid grid-cols-2 border-[1px] border-[#00000040] p-4 rounded-t-lg'>

                        <div>
                            <Image width={"1000"} height={"1000"} src={"../../assets/images/home-banner/progress-bar-image.png"} className='object-cover md:w-[330px] md:h-[390px]' alt='/' />
                        </div>

                        <div>
                            <p className='py-2 text-gray-600 text-left text-sm md:mt-2 md:mb-6'>
                                {`We consistently surpass expectations in service delivery, ensuring your complete satisfaction`}
                            </p>

                            <div className='md:mb-8'>
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-medium text-[#1F2025] dark:text-white">Organic Promotions</span>
                                    <span className="text-sm font-medium text-[#1F2025] dark:text-white">95%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="animate-pulse bg-gradient-to-r from-[#75EAE4] to-[#152C4E] h-2.5 rounded-full md:w-[95%]"></div>
                                </div>
                            </div>

                            <div className='md:mb-8'>
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-medium text-[#1F2025] dark:text-white">Sponsored Ads</span>
                                    <span className="text-sm font-medium text-[#1F2025] dark:text-white">90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="animate-pulse bg-gradient-to-r from-[#75EAE4] to-[#152C4E] h-2.5 rounded-full md:w-[90%]"></div>
                                </div>
                            </div>

                            <div className='md:mb-8'>
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-medium text-[#1F2025] dark:text-white">Branding</span>
                                    <span className="text-sm font-medium text-[#1F2025] dark:text-white">90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="animate-pulse bg-gradient-to-r from-[#75EAE4] to-[#152C4E] h-2.5 rounded-full md:w-[90%]"></div>
                                </div>
                            </div>

                            <button type="button" className="rounded-full hover:scale-105 ease-in duration-100 text-white items-start bg-[#152C4E] focus:ring-4 font-medium mb-2 capitalize dark:focus:ring-[#152C4E] px-6 py-2 text-[14px]">{"Start a Project ->"} </button>

                        </div>

                    </div>

                </div>
            </div>

            <div className='mx-auto w-full bg-no-repeat bg-cover text-center md:bg-testimonial md:my-24' >
                <div className='flex justify-center items-center md:mt-20 px-2'>
                    <div className='md:max-w-[800px]'>
                        <div className='flex justify-center items-center md:mb-28'>
                            <h1 className="md:max-w-[400px] font-bold md:text-4xl text-2xl text-[#152C4E] text-center">
                                Elevate Your Business to New Heights Online
                            </h1>
                        </div>
                        <p className='text-gray-600 text-left text-sm md:mt-48'>
                            {`our primary mission is to catapult your business to new heights in the digital realm. With our expertise and unwavering dedication, we craft innovative strategies and deploy cutting-edge techniques tailored to your unique goals. Whether it's enhancing your online visibility, driving targeted traffic, or maximizing your return on investment, we are here to ensure your business thrives in the competitive online landscape. Count on us to be your trusted partner, committed to achieving excellence and propelling your business toward unparalleled success."`}
                        </p>
                    </div>
                </div>
            </div>

            <div id='blog' className='w-full p-2 py-10'>
                <div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full'>

                    <div className='flex justify-center items-center md:mb-10'>
                        <h1 className="md:max-w-[450px] font-bold md:text-4xl text-2xl text-[#152C4E] text-center">
                            Our Expert team will help you.
                        </h1>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

                        <div className='hover:border-[#75EAE2] border-2 p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='inset-0 h-auto z-0'>
                                <Image width={"1000"} height={"1000"} src={"../../assets/images/home-banner/blog-3.png"} className='w-full' alt='/' />
                            </div>

                            <div className='relative z-10 md:-mt-5 md:w-8 md:ml-24'>
                                <BsPlusCircleFill className='text-3xl' />
                            </div>

                            <div className='relative md:w-[180px] float-right rounded-tl-full border-[1px] border-white md:-mt-12 bg-white'>
                                <h3 className='md:text-sm text-right'>{"Bessie Cooper"}</h3>
                                <p className='my-2 text-xs text-right'>{"Marketing Manager"}</p>
                            </div>
                        </div>

                        <div className='hover:border-[#75EAE2] border-2 p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='m-auto'>
                                <Image width={"1000"} height={"1000"} src={"../../assets/images/home-banner/blog-1.png"} className='w-full' alt='/' />
                            </div>
                            <div className='relative z-10 md:-mt-5 md:w-8 md:ml-24'>
                                <BsPlusCircleFill className='text-3xl' />
                            </div>

                            <div className='relative md:w-[180px] float-right rounded-tl-full border-[1px] border-white md:-mt-12 bg-white'>
                                <h3 className='md:text-sm text-right'>{"Ronald Richards"}</h3>
                                <p className='my-2 text-xs text-right'>{"Marketing Manager"}</p>
                            </div>
                        </div>
                        <div className='hover:border-[#75EAE2] border-2 p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='m-auto'>
                                <Image width={"1000"} height={"1000"} src={"../../assets/images/home-banner/blog-2.png"} className='w-full' alt='/' />
                            </div>
                            <div className='relative z-10 md:-mt-5 md:w-8 md:ml-24'>
                                <BsPlusCircleFill className='text-3xl' />
                            </div>

                            <div className='relative md:w-[180px] float-right rounded-tl-full border-[1px] border-white md:-mt-12 bg-white'>
                                <h3 className='md:text-sm text-right'>{"Theresa Webb"}</h3>
                                <p className='my-2 text-xs text-right'>{"Marketing Manager"}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Contact />
        </>

    )
}
export default page;
