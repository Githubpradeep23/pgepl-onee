import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page = async () => {
    let apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/get/blogs`, { cache: 'no-store' });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const blogsData = await res.json();

  return (
    <>
          <div id='skills' className='w-full lg:h-screen p-2 py-96'>
              <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                  <p className='text-1xl tracking-widest text-center uppercase text-black'>
                      BLOGS
                  </p>
                  <h2 className='py-4 text-center'>Discover Insights, Best Practices, and more</h2>
                  <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>

                      {blogsData && blogsData.data.map((list, index) => (
                          <div key={list.id} className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                              <div className=''>
                                  <div className='m-auto'>
                                      <Image width={"1000"} height={"1000"} src={"../../assets/images/home-banner/digital-serivces.png"} className='w-full' alt='/' />
                                  </div>
                              </div>
                              <div className='flex flex-col items-center justify-center my-4'>
                                  <h3>{list.title}</h3>
                                  <p className='my-2 text-sm'>{list.short_description}</p>
                              </div>
                              <Link href={`blogs/${list.slug}`} className=' text-sm'>Read More...</Link>
                          </div>
                      ))
                      }

                  </div>
              </div>
          </div>

    </>
  )
}
export default page;