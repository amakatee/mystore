import type { NextPage } from 'next'
import Navbar from './../components/Navbar'
import MainPage from './../components/main/mainPage'
import SecondSection from './../components/main/SecondSection'


const Home: NextPage = () => {
  // var mainVideo = function(props){
  //   return (
  //     <div dangerouslySetInnerHTML={{__html:`
  //     <video loop={true} muted={true} autoPlay={true} playsInline controls={false} className="video-main">
  //     <source
  //     src='/backvideo.mp4'
  //     type='video/mp4'
  //     >
  //     </source>
  //   </video>

  //     `}}>

  //     </div>

  //   )
  // }
  return (
    <div className="">
     

      <main className="w-[100vw] min-h-[100vh]">
      <Navbar />
      <MainPage />
      <SecondSection />
       
    
      </main>

      <footer className="">
       Footer
      </footer>
      
    </div>
  )
}

export default Home
