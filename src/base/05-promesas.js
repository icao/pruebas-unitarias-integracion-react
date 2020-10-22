import { getHeroById } from './04-imp-exp'

const obtenerHeroe = id => {
  return new Promise((resolve, reject) => {
    let heroe = getHeroById(id)

    if (heroe) {
      resolve(heroe)
    } else {
      reject('No existe ese heroe')
    }
  })
}

obtenerHeroe(1).then(response => console.log(response))
