test('Deberia devolver un texto -> Hola Cesar', () => {
  const texto = 'Hola Cesar'
  const texto2 = 'Hola Cesar'
  // const texto2 = 'Hola Icao' // Si mandamos esto, NO PASA LA PRUEBA

  expect(texto2).toBe(texto)
})

/**
 * test()
 *
 * test('DESCRIPCION_DEL_TEST', function() { // código del test})
 *
 * Es el método principal que nos permitira hacer las pruebas de nuestro código.
 * Recibe un argumento que será un texto para describir que se va a probar, y una función(anónima) donde se hará el test.
 *
 */

/**
 * expect()
 *
 * La funcion se utiliza cada vez que se deasea probar un valor, recibe un parametro que es el VALOR A TESTEAR
 *
 * expect(VALOR_A_EVALUAR).toBe(VALOR_ESPERADO)
 *
 * Donde:
 * VALOR_A_EVALUAR  -> Valor que se desea evaluar en el test(el que se ingresa)
 * VALOR_ESPERADO -> Valor que se espera que sea el valor evaluado en expect
 */

/**
 * toBe()
 *
 * Se usa para COMPARAR VALORES PRIMITIVOS o para comparar la IDENTIDAD REFERENCIAL DE LAS INSTANCIAS DE OBJETOS(Solo los valores de los parametros y la referencia del objeto).
 */
