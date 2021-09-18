import React from 'react'
import images from '../../assets/data'
import Retos from './Retos'
import './stylesMain.css'

const Main = ({currentPage, setCurrentPage, search}) => {

  const filteredChallenges = () => {
    
    //Si no hay nada en el buscador
    if (search.length === 0){
      return images.slice(currentPage,currentPage + 6)
    } 

    //Si hay algo en el buscador
    const filtered = images.filter( challe => challe.name.toLowerCase().includes(search))
    return filtered.slice( currentPage, currentPage+6)

  }

  const filteredNum = images.filter( challe => challe.name.includes(search))
  const nextPage = () =>{
    if (filteredNum.length > currentPage+6){   
      console.log(filteredChallenges().length)
      setCurrentPage( currentPage+5)
    }
  }
  const prevPage = () =>{
    if (currentPage>0){   
      setCurrentPage( currentPage-5)
    }
  }

  return (
    <main className="bg-black p-3 md:p-6 text-center">

      <h2 className="text-xl sm:text-2xl font-bold text-center m-auto border-b-2 mt-6 sm:mt-12 mb-3 sm:mb-6 w-1/2">Retos JS</h2>

      <button 
        onClick={prevPage}
        className="btnPage bg-white sm:text-xs font-bold p-0.5 sm:p-1 rounded mb-6"  
      >Anteriores</button>
      {/* &nbsp;&nbsp; */}
      <button 
        onClick={nextPage} 
        className="btnPage bg-white text-xs font-bold p-0.5 sm:p-1 rounded ml-6"  
       >Siguientes</button>

      <div className="containerChallenges flex flex-wrap justify-around">
        {filteredChallenges().map( (reto, index) => (
          <Retos 
            imgSrc={reto.img}
            urlReto={reto.url}
            name={reto.name}
            key={index}
          />
        ))}
      </div>
    </main>
  )
}

export default Main
