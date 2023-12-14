import Contact from '@/components/Contact'
import Image from 'next/image'
import { BsPlusCircleFill } from 'react-icons/bs'
import { FaCheck } from 'react-icons/fa'

const page = () => {

    const privatechat = [
        { name: "Better Communication", content: "Classroom Chat enhances teacher-student communication, aids shy students, and provides parents with valuable insights into classroom activities." },
        { name: "Time Saving", content: "Classroom Chat streamlines real-time communication, boosting collaboration among students and teachers for efficient discussions and problem-solving." },
        { name: "Timely Communication", content: "Teachmint's Classroom Chat facilitates efficient communication, fostering collaboration and enabling timely task completion in educational settings." },
        { name: "Efficiency in Virtual Learning", content: "Chat for Classroom greatly enhances virtual learning by providing real-time support, tailored communication, and comfortable doubt resolution for students." },

    ];

    return (

        <>

            <div id='home' className={`md:h-screen md:bg-private_chat md:w-full h-[250px] bg-cover bg-center bg-no-repeat`} >
                <div className='md:max-w-[1240px] w-full mx-auto md:p-16 p-6 flex justify-start items-center'>
                    <div className='md:mt-24 mt-8'>

                        <div className='md:ml-10'>
                            <div className='mt-2'>
                                <h1 className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#152C4E] to-[#75EAE4]'>
                                    {"Private Chats For"}<br />{"Classrooms"}
                                </h1>
                                <p className='md:max-w-[625px] py-4 text-[#202124] m-auto font-inter font-semibold text-[14px]'>
                                    {"Establish a personalized connection between teachers and students with Teachmint’s Classroom Chat. Deliver important messages instantly with Teachmint!"}
                                </p>
                            </div>

                            <button type="button" className="md:ml-1 rounded-full hover:scale-105 ease-in duration-100 text-white items-start bg-[#152C4E] focus:ring-4 font-medium mb-2 capitalize dark:focus:ring-[#152C4E] px-6 py-2 text-[14px]">{"GET STARTED ->"} </button>

                        </div>

                    </div>

                </div>
            </div>

            <section className="pb-12 lg:pt-[5px] lg:pb-[20px] py-10">
                <div className="container mx-auto max-w-5xl">

                    <div className="w-full px-4 flex flex-wrap justify-center items-center">

                        <div className="mx-auto mb-12 max-w-[100%] text-center lg:mb-10 mt-1">
                            <h2 className="font-bold text-center md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 ml-8 md:mb-[60px] lg:mb-[20px]">Overview</h2>
                            <p className='max-w-[1000px] text-center py-2 text-gray-600 text-sm md:mt-2'>
                                Make school fee management effective, efficient, and easy with Teachmint’s Fee Management Software. Automate and simplify the entire edifice of the fee management process. </p>
                        </div>

                    </div>

                    <div className="-mx-4 grid md:grid-cols-3 grid-cols-2 px-4">

                        <div className="w-full px-4">
                            <div className="mb-8 rounded-[20px] bg-white">
                                <h4 className="text-dark mb-3 text-sm font-semibold">
                                    Easy Communication</h4>
                                <p className="text-body-color text-xs">
                                    Communicate efficiently within the class with Teachmint. Establish an easy, comfortable, and convenient communication channel</p>
                                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4">
                            <div className="mb-8 rounded-[20px] bg-white">
                                <h4 className="text-dark mb-3 text-sm font-semibold">
                                    Doubt Clearing</h4>
                                <p className="text-body-color text-xs">
                                    Clear students’ doubts in real-time with Teachmint’s Classroom Chat. Share information effortlessly!</p>
                                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4">
                            <div className="mb-8 rounded-[20px] bg-white">
                                <h4 className="text-dark mb-3 text-sm font-semibold">Improved Collaboration</h4>
                                <p className="text-body-color text-xs">
                                    Allow students to connect with each other for a better learning environment & witness improved classroom collaboration!</p>
                                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <div id='about' className='md:p-4 w-full bg-gradient-to-r from-[#FFFFFF] from-15% via-[#FCFFFE80] via-20% to-[#75EAE440] to-100% text-center py-10' >

                <div className='container mx-auto md:max-w-[1000px] md:mb-10 md:mt-2'>

                    <div className="mx-auto mb-12 max-w-[100%] text-center lg:mb-10 mt-8">
                        <h2 className="font-bold text-center md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 md:mb-[60px] lg:mb-[20px]">Benefits of Fee Management Software</h2>
                        <p className='max-w-[1000px] text-center py-2 text-gray-600 text-sm md:mt-2'>
                            Teachmint is the best fee management software solution out there in the market today and has several features that make it convenient for use among all the different stakeholders of the institution. Some of these are mentioned below -
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-1 gap-2 px-4">

                        {privatechat && privatechat.map((feeList, index) => (
                            <div key={feeList.name} className=" bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
                                <div className="p-4">
                                    <h4 className="text-dark mb-3 text-sm font-semibold text-left">
                                        {feeList.name}
                                    </h4>
                                    <p className="text-body-color text-xs text-left">
                                        {feeList.content}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>

            <Contact />
        </>

    )
}
export default page;