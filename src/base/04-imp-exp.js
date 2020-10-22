import heroes from '../data/heroes'

/**
 * Esta funcion regresa a un heroe buscado por su id
 *
 * @param {*} id
 * @returns
 */
export const getHeroById = id => {
  return heroes.find(heroe => heroe.id === id)
}

// console.log('HEROE -> ', getHeroById(1))

/**
 * Esta funcion regresa heroes que pertenecen a un mismo propietario
 *
 * @param {*} owner
 * @returns
 */
export const getHeroByOwner = owner => {
  return heroes.filter(hero => hero.owner === owner)
}

// console.log('HEORES -> ', getHeroByOwner('Marvel'))
