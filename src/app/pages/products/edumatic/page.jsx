"use client";
import Contact from '@/components/Contact'
import Link from 'next/link';
import { useState, useEffect } from "react";
const Page = () => {

  const [openTab, setOpenTab] = useState(1);

  const productForInstitude = [
    { name: "Fee Management", link: "fee-management" },
    { name: "Admission Management", link: "admission-management" },
    { name: "Classroom Management", link: "classroom-management" },
    { name: "School Yearly Calendar Planner", link: "integrated-school" },
    { name: "Roles & Permissions", link: "/" },
    { name: "Attendance Management", link: "/" },
    { name: "Exam Planner", link: "/" },
    { name: "Student Performance Report", link: "/" },
    { name: "Practice Questions", link: "/" },
    { name: "Communication Module", link: "/" },
    { name: "Private & Classroom Chat", link: "/" },
    { name: "Website Builder", link: "/" },
  ];

  const productForTeacher = [
    { name: "Live Classes & Class Recordings", link: "/" },
    { name: "Classroom and Private Chat", link: "/" },
    { name: "Share Study Materials", link: "/" },
    { name: "Create Test within Seconds", link: "/" },
    { name: "Homework & Student Engagement", link: "/" },
    { name: "Practice Questions", link: "/" },
  ];

  return (

    <>

      <div id='home' className={`md:h-screen md:bg-edumatic_banner md:w-full h-[250px] bg-cover bg-center bg-no-repeat`} >
        <div className='md:max-w-[1240px] w-full mx-auto md:p-16 p-6 flex justify-start items-center'>
          <div className='md:mt-24 mt-8'>

            <div className='md:ml-10'>
              <div className='mt-2'>
                <h1 className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#152C4E] to-[#75EAE4]'>
                  {"An integrated platform"}<br />{"for modern school"}<br />{"management"}
                </h1>
                <p className='md:max-w-[600px] py-4 text-[#202124] m-auto font-inter font-semibold text-[14px]'>
                  {"Enhance your HR operations with high-quality SAP services provided by Zalaris, your 360° SAP services partner."}
                </p>
              </div>

              <button type="button" className="md:ml-1 rounded-full hover:scale-105 ease-in duration-100 text-white items-start bg-[#152C4E] focus:ring-4 font-medium mb-2 capitalize dark:focus:ring-[#152C4E] px-6 py-2 text-[14px]">{"GET STARTED ->"} </button>

            </div>

          </div>

        </div>
      </div>

      <section className="pt-10 pb-12 lg:pt-[100px] lg:pb-[90px] py-10">
        <div className="container mx-auto max-w-5xl">

          <div className="w-full px-4 flex flex-wrap justify-center items-center">
            <div className="mx-auto max-w-[100%] text-center mt-8">
              <h2 className="font-semibold text-center md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 ml-8 md:mb-[60px] lg:mb-[20px]">Our Edumatic Services</h2>
            </div>
          </div>

          <div className="container mx-auto">
            <div className="md:w-full">
              <ul className={`grid md:grid-cols-2 border-b-[1px] w-full`}>
                <li className=' flex justify-center'>
                  <button type='button'
                    onClick={() => setOpenTab(1)}
                    className={` ${openTab === 1 ? "font-bold text-black border-b-[2px]" : ""} shadow-none capitalize inline-block px-4 py-2 text-gray-600 bg-white`}
                  >
                    For Institutes
                  </button>
                </li>
                <li className=' flex justify-center'>
                  <button type='button'
                    onClick={() => setOpenTab(2)}
                    className={` ${openTab === 2 ? "font-bold text-black border-b-[2px]" : ""} shadow-none capitalize inline-block px-4 py-2 text-gray-600 bg-white`}
                  >
                    For Teachers
                  </button>
                </li>
              </ul>

              <div className="p-3 mt-6 bg-white">

                <div className={openTab === 1 ? "block" : "hidden"}>
                  <div className='gap-2'>
                    <p className='md:mb-6 text-left py-2 text-gray-600 text-sm md:mt-2'>
                     {"Elevate your institute's management to new heights with Edumatic. Our comprehensive platform offers a seamless and streamlined solution for all your administrative needs. From simplifying student enrollment and optimizing timetables to efficiently managing faculty assignments and attendance tracking, Edumatic empowers you to focus on what truly matters: education. Our platform's insightful analytics provide valuable data for informed decision-making, ensuring your institute operates at its best. Experience hassle-free institute management with Edumatic the all-in-one solution designed to enhance productivity and enable growth."}
                    </p>

                    {productForInstitude && productForInstitude.map((proMenu, index) => (
                      <div key={proMenu.name}>

                        <Link className='focus:bg-[#75EAE4]' href={proMenu.link}>
                          <div className="p-2 mb-2 bg-white border focus:bg-[#75EAE4]">
                            {proMenu.name}
                          </div>
                        </Link>

                      </div>
                    ))}

                  </div>
                </div>

                <div className={openTab === 2 ? "block" : "hidden"}>
                  <div className='gap-2'>
                    <p className='max-w-[1000px] md:mb-6 text-left py-2 text-gray-600 text-sm md:mt-2'>
                      {"Elevate your institute's management to new heights with Edumatic. Our comprehensive platform offers a seamless and streamlined solution for all your administrative needs. From simplifying student enrollment and optimizing timetables to efficiently managing faculty assignments and attendance tracking, Edumatic empowers you to focus on what truly matters: education. Our platform's insightful analytics provide valuable data for informed decision-making, ensuring your institute operates at its best. Experience hassle-free institute management with Edumatic the all-in-one solution designed to enhance productivity and enable growth."}
                    </p>
                    
                    {productForTeacher && productForTeacher.map((proTeachMenu, index) => (
                      <div key={proTeachMenu.name}>

                        <Link className='focus:bg-[#75EAE4]' href={proTeachMenu.link}>
                          <div className="p-2 mb-2 bg-white border focus:bg-[#75EAE4]">
                            {proTeachMenu.name}
                          </div>
                        </Link>

                      </div>
                    ))}

                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </section>

      <Contact />
    </>

  )
}
export default Page;