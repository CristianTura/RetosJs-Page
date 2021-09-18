import React, {  useEffect, useState } from 'react'
import images from '../../assets/data'
import logo from '../../assets/img/logoRetosJs.png'

const Swipers = () => {
  
  let src = images[0].img
  
  const [ srcImg, sentSrcImg] = useState(src)
  
  useEffect(() => {
    let count = 0
    setInterval(function(){
      // console.log(count)
      if (count >= images.length-1 ){
        count = 0
      } 
      count += 1
      sentSrcImg( images[count].img)
    }, 3000);
  },[])
  
  

  return (
    <div className="relative swiper-container  top-0 z-10 h-full m-auto">
      <img src={logo} alt="Logo" className="z-10 w-8 m-auto mt-4 absolute right-8  top-3"/>
      <img  src={srcImg} alt='reto' className="h-full " />
    </div>
  )
}

export default Swipers
