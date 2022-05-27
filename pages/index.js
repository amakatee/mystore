import React, {useRef, useEffect} from 'react'
import Navbar from '../components/Navbar'
import { client } from '../lib/client'
import MainPage from '../components/main/MainPage' 
import SecondSection from '../components/main/SecondSection'
import ThirdSection from '../components/main/ThirdSection'
import FouthSection from '../components/main/FourthSection'
import FourthSection from '../components/main/FourthSection'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)



const Home = ({banner}) => {
  const container = useRef(null)
  const mainPage = useRef(null)
  const navbar = useRef(null)
  const secondPage = useRef(null)

  useEffect(() => {
 
    

      // gsap.fromTo(navbar.current, {y:'-100%', opacity:0 } , 
      // {y:'0%' , opacity: 1, duration:.5, delay: .5, ease: "power3.out"})
  
  
 
  //   const tlMain = gsap.timeline({
  //     ScrollTrigger: {
  //       trigger: mainPage.current,
  //       start: "0%",
  //       end: "100%",
  //       markers: true,
  //       scrub:true,
  //       pin: true,

  //     }
  // })
 
 
 
  })


  return (
    <div>
     

      <div ref={container} className="w-[100vw] min-h-[100vh]">
      <section  ref={navbar} className='bg-[#fff]h-[10vh] w-[100vw]'>
      <Navbar />
      </section>  
      <div ref={mainPage} >
      <MainPage banner={banner.length && banner[0]} />
      </div>
      <div ref={secondPage}>
      <SecondSection />
      </div>
      <ThirdSection />
      <FourthSection />
       
    
      </div>

  
      
    </div>
  )
}
export const getServerSideProps = async () => {
  const query = '*[_type == "banner"]'
  const banner = await client.fetch(query)
 

  return {
    props: {banner}
  }

}


export default Home
