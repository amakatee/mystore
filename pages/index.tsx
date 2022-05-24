import type { NextPage } from 'next'
import Navbar from './../components/Navbar'
import MainPage from './../components/main/MainPage' 
import SecondSection from './../components/main/SecondSection'


const Home: NextPage = () => {

  return (
    <div>
     

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
