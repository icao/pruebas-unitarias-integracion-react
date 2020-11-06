import React from 'react'
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'

describe('Probando el componente <CounterApp />', () => {
  test('<CounterApp /> debe mostrarse correctamente', () => {
    let wrapper = shallow(<CounterApp />)
    // Se espera que el componente obtenido sea ifual al shanshot nas actual
    expect(wrapper).toMatchSnapshot()
  })
  test('<CounterApp /> debe recibir el valor 100 pasado a la prop value', () => {
    let valor = 100
    let wrapper = shallow(<CounterApp value={valor} />)
    // Obtenemos el valor del contador
    let counter = wrapper.find('h3').text().trim() //[1]
    // Se espera que el contador obtenido sea igual al valor pasado en la prop
    expect(counter).toBe(`${valor}`) // [2]
  })

  /**
   * Accediendo a un elemento dentro del componente
   *
   * [1] - Accedemos a el valor string de nuestro elemento rendereado, haciendo uso de los métodos find() y text(),
   * adicionalmente hacemos usos del método trim() que nos eliminara cualquier espacio que pueda existir antes, en medio o despues del valor.
   *
   * [2] - Esperamos que el contador sea igual al valor mandado en la prop value.
   * Como no podemos acceder al valor numerico como tal, esperamos el valor como string, ya que, si bien sabemos,
   * en nuestra pueba estamos simulando el renderizado con enzyme, una vez renderizado accedemos al componente,
   * de tal forma que nuestro contador es un string ya renderizado, por consiguiente hacemos la prueba esperando el valor como un string.
   *
   */

  /**
   * Simulación de eventos
   */
  test('El botón + 1 el contador debe de aumentar', () => {
    let wrapper = shallow(<CounterApp />)
    // Se localiza el boton y se simula un click
    wrapper.find('button').at(1).simulate('click') // [3]
    // Se obtiene el valor que tiene el counter: 11
    let counter = wrapper.find('h3').text().trim()

    // Se espera que el contador obtenido sea igual a 11
    expect(counter).toBe('11')
  })

  /**
   * [3] - Para nosotros simular un evento, primero debemos de localizar al elemento que lanzara dicho evento,
   * por consiguiente harémos uso de dos métodos que disponemos de Enzyme, los cuales son at() y simulate()
   *
   * En nuestro ejemplo en el componente obtenido en wrapper, buscamos el elemento con find() este nos proporciona los
   * botones dentro del componente, para identificar este arreglo de botones, nos basamos de posición por el indice,
   * en este caso el botón de '+1' se localiza con el indice '1', usando el método at(1) accedemos al elemento.
   * Seguidamente hacemos uso del método simulate([evento]), el cual recibe el evento a simular, en nuestro caso es el evento 'click', por consiguiente nuestro parametro es simulate('click')
   * Una vez hecho esto, se habrá incrementado el contador en 1, sabemos que por defaul es 10, y con el evento es ahora 11,
   * por lo que en nuestra prueba esperamos que el valor del contador sea 11
   *
   */
})
