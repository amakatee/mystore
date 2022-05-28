import React,{useRef,useEffect, useContext} from 'react'
import {GrClose} from 'react-icons/gr'
import gsap from 'gsap/dist/gsap'
import { useRouter } from 'next/router'
import CartContext from '../../context/StateContext'

const SideBar = ({setSideBar}) => {
  const router = useRouter()
  const {setSideBar:ss} = useContext(CartContext)
  const sideBarRef = useRef()
  useEffect(() => {
    gsap.fromTo(sideBarRef.current, {x:-200, opacity:1}, {x:0, opacity:1, duration:.8})
    

  })

  const pushToPath = (path) => {
    router.push(path)
    ss(false)



  }
 
  return (
    <div ref={sideBarRef} className='sidemenu ' >
    <GrClose size={27} className="absolute right-3 top-3"  onClick={() => setSideBar(false)} />
   <div className='menu-cont'>
   <div onClick={() => pushToPath('/products')}>Все товары</div>
      <div onClick={() => pushToPath('/shipping')}>Доставка и возврат</div>
      
    </div>

  </div>
  )
}

export default SideBar