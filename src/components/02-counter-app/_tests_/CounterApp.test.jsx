import React from 'react'
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'

describe('Probando el componente <CounterApp />', () => {
  test('<CounterApp /> debe mostrarse correctamente', () => {
    let wrapper = shallow(<CounterApp />)
    expect(wrapper).toMatchSnapshot()
  })
  test('<CounterApp /> debe recibir el valor 100 pasado a la prop value', () => {
    let valor = 100
    let wrapper = shallow(<CounterApp value={valor} />)
    let counter = wrapper.find('h3').text().trim()

    expect(counter).toBe(`${valor}`)
  })
})
