import React from 'react'
import './stylesFooter.css'

const Footer = () => {
  return (
    <footer className="flex items-center md:text-xs p-1 md:p-2 justify-center">
      <p className="ml-auto">Página realizada por Cristian Buenaventura - <a href="https://cristiantura.github.io/Portafolio/">Ver Portafolio</a></p>
      <a href="https://github.com/CristianTura" className="ml-auto mr-3 text-sm"><i className="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/cristian-felipe-buenaventura-sarmiento-980621176/" className="float-right mr-3 text-sm"><i className="fab fa-linkedin"></i></a>
    </footer>
  )
}

export default Footer
