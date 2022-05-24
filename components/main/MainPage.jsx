import React from 'react'

const mainPage = () => {
  return (
    <div className='relative'>  
      <div className='image-main-container'>
        <img src='https://images.pexels.com/photos/2009972/pexels-photo-2009972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
      </div>
        <div className='video-container'>
          <video loop={true} muted={true} autoPlay={true} playsInline controls={false} className="video-main">
            <source
            src='/backvideo.mp4'
            type='video/mp4'
            >
            </source>
          </video>
        </div>
        <div className='absolute bottom-[120px] left-[45px]  flex flex-col items-center gap-.5 ' >
          <h1 className='text-white custom-font title-text'>СМОТРЕТЬ</h1>
         <div className='white-arrow w-[50px]'>
          <svg viewBox="0 0 44 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill='#fff' fillRule="evenodd" clipRule="evenodd" d="M0 5.5H43V6.5H0V5.5Z"></path>
          <path fill='#fff' d="M43.9447 5.90506L35.167 0.914272C35.051 0.848274 34.9381 1.00447 35.0394 1.09088L40.6984 5.91727C40.75 5.96124 40.7492 6.04024 40.6968 6.08323L35.0655 10.7047C34.9624 10.7893 35.0727 10.9477 35.19 10.8835L43.9431 6.09454C44.0182 6.05345 44.0191 5.94737 43.9447 5.90506Z"></path>
        </svg>
        </div> 
           
        </div>
        </div>
  )
}

export default mainPage