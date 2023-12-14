import React from 'react';
import Image from 'next/image';
import Main from '@/components/Main';
import SericeMan2 from '/public/assets/images/services-man2.png';

const page = async () => {
  let apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/get/services`, { cache: 'no-store' });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const servicesData = await res.json();

  return (
    <>

      <Main
        //  bannerBg={"servicesBgBannerImg"}
        bgTitle={"Elevate,"}
        bgTitle1={"Your Pitch to"}
        bgTitle2={"The Next Level!"}
        content={"Professionally crafted pitch decks for Seed"}
        type={2}
        className={"md:h-screen md:bg-servicesBgBannerImg bg-servicesBgBannerImg"}
        buttonContent={"Schedule a Meeting"}
      />

      <div id='services' className='mx-auto py-10 w-full bg-no-repeat bg-cover text-center bg-servicesBgImg' >
        <div className='m-auto md:grid grid-cols-4 gap-4'>

          <div className='mx-auto md:mt-10 mb-8 md:w-[400px] col-span-2 px-6'>
            <h2 className="font-bold md:text-4xl text-3xl text-black text-left py-4">Narrative Development</h2>
            <p className='md:py-6 py-2 text-gray-600 text-justify'>
              We specialize in facilitating startups and businesses to craft compelling narratives for their pitch decks,
              sales presentations, and corporate profiles that resonates and leaves a lasting impression.
            </p>
          </div>

          <div className='mx-auto md:col-span-2 md:mr-32'>

            <div className='w-full md:w-[600px] bg-white shadow-md rounded-md hover:scale-105 ease-in duration-300 p-10 md:mt-12'>
              <div className='mx-auto grid grid-cols-2 gap-4 md:pr-14'>

                {servicesData && servicesData.data.map((list, index) => (
                  <div key={list.id} className='flex flex-row items-center justify-between'>
                    <div className='m-auto text-left'>
                      <Image src={list.image} width='30' height='30' alt='/' />
                    </div>
                    <div className='text-left'>
                      <span className='text-[14px]'>{list.title}</span>
                    </div>
                  </div>
                ))
                }

              </div>
            </div>

            <div className='w-full md:w-[600px] h-screen bg-white shadow-md rounded-md hover:scale-105 ease-in duration-300 p-10 md:mt-12'>
              <h2 className="font-bold md:text-4xl text-3xl text-black text-center mb-8">Secondary Research</h2>
              <div className='mx-auto grid grid-cols-2 gap-4 md:pr-14'>
                {servicesData && servicesData.data.map((list, index) => (
                  <div key={list.id} className='flex flex-row items-center justify-between'>
                    <div className='m-auto text-left'>
                      <Image src={list.image} width='30' height='30' alt='/' />
                    </div>
                    <div className='text-left'>
                      <span className='text-[14px]'>{list.title}</span>
                    </div>
                  </div>
                ))
                }
              </div>
            </div>

          </div>

        </div>
      </div>

      <div id='services' className='py-20 w-full  md:bg-no-repeat bg-cover text-center bg-servicesSecondSectionImg' >
        <div className='m-auto md:grid grid-cols-3 gap-2 md:px-16 md:py-20'>

          <div className='mx-auto md:mt-8 mb-8 px-6'>
            <h2 className="font-bold md:text-4xl text-3xl text-black text-left py-4">Financial Model</h2>
            <p className='md:py-2 py-2 text-gray-600 text-justify'>
              We specialize in providing simple yet accurate financial modeling tools for startups through our tested framework
            </p>

            <Image src={SericeMan2} alt='/' />

          </div>

          <div className='mx-auto md:col-span-2 md:mr-6'>

            <div className="container mx-auto gap-4">
              <div className="grid md:grid-cols-4 grid-cols-2 gap-2 px-2">

                {servicesData && servicesData.data.map((list, index) => (
                  <div key={list.id} className="w-full c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                    <div className="p-4">
                      <div className='flex justify-center'>
                        <Image src={list.image} width='30' height='30' alt='/' />
                      </div>
                      <p className="text-[12px] p-2 text-justify">{list.title}</p>
                    </div>
                  </div>
                ))
                }

              </div>
            </div>

          </div>

        </div>
      </div>

      <div id='services' className='py-20 w-full bg-no-repeat bg-cover text-center bg-mobileTeaserImg' >
        <div className='m-auto md:grid grid-cols-3 gap-4 md:px-16'>

          <div className='mx-auto md:mt-10 mb-8 px-6'>
            <h2 className="font-bold md:text-4xl text-3xl text-black text-left py-4">Mobile / Teaser / Elevator Pitch</h2>
            <p className='md:py-2 py-2 text-gray-600 text-justify'>
              A short document answering briefly the most important questions:
            </p>
          </div>

          <div className='mx-auto md:col-span-2 md:mr-6'>

            <div className="container mx-auto">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-2 px-4">

                {servicesData && servicesData.data.map((list, index) => (
                  <div key={list.id} className="md:w-[90%] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                    <div className="p-4">
                      <div className='flex justify-center'>
                        <Image src={list.image} width='30' height='30' alt='/' />
                      </div>
                      <p className="text-[12px] p-2 text-justify">{list.title}</p>
                    </div>
                  </div>
                ))
                }

              </div>
            </div>

          </div>

        </div>
      </div>

    </>
  )
}
export default page;
