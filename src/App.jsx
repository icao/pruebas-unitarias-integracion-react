import React from 'react'
import PropTypes from 'prop-types'
import './App.scss'
import MiPrimerComponenteTest from './components/01-mi-primer-componente-test/MiPrimerComponenteTest'

function App({ title, subtitle }) {
  return (
    <div className='app'>
      <header className='app-header'>
        <h1 className='title'>{title}</h1>
        <h2 className='subtitle'>{subtitle}</h2>
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

App.propTypes = {
  title: PropTypes.string.isRequired,
}

App.defaultProps = {
  subtitle: 'Jest & Enzime',
}

export default App
