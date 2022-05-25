import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute navbar'>
            <div className='nabvar-content'>
                
              
                <div className='flex flex-col justify-between gap-1'>
                    <span className='w-[28px] h-[1.4px] bg-[#fff]'></span>
                    <span className='w-[28px] h-[1.4px] bg-[#fff]'></span>
            
                </div>
                <h1 id='logo' className='custom-font'>И́ней</h1>
                
                <div className='flex items-center gap-.6'>
                <svg id="bag" class="icon-bag" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><polygon points="18.78 20.82 5.22 20.82 5.22 9.39 18.78 9.39 18.78 20.82" fill="none" stroke="currentColor" stroke-miterlimit="10"></polygon><path d="M8.79,11.35V6.89a3.21,3.21,0,0,1,6.42,0v4.46" fill="none" stroke="currentColor" stroke-miterlimit="10" vector-effect="non-scaling-stroke"></path></svg>
                <span className='text-xs'>(0)</span>
                </div>
             
             </div>
      
    </div>
  )
}

export default Navbar