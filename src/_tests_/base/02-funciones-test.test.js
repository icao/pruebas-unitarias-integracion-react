import { obtenerUsuario, obtenerUsuarioActivo } from '../../base/02-funciones'

describe('Pruebas en 02-funciones', () => {
  test('obtenerUsuario debe retornar un objeto', () => {
    const usuarioPrueba = {
      uid: 'ABC001',
      username: 'Popeye',
    }
    const usuario = obtenerUsuario()

    // expect(usuario).toBe(usuarioPrueba) // [1]
    expect(usuario).toEqual(usuarioPrueba)
  })

  test('obtenerUsuarioActivo debe retornar un objeto con el username enviado', () => {
    const nombre = 'Ramon'
    const usuarioActivo = obtenerUsuarioActivo(nombre)

    expect(usuarioActivo).toEqual({
      uid: 'ACB350',
      username: nombre,
    })
  })
})

/**
 * [1] - Ocasionaria un error. el método toBe(), compara el objeto usuarioPrueba con el objeto que regresa la función.
 * toBe() hace referencia a el valor en memoria, y no en el valor de los parametros del objeto.
 *
 * Ejemplo: {} === {} // FALSE
 *
 * Para hacer una comparacion de los valores de un objeto, se necesita hacer uso del método toEqual()
 *
 */

/**
 * toEqual()
 *
 * toEqual(valor)
 *
 * Se utiliza  para comparar recursivamente todas las propiedades de las instancias de objeto(tambien conocidas como "igualdad profunda")
 * Llama a comparar valores primitivos, es incluso mejor para las pruebas que "==" el operador de igualdad estricta.
 *
 * NOTA: No usar con números de punto flotante, en su lugar usar toBeClosedTo()
 *
 */
