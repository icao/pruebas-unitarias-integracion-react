import { shallow } from 'enzyme'
import React from 'react'
import ShowImage from '../ShowImage'

describe('Probando el componente <ShowImage />', () => {
  const url = 'https://media.giphy.com/media/d8j1B7L3sLmO6rdFAA/giphy.gif'
  const titulo = 'Super Pibu'
  const wrapper = shallow(<ShowImage url={url} title={titulo} />)

  test('El componente <ShowImage /> debe mostrarse correctamente y aceptar las propiedades url y titulo', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('El texto(titulo) renderizado debe ser el mismo a la prop titulo', () => {
    const texto = wrapper.find('h4').text().trim()
    expect(texto).toBe(titulo)
  })

  test("El atributo 'src' debe ser igual a la prop url", () => {
    const urlImg = wrapper.find('img').props() // [1]
    console.log(urlImg) //  { className: 'card__image', src: 'https://media.giphy.com/media/d8j1B7L3sLmO6rdFAA/giphy.gif', alt: 'Super Pibu'}

    const urlImgProps = wrapper.find('img').props().src // [2]
    console.log(urlImgProps) //  https://media.giphy.com/media/d8j1B7L3sLmO6rdFAA/giphy.gif

    const urlImgProp = wrapper.find('img').prop('src') // [3]
    console.log(urlImgProp) //  https://media.giphy.com/media/d8j1B7L3sLmO6rdFAA/giphy.gif

    // Se espera que lo que se recibio en wrapper sea igual a la url que se mando en las props
    expect(urlImgProp).toBe(url)
  })

  test("El atributo 'alt' igual a la prop titulo", () => {
    const altProps = wrapper.find('img').props().alt
    console.log(altProps)

    const altProp = wrapper.find('img').prop('alt')
    console.log(altProp)

    // Se espera que el texto alt renderizado sea igual al valor de la prop titulo
    expect(altProp).toBe(titulo)
  })

  test('El componente debe de tener la clase animate__fadeInDown', () => {
    const div = wrapper.find('div')
    const className = div.prop('className') //card animate__animated animate__fadeInDown
    // Se espera que si existe la clase animate__fadeInDown, sea igual a true
    expect(className.includes('animate__fadeInDown')).toBe(true) // [4]
  })
})

/**
 * [1] - Enzyme nos ofrece un método para poder accesar a los atrobutos de un elemento en React(JSX), llamado 'props()'
 * Este método nos devuelve un objeto del nodo actual, en este caso nos devuelve el atributo className, src, alt, con sus valores respectivamente.
 *
 * [2] - Como sabemos que el método 'props()' nos devuelve un objeto del nodo actual con sus respectivos valores, accedemos a nuestro atributo mediante el '.' a src.
 *
 * [3] - Otra forma de acceder directamente a un atributo en especifico del nodo, sería usar el método 'prop()'
 * Éste recibe el parametro del atributo que se requiere obtener, ejemplo:
 * prop(NOMBRE_ATRIBUTO)
 * prop('src') // atributo requerido
 *
 * [4] - Una vez obtenido el contenido del atributo className, verificamos que incluya la clase animate__fadeInDown
 * Y hacemos el test.
 *
 * Se espera que del valor del className del div, incluya la clase animate__fadeInDown, sea igual a verdadero, osea que si existe
 */
