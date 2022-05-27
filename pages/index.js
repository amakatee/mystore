import React, {useRef, useEffect} from 'react'
import Navbar from '../components/Navbar'
import MainPage from '../components/main/MainPage' 
import SecondSection from '../components/main/SecondSection'
import ThirdSection from '../components/main/ThirdSection'
import FouthSection from '../components/main/FourthSection'
import FourthSection from '../components/main/FourthSection'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)



const Home = () => {
  const container = useRef(null)
  const mainPage = useRef(null)
  const navbar = useRef(null)
  const secondPage = useRef(null)

  useEffect(() => {
    const tlMain = gsap.timeline({
      ScrollTrigger: {
        trigger: mainPage.current,
        start: "0%",
        end: "100%",
        markers: true,
        scrub:true,
        pin: true,

      }
  })
 
 
 
  })


  return (
    <div>
     

      <div ref={container} className="w-[100vw] min-h-[100vh]">
      <div  ref={navbar} >
      <Navbar />
      </div>  
      <div ref={mainPage} >
      <MainPage />
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

export default Home
