import { getHeroById, getHeroByOwner } from '../../base/04-imp-exp'
describe('Pruebas en 04-imp-exp', () => {
  test('Mostrar arreglo', () => {
    const heroe = getHeroById(1)
    const heroes = getHeroByOwner('Marvel')
    console.log('REGRESA HEROE CON ID = 1: ', heroe)
    console.log('REGRESA HEROES DE MARVEL: ', heroes)
  })
})
