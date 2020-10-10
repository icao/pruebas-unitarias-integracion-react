const frutas = ['manzana', 'pera', 'sandia', 'toronja']
const [, , , fruta4] = frutas

// console.log(`Me gusta la ${fruta4}`)

export const regresarArreglo = () => ['Alexander', 20]

// console.log(`Datos del usuario ${regresarArreglo()}`)

const [usuario, edad] = regresarArreglo()

// console.log(`El usuario es: ${usuario} y su edad es: ${edad}`)
