import React from 'react'
import CounterApp from '../02-counter-app/CounterApp'
import ShowImage from '../03-show-image/ShowImage'

const MiPrimerComponenteTest = () => {
  const urlGif = 'https://media.giphy.com/media/huJ9YLXCyzsEGp6bw8/giphy.gif'
  const titleGif = 'Super Pibubear'
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
        <strong>src/</strong>
      </p>
      <ul>
        <li>
          <strong>
            App.test.jsx <span className='name-component'>{`<App />`}</span>{' '}
          </strong>{' '}
          ⇨ Prueba de la renderización de un componente con React & Jest
          <br /> Uso de el método <i className='test-method'>render()</i> y{' '}
          <i className='test-method'>getByText()</i> del testing-library de
          react. Asi como{' '}
          <strong className='test-method'>toBeInTheDocument()</strong> de Jest
          DOM
        </li>
        <li>
          <strong>
            App.test.jsx <span className='name-component'>{`<App />`}</span>{' '}
          </strong>{' '}
          ⇨ Prueba de la renderización de un componente con Enzyme. <br /> Uso
          de el método <strong className='test-method-enzyme'>shallow()</strong>{' '}
          y <strong className='test-method-enzyme'>toMatchSnapshot()</strong>
        </li>
        <li>
          <strong>
            App.test.jsx <span className='name-component'>{`<App />`}</span>{' '}
          </strong>{' '}
          ⇨ Prueba de las propiedades de un componente. Uso de el método{' '}
          <strong className='test-method-enzyme'>find()</strong> y{' '}
          <strong className='test-method-enzyme'>text()</strong>
        </li>
      </ul>
      <p>
        <strong>Nota:</strong> Revisar los test en el directorio{' '}
        <strong>src/components/</strong>
      </p>
      <ul>
        <li>
          <strong>
            CounterApp.test.jsx{' '}
            <span className='name-component'>{`<Counterapp />`}</span>{' '}
          </strong>{' '}
          ⇨ Prueba del componente.
          <ul>
            <li>El componente debe de mostrarse correctamente</li>
            <li>
              El componente debe recibir el valor 100 pasado a la prop value
            </li>
            <li>El botón + 1 debe de aumentar en 1 el contador</li>
            <li>El botón - 1 debe de drementar en 1 el contador</li>
            <li>
              El botón reset debe de colocar el valor por defento en el contador
            </li>
          </ul>
          <p>
            Uso de los métodos{' '}
            <strong className='test-method-enzyme'>trim()</strong>,{' '}
            <strong className='test-method-enzyme'>at()</strong> y{' '}
            <strong className='test-method-enzyme'>simulate()</strong>
          </p>
          <>
            <CounterApp value={100} />
          </>
        </li>
      </ul>
      <ul>
        <li>
          <strong>
            CounterAppOptimizado.test.jsx{' '}
            <span className='name-component'>{`<Counterapp />`}</span>{' '}
          </strong>{' '}
          ⇨ Prueba del componente.
          <ul>
            <li>Optimizando el código repetido</li>
            <li>Inicialización del componente en cada test</li>
          </ul>
          <p>
            Uso del método{' '}
            <strong className='test-method-enzyme'>beforeEach(fn)</strong>
          </p>
        </li>
      </ul>
      <h2>
        Pruebas sobre componentes de React con atributos(src, alt) en etiquetas
        de JSX({`<img>`})
      </h2>
      <>
        <ShowImage url={urlGif} title={titleGif} />
      </>
      <p>
        <strong>Nota:</strong> Revisar los test en el directorio{' '}
        <strong>src/components/</strong>
      </p>
      <ul>
        <li>
          <strong>
            ShowImage.test.jsx{' '}
            <span className='name-component'>{`<ShowImage />`}</span>{' '}
          </strong>{' '}
          ⇨ Prueba del componente.
          <ul>
            <li>El componente debe...</li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export default MiPrimerComponenteTest
