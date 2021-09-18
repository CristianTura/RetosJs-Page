import React from 'react'
import Swipers from './Swiper'
import './stylesHeader.css'

const Header = ({search, setSearch, setCurrentPage}) => {

  const onSearchChange = ({target}) =>{
    setCurrentPage(0)
    setSearch(target.value.toLowerCase())
  }

  // const inputColor = useRef(null)


  const changeColor = () => {
    const inputColor = document.querySelector('.inputSearch');

    if (window.screen.width < 768 & inputColor.style.background === 'white none repeat scroll 0% 0%'){
      inputColor.style.background = 'transparent'
    } else {
       inputColor.style.background = 'white'
    }}


  return (
    <header className="h-48 sm:h-72 md:h-96 overflow-hidden flex bg-black w-full pt-6" >

      <Swipers />

      {/* <div className="menu flex flex-col bg-black"> */}
      

      <div className="z-20 search absolute m-6 top-48  right-0 md:top-96 sm:top-80">
        <input 
          type="text"
          placeholder="Buscar Reto js" 
          value={search}
          onChange={onSearchChange}
          className="inputSearch p-1 rounded-l-lg focus:outline-none w-28 md:w-40 text-xs h-6 sm:bg-white bg-trasparent"
        />
        <button onClick={changeColor} className="search btn md:bg-white p-1 text-xs rounded-r-lg h-6">
          <i className="fas fa-search "></i>
        </button>
      </div>

      
    </header>
  )
}

export default Header
