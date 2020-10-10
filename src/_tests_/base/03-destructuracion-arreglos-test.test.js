import { regresarArreglo } from '../../base/03-destructuracion-arreglos'

describe('Prueba en 03-destructuracion-arreglos', () => {
  test('regresarArreglo tiene que retornar un arreglo con un letra y número', () => {
    const [letras, numero] = regresarArreglo() // ['Alexander', 20]

    console.log(typeof letras)
    console.log(typeof numero)

    expect(letras).toBe('Alexander') // [1]
    expect(typeof letras).toBe('string') // [2]
    expect(numero).toBe(20) // [1]
    expect(typeof numero).toBe('number') // [2]
  })
})

/**
 * [1] - Puede ser una prueba valida cuando sabemos que tiene que llegar
 * [2] - Es valido hacer as iel test cuando solo sabemos que llegara aleatoriamente ese tipo de datos.
 */
