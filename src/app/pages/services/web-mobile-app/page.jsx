import Contact from '@/components/Contact'
import Image from 'next/image'
import { BsPlusCircleFill } from 'react-icons/bs'

const page = () => {

    const services = [
        { name: "Increased Efficiency", imageUrl: "/assets/images/home-banner/increased-eff.png" },
        { name: "Brand Recognition", imageUrl: "/assets/images/home-banner/brand-recognition.png" },
        { name: "Enhanced Productivity", imageUrl: "/assets/images/home-banner/enhanched-product.png" },
        { name: "Customer Engagement", imageUrl: "/assets/images/home-banner/Customer Engagement.png" },
        { name: "Cost Savings", imageUrl: "/assets/images/home-banner/cost-saving.png" },
        { name: "Analytics and Insights", imageUrl: "/assets/images/home-banner/Analytics and Insights.png" },
        { name: "Competitive Advantage", imageUrl: "/assets/images/home-banner/Competitive Advantage.png" },
        { name: "Offline Access", imageUrl: "/assets/images/home-banner/Offline Access.png" },
        { name: "Scalability", imageUrl: "/assets/images/home-banner/Scalability.png" },
        { name: "Integration", imageUrl: "/assets/images/home-banner/Integration.png" },
        { name: "Improved Customer Experience", imageUrl: "/assets/images/home-banner/Improved Customer Experience.png" },
        { name: "Faster Updates", imageUrl: "/assets/images/home-banner/Faster Updates.png" },
        { name: "Real-time Data Access", imageUrl: "/assets/images/home-banner/Real-time Data Access.png" },
        { name: "Custom Features", imageUrl: "/assets/images/home-banner/Custom Features.png" },
        { name: "Data Security", imageUrl: "/assets/images/home-banner/Data Security.png" },
        { name: "Customer Loyalty", imageUrl: "/assets/images/home-banner/Customer Loyalty.png" },
        { name: "Compatibility", imageUrl: "/assets/images/home-banner/Compatibility.png" },
        { name: "Marketing Opportunities", imageUrl: "/assets/images/home-banner/Marketing Opportunities.png" },
        { name: "Revenue Generation", imageUrl: "/assets/images/home-banner/Revenue Generation.png" },
        { name: "Compliance", imageUrl: "/assets/images/home-banner/Compliance.png" },
    ];

    const DigitalServices = [
        { name: "Tailored solutions for your digital vision", imageUrl: "" },
        { name: "Boost retail sales with custom mobile apps.", imageUrl: "" },
        { name: "Optimize manufacturing via ERP for finance and inventory.", imageUrl: "" },
        { name: "CRM automates lead tracking, boosts sales.", imageUrl: "" },
        { name: "E-Commerce: Fueling online startup growth", imageUrl: "" },
        { name: "Secure online sales with listings, cart management.", imageUrl: "" },
        { name: "Remote learning: Online courses, progress tracking.", imageUrl: "" },
        { name: "EHR improves patient care, appointment scheduling.", imageUrl: "" },
        { name: "Enhance teamwork with messaging, video, sharing.", imageUrl: "" },
        { name: "Control smart homes via IoT apps.", imageUrl: "" },
        { name: "Data-driven marketing with analytics tools.", imageUrl: "" },
    ];

    const StreamlinedDevelopment = [
        { name: "Product Ideation", imageUrl: "/assets/images/home-banner/Product Ideation.png" },
        { name: "Product Design", imageUrl: "/assets/images/home-banner/Product Design.png" },
        { name: "Project Management", imageUrl: "/assets/images/home-banner/Project Management.png" },
        { name: "DevOps", imageUrl: "/assets/images/home-banner/DevOps.png" },
        { name: "Quality Assurance (QA)", imageUrl: "/assets/images/home-banner/Quality Assurance (QA).png" },
        { name: "IT Staff Augmentation", imageUrl: "/assets/images/home-banner/IT Staff Augmentation.png" },
    ];

    const cuttingAdege = [
        { name: "Programming Languages", content: "Our expert developers are fluent in a multitude of programming languages Python, JavaScript, Java, C, C# and PHP, tailoring each project to the language best suited for optimal performance and functionality.", imageUrl: "/assets/images/home-banner/programming-languages.png" },
        { name: "Mobile App Development Frameworks", content: "With cutting-edge frameworks like React Native and Flutter, we create cross-platform apps that seamlessly operate on various devices, reducing development time and costs.", imageUrl: "/assets/images/home-banner/mobile-app-development-frameworks.png" },
        { name: "Web Development Technologies", content: "Utilizing HTML5, CSS3, and dynamic JavaScript libraries, we design interactive and visually stunning web applications that captivate users and drive engagement.", imageUrl: "/assets/images/home-banner/web-development-technologies.png" },
        { name: "Database Management Systems", content: "From traditional databases like MySQL to NoSQL solutions like MongoDB, we employ a wide spectrum of database systems, ensuring data is efficiently stored.", imageUrl: "/assets/images/home-banner/database-management.png" },
    ];

    return (

        <>

            <div id='home' className={`md:h-screen md:bg-web_mobile_app md:w-full h-[250px] bg-cover bg-center bg-no-repeat`} >
                <div className='md:max-w-[1240px] w-full mx-auto md:p-16 p-6 flex justify-start items-center'>
                    <div className='md:mt-24 mt-8'>

                        <div className='md:ml-10'>
                            <div className='mt-2'>
                                <h1 className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#152C4E] to-[#75EAE4]'>
                                    {"Web and Mobile app"}<br />{"Development services"}
                                </h1>
                                <p className='md:max-w-[550px] py-4 text-[#202124] m-auto font-inter font-semibold text-[14px]'>
                                    {"Our proficiency in software development and mobile app development empowers businesses to not just survive, but thrive in today's dynamic digital terrain."}
                                </p>
                            </div>

                            <button type="button" className="md:ml-1 hover:scale-105 ease-in duration-100 text-white items-start bg-[#152C4E] focus:ring-4 font-medium mb-2 capitalize dark:focus:ring-[#152C4E] px-6 py-2 text-[14px]">{"SCHEDULE A MEETING ->"} </button>

                        </div>

                    </div>

                </div>
            </div>

            <div id='' className='mx-auto md:p-4 w-full text-center md:my-1 md:py-20 bg-gradient-to-r from-[#FFFFFF] from-15% via-[#FCFFFE80] via-20% to-[#75EAE440] to-100% ' >
                <div className='md:max-w-6xl m-auto md:grid grid-cols-2 gap-8'>

                    <div className=''>
                        <h2 className="font-bold md:text-2xl text-2xl text-[#152C4E] text-left">Unlocking Business Potential Through Development</h2>
                        <p className='py-2 text-gray-600 text-justify text-sm md:mt-2'>
                            Discover how software development and mobile <br /> app development can revolutionize your business <br /> operations and drive growth.
                        </p>

                        <div className="rounded-lg">
                            <Image className='md:w-[300px]' width={"1000"} height={"1000"} src={"../../assets/images/home-banner/mobile-app-1.png"} alt='/' />
                        </div>

                    </div>

                    <div className=' bg-white shadow-md rounded-md hover:scale-105 ease-in duration-300 hover:border-[#75EAE2] border-2'>

                        <div className='mx-auto grid grid-cols-2 py-10'>

                            {services && services.map((list, index) => (
                                <div key={list.name} className='grid grid-cols-2'>
                                    <div className='m-auto text-left'>
                                        <Image src={list.imageUrl} className='w-full' width={"1000"} height={"1000"} alt='/' />
                                    </div>
                                    <div className='text-left md:-ml-12 md:py-2'>
                                        <span className='text-[12px]'>{list.name}</span>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>

            <div id='' className='mx-auto md:p-4 w-full text-center md:my-10' >
                <div className='md:max-w-6xl m-auto md:grid grid-cols-2 gap-8'>

                    <div className='bg-white hover:scale-105 ease-in duration-300'>

                        <div className='grid md:grid-cols-3 grid-cols-1 gap-2 px-1'>

                            {DigitalServices && DigitalServices.map((listTwo, index) => (
                                <div key={listTwo.name} className="md:w-[175px] md:py-1 hover:border-[#75EAE2] border-2 bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                    <div className="p-1">
                                        {listTwo.imageUrl &&
                                            <div className='flex justify-center'>
                                                <Image src={listTwo.imageUrl} className='w-full' width={"1000"} height={"1000"} alt='/' />
                                            </div>
                                        }
                                        <p className="text-[12px] p-2 text-left">{listTwo.name}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className=''>
                        <h2 className="font-bold md:text-2xl text-2xl text-[#152C4E]">Innovative Digital Solutions for You</h2>

                        <div className="rounded-lg flex justify-center mt-20">
                            <Image className='md:w-[300px]' width={"1000"} height={"1000"} src={"../../assets/images/home-banner/services-3.png"} alt='/' />
                        </div>

                    </div>

                </div>
            </div>

            <div id='' className='mx-auto md:p-2 w-full text-center md:my-4 bg-gradient-to-r from-[#FFFFFF] from-5% via-[#FCFFFE80] via-5% to-[#75EAE440] to-100% ' >
                <div className='md:max-w-6xl m-auto md:grid grid-cols-2 gap-8 py-14'>

                    <div className='md:max-w-6xl'>
                        <h2 className="font-bold md:text-2xl text-2xl text-[#152C4E] text-left md:mt-14">Streamlined Development Process</h2>
                        <p className='py-2 text-gray-600 text-sm md:mt-2 text-left'>
                            Discover our end-to-end process for creating Software's and mobile apps, customized to
                            meet your unique requirements.
                        </p>

                    </div>

                    <div className='hover:scale-105 ease-in duration-300'>

                        <div className='grid md:grid-cols-3 grid-cols-1 gap-2 px-1'>

                            {StreamlinedDevelopment && StreamlinedDevelopment.map((listThree, index) => (
                                <div key={listThree.name} className="md:w-[175px] md:py-1 bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
                                    <div className="p-2">
                                        {listThree.imageUrl &&
                                            <div className='flex justify-center'>
                                                <Image src={listThree.imageUrl} className='w-[25px]' width={"1000"} height={"1000"} alt='/' />
                                            </div>
                                        }
                                        <p className="text-[12px] p-2 text-center">{listThree.name}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>

            <div id='' className='md:max-w-6xl mx-auto w-full text-center md:mt-10' >
                <div className='grid md:grid grid-cols-2 gap-8'>

                    <div className='md:max-w-lg'>
                        <h2 className="font-bold md:text-xl text-2xl text-[#152C4E] text-left">{`Leveraging Cutting-Edge Technologies for Software and Mobile App`}
                            <br /> Development</h2>
                        <div className="rounded-lg md:mt-10">
                            <Image className='md:w-[300px]' width={"1000"} height={"1000"} src={"../../assets/images/home-banner/services-4.png"} alt='/' />
                        </div>

                    </div>

                    <div className='md:max-w-8xl bg-white hover:scale-105 ease-in duration-300'>

                        <div className="grid md:grid-cols-2 grid-cols-2 px-4">

                            {cuttingAdege && cuttingAdege.map((listFour, index) => (
                                <div key={listFour.name} className="w-full px-4">
                                    <div className="mb-8 rounded-[20px] bg-white">
                                        <div className="bg-primary flex h-[60px] w-[70px] items-center justify-start rounded-2xl">
                                            {listFour.imageUrl &&
                                                <Image width={"1000"} height={"1000"} src={listFour.imageUrl} className='object-cover w-7' alt='/' />
                                            }
                                        </div>
                                        <h4 className="text-dark mb-2 text-sm text-left font-semibold">
                                            {listFour.name}
                                        </h4>
                                        <p className="text-body-color text-xs text-left">
                                            {listFour.content}
                                        </p>
                                        <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>
            </div>

            <Contact />
        </>

    )
}
export default page;
