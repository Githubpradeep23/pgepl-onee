"use client";
import Image from "next/image";
import Link from "next/link";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

export default function about() {
   const visionMission = [
      {
         title: "Our Vision",
         description:
            "At SLRIS, our vision is to be at the forefront of IT innovation, shaping a future where technology enhances every aspect of life and business.",
      },
      {
         title: "Our Mission",
         description:
            "Our mission is to deliver exceptional IT and engineering solutions that empower businesses to reach their full potential, overcome challenges, and embrace digital transformation.",
      },
      {
         title: "Our Impact",
         description:
            "The impact of our work is seen in the success of our clients. From improving efficiency to pioneering new solutions, our dedication to excellence has a positive ripple effect across industries and communities.",
      },
   ];

   const ourBlogs = [
      {
         title: "Custom Software",
         slug: "",
         description:
            "Developing tailored software products to address unique business challenges and enhance efficiency.",
      },
      {
         title: "Expert Staffing",
         slug: "",
         description: `Providing skilled staffing solutions to support project needs and drive organizational success.`,
      },
      {
         title: "SAP Solutions",
         slug: "",
         description: `Leveraging advanced SAP tools for efficient business process management and analytics.`,
      },
      {
         title: "Web Development",
         slug: "",
         description:
            "Crafting innovative web applications for improved user experience and digital interaction.",
      },
      {
         title: "Digital Marketing",
         slug: "",
         description: `Implementing strategic digital marketing campaigns for impactful brand presence and customer engagement`,
      },
      {
         title: "EdTech Solutions",
         slug: "",
         description: ` Offering cutting-edge educational technology solutions to transform learning experiences and educational outcomes.`,
      },
   ];

   return (
      <>
         <div
            id="home"
            className={`md:h-screen md:bg-digital_marketing md:w-full h-[250px] bg-cover bg-center bg-no-repeat`}
         >
            <div className="md:max-w-[1240px] w-full mx-auto md:p-16 p-6 flex justify-start items-center">
               <div className="md:mt-24 mt-8">
                  <div className="md:ml-10">
                     <div className="mt-20">
                        <h1 className="text-5xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#152C4E] to-[#75EAE4]">
                           {"Innovative Solutions,"}
                           <br />
                           {`Infinite Possibilities,`}
                        </h1>

                        <TypeAnimation
                           className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#152C4E] to-[#75EAE4]"
                           // Same String at the start will only be typed once, initially
                           sequence={[
                              "10000",
                              "Your One-Stop Solution for Software, Staffing, and Marketing Excellence",
                              10000, // wait 1s before replacing "Mice" with "Hamsters"
                              "Uncover Our Expertise",
                           ]}
                           wrapper="span"
                           speed={50}
                           cursor={true}
                           // style={{ fontSize: '2em', display: 'inline-block' }}
                           repeat={Infinity}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="">
            <div id="about" className={`h-auto bg-gradient-to-r from-[#dcfffd] from-15% via-[#bafffc] via-20% to-[#cafffc] to-100% md:w-full`} >
               <div className="md:max-w-5xl w-full mx-auto md:p-16 p-6 grid grid-row-2">
                  <div className="">
                     <h1 className="font-semibold text-left text-5xl text-[#152C4E] justify-center">
                        {"Is Your Technology Keeping Pace with Your Business Goals?"}
                     </h1>

                     <p className="max-w-[1000px] text-justify py-2 text-[#152C4E] font-bold text-sm md:mt-4">
                        {`SLRIS is crafted to empower companies with advanced IT solutions, elevating efficiency, and
                           driving growth. We integrate custom software development, expert staffing, and strategic
                           digital marketing, leveraging cutting-edge technology to streamline your business processes.
                           Our solutions are designed to foster collaboration, innovation, and productivity.
                           Our track record showcases significant improvements in operational efficiency and project
                           success rates, as confirmed by our diverse clientele.
                           Explore our comprehensive range of services: Custom Software, Expert Staffing, SAP
                           Solutions, Web Development, Digital Marketing, and EdTech Solutions – all under one roof at
                           SLRIS.`}
                     </p>
                  </div>
               </div>
            </div>

            <div id="about" className={`h-auto md:my-20 bg-gradient-to-r from-[#bafffc] from-15% via-[#cafffc] via-20% to-[#dcfffd] to-100% md:w-full py-8`}>
               <div className="container mx-auto">

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                     {ourBlogs &&
                        ourBlogs.map((list, index) => (
                           <div
                              key={list.id}
                              className="bg-white p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
                           >
                              <div className="m-auto">
                                 <Image
                                    width={"1000"}
                                    height={"1000"}
                                    src={
                                       "../../assets/images/home-banner/digital-serivces.png"
                                    }
                                    className="w-full md:h-36"
                                    alt="/"
                                 />
                              </div>
                              <div className="flex flex-col items-center justify-center my-4">
                                 <h3>{list.title}</h3>
                                 <p className="my-2 text-sm">{list.description}</p>
                              </div>
                              {/* <Link href={`pages/blogs/${list.slug}`} className='flex text-sm'>Read<FaArrowRight className='mt-1 ml-2' /></Link> */}
                           </div>
                        ))}
                  </div>
               </div>
            </div>

            <div id="sap" className="max-w-[1200px] w-full p-2 mx-auto my-10">
               <div className="mx-auto md:max-w-6xl md:grid grid-cols-2 my-10 gap-10">
                  <div className="">
                     <h2 className="font-bold md:text-1xl text-1xl text-black text-left py-4">
                        {"SAP UI Aps"}
                     </h2>
                     <h2 className="font-bold md:text-2xl text-2xl text-black text-left py-4">
                        {"STREAMLINE More Efficiency"}
                     </h2>
                     <p className="mx-auto md:py-2 py-2 text-gray-600 text-justify md:text-sm">
                        {`Elevate your payroll processes with SLRIS's Accelerated Payroll Solution. Integrate
                           effortlessly with SAP SuccessFactors Payroll and unlock new levels of efficiency and
                           accuracy. With our solution, thousands of businesses have transformed their payroll
                           management, experiencing up to 80% faster processing and enhanced compliance. Choose
                           SLRIS for a smoother, more reliable payroll system.
                           `}
                     </p>
                  </div>

                  <div className="aspect-w-16 aspect-h-9">
                     <Image
                        width={"1000"}
                        height={"1000"}
                        src={"../../assets/images/about-illus.png"}
                        className="md:mt-5 w-[500px] h-[300px]"
                        alt="/"
                     />
                  </div>
               </div>
            </div>

            <div id='about' className='w-full bg-gradient-to-r from-[#FFFFFF] from-15% via-[#FCFFFE80] via-20% to-[#75EAE440] to-100% text-center py-10' >

               <div className='container mx-auto md:mb-10'>

                  <div className="mx-auto max-w-[100%] text-center py-10">
                     <h2 className="font-semibold text-center md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3">Comprehensive Solutions in One Place.</h2>
                     <p className="text-body-color text-xs">
                        {`Experience seamless business enhancement with SLRIS's array of services. Streamline your operations with our integrated and smart solutions.`}
                     </p>
                  </div>

                  <div className="grid md:grid-cols-5 grid-cols-1 gap-4 px-8">

                     <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
                        <div className="p-4">
                           <div className='flex justify-center'>
                              <Image src={"../../assets/images/Role-Based Cloud Solution.png"} width='30' height='30' alt='/' />
                           </div>
                           <p className="text-[14px] p-2 text-center">{"Role-Based Cloud Solution"}</p>
                           <p className="text-[10px] p-2 text-left">{"Crafting bespoke applications for business operations."}</p>
                        </div>
                     </div>

                     <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
                        <div className="p-4">
                           <div className='flex justify-center'>
                              <Image src={"../../assets/images/Easy Data Migration.png"} width='30' height='30' alt='/' />
                           </div>
                           <p className="text-[14px] p-2 text-center">{"Easy Data Migration"}</p>
                           <p className="text-[10px] p-2 text-left">{"Crafting bespoke applications for business operations."}</p>
                        </div>
                     </div>

                     <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
                        <div className="p-4">
                           <div className='flex justify-center'>
                              <Image src={"../../assets/images/Data Extraction.png"} width='30' height='30' alt='/' />
                           </div>
                           <p className="text-[14px] p-2 text-center">{"Data Extraction"}</p>
                           <p className="text-[10px] p-2 text-left">{"Crafting bespoke applications for business operations."}</p>
                        </div>
                     </div>

                     <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
                        <div className="p-4">
                           <div className='flex justify-center'>
                              <Image src={"../../assets/images/User Friendly.png"} width='30' height='30' alt='/' />
                           </div>
                           <p className="text-[14px] p-2 text-center">{"User Friendly"}</p>
                           <p className="text-[10px] p-2 text-left">{"Crafting bespoke applications for business operations."}</p>
                        </div>
                     </div>

                     <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
                        <div className="p-4">
                           <div className='flex justify-center'>
                              <Image src={"../../assets/images/Easy Installation.png"} width='30' height='30' alt='/' />
                           </div>
                           <p className="text-[14px] p-2 text-center">{"Easy Installation"}</p>
                           <p className="text-[10px] p-2 text-left">{"Crafting bespoke applications for business operations."}</p>
                        </div>
                     </div>

                     <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
                        <div className="p-4">
                           <div className='flex justify-center'>
                              <Image src={"../../assets/images/Compliance Assurance.png"} width='30' height='30' alt='/' />
                           </div>
                           <p className="text-[14px] p-2 text-center">{"Compliance Assurance"}</p>
                           <p className="text-[10px] p-2 text-left">{"Crafting bespoke applications for business operations."}</p>
                        </div>
                     </div>

                     <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
                        <div className="p-4">
                           <div className='flex justify-center'>
                              <Image src={"../../assets/images/security.png"} width='30' height='30' alt='/' />
                           </div>
                           <p className="text-[14px] p-2 text-center">{"Security"}</p>
                           <p className="text-[10px] p-2 text-left">{"Crafting bespoke applications for business operations."}</p>
                        </div>
                     </div>

                     <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
                        <div className="p-4">
                           <div className='flex justify-center'>
                              <Image src={"../../assets/images/Audit.png"} width='30' height='30' alt='/' />
                           </div>
                           <p className="text-[14px] p-2 text-center">{"Cost"}</p>
                           <p className="text-[10px] p-2 text-left">{"Crafting bespoke applications for business operations."}</p>
                        </div>
                     </div>

                     <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
                        <div className="p-4">
                           <div className='flex justify-center'>
                              <Image src={"../../assets/images/Time.png"} width='30' height='30' alt='/' />
                           </div>
                           <p className="text-[14px] p-2 text-center">{"Time"}</p>
                           <p className="text-[10px] p-2 text-left">{"Crafting bespoke applications for business operations."}</p>
                        </div>
                     </div>

                     <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
                        <div className="p-4">
                           <div className='flex justify-center'>
                              <Image src={"../../assets/images/User Friendly.png"} width='30' height='30' alt='/' />
                           </div>
                           <p className="text-[14px] p-2 text-center">{"User Friendly"}</p>
                           <p className="text-[10px] p-2 text-left">{"Crafting bespoke applications for business operations."}</p>
                        </div>
                     </div>

                  </div>

               </div>
            </div>

            <div id="about" className={`h-auto bg-gradient-to-r from-[#dcfffd] from-15% via-[#cafffc] via-20% to-[#bafffc] to-100% md:w-full mt-16`}>
               <div className=" md:max-w-7xl w-full mx-auto md:p-16 p-6 flex justify-between items-center">
                  <div className="">
                     <h1 className="font-semibold text-left text-3xl text-[#152C4E]">
                        {"SLRIS Advantages"}
                     </h1>
                     <p className="text-[14px] mt-2 text-left">{`Unleash the full potential of your IT infrastructure and foster stronger business connections with SLRIS's innovative and comprehensive solutions.`}</p>
                  </div>
                 
                 <div>
                     <div className="flex justify-between">
                        <div className="flex">
                           <span className="mt-3">
                              <FaCheck className="bg-[#75EAE4] text-[#75EAE4] rounded-full md:w-2 md:h-2" />
                           </span>
                           <p className="text-[10px] md:text-[16px] p-1 text-justify">
                              <b>{`Global Accessibility`} </b>
                           </p>
                        </div>
                        <div className="flex">
                           <span className="mt-3">
                              <FaCheck className="bg-[#75EAE4] text-[#75EAE4] rounded-full md:w-2 md:h-2" />
                           </span>
                           <p className="text-[10px] md:text-[16px] p-1 text-justify">
                              <b>{`24/7 Support`} </b>
                           </p>
                        </div>
                     </div>

                     <div className="flex justify-between">
                        <div className="flex">
                           <span className="mt-3">
                              <FaCheck className="bg-[#75EAE4] text-[#75EAE4] rounded-full md:w-2 md:h-2" />
                           </span>
                           <p className="text-[10px] md:text-[16px] p-1 text-justify">
                              <b>{`Global Accessibility`} </b>
                           </p>
                        </div>
                        <div className="flex">
                           <span className="mt-3">
                              <FaCheck className="bg-[#75EAE4] text-[#75EAE4] rounded-full md:w-2 md:h-2" />
                           </span>
                           <p className="text-[10px] md:text-[16px] p-1 text-justify">
                              <b>{`24/7 Support`} </b>
                           </p>
                        </div>
                     </div>

                     <div className="flex justify-between">
                        <div className="flex">
                           <span className="mt-3">
                              <FaCheck className="bg-[#75EAE4] text-[#75EAE4] rounded-full md:w-2 md:h-2" />
                           </span>
                           <p className="text-[10px] md:text-[16px] p-1 text-justify">
                              <b>{`Global Accessibility`} </b>
                           </p>
                        </div>
                        <div className="flex">
                           <span className="mt-3">
                              <FaCheck className="bg-[#75EAE4] text-[#75EAE4] rounded-full md:w-2 md:h-2" />
                           </span>
                           <p className="text-[10px] md:text-[16px] p-1 text-justify">
                              <b>{`24/7 Support`} </b>
                           </p>
                        </div>
                     </div>

                 </div>
                  
               </div>
            </div>

         </div>
      </>
   );
}
