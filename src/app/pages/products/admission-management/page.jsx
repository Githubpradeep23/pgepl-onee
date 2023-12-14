import Contact from '@/components/Contact'

const page = () => {

  const admissionmanagment = [
    { name: "Fast admission processes", content: "Teachmint significantly accelerates admissions, assisting schools and colleges in eradicating long queues through the implementation of highly efficient admission management software." },
    { name: "Better record management", content: "Escape cumbersome manual data management through online admissions. Securely store extensive data using Teachmint's admission management software." },
    { name: "Inquiry management", content: "Utilizing the online admission system, educational institutions can seamlessly manage admission inquiries, extending their reach to a larger audience of students and parents seeking enrollment." },
    { name: "Aids information flow", content: "Timely and accurate information is vital. With Teachmint, allocate inquiries to counselors or manage them personally for a smoother admissions process." },
    { name: "Reduced paperwork", content: "Avoid using piles of paper in the admission process. Admission management software reduces paperwork and promotes environment-friendly admission processes." },
    { name: "Easy follow-up process", content: "Teachmint simplifies follow-up by enabling one-click follow-up calls with interested candidates. Educational institutions can also seamlessly add admitted students to the student directory." },
    { name: "Tracking the effectiveness of admission processes", content: "Efficiently assess lead effectiveness and gauge admission counselor efforts through student and parent responses. Continuously monitor and track day-to-day admission activities." },
    { name: "Enhanced productivity", content: "Elevate the productivity of admission counselors and administrative staff with Teachmint's admission management system, thereby enhancing the overall productivity across the institute." },
    { name: "One-stop solution", content: "The admission management module offers a comprehensive solution for lead generation, admissions, and inquiries, reducing reliance on traditional processes for schools." },
    { name: "Customized admission forms", content: "Customize admission forms independently with Teachmint, eliminating third-party interference and long waiting times at school counters. Enhance enrollment rates through automated admissions." },
  ];

  return (

    <>

      <div id='home' className={`md:h-screen md:bg-admission_management md:w-full h-[250px] bg-cover bg-center bg-no-repeat`} >
        <div className='md:max-w-[1240px] w-full mx-auto md:p-16 p-6 flex justify-start items-center'>
          <div className='md:mt-24 mt-8'>

            <div className='md:ml-10'>
              <div className='mt-2'>
                <h1 className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#152C4E] to-[#75EAE4]'>
                  {"Admission Management"}<br />{"Software"}
                </h1>
                <p className='md:max-w-[620px] py-4 text-[#202124] m-auto font-inter font-semibold text-[14px]'>
                  {"Make school fee management effective, efficient, and easy with Teachmint’s Fee Management Software. Automate and simplify the entire edifice of the fee management process."}
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

            <div className="mx-auto mb-12 max-w-[100%] text-center lg:mb-10 mt-8">
              <h2 className="font-bold text-center md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 ml-8 md:mb-[60px] lg:mb-[20px]">Student data collection</h2>
              <p className='max-w-[1000px] text-center py-2 text-gray-600 text-sm md:mt-2'>
                Teachmint streamlines student data collection for educational organizations. Admins can automate the process with admission management software, eliminating manual data entry.              </p>
            </div>

          </div>

          <div className="-mx-4 grid md:grid-cols-3 grid-cols-2 px-4">

            <div className="w-full px-4">
              <div className="mb-8 rounded-[20px] bg-white">
                <h4 className="text-dark mb-3 text-sm font-semibold">
                  Document collection                </h4>
                <p className="text-body-color text-xs">
                  Admins can collect relevant documents from students with admission management software. Students can upload their information on the dashboard.                </p>
                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                </div>
              </div>
            </div>

            <div className="w-full px-4">
              <div className="mb-8 rounded-[20px] bg-white">
                <h4 className="text-dark mb-3 text-sm font-semibold">
                  Selection                </h4>
                <p className="text-body-color text-xs">
                  Teachmint enables quick merit list generation for efficient admissions, bringing top performers to educational institutes through automated selection.                </p>
                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                </div>
              </div>
            </div>

            <div className="w-full px-4">
              <div className="mb-8 rounded-[20px] bg-white">
                <h4 className="text-dark mb-3 text-sm font-semibold">Timely Reminders</h4>
                <p className="text-body-color text-xs">
                  Scalable and flexible solutions to accommodate changing business needs.
                </p>
                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <div id='about' className='md:p-4 w-full bg-gradient-to-r from-[#FFFFFF] from-15% via-[#FCFFFE80] via-20% to-[#75EAE440] to-100% text-center py-10' >

        <div className='container mx-auto md:max-w-[1000px] md:mb-10'>

          <div className="mx-auto mb-12 max-w-[100%] text-center lg:mb-10 mt-8">
            <h2 className="font-bold text-center md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 md:mb-[60px] lg:mb-[20px]">Benefits of Admission Management Software</h2>
            <p className='max-w-[1000px] text-center py-2 text-gray-600 text-sm md:mt-2'>
              With a host of features, Teachmint provides various advantages to everyone connected to the education system. Some key benefits of the admission management system are:            </p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-2 px-4">

            {admissionmanagment && admissionmanagment.map((feeList, index) => (
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