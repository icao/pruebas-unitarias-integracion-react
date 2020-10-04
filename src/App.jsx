import React from 'react'
import './App.scss'
import MiPrimerComponenteTest from './components/01-mi-primer-test/MiPrimerComponenteTest'

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <h1 className='title'>
          Pruebas unitarias y de integración en react.js
        </h1>
      </header>
      <main className='app-main'>
        <MiPrimerComponenteTest />
      </main>

      <footer className='app-footer'>
        <span className='app-footer__bg-link'>
          <a
            className='link'
            href='https://github.com/icao/pruebas-unitarias-integracion-react'
            target='_blank'
            rel='noopener noreferrer'
          >
            Repositorio de pruebas unitarias e integracion en React.js
          </a>
        </span>
      </footer>
    </div>
  )
}

export default App
