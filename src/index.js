import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// ReactDOM.render(ELEMENTO EN JSX/COMPONENTE, REFERENCIA DONDE DESEA RENDERIZAR)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
