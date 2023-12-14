import About from '@/components/About'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Counter from '@/components/Counter'
import Main from '@/components/Main'
import ServiceComponent from '@/components/ServiceComponent'
import Storyteller from '@/components/Storyteller'

export default async function Home() {
   let apiUrl = process.env.NEXT_PUBLIC_API_URL;

   const res = await fetch(`${apiUrl}/get/blogs`, { cache: 'no-store', method: 'GET' });
   if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
   }
   const blogsData = await res.json();

   return (

      <>
         <Main 
            // bannerBg={"hero_bg_image"}
            bgTitle={"Development,"}
            bgTitle1={"Staffing"}
            bgTitle2={"and Marketing"}
            content={"Transform Your Vision into Reality with Our Expertise and Exceptional Services."}
            type={1}
            className={"md:h-screen md:bg-hero_bg_image md:w-full h-[250px] bg-cover bg-center bg-no-repeat bg-mobile_hero_bg_image"}
            buttonContent={"Schedule a Call Now"}
         />
         <Counter />
         <ServiceComponent />
         <About />
         <Blog blogsList={blogsData} />
         <Storyteller />
         <Contact />
      </>

   )
}
