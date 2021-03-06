import React from 'react'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import App from '../App'

/**
 * Prueba con REACT Testing Library
 */
describe('Probando componente <App /> con React Testing Library', () => {
  test('App debe mostrar un titulo: Pruebas unitarias y de integración - React', () => {
    let titulo = 'Pruebas unitarias y de integración - React'
    const wrapper = render(<App title={titulo} />) // [1]
    expect(wrapper.getByText(titulo)).toBeInTheDocument() // [2]
  })
})

/**
 * Probando la renderización de un componente de React
 *
 * [1] - Primero tenemos que importar nuestro componente
 * import React from 'react'    - Importamo React, ya que hacemos uso de nuesto componente
 * import App from '../App'   - Importando el componente
 * import { render } from '@testing-library/react' - Importamos el método "render()" desde la "testing library"
 *
 * Guardamos en una variable lo que regrese el método render([componente])
 *
 * [2] - Harémos uso de la "testing library" de React para testear nuestro componente y obtener algunos valores.
 * Usamos el método getByText([texto_a_buscar]), que recibe como parámetro el texto que queremos buscar dentro del componente.
 *
 * Y con el método toBeInTheDocument() de Jest, comparamos si el texto(wrapper) coincide con alguno dentro del componente.
 *
 */

/**
 * IMPORTANTE: Para que Jest pueda hacer uso de este método getByText(), tenemos que configurar un archivo para que Jest pueda hacer uso de una libreria que necesita para acceder a nuestro DOM.
 *
 * En la carpeta "src", creamos un archivo de configuración que llamaremos: setupTest.js
 * E importaremos  a jest-dom de la siguiente manera:
 * import '@testing-library/jest-dom/extend-expect'
 *
 * Una vez hecho, requeriremos volver a levantar nuestras pruebas con yarn test, para cargar las configuraciones realizadas.
 *
 */

/**
 * Prueba con ENZYME
 */

describe('Probando componente <App /> con Enzyme', () => {
  test('App debe mostrarse correctamente', () => {
    let titulo = 'Pruebas unitarias y de integración - React'
    let wrapper = shallow(<App title={titulo} />) // [1]

    // se espera que el componente obtenido en wrapper coincida con el snapshot(foto) más reciente del componente <App />
    expect(wrapper).toMatchSnapshot() //[2]
  })
})

/**
 * Importamos el método shallow desde:
 * import { shallow } from 'enzyme'
 *
 * [1] - shallow(): En enzyme es el sustituto del método render()
 * Es útil para limitarse a probar un componente como una unidad y para asegurarse de que sus pruebas no afirmen indirectamente el comportamiento de los componentes secundarios, es decir, que nos proporcione el componente sin la interferencia de sus hijos(componentes anidados)
 *
 *
 * [2] - toMatchSnapshot(): Es un método que garantiza que un valor coincida con la instantánea(snapshot) más reciente.
 *
 * Snapshot: El snapshot es una fotografía reciente de nuestro componente y se aloja en la carpeta de _snapshots_
 *
 * Lo que hacemos nuestro test es comparar el componente capturado con shallow y esperamos que sea igual al snapshot mas actual del componente App, esto atravez del método toMatchSnapshot() de enzyme
 */

describe('Probando componente <App /> con Enzyme', () => {
  test('App debe mostrar el titulo enviado en las props', () => {
    let titulo = 'Pruebas unitarias y de integración - React'
    let wrapper = shallow(<App title={titulo} />)

    // Obtenemos el texto del titulo dentro del componente
    let texto = wrapper.find('h1').text() // [1]
    // Experamos que el titulo obtenido del componente sea igual al titulo
    expect(texto).toBe(titulo)
  })

  test('App debe mostrar el subtitulo enviado en las props', () => {
    let titulo = 'Pruebas unitarias y de integración - React'
    let subtitulo = 'Jest & Enzime'
    let wrapper = shallow(<App title={titulo} subtitle={subtitulo} />)

    let texto = wrapper.find('h2').text()
    // Experamos que el subtitulo obtenido del componente sea igual al subtitulo esperado
    expect(texto).toBe(subtitulo)
  })
})

/**
 * ACEDIENDO AL COMPONENTE
 *
 * Para acceder a los elementos del componente Enzyme nos provee de un método find() para extraer elementos en especifico
 *
 * find([argumento])
 *
 * [argumento] : Elemento que se desea buscar, puede ser un tag, identificador o clase.
 * Tiene una forma similar de trabajar como el método querySelector() de JS
 *
 * Esto a su vez nos brinda una série de métodos para extraer los parámetros del elemento.
 * En nuestro caso de prueba hacemos necesidad del texto del subtitulo, por ello usamos el método text(), que nos brinda el texto dentro de la etiqueta h2.
 *
 * En nuestro ejemplo extraemos el texto que renderiza el componente:
 *
 * let texto = wrapper.find('h2').text()
 *
 * Y hacemos el test esperando que este texto sea igual al subtitulo correcto
 *
 */
