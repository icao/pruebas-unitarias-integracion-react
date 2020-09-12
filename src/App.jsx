import React from 'react'
import './App.scss'

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <p>Aqui estaran nuestros componentes</p>
      </header>
      <footer className='app-footer'>
        <a
          className='link'
          href='https://github.com/icao/pruebas-unitarias-integracion-react'
          target='_blank'
          rel='noopener noreferrer'
        >
          Repositorio de pruebas unitarias e integracion en React.js
        </a>
      </footer>
    </div>
  )
}

export default App
