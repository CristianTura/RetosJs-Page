import React from 'react'
import logo from '../../assets/img/logoRetosJs.png'
import Swipers from './Swiper'

const Header = () => {
  return (
    <div className="containerSlider">
      <img src={logo} alt="Logo" />

      <div className="search">
        <input type="text" />
        <button className="search btn">
          <i className="fas fa-search"></i>
        </button>
      </div>
    <Swipers />
      
    </div>
  )
}

export default Header
