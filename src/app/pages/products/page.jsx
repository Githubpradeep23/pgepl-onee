import Contact from '@/components/Contact'
import Image from 'next/image'
import { BsPlusCircleFill } from 'react-icons/bs'
import { FaCheck } from 'react-icons/fa'

const page = () => {

  return (

    <>

      <div id='home' className={`md:h-screen md:bg-product_banner md:w-full h-[250px] bg-cover bg-center bg-no-repeat`} >
        <div className='md:max-w-[1240px] w-full mx-auto md:p-16 p-6 flex justify-start items-center'>
          <div className='md:mt-24 mt-8'>

            <div className='md:ml-10'>
              <div className='mt-2'>
                <h1 className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#152C4E] to-[#75EAE4]'>
                  {"Empowering"}<br />{"Businesses with SAP"}
                </h1>
                <p className='md:max-w-[525px] py-4 text-[#202124] m-auto font-inter font-semibold text-[14px]'>
                  {"Explore our SAP solutions perfectly crafted to boost efficiency, foster innovation, and drive business growth."}
                </p>
              </div>

              <button type="button" className="md:ml-1 rounded-full hover:scale-105 ease-in duration-100 text-white items-start bg-gradient-to-r from-[#152C4E] via-[#75EAE4] to-[#152C4E] focus:ring-4 font-medium mb-2 capitalize px-6 py-2 text-[14px]">{"HIRE US ->"} </button>

            </div>

          </div>

        </div>
      </div>

      <section className="pb-12 lg:pt-[5px] lg:pb-[20px] py-10">
        <div className="container mx-auto max-w-5xl">

          <div className="w-full px-4 flex flex-wrap justify-center items-center">

            <div className="mx-auto mb-2 max-w-[100%] text-center lg:mb-1 mt-1">
              <h2 className="font-semibold text-center md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 ml-8 md:mb-[60px] lg:mb-[20px]">Our SAP Services</h2>
              <p className='max-w-[1000px] text-center py-2 text-gray-600 text-sm md:mt-2'>
                {`Our comprehensive range of SAP services encompasses transformation, integration, and
                efficiency solutions, providing organizations with the tools and expertise needed to drive
                business success and innovation."`}
              </p>
            </div>

          </div>

          <div className="-mx-4 grid md:grid-cols-3 grid-cols-2 px-4">

            <div className="w-full px-4">
              <div className="mb-8 rounded-[20px] bg-white">
                <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                  <Image width={"1000"} height={"1000"} src={"../../assets/images/servicen1.png"} className='object-cover w-32' alt='/' />

                </div>
                <h4 className="text-dark mb-3 text-sm font-semibold">
                  SAP Transformation
                </h4>
                <p className="text-body-color text-xs">
                  {`Strong partnership with SAP to ensure alignment with the needs of the business and access to the latest innovations.`}
                </p>
                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                </div>
              </div>
            </div>

            <div className="w-full px-4">
              <div className="mb-8 rounded-[20px] bg-white">
                <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                  <Image width={"1000"} height={"1000"} src={"../../assets/images/servicen2.png"} className='object-cover w-32' alt='/' />

                </div>
                <h4 className="text-dark mb-3 text-sm font-semibold">
                  SAP UI Apps
                </h4>
                <p className="text-body-color text-xs">
                  {`End-to-end provider for all HR solution-related needs, from reseller to comprehensive service-based models.`}
                </p>
                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                </div>
              </div>
            </div>

            <div className="w-full px-4">
              <div className="mb-8 rounded-[20px] bg-white">
                <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                  <Image width={"1000"} height={"1000"} src={"../../assets/images/servicen3n.png"} className='object-cover w-32' alt='/' />

                </div>
                <h4 className="text-dark mb-3 text-sm font-semibold">SAP On-Premise</h4>
                <p className="text-body-color text-xs">
                  {`Scalable and flexible solutions to accommodate changing business needs.`}
                </p>
                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                </div>
              </div>
            </div>

            <div className="w-full px-4">
              <div className="mb-8 rounded-[20px] bg-white">
                <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                  <Image width={"1000"} height={"1000"} src={"../../assets/images/servicen3.png"} className='object-cover w-32' alt='/' />

                </div>
                <h4 className="text-dark mb-3 text-sm font-semibold">SAP Success Factors</h4>
                <p className="text-body-color text-xs">
                  {`Proven track record of successful SAP implementations across various industries.`}
                </p>
                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                </div>
              </div>
            </div>

            <div className="w-full px-4">
              <div className="mb-8 rounded-[20px] bg-white">
                <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                  <Image width={"1000"} height={"1000"} src={"../../assets/images/servicen5.png"} className='object-cover w-32' alt='/' />

                </div>
                <h4 className="text-dark mb-3 text-sm font-semibold">
                  SAP Cloud Integration
                </h4>
                <p className="text-body-color text-xs">
                  {`Dedicated customer support and partnership approach for long-term success.`}
                </p>
                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                </div>
              </div>
            </div>

            <div className="w-full px-4">
              <div className="mb-8 rounded-[20px] bg-white">
                <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">

                  <Image width={"1000"} height={"1000"} src={"../../assets/images/servicen6.png"} className='object-cover w-32' alt='/' />

                </div>
                <h4 className="text-dark mb-3 text-sm font-semibold">{`SAP S/4 HANA`}</h4>
                <p className="text-body-color text-xs">
                  {`Migrating to SAP's next-generation Enterprise Resource Planning (ERP) suite for real-time
                  data processing and analytics.`}
                </p>
                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <div id='about' className='w-full bg-gradient-to-r from-[#FFFFFF] from-15% via-[#FCFFFE80] via-20% to-[#75EAE440] to-100% text-center py-10' >

        <div className='container mx-auto md:mb-10 flex justify-center md:mt-[60px]'>

          <div className="mx-auto max-w-[100%] text-center">
            <h2 className="font-semibold text-center md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 md:mt-[70px] md:mb-[50px] lg:mb-[10px]">Key Features</h2>
            <p className="text-body-color text-xs">
              {`Strong partnership with SAP`}
            </p>
          </div>

          <div className="grid md:grid-cols-5 grid-cols-1 gap-4 px-8">

            <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
              <div className="p-4">
                <div className='flex justify-center'>
                  <Image src={"../../assets/images/Role-Based Cloud Solution.png"} width='30' height='30' alt='/' />
                </div>
                <p className="text-[14px] p-2 text-center">{"Role-Based Cloud Solution"}</p>
              </div>
            </div>

            <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
              <div className="p-4">
                <div className='flex justify-center'>
                  <Image src={"../../assets/images/Easy Data Migration.png"} width='30' height='30' alt='/' />
                </div>
                <p className="text-[14px] p-2 text-center">{"Easy Data Migration"}</p>
              </div>
            </div>

            <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
              <div className="p-4">
                <div className='flex justify-center'>
                  <Image src={"../../assets/images/Data Extraction.png"} width='30' height='30' alt='/' />
                </div>
                <p className="text-[14px] p-2 text-center">{"Data Extraction"}</p>
              </div>
            </div>

            <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
              <div className="p-4">
                <div className='flex justify-center'>
                  <Image src={"../../assets/images/User Friendly.png"} width='30' height='30' alt='/' />
                </div>
                <p className="text-[14px] p-2 text-center">{"User Friendly"}</p>
              </div>
            </div>

            <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
              <div className="p-4">
                <div className='flex justify-center'>
                  <Image src={"../../assets/images/Easy Installation.png"} width='30' height='30' alt='/' />
                </div>
                <p className="text-[14px] p-2 text-center">{"Easy Installation"}</p>
              </div>
            </div>

            <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
              <div className="p-4">
                <div className='flex justify-center'>
                  <Image src={"../../assets/images/Compliance Assurance.png"} width='30' height='30' alt='/' />
                </div>
                <p className="text-[14px] p-2 text-center">{"Compliance Assurance"}</p>
              </div>
            </div>

            <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
              <div className="p-4">
                <div className='flex justify-center'>
                  <Image src={"../../assets/images/security.png"} width='30' height='30' alt='/' />
                </div>
                <p className="text-[14px] p-2 text-center">{"Security"}</p>
              </div>
            </div>

            <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
              <div className="p-4">
                <div className='flex justify-center'>
                  <Image src={"../../assets/images/Audit.png"} width='30' height='30' alt='/' />
                </div>
                <p className="text-[14px] p-2 text-center">{"Cost"}</p>
              </div>
            </div>

            <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
              <div className="p-4">
                <div className='flex justify-center'>
                  <Image src={"../../assets/images/Time.png"} width='30' height='30' alt='/' />
                </div>
                <p className="text-[14px] p-2 text-center">{"Time"}</p>
              </div>
            </div>

            <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
              <div className="p-4">
                <div className='flex justify-center'>
                  <Image src={"../../assets/images/User Friendly.png"} width='30' height='30' alt='/' />
                </div>
                <p className="text-[14px] p-2 text-center">{"User Friendly"}</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Start Sap Implementation */}
      <div className='container py-12 md:w-full mx-auto ' >

        <div className='m-auto md:max-w-6xl md:grid grid-cols-2'>

          <div className='mb-8 px-12'>

            <h2 className="font-bold md:text-2xl text-2xl text-black text-left py-4">{"Payroll Data Migration"}</h2>

            <p className='md:py-2 py-2 text-gray-600 text-justify md:text-sm'>
              {"Our SAP UI App offers a powerful solution to the complex task of migrating payroll data. It's a cost-efficient choice, optimizing your resource allocation, both in terms of time and workforce."}
            </p>

            <div className="md:p-4 md:ml-4">
              <div className='flex'>
                <span className='mt-3'><FaCheck className='bg-[#75EAE4] text-[#75EAE4] rounded-full md:w-2 md:h-2' /></span>
                <p className="text-[12px] md:text-[16px] p-1 text-justify"><b>{`COST:`}</b> <span className='md:text-sm'>
                  {`It's a mini project by itself that requires a lot of workforce and time and thus makes
                  the activity expensive.`}</span></p>
              </div>
              <div className='flex'>
                <span className='mt-3'><FaCheck className='bg-[#75EAE4] text-[#75EAE4] rounded-full md:w-2 md:h-2' /></span>
                <p className="text-[12px] md:text-[16px] p-1 text-justify"><b>{`TIME:`} </b>
                  <span className='md:text-sm'>
                    {`Building custom programs for the migration activity
                    takes 20 percent of the
                    project timeline, which demands considerable effort.`}</span>
                </p>
              </div>
              <div className='flex'>
                <span className='mt-3'><FaCheck className='bg-[#75EAE4] text-[#75EAE4] rounded-full md:w-2 md:h-2' /></span>
                <p className="text-[12px] md:text-[16px] p-1 text-justify"><b>{`COMPLEXITY:`} </b>
                  <span className='md:text-sm'>
                    {`Ultimately, the end user needs SAP knowledge to use the SAP transactions
                    to import/export the data.`}</span>
                </p>
              </div>

              <div className='flex'>
                <span className='mt-3'><FaCheck className='bg-[#75EAE4] text-[#75EAE4] rounded-full md:w-2 md:h-2' /></span>
                <p className="text-[12px] md:text-[16px] p-1 text-justify"><b>{`SECURITY:`} </b>
                  <span className='md:text-sm'>
                    {`Sending sensitive data between different stakeholders is risky and not secure.`}</span>
                </p>
              </div>

            </div>

          </div>

          <div className="rounded-lg flex justify-center items-center">
            <Image width={"1000"} height={"1000"} src={"../../assets/images/home-banner/product-3.png"} className='md:w-[300px]' alt='/' />
          </div>

        </div>

        <div className='mx-auto md:max-w-6xl md:grid grid-cols-2 md:mt-10'>

          <div className="rounded-lg flex justify-center items-center">
            <Image width={"1000"} height={"1000"} src={"../../assets/images/home-banner/product-4.png"} className='md:w-[300px]' alt='/' />
          </div>

          <div className='mb-8 px-12'>

            <h2 className="font-bold md:text-2xl text-2xl text-black text-left py-4">{"Streamline your Workload"}</h2>

            <p className='md:py-2 py-2 text-gray-600 text-justify md:text-sm'>
              {`Our comprehensive solution is designed to streamline your workload effectively. With our
              services, you can effortlessly tackle payroll data conversion, ensuring a seamless transition.
              Importing legacy payroll results and year-end adjustments becomes a breeze, reducing
              complexity and saving valuable time. We simplify bonus payments and make it hassle-free.
              Exporting payroll master data is made efficient, and uploading benefits deductions is a
              straightforward process. Embrace our services to optimize your workflow and enhance
              productivity.`}
            </p>

          </div>

        </div>

        <div className='m-auto md:max-w-6xl md:grid grid-cols-2 md:mt-10'>

          <div className='mb-8 px-12'>

            <h2 className="font-bold md:text-2xl text-2xl text-black text-left py-4">{"Efficient and Secure Payroll Management"}</h2>

            <p className='md:py-2 py-2 text-gray-600 text-justify md:text-sm'>
              {`Our solution automates data processing, expediting payroll runs and ensuring accuracy while
              staying compliant with regulations. Advanced security safeguards sensitive payroll data,
              saving you time and offering peace of mind.`}
            </p>

            <div className="md:p-4 md:ml-4">
              <div className='flex'>
                <span className='mt-3'><FaCheck className='bg-[#75EAE4] text-[#75EAE4] rounded-full md:w-2 md:h-2' /></span>
                <p className="text-[12px] md:text-[16px] p-1 text-justify"><b>{`Automated Data Processing:`} </b>
                  <span className='md:text-sm'>
                    {`Our solution automates payroll data processing, reducing the chance of errors and saving you valuable time.`}
                  </span>
                </p>
              </div>
              <div className='flex'>
                <span className='mt-3'><FaCheck className='bg-[#75EAE4] text-[#75EAE4] rounded-full md:w-2 md:h-2' /></span>
                <p className="text-[12px] md:text-[16px] p-1 text-justify"><b>{`Accelerated Payroll Runs:`} </b>
                  <span className='md:text-sm'>
                    {`Speed up your payroll runs significantly by faster loading data,
                    allowing you to meet deadlines and ensure your employees receive timely payments.`}
                  </span>
                </p>
              </div>
              <div className='flex'>
                <span className='mt-3'><FaCheck className='bg-[#75EAE4] text-[#75EAE4] rounded-full md:w-2 md:h-2' /></span>
                <p className="text-[12px] md:text-[16px] p-1 text-justify"><b>{`Compliance Assurance:`} </b>
                  <span className='md:text-sm'>
                    {` Stay compliant with the latest payroll regulations effortlessly.
                    Rest assured that your sensitive payroll data is protected with advanced security
                    measures.`}</span>
                </p>
              </div>

            </div>

          </div>

          <div className="rounded-lg flex justify-center items-center">
            <Image width={"1000"} height={"1000"} src={"../../assets/images/home-banner/product-3.png"} className='md:w-[300px]' alt='/' />
          </div>

        </div>

      </div>
      {/* End Sap Implementation */}

      <Contact />
    </>

  )
}
export default page;
