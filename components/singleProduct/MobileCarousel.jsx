import React, {useState, useRef, useEffect} from 'react'

import {motion} from 'framer-motion'

const MobileCarousel = ({images}) => {
    const [height, setHeight] = useState(0)
    const [slideIndex, setSliteIndex] = useState(0)
    const existingImage = images.find((img, index) => slideIndex === index)
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
       
        <motion.div ref={carousel} className= 'relative mobile-single-img'>
            <motion.div className='mobile-images-slider relati' 
            drag="y"
            dragConstraints={{ bottom: 0 , top: -height}}
            onDragStart={(event, info) => {
            setAllowScroll(Math.abs(info.delta.y) > Math.abs(info.delta.x))}}
            
            >
                {images.map((img) => (
                    <div className='mobile-item-img'>
                        <div className='mobile-single-img-cont'>
                            <img src={img}></img>
                        </div>
                    </div>
                ))}

            </motion.div>
            <div className='dot'>
            {Array.from({length:images.length}).map((item,index) => (
                <div  className={slideIndex === index ? "dot-child active" : "dot-child"} onClick={() => setSliteIndex(index)}></div>

            ))}
        </div>
        </motion.div>
     
    </div>
  )
}

export default MobileCarousel