import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value)

  const handleAdd = () => setCounter(counter + 1)
  const handleSubstract = () => setCounter(counter - 1)
  const handleReset = () => setCounter(value)

  return (
    <>
      <h2>Contador</h2>
      <h3>{counter}</h3>
      <button onClick={handleSubstract}>- 1</button>
      <button onClick={handleAdd}>+ 1</button>
      <br />
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

export default CounterApp
