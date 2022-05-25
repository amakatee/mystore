import React from 'react'
import {GrClose} from 'react-icons/gr'

const SideBar = ({setSideBar}) => {
  return (
    <div className='sidemenu ' >
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