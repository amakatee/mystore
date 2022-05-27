import React,{useRef,useEffect} from 'react'
import {GrClose} from 'react-icons/gr'
import gsap from 'gsap/dist/gsap'

const SideBar = ({setSideBar}) => {
  
  const sideBarRef = useRef()
  useEffect(() => {
    gsap.fromTo(sideBarRef.current, {x:-200, opacity:1}, {x:0, opacity:1, duration:.8})
    

  })
 
  return (
    <div ref={sideBarRef} className='sidemenu ' >
    <GrClose size={27} className="absolute right-3 top-3"  onClick={() => setSideBar(false)} />
    <div className='menu-cont'>
      <div>Все товары</div>
      <div>Украшения</div>
      <div>Одежда</div>
      <div>Обувь</div>
    </div>

  </div>
  )
}

export default SideBar