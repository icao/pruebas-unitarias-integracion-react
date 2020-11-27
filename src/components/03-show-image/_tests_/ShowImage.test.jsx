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
  // TODO: El texto(titulo) renderizado debe ser el mismo a la prop titulo
  // TODO: El atributo 'src' debe ser igual a la prop url, y el 'atl' igual a la prop titulo
})
