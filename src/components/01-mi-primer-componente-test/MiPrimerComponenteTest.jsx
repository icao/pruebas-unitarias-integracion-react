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
          <strong>00-primer-test ⇨ </strong> Uso de los métodos básicos:
          <ul>
            <li>
              <strong className='test-method'>test()</strong>
            </li>
            <li>
              <strong className='test-method'>exppect()</strong>
            </li>
            <li>
              <strong className='test-method'>toBe()</strong>
            </li>
          </ul>
        </li>
        <li>
          <strong>01-template-string-test ⇨ </strong> Uso del método{' '}
          <strong className='test-method'>toBe()</strong> y{' '}
          <strong className='test-method'>describe()</strong>
        </li>
        <li>
          <strong>02-funciones-test ⇨ </strong> Uso del método{' '}
          <strong className='test-method'>toEqual()</strong>
        </li>
        <li>
          <strong>03-destructuración-arreglos-test ⇨ </strong> Prueba con varios
          métodos para testear un arreglo.
        </li>
        <li>
          <strong>04-imp-exp-test.test ⇨ </strong> Prueba con varios métodos
          para testear una función con método find() y filter().
        </li>
        <li>
          <strong>05-promesas-test.test ⇨ </strong> Prueba de
          promesas(asincronia) y uso del método{' '}
          <strong className='test-method'>done()</strong>
        </li>
        <li>
          <strong>05-async-await-test.test ⇨ </strong> Prueba de función
          asincronia y uso de función
          <strong className='test-method'> async/await</strong> en el método
          test()
        </li>
      </ul>
      <h2>Pruebas sobre componentes de React</h2>
      <p>
        <strong>Nota:</strong> Revisar los test en el directorio{' '}
        <strong>components/</strong>
      </p>
      <ul>
        <li>
          <strong>
            App.test-jsx <span className='name-component'>{`<App />`}</span>{' '}
          </strong>{' '}
          ⇨ Prueba de la renderización de un componente. <br /> Uso de el método{' '}
          <i className='test-method'>render()</i> y{' '}
          <i className='test-method'>getByText()</i> del testing-library de
          react. Asi como{' '}
          <strong className='test-method'>toBeInTheDocument()</strong> de Jest
          DOM
        </li>
      </ul>
    </>
  )
}

export default MiPrimerComponenteTest
