import { obtenerHeroe } from '../../base/05-promesas'
import heroes from '../../data/heroes'

describe('Prueba de 05-promesas', () => {
  // [1]
  // test('obtenerHeroe debe retornar un heroe existente por id', () => {
  //   let idHeroe = 1
  //   obtenerHeroe(idHeroe).then(response => {
  //     expect(true).toBe(false) // Jamás se evalua
  //   })
  // })

  test('obtenerHeroe debe retornar un heroe existente por id', done => {
    let idHeroe = 1
    obtenerHeroe(idHeroe).then(response => {
      expect(response).toBe(heroes[0]) // Se espera que response sea igual a Batman
      done() // Indicando termino del proceso
    })
  })

  test('obtenerHeroe debe retornar un error si el heroe por id no existe', done => {
    let idHeroe = 100
    obtenerHeroe(idHeroe).catch(error => {
      expect(error).toBe('Error no se pudo encontrar el heroe') // Se espera que el error sea igual al mensaje
      done()
    })
  })
})

/**
 * [1]
 * La prueba nos pasaría como exitosa cuando no debería ser así, porque true no es igual a false.
 * Esto pasa porque Jest va ejecutando de manera sincorna las pruebas, entonces cuando ejecuta la promesa, espera a que sea resuelta y ejamás llega a meterse a leer el  expect(true).toBe(false).
 * Como no sabe que se esta llevando a cabo la prueba de una función asincrona, este ejecuta como valida la promesa, pero jamas la evalua.
 * Para nosotros indicar que ya termino cierta tarea debemos hacer uso del método done(), con el cual le indicaremos el termino de la tarea.
 *
 * done()
 *
 * Este método es un callback que le indica a Jest cuando terminó de ejecutar una función asincrona.
 * Es un parametro que se pasa a la funcion anónima de test(), y se hace uso de ella invocandola al final del proceso asincrono, en este caso despues de finalizar el código en then().
 */
