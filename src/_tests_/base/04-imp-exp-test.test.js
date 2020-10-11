import { getHeroById, getHeroByOwner } from '../../base/04-imp-exp'
import heroes from '../../data/heroes'

describe('Pruebas en 04-imp-exp', () => {
  test('getHeroById debe retornar un heroe con id existente en la data(heroes)', () => {
    const id = 1
    const heroe = getHeroById(id)
    const heroeData = heroes.find(h => h.id === id)

    console.log('heroe obtenido: ', heroe)
    console.log('heroe data existente: ', heroeData)
    expect(heroe).toBe(heroeData)
  })

  test('getHeroById debe retornar undefined si heroe no existe', () => {
    const id = 100
    const heroe = getHeroById(id)

    console.log('heroe obtenido: ', heroe)

    expect(heroe).toBe(undefined) // [1]
  })

  test('getHeroByOwner debe retornar un arreglo con heroes de DC', () => {
    const owner = 'DC'
    const heroesDc = getHeroByOwner(owner)
    const heroesDcData = heroes.filter(h => h.owner === owner)

    console.log('heroes DC ', heroesDc)
    console.log('heroes DC Data', heroesDcData)

    expect(heroesDc).toEqual(heroesDcData)
  })
})

/**
 * [1] - Hacemos uso de toBe() porque 'undefined' es un primitivo
 */
