import Contact from '@/components/Contact'

const page = () => {

    const websitebuilder = [
        { name: "Extremely Easy to Understand", content: "Teachmint's user-friendly website builder simplifies school website creation, eliminating the need for coding knowledge, and providing accessibility to administrators for effortless in-house development." },
        { name: "Easily Customizable", content: "Teachmint's code-free website builder allows easy customization by administrators, eliminating the need for external developers for website modifications." },
        { name: "Cost & Time-Efficient", content: "Teachmint's in-house website maker saves schools time and money by eliminating the need for a web developer. It also offers free hosting on Teachmint's servers, reducing domain costs." },
        { name: "Better Visibility & Reach", content: "In today's digital education landscape, a school website is vital for online visibility, admissions, accessibility, and sustainable financial growth. It's an indispensable asset for modern schools." },
        { name: "Dig Deep into the Teachmint Ecosystem", content: "Teachmint's Integrated School Platform offers a cost-free website creation, seamless admission integration, and comprehensive ERP & LMS tools, streamlining school operations for all stakeholders." },

    ];

    return (

        <>

            <div id='home' className={`md:h-screen md:bg-website_builder md:w-full h-[250px] bg-cover bg-center bg-no-repeat`} >
                <div className='md:max-w-[1240px] w-full mx-auto md:p-16 p-6 flex justify-start items-center'>
                    <div className='md:mt-24 mt-8'>

                        <div className='md:ml-10'>
                            <div className='mt-2'>
                                <h1 className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#152C4E] to-[#75EAE4]'>
                                    {"Website Builder"}<br />{"Software"}
                                </h1>
                                <p className='md:max-w-[625px] py-4 text-[#202124] m-auto font-inter font-semibold text-[14px]'>
                                    {"Create and customize the school’s website with no prior knowledge in programming or coding of any kind with the best website builder in the market today!"}
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
                            <h2 className="font-semibold text-center md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 ml-8 md:mb-[60px] lg:mb-[20px]">Overview</h2>
                            <p className='max-w-[1000px] text-center py-2 text-gray-600 text-sm md:mt-2'>
                                Make school fee management effective, efficient, and easy with Teachmint’s Fee Management Software. Automate and simplify the entire edifice of the fee management process.</p>
                        </div>

                    </div>

                    <div className="-mx-4 grid md:grid-cols-3 grid-cols-2 px-4">

                        <div className="w-full px-4">
                            <div className="mb-8 rounded-[20px] bg-white">
                                <h4 className="text-dark mb-3 text-sm font-semibold">
                                    Create & Manage Webpages Without Coding</h4>
                                <p className="text-body-color text-xs">
                                    Create, customize, and manage webpages without any prior knowledge of coding or computer programming</p>
                                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4">
                            <div className="mb-8 rounded-[20px] bg-white">
                                <h4 className="text-dark mb-3 text-sm font-semibold">
                                    Choose a Template for the Website</h4>
                                <p className="text-body-color text-xs">
                                    Various templates to choose from to personalize & customize the school website</p>
                                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4">
                            <div className="mb-8 rounded-[20px] bg-white">
                                <h4 className="text-dark mb-3 text-sm font-semibold">Grow Your Online Presence</h4>
                                <p className="text-body-color text-xs">
                                    Build & grow your school’s online presence and get a much farther reach</p>
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
                        <h2 className="font-semibold text-center md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 md:mb-[60px] lg:mb-[20px]">Benefits of Fee Management Software</h2>
                        <p className='max-w-[1000px] text-center py-2 text-gray-600 text-sm md:mt-2'>
                            Teachmint is the best fee management software solution out there in the market today and has several features that make it convenient for use among all the different stakeholders of the institution. Some of these are mentioned below -
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-1 gap-2 px-4">

                        {websitebuilder && websitebuilder.map((feeList, index) => (
                            <div key={feeList.name} className=" bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
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