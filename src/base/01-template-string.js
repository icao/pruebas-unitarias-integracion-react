const nombre = 'Karime'
const apellido = 'Pizarro'

const nombreCompleto = `${nombre} ${apellido}`
// console.log(nombreCompleto)

export function getSaludo(nombre = 'PECOSITA') {
  return 'Hola ' + nombre
}

// console.log(`Este es un mensaje: ${getSaludo(nombre)}`)
