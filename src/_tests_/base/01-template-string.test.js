import { getSaludo } from '../../base/01-template-string'

describe('Pruebas en 01-template-string', () => {
  test('getSaludo debe retornar -> Hola Karime', () => {
    const nombre = 'Karime'
    const saludo = getSaludo(nombre)

    expect(saludo).toBe('Hola ' + nombre)
  })

  test('getSaludo debe retornar -> Hola PECOSITA, si no se le envia ningun argumento', () => {
    const saludo = getSaludo()
    expect(saludo).toBe('Hola PECOSITA')
  })
})

/**
 * describe()
 *
 * describe('name', ()=>{})
 *
 * Crea un bloque que agrupa varias pruebas relacionadas.
 * Recibe dos parametros, un titulo/descripcion y una función que contiene los tests.
 */
