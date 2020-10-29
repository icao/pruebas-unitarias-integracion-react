import { obtenerGif } from '../../base/06-async-await'

describe('Pruebas en 06-async-await-test', () => {
  test('obtenerGif debe retornar una URL de la imagen', async () => {
    let color = await obtenerGif() // [1]
    // expect(typeof color).toBe('string') [2]
    expect(color.includes('https://')).toBe(true) // [3]
  })
})

/**
 * Testeando una funcion asíncrona (async/await)
 *
 * [1] - Sabemos que nos devuelve una promesa, por lo que Jest estaría esperando que lo trataramos como una promesa, pero por el momento lo abordaremos de otra forma, como hacemos uso de async/await, haremos que nuestra frunción test se comporte como una.
 *
 * Tenemos ahora test como una función asincrona que esperará con el uso de await, la resolución de la promesa.
 *
 * Teniendo la resolución es entonces cuando podrémos testearla.
 *
 */

/**
 * Tenenemos una API que nos devolverá una url dandom, por lo que siempre será diferente, y no podemos tener un mock para probar que coincida con lo que se espera.
 *
 * Acontinación mostramos dos formas de probar este caso en particular
 *
 * [2] - Podriamos esperar que el expect sea del tipo string, pero no es comveniente, dado que nuestra función asincrona obtenerGif, devuelve un error diciendo que no existe, del tipo string. Asi que quedaría descartada esta forma.
 *
 * [3] - Con esta forma aseguramos que la respuesta que obtengamos incluya un patrón en especifico, como sabemos que devolvera una URL, podemos asegurarnos que sea una URL lo que devuelva nuestra función asincrona.
 *
 */
