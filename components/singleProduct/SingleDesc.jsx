import React, { useState } from 'react'

const SingleDesc = () => {
    const [bottomDesc1, setBottomDesc1] = useState(false)
    const [bottomDesc2, setBottomDesc2] = useState(false)
  return (
    <>
    <div className='single-desc'>
       <div className='desc-header mb-[2rem]'>
            <h2 className='desc-title'>богатый опыт</h2>
            <p className='desc-price'>₽ 2000</p>
        </div>

        <p className='desc-main mb-[2rem]'>Разнообразный и богатый опыт постоянное информационно-техническое обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации модели развития! Задача организации</p>

        <div className='flex flex-col gap-6 color-size'>
            <div className='flex flex-col gap-3 color-cont'>
                <h4 className='color-size-title'> Color: <span className=''>black</span> </h4>
                <div className='flex gap-2 color-icons'>
                    <div className='color-icon color-active w-[20px] h-[20px] bg-black '></div>
                    <div className='color-icon w-[20px] h-[20px] bg-black '></div>
                </div>
            </div>
            <div className='flex flex-col gap-3 size-cont  mb-[2rem]'>
                <h4 className='color-size-title'>Size: xs</h4>
                <div className='flex gap-2' >
                    <div className='size-icon size-active w-[20px] h-[25px] '>XS</div>
                    <div className='size-icon w-[20px] h-[25px] '>S</div>
                </div>
            </div>
        </div>


        <div className='desc-buttons mb-[2rem]'>
            <button className='add-to-cart-btn'>Add To Cart</button>
            <button className='buy-now-btn'>Buy now</button>
        </div>

        <div className='product-additional mb-[2rem]'>
            <div className='additional'>
                <h2 onClick={() => setBottomDesc1(prev => !prev)}  className='add-title'>Naterial</h2>
              {bottomDesc1 && <p className='add-desc'>Polyaster</p>}  
            </div>
            <div className='additional'>
                <h2  onClick={() => setBottomDesc2(prev => !prev)} className='add-title'>Naterial</h2>
              {bottomDesc2 && <p className='add-desc'>Polyaster</p>}  
            </div>

        </div>
        
    </div>
    </>
  )
}

export default SingleDesc