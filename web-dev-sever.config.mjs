// @ts-nocheck
/* eslint-disable */
import rollupPostcss from 'rollup-plugin-postcss'
import { fromRollup } from '@web/dev-server-rollup'

const postcss = fromRollup(rollupPostcss)

export default {
  // in a monorepo you need to adjust the rootdir of the web server
  // postcss injects a module which needs to be reachable from the browser
  rootDir: './public',

  // tell the server to serve css files as js
  mimeTypes: {
    '**/*.css': 'js',
  },
  plugins: [postcss({ include: ['src/**/*.css'], modules: true })],
}
