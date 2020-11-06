import React from 'react'
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'

describe('Probando el componente <CounterApp />', () => {
  // let wrapper // Debería ser asi, pero en VSCODE declaramos de la sig forma para tener al intelisense activo despues
  let wrapper = shallow(<CounterApp />) // Declaración global con scope en todo el describe

  beforeEach(() => {
    // Ejecutar antes de cada test
    wrapper = shallow(<CounterApp />)
    console.log('beforeEach -> shallow(<CounterApp />)')
  })
  test('<CounterApp /> debe mostrarse correctamente', () => {
    // Se espera que el componente obtenido sea igual al snapshot mas actual
    expect(wrapper).toMatchSnapshot()
  })
  test('<CounterApp /> debe recibir el valor 100 pasado a la prop value', () => {
    let valor = 100
    let wrapper = shallow(<CounterApp value={valor} />)
    // Obtenemos el valor del contador
    let counter = wrapper.find('h3').text().trim()
    // Se espera que el contador obtenido sea igual al valor pasado en la prop
    expect(counter).toBe(`${valor}`)
  })

  test('El botón + 1 debe de aumentar en 1 el contador', () => {
    // Se localiza el boton y se simula un click
    wrapper.find('button').at(1).simulate('click')
    // Se obtiene el valor que tiene el counter: 11
    let counter = wrapper.find('h3').text().trim()

    // Se espera que el contador obtenido sea igual a 11
    expect(counter).toBe('11')
  })

  test('El botón - 1 debe de drementar en 1 el contador', () => {
    wrapper.find('button').at(0).simulate('click') // Decrementa a 9
    let counter = wrapper.find('h3').text().trim() // 9

    expect(counter).toBe('9')

    /**
     * NOTA: Si nosotros usamos la definicion de wrapper de manera global, conforme de vayan ejecutando las pruebas, se va modificando, es por eso que podemos declarar dentro del test el wrapper, para volver a inicializarlo o en el mejor caso, hacer uso de una función de Jest que es como el ciclo de vida,} llamado beforeEach()
     *
     * beforeEach([funcion_anónima]) se ejecuta antes de cada prueba
     * Ver más en: https://jestjs.io/docs/en/api#methods
     *
     */
  })

  test('El botón reset debe de colocar el valor por defento en el contador', () => {
    let valor = 105
    let wrapper = shallow(<CounterApp value={valor} />)

    wrapper.find('button').at(1).simulate('click') // Incrementa a 106
    wrapper.find('button').at(1).simulate('click') // Incrementa a 107
    wrapper.find('button').at(2).simulate('click') // Asigna el valor a 105
    // Extraemos el valor actual del contador despues de simular los eventos
    let counter = wrapper.find('h3').text().trim() // 105
    // Se espera que el contador actual renderizado sea igual al valor reseteado, 105
    expect(counter).toBe(`${valor}`)
  })
})
