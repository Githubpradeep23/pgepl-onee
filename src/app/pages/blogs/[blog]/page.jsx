import Image from 'next/image';
import React from 'react'
import parse from 'html-react-parser'

const page = async ({ params }) => {
  let apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const id = params.blog;
  const res = await fetch(`${apiUrl}/get/single/blogs/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const blogsData = await res.json();
  const blogsDataSingle = blogsData.data;
  return (
    <>
      <div className='w-full p-2 py-10'>
        <div className='max-w-[1240px] mt-28 w-full mx-auto flex flex-col justify-center h-auto'>

          <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <Image width={"1000"} height={"1000"} src={"../../assets/images/home-banner/digital-serivces.png"} className='w-[100%] md:h-[500px]' alt='/' />
          
            <h2 className='py-4 text-center'>{blogsDataSingle && blogsDataSingle.title}</h2>
          
            <div className='text-justify p-4'>
              {blogsDataSingle && blogsDataSingle.short_description}
            </div>

            <div className='text-justify p-4'>
              {/* {blogsDataSingle.description && parse(blogsDataSingle.description.substring(0, 80))} */}
              {blogsDataSingle.description && parse(blogsDataSingle.description)}
            </div>
          
          </div>

        </div>
      </div>
    </>
  )
}
export default page;