
"use client";
import Image from 'next/image'
import Link from 'next/link'
import { BsPlusCircleFill } from 'react-icons/bs';
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation'

export default function about() {

   const visionMission = [
      {
         title: "Our Vision", description: "At SLRIS, our vision is to be at the forefront of IT innovation, shaping a future where technology enhances every aspect of life and business."
      },
      {
         title: "Our Mission", description: "Our mission is to deliver exceptional IT and engineering solutions that empower businesses to reach their full potential, overcome challenges, and embrace digital transformation."
      },
      {
         title: "Our Impact", description: "The impact of our work is seen in the success of our clients. From improving efficiency to pioneering new solutions, our dedication to excellence has a positive ripple effect across industries and communities."
      },
   ];

   const portfolioSpectrum = [
      {
         title: "Custom Software", imageUrl: "/assets/images/home-banner/custom-software.png", description: "Developing tailored software products to address unique business challenges and enhance efficiency."
      },
      {
         title: "Expert Staffing", imageUrl: "/assets/images/home-banner/digital-serivces.png", description: `Providing skilled staffing solutions to support project needs and drive organizational success.`
      },
      {
         title: "SAP Solutions", imageUrl: "/assets/images/home-banner/sap.png", description: `Leveraging advanced SAP tools for efficient business process management and analytics.`
      },
      {
         title: "Web Development", imageUrl: "/assets/images/home-banner/web-development.png", description: "Crafting innovative web applications for improved user experience and digital interaction."
      },
      {
         title: "Digital Marketing", imageUrl: "/assets/images/home-banner/home-banner-1.png", description: `Implementing strategic digital marketing campaigns for impactful brand presence and customer engagement`
      },
      {
         title: "EdTech Solutions", imageUrl: "/assets/images/home-banner/edtech.png", description: ` Offering cutting-edge educational technology solutions to transform learning experiences and educational outcomes.`
      },
   ];

   return (

      <>


         <div id='home' className={`md:h-screen md:bg-about_us md:w-full h-[250px] bg-cover bg-center bg-no-repeat`} >
            <div className='md:max-w-[1240px] w-full mx-auto md:p-16 p-6 flex justify-start items-center'>
               <div className='md:mt-24 mt-8'>

                  <div className='md:ml-10'>
                     <div className='mt-20'>
                        <h1 className='font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#152C4E] to-[#75EAE4]'>
                           {"Welcome to SLRIS,"}<br />
                        </h1>

                        <TypeAnimation className="text-3xl sm:text-2xl md:text-3xl font-[Raleway] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#152C4E] to-[#75EAE4]"
                           // Same String at the start will only be typed once, initially
                           sequence={[
                              500, // wait 1s before replacing "Mice" with "Hamsters"
                              'Where Expertise Meets',
                              500,
                              'Innovation',
                           ]}
                           wrapper="span"
                           speed={50}
                           cursor={true}
                           // style={{ fontSize: '2em', display: 'inline-block' }}
                           repeat={Infinity}
                        />



                     </div>
                     <button type="button" className="md:ml-1 rounded-full hover:scale-105 ease-in duration-100 text-white items-start bg-[#152C4E] focus:ring-4 font-medium mb-2 capitalize dark:focus:ring-[#152C4E] px-6 py-2 text-[14px]">{"HIRE US ->"} </button>

                  </div>

               </div>

            </div>
         </div>
         

         <div className=''>

            <div id='about' className={`h-auto `}>
               <div className=' max-w-6xl w-full mx-auto md:p-16 p-6 grid grid-cols-2 md:mt-1'>
                  <div className=''>
                     <h1 className='font-semibold text-left text-5xl text-[#152C4E] justify-center'>
                        {"Our Strength Lies"}<br />{"in Our Team."}
                     </h1>
                     <div className=' float-right !mr-20'>
                        <Image width={"160"} height={"210"} src={"../../assets/images/arrow2.png"} className='object-cover' alt='/' />
                     </div>
                  </div>

                  <div className=''>
                     <p className='max-w-[1000px] text-justify py-2 text-[#152C4E] font-bold text-sm md:mt-20'>
                        {`At SLRIS, we're more than just a company – we're a family of innovative minds and dedicated professionals. Our success in providing top-notch IT and engineering services across diverse industries is fueled by our talented team.`}
                     </p>
                  </div>
               </div>
               <div className='flex justify-center'>
                  <Image width={"1000"} height={"1000"} src={"../../assets/images/strength.png"} className='md:mb-10 w-[500px] h-[300px]' alt='/' />
               </div>
            </div>


            <div id='about' className={`h-auto bg-gradient-to-r from-[#bafffc] from-15% via-[#dcfffd] via-20% to-[#cafffc] to-100% md:w-full my-10`} >

               <div className='container mx-auto md:py-5 '>

                  <div className='flex flex-row justify-center h-full items-center md:py-2'>
                     <h1 className='font-semibold text-left text-4xl text-[#152C4E] justify-center'>
                        {`Our Core Values:`}<br />{` The Foundation of SLRIS`}
                     </h1>
                     <div className=''>
                        <Image width={"90"} height={"115"} src={"../../assets/images/arrow3.png"} className='object-cover' alt='/' />
                     </div>
                  </div>

                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 md:ml-10'>

                     {visionMission && visionMission.map((list, index) => (
                        <div key={index} className='hover:border-[#75EAE2] border-2 relative w-80 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-50 card'>
                           <div className='absolute inset-0 w-full h-full flex justify-center items-center transition-all duration-100 delay-200 z-20 hover:opacity-0 hover:border-[#75EAE2] border-2 bg-white p-4 shadow-xl rounded-xl hover:scale-105 ease-in'>
                              <div className='flex flex-col items-center justify-center my-4'>
                                 <h3 className='font-semibold text-left text-4xl text-[#F05108] justify-center'>{list.title}</h3>
                              </div>
                           </div>
                           <div className='absolute inset-0 w-full h-full flex justify-center items-center transition-all z-10 card-back hover:border-[#75EAE2] border-2 bg-white p-4 shadow-xl rounded-xl hover:scale-105 ease-in'>
                              <div className='flex flex-col items-center justify-center my-4'>
                                 <p className='my-2 text-sm text-black'>{list.description}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

            </div>

            <div id='about' className={`h-auto bg-gradient-to-r from-[#bafffc] from-15% via-[#cafffc] via-20% to-[#dcfffd] to-100% md:w-full py-8`} >
               <div className='container mx-auto'>

                  <div className='max-w-[1240px] flex flex-row justify-center h-full'>
                     <Image width={"1000"} height={"1000"} src={"../../assets/images/arrow4.png"} className='w-60 h-10 mt-8' alt='/' />
                     <div className=' max-w-2xl'>
                        <h1 className="font-bold md:text-4xl text-2xl text-[#152C4E] text-center mt-6 ">
                           {`Our Portfolio Spectrum`}
                        </h1>
                        <p className='text-center py-2 text-[#152C4E] text-md mb-8'>
                           {`Each solution we provide is a reflection of our comprehensive skill set and dedication to innovative excellence.`}
                        </p>
                     </div>
                  </div>

                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 '>
                     {portfolioSpectrum && portfolioSpectrum.map((list, index) => (
                        <div key={index} className='bg-white p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:border-[#75EAE2] border-2'>
                           <div className='m-auto'>
                              <Image width={"1000"} height={"1000"} src={list.imageUrl} className='w-full md:h-36' alt='/' />
                           </div>
                           <div className='flex flex-col items-center justify-center my-4'>
                              <h3>{list.title}</h3>
                              <p className='my-2 text-sm'>{list.description}</p>
                           </div>
                           {/* <Link href={`pages/blogs/${list.slug}`} className='flex text-sm'>Read<FaArrowRight className='mt-1 ml-2' /></Link> */}
                        </div>
                     ))
                     }

                  </div>

               </div>
            </div>

            <div id='blog' className='max-w-[1200px] w-full p-2 py-10 mx-auto my-10 '>
               <div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full'>

                  <div className='items-center md:mb-10'>
                     <h1 className="font-bold md:text-4xl text-2xl text-[#152C4E] text-center">
                        Meet Our Expert
                     </h1>
                     <p className='text-center py-2 text-[#152C4E] text-md'>
                        {`A Diverse Group of Visionaries and Innovators. Driven by Passion, Shaping the Future of Technology`}
                     </p>
                  </div>

                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

                     <div className='hover:border-[#75EAE2] border-2 p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='inset-0 h-auto z-0'>
                           <Image width={"1000"} height={"1000"} src={"../../assets/images/home-banner/blog-3.png"} className='w-full' alt='/' />
                           <h3 className='md:text-sm text-center'>{"Bessie Cooper"}</h3>
                        </div>
                     </div>

                     <div className='hover:border-[#75EAE2] border-2 p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='m-auto'>
                           <Image width={"1000"} height={"1000"} src={"../../assets/images/home-banner/blog-1.png"} className='w-full' alt='/' />
                           <h3 className='md:text-sm text-center'>{"Bessie Cooper"}</h3>
                        </div>
                     </div>

                     <div className='hover:border-[#75EAE2] border-2 p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='m-auto'>
                           <Image width={"1000"} height={"1000"} src={"../../assets/images/home-banner/blog-2.png"} className='w-full' alt='/' />
                           <h3 className='md:text-sm text-center'>{"Bessie Cooper"}</h3>
                        </div>
                     </div>

                  </div>
               </div>
            </div>

            <div id='blog' className='max-w-[1200px] w-full p-2 py-10 mx-auto my-10'>

               <div className='mx-auto md:max-w-6xl md:grid grid-cols-2 my-10 gap-10'>

                  <div className='mt-12'>
                     <h2 className="font-bold md:text-2xl text-2xl text-black text-left py-4">{"SLRIS Team: Where Work Meets Fun."}</h2>
                     <p className='mx-auto md:py-2 py-2 text-gray-600 md:text-sm text-left'>
                        {`Our team deeply values both hard work and good times. This was exemplified in our all-company retreat, a perfect blend of productive sessions, collaborative projects, and fostering stronger connections among colleagues.`}
                     </p>
                  </div>

                  <div className="aspect-w-16 aspect-h-9 hover:border-[#75EAE2] border-2">
                     <iframe className='w-full h-64 rounded-lg' src="https://www.youtube.com/embed/lC76FtLeDy0?si=kvYzCYJuEn9n1kw_" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>

               </div>
            </div>

            <div id='about' className={`h-auto`} >
               <div className='w-full mx-auto md:p-16 p-6'>
                  <div className=''>
                     <h1 className='font-semibold text-center text-4xl text-[#152C4E]'>
                        {"United in Purpose, United as a Team."}<br />
                        {"(You can be a part of it)"}
                     </h1>
                     <div className=' md:ml-60 md:-mt-4'>
                        <Image width={"1000"} height={"1000"} src={"../../assets/images/arrow1.png"} className='w-20 h-28' alt='/' />
                     </div>
                     <p className='md:max-w-2xl mx-auto md:py-2 py-2 text-gray-600 md:text-sm'>
                        {`Experience a work environment that empowers and values you. At SLRIS, we recognize the significant role work plays in our lives, and we are committed to showing our appreciation for your dedication and contributions.`}
                     </p>
                     <div className='flex justify-center'>
                        <Image width={"1000"} height={"1000"} src={"../../assets/images/about-illus.png"} className='md:mt-5 w-[500px] h-[300px]' alt='/' />
                     </div>
                  </div>

               </div>
            </div>

            <div id='about' className={`h-auto  md:w-full mt-4`} >
               <div className='w-full mx-auto md:p-12 p-4'>
                  <div className=''>
                     <h1 className='font-semibold text-center text-4xl text-[#152C4E]'>
                        {"Unveil Your Path to Success with Us"}
                     </h1>
                     <div className='flex justify-center float-right !mr-5'>
                        <Image width={"1000"} height={"1000"} src={"../../assets/images/joinus.png"} className='md:mt-20 w-[120px] h-[210px]' alt='/' />
                     </div>

                     {/* <div className=''>
                        <Image width={"90"} height={"115"} src={"../../assets/images/arrow5.png"} className='object-cover' alt='/' />
                     </div> */}
                  </div>
               </div>
            </div>

            <div className="md:p-4 md:ml-4 mb-1 bg-gradient-to-r from-[#dcfffd] from-15% via-[#cafffc] via-20% to-[#bafffc] to-100%">
               <div className='flex'>
                  <span className='mt-3'><FaCheck className='bg-[#75EAE4] text-[#75EAE4] rounded-full md:w-2 md:h-2' /></span>
                  <p className="text-[12px] md:text-[16px] p-1 text-justify"><b>{`Exceptional Mastery:`} </b>
                     <span className='md:text-sm'>
                        {` Launch your career with a premier IT company, celebrated for its 17 years of groundbreaking success in the industry.`}
                     </span>
                  </p>
               </div>
               <div className='flex'>
                  <span className='mt-3'><FaCheck className='bg-[#75EAE4] text-[#75EAE4] rounded-full md:w-2 md:h-2' /></span>
                  <p className="text-[12px] md:text-[16px] p-1 text-justify"><b>{`Varied Industry Exposure:`} </b>
                     <span className='md:text-sm'>
                        {`Gain experience across multiple sectors, enriching your professional portfolio.`}
                     </span>
                  </p>
               </div>
               <div className='flex'>
                  <span className='mt-3'><FaCheck className='bg-[#75EAE4] text-[#75EAE4] rounded-full md:w-2 md:h-2' /></span>
                  <p className="text-[12px] md:text-[16px] p-1 text-justify"><b>{`Frontline of Innovation:`} </b>
                     <span className='md:text-sm'>
                        {`Participate in creating and enhancing pioneering IT solutions.`}</span>
                  </p>
               </div>

               <div className='flex'>
                  <span className='mt-3'><FaCheck className='bg-[#75EAE4] text-[#75EAE4] rounded-full md:w-2 md:h-2' /></span>
                  <p className="text-[12px] md:text-[16px] p-1 text-justify"><b>{`Personal and Professional Development:`} </b>
                     <span className='md:text-sm'>
                        {`Benefit from an environment focused on continuous growth and skill enhancement.`}</span>
                  </p>
               </div>

               <div className='flex'>
                  <span className='mt-3'><FaCheck className='bg-[#75EAE4] text-[#75EAE4] rounded-full md:w-2 md:h-2' /></span>
                  <p className="text-[12px] md:text-[16px] p-1 text-justify"><b>{`Global Reach and Impact:`} </b>
                     <span className='md:text-sm'>
                        {`Contribute to significant, worldwide projects with our extensive onshore/offshore operations.`}</span>
                  </p>
               </div>

               <div className='flex'>
                  <span className='mt-3'><FaCheck className='bg-[#75EAE4] text-[#75EAE4] rounded-full md:w-2 md:h-2' /></span>
                  <p className="text-[12px] md:text-[16px] p-1 text-justify"><b>{`Talent and Teamwork:`} </b>
                     <span className='md:text-sm'>
                        {`Join a respected team known for its strategic staffing prowess and collaborative spirit.`}</span>
                  </p>
               </div>

               <div className='flex'>
                  <span className='mt-3'><FaCheck className='bg-[#75EAE4] text-[#75EAE4] rounded-full md:w-2 md:h-2' /></span>
                  <p className="text-[12px] md:text-[16px] p-1 text-justify"><b>{`Culture of Achievement:`} </b>
                     <span className='md:text-sm'>
                        {`Be part of a culture that celebrates success and strives for excellence at every level.`}</span>
                  </p>
               </div>

            </div>

         </div>

      </>

   )
}
