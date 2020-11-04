// Import para pruebas con React Testing Library
import '@testing-library/jest-dom/extend-expect'
// Import para pruebas con Enzyme
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'enzyme-to-json' // enzyme-to-json plugin

Enzyme.configure({ adapter: new Adapter() })
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' })) //enzyme-to-json plugin config

/**
 * IMPORTANTE: Solo debemos usar una libreria de testing, se recomienda no importar las que no se usen
 */

/**
 * CONFIGURANDO ENZYME
 *
 * Instalamos como dependencias de desarrollo:
 * yarn add --dev enzyme enzyme-adapter-react-16
 *
 * Agregamos en el archivo setupTest.js:
 * Enzyme.configure({ adapter: new Adapter() })
 *
 */

/**
 * CONFIGURANDO PLUGIN DE ENZYME - enzyme-to-json
 * Instalamos como dependencias de enzyme desarrollo:
 * yarn add --dev enzyme-to-json
 *
 * Agremamos en el archivo setupTest.js
 * expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))
 *
 */
