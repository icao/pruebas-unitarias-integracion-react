import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './CounterApp.scss'

const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value)

  const handleAdd = () => setCounter(counter + 1)
  const handleSubstract = () => setCounter(counter - 1)
  const handleReset = () => setCounter(value)

  return (
    <div className='container--counter'>
      <h2>Contador</h2>
      <h3>{counter}</h3>
      <span>
        <button onClick={handleSubstract}>- 1</button>
        <button onClick={handleAdd}>+ 1</button>
      </span>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number,
}

export default CounterApp
