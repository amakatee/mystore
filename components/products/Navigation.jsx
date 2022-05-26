import React from 'react'

import { useRouter } from 'next/router'

const Navigation = () => {
  const router = useRouter()

 
  return (
   <div className='pt-[13vh]'>
    <div className='flex items-center justify-around w-[70vw] mx-auto max-w-[25rem] text-gray-400'>
      <div onClick={() => router.push('/products')}><h1 className={router.asPath === '/products' ? 'cursor-pointer navigation-text active-nav' : 'cursor-pointer navigation-text '}>Все</h1></div>
        <div onClick={() => router.push('/products/jewelry')} ><h1 className={router.asPath === '/products/jewelry' ? 'cursor-pointer navigation-text active-nav' : 'cursor-pointer navigation-text '}>Украшения</h1></div>
        <div onClick={() => router.push('/products/clothing')} ><h1 className={router.asPath === '/products/clothing' ? 'cursor-pointer navigation-text active-nav' : 'cursor-pointer navigation-text '}>Одежда</h1></div>
        <div onClick={() => router.push('/products/shoes')} ><h1 className={router.asPath === '/products/shoes' ? 'cursor-pointer navigation-text active-nav' : 'cursor-pointer navigation-text '}>Обувь</h1></div>
    </div>
    </div>    
  )
}

export default Navigation