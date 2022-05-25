import React, { useState } from 'react'
import {PortableText} from '@portabletext/react'
import { urlFor } from '../../lib/client'

const SingleDesc = ({product}) => {
    const [bottomDesc1, setBottomDesc1] = useState(false)
    const [bottomDesc2, setBottomDesc2] = useState(false)
    const [colorValue, setColorValue] = useState()
    const [sizeValue, setSizeValue] = useState()
    const {image, price, color,size, details, title, fabric, fabricDesc, measures, measuresDesc} = product
   
  
  



  return (
    <>
    <div  className='single-desc'>
       <div className='desc-header mb-[2rem]'>
            <h2 className='desc-title'>{title}</h2>
            <p className='desc-price'>₽ {price}</p>
        </div>

        <p className='desc-main mb-[2rem]'><PortableText  value={details}/></p>

        <div className='flex flex-col gap-6 color-size'>
            <div className='flex flex-col gap-3 color-cont'>
                <h4 className='color-size-title'> Цвет: <span className=''>{colorValue}</span> </h4>
                <div className='flex gap-2 color-icons'>
                    {color.map(c => (
                        <div onClick={() => setColorValue(color)} className={ colorValue === c ? 'color-icon color-active bg-[#fff0] ' :'color-icon  bg-[#fff0] '}>
                            <img className='rounded-full  w-[20px] h-[20px]  ' src={urlFor(image[0])}></img>
                        </div>

                    ))}
                    
                   
                </div>
            </div>
            <div className='flex flex-col gap-3 size-cont  mb-[2rem]'>
                <h4 className='color-size-title'>Размер: {sizeValue}</h4>
                <div className='flex gap-2' >
                    {size.map(s => (
                        <div onClick={() => setSizeValue(s)} className={sizeValue === s ?  'size-icon size-active w-[20px] h-[25px] ' : 'size-icon w-[20px] h-[25px] '}>{s}</div>
                    ))}
                </div>
            </div>
        </div>


        <div className='desc-buttons mb-[2rem]'>
            <button className='add-to-cart-btn'>В корзину</button>
            <button className='buy-now-btn'>Купить сеейчас</button>
        </div>

        <div className='product-additional mb-[2rem]'>
            <div className='additional'>
                <h2 onClick={() => setBottomDesc1(prev => !prev)}  className='add-title'>Материал и Уход</h2>
              {bottomDesc1 && <p className='add-desc'>{fabricDesc}</p>}  
            </div>
            <div className='additional'>
                <h2  onClick={() => setBottomDesc2(prev => !prev)} className='add-title'>Размерная сетка</h2>
              {bottomDesc2 && <p className='add-desc'>{measuresDesc}</p>}  
            </div>

        </div>
        
    </div>
    </>
  )
}

export default SingleDesc