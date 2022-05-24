import React from 'react'

const TitleArrow = ({text, color}) => {
  return (
      <>
    <h1 className='title-text dark-color mb-[10px]'>{text}</h1>
    <div className='white-arrow w-[50px]'>
      <svg viewBox="0 0 44 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M0 5.5H43V6.5H0V5.5Z"></path>
      <path fill={color} d="M43.9447 5.90506L35.167 0.914272C35.051 0.848274 34.9381 1.00447 35.0394 1.09088L40.6984 5.91727C40.75 5.96124 40.7492 6.04024 40.6968 6.08323L35.0655 10.7047C34.9624 10.7893 35.0727 10.9477 35.19 10.8835L43.9431 6.09454C44.0182 6.05345 44.0191 5.94737 43.9447 5.90506Z"></path>
    </svg>
    </div>
    </>
  )
}

export default TitleArrow