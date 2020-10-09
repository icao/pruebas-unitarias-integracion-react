const frutas = ['manzana', 'pera', 'sandia', 'toronja']
const [, , , fruta4] = frutas

console.log(`Me gusta la ${fruta4}`)

const regresaArreglo = () => ['Alexander', 20]

console.log(`Datos del usuario ${regresaArreglo()}`)

const [usuario, edad] = regresaArreglo()

console.log(`El usuario es: ${usuario} y su edad es: ${edad}`)
