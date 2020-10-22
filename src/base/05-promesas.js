import { getHeroById } from './04-imp-exp'

export const obtenerHeroe = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroById(id)
      if (heroe) {
        resolve(heroe)
      } else {
        reject('Error no se pudo encontrar el heroe')
      }
    }, 1500)
  })
}

// obtenerHeroe(10).then(response => console.log(response))
