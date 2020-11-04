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

    // se espera que el componente coincida con el snapshot(foto) del compoentne <App />
    expect(wrapper).toMatchSnapshot() //[2]
  })
})

/**
 * [1] - shallow en enzyme es el sustituto del método render()
 * Es útil para limitarse a probar un componente como una unidad y para asegurarse de que sus pruebas no afirmen indirectamente el comportamiento de los componentes secundarios, es decir, que nos proporcione el componente sin la interferencia de sus hijos(componentes anidados)
 *
 *
 * [2] - Es un método que garantiza que un valor coincida con la instantánea(snapshot) más reciente.
 *
 * El snapshot es una fotografia reciente de nuestro componente y se aloja en la carpeta de _snapshots_
 *
 * Lo que hacemos nuestro test es comparar el componente capturado con shallow y esperamos que sea igual al snapshot mas actual del componente App, esto atravez del método toMatchSnapshot() de enzyme
 */
