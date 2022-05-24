import React from 'react'
import TitleArrow from '../assets/TitleArrow'

const FourthSection = () => {
  return (
    <div className='min-h-[100vh] '>
      <div className='fourth-padding'>
        <div className='fourh-grid'>
            <div className='fourth-img-cont-1'>
                <img
                 src='https://i.pinimg.com/564x/4b/db/f9/4bdbf9ef4d79b33314beb25345abda32.jpg'
                >
                </img>

            </div>
            <div className='fourth-img-cont-2'>
                <img
                 src='https://i.pinimg.com/564x/46/7b/9b/467b9bfdcb50c614524471a202ecf505.jpg'
                >
                </img>

            </div>
            <div>

            </div>
           
           

        </div>
        <div className='flex items-center gap-5 third-desc ml-[7vw]'>
        <TitleArrow text="Shoes" color="#434343"  />
        </div>
        </div>  
    </div>
  )
}

export default FourthSection