import Contact from '@/components/Contact'
import Image from 'next/image'
import Link from 'next/link';
import { TiTick } from 'react-icons/ti'


const page = () => {

  const integratedManagment = [
    { name: "Classroom Management", link: "classroom-management" , content: "Elevate education with our interactive LMS, fostering engaging and immersive learning experiences including students and teachers." },
    { name: "Role Management", link: "role-permission" , content: "Gain real-time insights into student performance with our comprehensive assessment tools, enabling informed decision-making." },
    { name: "Fee Management", link: "fee-management" , content: "Simplify fee collection by customizing fees and managing payments efficiently, streamlining financial processes." },
    { name: "Student Attendance System", link: "attendance-management" , content: "Effortlessly retrieve and manage student data with our seamless information system, enhancing administrative tasks." },
    { name: "Admission Management", link: "admission-management" , content: "Revamp admission procedures with our automated and digitized Admission Management Software, ensuring efficiency." },
    { name: "Exam Planner", link: "school-planner" , content: "Effectively plan and schedule your entire exam series with our user-friendly planning tools, reducing administrative burdens." },
    { name: "Practice Questions", link: "practice-question" , content: "Effortlessly create report cards using our preset templates, ensuring accuracy and efficiency to improve the students growth." },
    { name: "Student Report System", link: "student-report" , content: "Maintain accurate student records and generate reports on-demand with our intuitive tracking system, ensuring data accuracy." },
    { name: "Communication Module", link: "communication-module" , content: "Introduce NEP-compliant, 21st-century skill development through our innovative Teachsmart Courses, enhancing teaching methods." },
    { name: "website Builder", link: "website-builder" , content: "Optimize bus routes, staff management, and bus tracking with our comprehensive Transport Management system, ensuring safety & efficiency." },
    { name: "ID Card Generator", link: "fee-management" , content: "Customize and create ID cards for students and staff with ease, allowing for error correction when needed with the ease." },
    { name: "Private Chat", link: "private-chat" , content: "Stay connected with parents through announcements, polls, and surveys, fostering effective communication between students and teachers." },
  ];
  return (

    <>

      <div id='home' className={`md:h-screen md:bg-integrated_school md:w-full h-[150px] bg-cover bg-center bg-no-repeat`} >
        <div className='md:max-w-[1240px] w-full mx-auto md:p-16 p-6 flex justify-start items-center'>
          <div className='md:mt-24 mt-8'>

            <div className='md:ml-10'>
              <div className='mt-2'>
                <h1 className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#152C4E] to-[#75EAE4]'>
                  {"Integrated School"}<br />{"ERP"}
                </h1>
                <p className='md:max-w-[525px] py-4 text-[#202124] m-auto font-inter font-semibold text-[14px]'>
                  {"Your collaborator for effective performance tracking"}
                </p>
              </div>

              <button type="button" className="md:ml-1 hover:scale-105 ease-in duration-100 text-white items-start bg-[#152C4E] focus:ring-4 font-medium mb-2 capitalize dark:focus:ring-[#152C4E] px-6 py-2 text-[14px]">{"GET STARTED ->"} </button>

            </div>

          </div>

        </div>
      </div>

      <div id='integrated' className='md:p-4 w-full text-center md:my-2' >

      <div className='container mx-auto md:mb-10'>

          <div className="mx-auto mb-12 max-w-[100%] text-center lg:mb-10 mt-2">
            <h2 className="font-bold text-center md:text-[25px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 md:mb-[60px] lg:mb-[20px]">Main Features</h2>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 px-4">

            {integratedManagment && integratedManagment.map((list, index) => (
              <Link key={list.name} href={list.link}>
              <div key={list.name} className="hover:border-[#75EAE2] border-2 bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div className="p-8">
                  <h4 className="text-dark mb-3 text-sm font-semibold text-center">
                    {list.name}
                  </h4>
                  <p className="text-body-color text-xs text-left">
                    {list.content}
                  </p>
                </div>
              </div>
              </Link>
            ))}

          </div>

        </div>
      </div>

      {/* Start Sap Implementation */}
      <div className='container md:w-full mx-auto ' >

        <div className="mx-auto text-center">
          <h2 className="text-[#0adccc] font-bold text-center md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 lg:mb-[20px]">{`"Empower Your School with SLRIS Edumatic:
            Comprehensive Education Management Solutions"`}</h2>
        </div>

        <div className='m-auto md:max-w-6xl md:grid grid-cols-2 md:mt-10'>

          <div className='mb-8 px-12'>

            <h2 className="font-bold md:text-2xl text-2xl text-black text-left py-4">{"Streamline School Management with SLRIS Edumatic"}</h2>

            <p className='md:py-2 py-2 text-gray-600 text-justify md:text-sm'>
              {`Discover SLRIS Edumatic's comprehensive suite of education management solutions,
              designed to enhance school operations and elevate the learning experience. Our Learning
              Management System (LMS) introduces interactivity and engagement to education, while our
              robust Assessment tools provide real-time insights into student performance, empowering
              informed decision-making.`}
            </p>

          </div>

          <div className="rounded-lg flex justify-center items-center">
            <Image width={"1000"} height={"1000"} src={"../../assets/images/home-banner/streamline-school.png"} className='md:w-[300px]' alt='/' />
          </div>

        </div>

        <div className='m-auto md:max-w-6xl md:grid grid-cols-2 md:mt-10'>

          <div className="rounded-lg flex justify-center items-center">
            <Image width={"1000"} height={"1000"} src={"../../assets/images/home-banner/efficiency.png"} className='md:w-[300px]' alt='/' />
          </div>

          <div className='mb-8 px-12'>

            <h2 className="font-bold md:text-2xl text-2xl text-black text-left py-4">{"Efficiency in Administration and Communication"}</h2>

            <p className='md:py-2 py-2 text-gray-600 text-justify md:text-sm'>
              {`Experience seamless administration with our Fee Management system and Student
              Information System, enabling effortless fee collection and student data management.
              Revolutionize your admission processes through automation and digitization with our
              Admission Management Software. Efficiently plan exams from start to finish with our Exam
              Planner. Create accurate report cards with ease using our Report Card Generation feature
              and maintain flawless student records through our Student Tracking System. Foster effective
              parent communication through announcements, polls, and surveys with our Parent
              Communication module.`}
            </p>

          </div>

        </div>

        <div className='m-auto md:max-w-6xl md:grid grid-cols-2 md:mt-10'>

          <div className='mb-8 px-12'>

            <h2 className="font-bold md:text-2xl text-2xl text-black text-left py-4">{"Innovative Teaching and Safety"}</h2>

            <p className='md:py-2 py-2 text-gray-600 text-justify md:text-sm'>
              {`Stay at the forefront of education with our NEP-compliant Teachsmart Courses, introducing
              21st-century skill development into your school's curriculum. Ensure safety and efficiency
              with our Transport Management system, which optimizes bus routes and staff management.
              Easily generate customized ID cards for students and staff using our ID Card Generator. With
              SLRIS Edumatic, you can streamline school management, promote innovative teaching
              methods, and maintain a strong connection with your school community.`}
            </p>

          </div>

          <div className="rounded-lg flex justify-center items-center">
            <Image width={"1000"} height={"1000"} src={"../../assets/images/home-banner/innovative.png"} className='md:w-[300px]' alt='/' />
          </div>

        </div>

      </div>
      
      {/* End Sap Implementation */}

      <div id='blog' className='mx-auto md:max-w-[1000px] md:mt-24'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>

          <p className='text-1xl tracking-widest text-center md:mb-4 uppercase text-black'>
            Plan
          </p>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

            <div className='p-4 rounded-2xl hover:scale-105 ease-in duration-300 flex flex-col hover:border-[#75EAE2] border-2'>
              <div className='md:border-b-[1px] md:w-full'>
                <h3 className='md:text-lg'>Basic</h3>
              </div>

                <div className='m-auto md:p-2 md:my-6 flex-1'>
                  <ul class="list-disc-none">
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Student Information System - SIS`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Teachers and Student app`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Classroom management`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Unlimited two-way live class and recording`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Communication`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Assessments`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Homework`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Study materials`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Teacher-Student chat`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Admin dashboard -Single access`}</span></li>
                  </ul>
                </div>

              <button type="button" className="md:w-full hover:scale-105 ease-in duration-100 text-white items-start bg-[#152C4E] focus:ring-4 font-medium mb-2 capitalize dark:focus:ring-[#152C4E] px-6 py-2 text-[14px]">{"GET STARTED ->"} </button>

            </div>

            <div className='hover:border-[#75EAE2] border-2 flex flex-col p-4 rounded-2xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#FFFFFF] from-15% to-[#75EAE2] to-100%'>
              <div className='md:border-b-[1px] md:w-full'>
                <h3 className='md:text-lg'>Advanced</h3>
              </div>
              
              <div className='m-auto md:p-2 md:my-6 flex-1'>
                <ul class="list-disc-none">
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Fee management`}</span></li>                               
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Customer fee reports`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Expense management`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Admission management`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`ID card`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Website buidler`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Student & Staff attendance tracking`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Certificate generator`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Transport management`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Library management`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Website buidler`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Hostel management`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Inventory management`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Yearly calendar`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Admit card`}</span></li>
                </ul>
              </div>

              <button type="button" className="md:w-full hover:scale-105 ease-in duration-100 text-white items-start bg-[#152C4E] focus:ring-4 font-medium mb-2 capitalize dark:focus:ring-[#152C4E] px-6 py-2 text-[14px]">{"GET STARTED ->"} </button>

            </div>

            <div className='p-4  rounded-2xl hover:scale-105 ease-in duration-300 flex flex-col hover:border-[#75EAE2] border-2 '>
              <div className='md:border-b-[1px] md:w-full'>
                <h3 className='md:text-lg'>Pro</h3>
              </div>
              
              <div className='m-auto md:p-2 md:my-6 flex-1'>
                <ul class="list-disc-none">
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Everything in the advanced plan`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Automated timetable`}</span></li>
                  <li className='md:flex'><TiTick className='md:text-[20px] text-[#75EAE2]' /><span className='md:text-xs'>{`Report card`}</span></li>
                </ul>
              </div>

              <button type="button" className="md:w-full hover:scale-105 ease-in duration-100 text-white items-start bg-[#152C4E] focus:ring-4 font-medium mb-2 capitalize dark:focus:ring-[#152C4E] px-6 py-2 text-[14px]">{"GET STARTED ->"} </button>

            </div>

          </div>


        </div>
      </div>


      <Contact />
    </>

  )
}
export default page;
