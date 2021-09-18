import React from 'react'

const Retos = ({imgSrc, urlReto, name}) => {

  return (
    <div className="challenge w-96 sm:w-64 md:w-80 lg:w-96 ">
      <a href={urlReto} rel="noreferrer" target="_blank">
        <img src={imgSrc} alt="reto"/>
      </a>
      <p className="text-white mb-6">{name}</p>
    </div>
  )
}

export default Retos
