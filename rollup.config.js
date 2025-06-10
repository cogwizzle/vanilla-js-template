import path from 'path'
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets'
import { rollupPluginHTML as html } from '@web/rollup-plugin-html'
import copy from 'rollup-plugin-copy'

export default {
  input: 'public/**/*.html',
  output: { dir: 'dist' },
  plugins: [
    copy({
      targets: [{ src: 'public/styles', dest: 'dist/styles' }],
    }),
    html({
      input: 'index.html',
      minify: true,
      rootDir: path.join(process.cwd(), 'public'),
    }),
    importMetaAssets(),
  ],
}
