import React, {  useEffect, useState } from 'react'
import images from '../../assets/data'

const Swipers = () => {
  
  let count = 0
  let src = images[count].img
  
  const [ srcImg, sentSrcImg] = useState(src)

  useEffect(() => {
    setInterval(function(){
      console.log(count)
      if (count >= images.length-1 ){
        count = 0
      } 
      count += 1
      sentSrcImg( images[count].img)
    }, 3000);
  },[])
  
  

  return (
    <div className="swiper-container">
      <img  src={srcImg} alt='reto' />
    </div>
  )
}

export default Swipers
