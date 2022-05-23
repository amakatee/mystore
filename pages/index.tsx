import type { NextPage } from 'next'
import Navbar from './../components/Navbar'


const Home: NextPage = () => {
  return (
    <div className="">
      <Navbar />

      <main className="w-[100vw] min-h-[100vh]">
        <div className='video-container'>
          <video loop muted autoPlay>
            <source
            src='/backvideo.mp4'
            type='video/mp4'
            >
            </source>
          </video>
        </div>
        <div className='w-[100vw] min-h-[100vh]'></div>
       
      </main>

      <footer className="">
       Footer
      </footer>
    </div>
  )
}

export default Home
