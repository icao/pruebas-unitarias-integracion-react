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

  test('getHeroByOwner debe retornar un arreglo con heroes de Marvel', () => {
    const owner = 'Marvel'
    const heroesMarvel = getHeroByOwner(owner)

    console.log('Heroes de Marvel ', heroesMarvel)
    console.log('Longitud arreglo heroes de Marvel ', heroesMarvel.length)

    expect(heroesMarvel.length).toBe(2) // [2]
  })

  test('getHeroByOwner debe retornar undefined si no existen heroes con el owner requerido', () => {
    const owner = 'ANIME'
    const heroesMarvel = getHeroByOwner(owner) // Puede no enviarse ningun argumento tambien

    console.log('heroe obtenido: ', heroesMarvel)

    expect(heroesMarvel.length).toBe(0)
  })
})

/**
 * [1] - Hacemos uso de toBe() porque 'undefined' es un primitivo
 * [2] - Se hace un toBe porque sabemos que de los 5 heroes, existen solo 2 de marvel, por ello experamos tener 2 como la longitud de los resultados obtenidos
 */
