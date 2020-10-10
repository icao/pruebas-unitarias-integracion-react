import React from 'react'

const MiPrimerComponenteTest = () => {
  return (
    <>
      <h2>Fundamentos de pruebas unitarias</h2>
      <p>
        <strong>Nota:</strong> Revisar los test en el directorio{' '}
        <strong>_tests_</strong>
      </p>
      <ul>
        <li>
          <strong>00-primer-test | </strong> Uso de los métodos básicos:
          <ul>
            <li>
              <strong>test()</strong>
            </li>
            <li>
              <strong>exppect()</strong>
            </li>
            <li>
              <strong>toBe()</strong>
            </li>
          </ul>
        </li>
        <li>
          <strong>01-template-string-test | </strong> Uso del método{' '}
          <strong>toBe()</strong> y <strong>describe()</strong>
        </li>
        <li>
          <strong>02-funciones-test | </strong> Uso del método{' '}
          <strong>toEqual()</strong>
        </li>
        <li>
          <strong>03-destructuracion-arreglos-test | </strong> Prueba con varios
          métodos para testear un arreglo.
        </li>
      </ul>
    </>
  )
}

export default MiPrimerComponenteTest
