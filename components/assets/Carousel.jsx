import React from 'react'
import {motion} from 'framer-motion'
import {useRef, useState, useEffect} from 'react'

const Carousel = ({images}) => {
    const carousel = useRef()
    const [width, setWidth] = useState(0)
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
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)

    }, [])

  return (
    <motion.div ref={carousel} className='main-carousel'>
        <motion.div  
        className='main-inner-carousel'
        drag='x'
        onDragStart={(event, info) => {
          setAllowScroll(Math.abs(info.delta.y) > Math.abs(info.delta.x))
        }}
        dragDirectionLock
        dragConstraints={{right:0, left: -width}}
        
        >  
         {/* <div className='main-img-cont'>
        <video loop={true} muted={true} autoPlay={true} playsInline controls={false} className="video-main">
          <source
          src='/bracelet.mp4'
          type='video/mp4'
          >
          </source>
        </video>
      </div> */}
      <motion.div className='main-item '>
                  <div  className='main-img-cont'>
                    
                      <video className="video" loop={true} muted={true} autoPlay={true} playsInline controls={false}>
                         <source
                       src='/bracelet.mp4'
                        type='video/mp4'
          >
                        </source>
                     </video>
                  </div>
                  
         </motion.div>
         <motion.div className='main-item '>
                  <div  className='main-img-cont'>
                    
                      <video className="video" loop={true}  muted={true} autoPlay={true} playsInline controls={false}>
                         <source
                       src='/2.mp4'
                        type='video/mp4'
          >
                        </source>
                     </video>
                  </div>
                  
         </motion.div>
         <motion.div className='main-item '>
                  <div  className='main-img-cont'>
                    
                      <video className="video" loop={true}  muted={true} autoPlay={true} playsInline controls={false}>
                         <source
                       src='/4.mp4'
                        type='video/mp4'
          >
                        </source>
                     </video>
                  </div>
                  
         </motion.div>
         <motion.div className='main-item '>
                  <div  className='main-img-cont'>
                    
                      <video className="video" loop={true}  muted={true} autoPlay={true} playsInline controls={false}>
                         <source
                       src='/3.mp4'
                        type='video/mp4'
          >
                        </source>
                     </video>
                  </div>
                  
         </motion.div>
         <motion.div className='main-item '>
                  <div  className='main-img-cont'>
                    
                      <video className="video" loop={true}  muted={true} autoPlay={true} playsInline controls={false}>
                         <source
                       src='/5.mp4'
                        type='video/mp4'
          >
                        </source>
                     </video>
                  </div>
                  
         </motion.div>
       

            {/* {images.map(img => {
               return ( <motion.div className='main-item '>
                  <div key={img} className='main-img-cont'>
                      <img src={img}></img>
                  </div>
                </motion.div>
            )})} */}
        </motion.div>

    </motion.div>
  )
}

export default Carousel