import heroes from '../data/heroes'

export /**
 * Esta funcion regresa a un heroe buscado por su id
 *
 * @param {*} id
 * @returns
 */
const getHeroById = id => {
  return heroes.find(heroe => heroe.id === id)
}

console.log('HEROE -> ', getHeroById(1))

/**
 * Esta funcion regresa heroes que pertenecen a un mismo propietario
 *
 * @param {*} owner
 * @returns
 */
const getHeroByOwner = owner => {
  return heroes.filter(hero => hero.owner === owner)
}

console.log('HEORES -> ', getHeroByOwner('Marvel'))
