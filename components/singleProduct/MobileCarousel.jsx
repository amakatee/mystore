import React, {useState, useRef, useEffect} from 'react'

import {motion} from 'framer-motion'

const MobileCarousel = ({images}) => {
    const [height, setHeight] = useState(0)
    const carousel = useRef()
    const [allowScroll, setAllowScroll] = useState(false)
    useEffect(() => {
      if (allowScroll) {
        const handleTouch = event => {
          event.stopPropagation()
        }
        document.documentElement.addEventListener('touchmove', handleTouch)
        return () => {
          document.documentElement.removeEventListener('touchmove', handleTouch)
        }
      }
    }, [allowScroll])
    useEffect(() => {
        setHeight(carousel.current.scrollHeight - carousel.current.offsetHeight)

    },[])
    
  return (
    <div >
       
        <motion.div ref={carousel} className='mobile-single-img'>
            <motion.div className='mobile-images-slider' 
            drag="y"
            dragConstraints={{ bottom: 0 , top: -height}}
            onDragStart={(event, info) => {
            setAllowScroll(Math.abs(info.delta.y) > Math.abs(info.delta.x))}}
            >
                {images.map(img => (
                    <div className='mobile-item-img'>
                        <div className='mobile-single-img-cont'>
                            <img src={img}></img>
                        </div>
                    </div>
                ))}

            </motion.div>
        </motion.div>
        {/* <div className='absolute t-[10vh] l-30 w-[10rem] h-[20rem] bg-[#fff]'>
            {Array.from({length:5}).map((item,index) => {
                <div  className=' absolute dot-carousel w-[50px] h-[50px] bg-[#fff]'>dsedkjwlejflwg</div>

            })}
        </div> */}
    </div>
  )
}

export default MobileCarousel