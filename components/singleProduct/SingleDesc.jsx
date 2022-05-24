import React from 'react'

const SingleDesc = () => {
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
                <div className='flex gap-1 color-icons'>
                    <div className='color-icon w-[20px] h-[20px] bg-black '></div>
                    <div className='color-icon w-[20px] h-[20px] bg-black '></div>
                </div>
            </div>
            <div className='flex flex-col gap-3 size-cont'>
                <h4 className='color-size-title'>Size: xs</h4>
                <div className='flex gap-1' >
                    <div className='size-icon w-[20px] h-[25px] '>XS</div>
                    <div className='size-icon w-[20px] h-[25px] '>S</div>
                </div>
            </div>
        </div>


        <div>
            <button>Add To Cart</button>
            <button>Buy now</button>
        </div>

        <div className='product-additional'>
            <div>
                <h2>Naterial</h2>
                <p>Polyaster</p>
            </div>

        </div>
        
    </div>
    </>
  )
}

export default SingleDesc