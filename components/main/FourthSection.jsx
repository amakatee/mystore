import React from 'react'
import TitleArrow from '../assets/TitleArrow'

const FourthSection = () => {
  return (
    <div className='min-h-[100vh] '>
      <div className='fourth-padding'>
        <div className='fourh-grid'>
            <div className='fourth-img-cont-1'>
                <img
                 src='https://inej.s3.amazonaws.com/3_03iqiQF.jpg?AWSAccessKeyId=AKIAXKBC4NRLRNTZZA7H&Signature=4yqlo9IfFY%2FL4X1qm2dX9QaptC0%3D&Expires=1653419466'
                >
                </img>

            </div>
            <div className='fourth-img-cont-2'>
                <img
                 src='https://inej.s3.amazonaws.com/3_03iqiQF.jpg?AWSAccessKeyId=AKIAXKBC4NRLRNTZZA7H&Signature=4yqlo9IfFY%2FL4X1qm2dX9QaptC0%3D&Expires=1653419466'
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