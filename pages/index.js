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
import { useInView } from 'react-intersection-observer';



const Home = ({banner}) => {
  const { ref: myRef, inView, entry } = useInView();
  const container = useRef(null)
  const mainPage = useRef(null)
  const nav = useRef(null)
  const secondPage = useRef(null)
  console.log(entry)

  useEffect(() => {
 
    

      gsap.fromTo(nav.current, {y:'-100%', opacity:0 } , 
      {y:'0%' , opacity: 1, duration:.5, delay: .5, ease: "power3.out"})
  
  
 
    const tlMain = gsap.timeline({
      ScrollTrigger: {
        trigger: mainPage.current,
        start: "10%",
      
        markers: true,
        scrub:true,
       

      }
  })
  tlMain.fromTo(nav.current, {opacity:1}, {opacity: 0})
 
 
 
  })


  return (
    <div>
     

      <div ref={container} className="w-[100vw] min-h-[100vh]">
      <div ref={nav} className='absolute navbar '>
      <Navbar />
      </div>  
      <div className='pages-main'>
      <div  className='relative bg-[#93g]'>  
      <MainPage banner={banner.length && banner[0]} />
      </div>
      <div ref={myRef} className='carousel-section' >
     
       <SecondSection />
      </div>
      <ThirdSection />
      <FourthSection />
      </div>
    
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
