import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// ReactDOM.render(ELEMENTO EN JSX/COMPONENTE, REFERENCIA DONDE DESEA RENDERIZAR)

ReactDOM.render(
  <React.StrictMode>
    <App title='Pruebas unitarias y de integración - React' />
  </React.StrictMode>,
  document.getElementById('root')
)
