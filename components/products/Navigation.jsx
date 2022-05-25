import React from 'react'

const Navigation = () => {
  return (
   <div className='pt-[13vh]'>
    <div className='flex items-center justify-around w-[70vw] mx-auto max-w-[25rem] text-gray-400'>
        <div><h1 className='cursor-pointer navigation-text'>Все</h1></div>
        <div><h1 className='cursor-pointer navigation-text'>Украшения</h1></div>
        <div><h1 className='cursor-pointer navigation-text'>Одежда</h1></div>
        <div><h1 className='cursor-pointer navigation-text'>Обувь</h1></div>
    </div>
    </div>    
  )
}

export default Navigation