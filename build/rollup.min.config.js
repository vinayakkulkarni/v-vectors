import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.js', '.ts', '.vue'];
const plugins = [
  alias({
    entries: {
      vue: 'vue/dist/vue.runtime.esm-browser.prod.js',
    },
  }),
  resolve({
    extensions,
    browser: true,
  }),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
  }),
  commonjs({
    extensions,
    exclude: 'src/**',
  }),
  vue({
    isWebComponent: true,
    template: {
      isProduction: true,
    },
  }),
  typescript({
    include: [/\.tsx?$/, /\.vue\?.*?lang=ts/],
    useTsconfigDeclarationDir: true,
  }),
  terser(),
];

export default {
  input: 'src/index.js',
  output: {
    format: 'umd',
    name: 'v-vectors',
    file: 'dist/v-vectors.min.js',
  },
  plugins,
};
