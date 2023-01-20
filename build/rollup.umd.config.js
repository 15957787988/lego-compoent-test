import basicConfig, { name, file } from './rollup.config'

// console.log('basicConfig===', basicConfig)

export default {
  ...basicConfig,
  output: {
    name: "LegoComponents",
    file: file('umd'),
    format: 'umd',
    globals: {
      'vue': "Vue",
      'lodash-es': '_'
    },
    exports: "named"
  },
}