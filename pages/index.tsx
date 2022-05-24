import type { NextPage } from 'next'
import Navbar from './../components/Navbar'


const Home: NextPage = () => {
  return (
    <div className="">
      <Navbar />

      <main className="w-[100vw] min-h-[100vh]">
       <div className='relative'>  
        <div className='video-container'>
          <video loop muted autoPlay={true}>
            <source
            src='/backvideo.mp4'
            type='video/mp4'
            >
            </source>
          </video>
        </div>
        <div className='absolute bottom-20 left-10  flex flex-col items-center gap-.5 ' >
          <h1 className='text-white custom-font text-[2rem]'>Shop Now</h1>
         <div className='white-arrow w-[50px]'>
          <svg viewBox="0 0 44 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill='#fff' fill-rule="evenodd" clip-rule="evenodd" d="M0 5.5H43V6.5H0V5.5Z"></path>
          <path fill='#fff' d="M43.9447 5.90506L35.167 0.914272C35.051 0.848274 34.9381 1.00447 35.0394 1.09088L40.6984 5.91727C40.75 5.96124 40.7492 6.04024 40.6968 6.08323L35.0655 10.7047C34.9624 10.7893 35.0727 10.9477 35.19 10.8835L43.9431 6.09454C44.0182 6.05345 44.0191 5.94737 43.9447 5.90506Z"></path>
        </svg>
        </div> 
           
        </div>
        </div>
        <div className='w-[100vw] min-h-[100vh] grid content-center'>
          <div className='braclet-video-cont' >
          <video loop muted autoPlay className='video'>
            <source
            src='/bracelet.mp4'
            type='video/mp4'
            >
            </source>
          </video>
          </div>
          <h1>accessories</h1>
         
        </div>
        
       
      </main>

      <footer className="">
       Footer
      </footer>
    </div>
  )
}

export default Home
