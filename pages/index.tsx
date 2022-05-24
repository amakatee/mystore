import type { NextPage } from 'next'
import Navbar from './../components/Navbar'
import MainPage from './../components/main/MainPage' 
import SecondSection from './../components/main/SecondSection'
import ThirdSection from './../components/main/ThirdSection'
import FouthSection from './../components/main/FourthSection'
import FourthSection from './../components/main/FourthSection'


const Home: NextPage = () => {

  return (
    <div>
     

      <main className="w-[100vw] min-h-[100vh]">
      <Navbar />
      <MainPage />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
       
    
      </main>

      <footer className="">
       Footer
      </footer>
      
    </div>
  )
}

export default Home
