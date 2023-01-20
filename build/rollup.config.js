import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import typescript from "rollup-plugin-typescript2"
const config = require('../package.json')

let overrides = { 
  compilerOptions: { declaration: true },
  exclude: [
    "node_modules",
    "src/App.vue",
    "src/main.ts"
  ]
}

const { name } = config
const file = type => `dist/${name}.${type}.js`

export { name, file }

export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    vue(),
    typescript({ tsconfigOverride: overrides }),
    css({ output: 'bundle.css' })
  ],
  external: ['vue', 'lodash-es']
};