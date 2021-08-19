import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import beep from '@rollup/plugin-beep';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import sucrase from '@rollup/plugin-sucrase';
import scss from 'rollup-plugin-scss';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';
import pkg from '../package.json';

const extensions = ['.js', '.ts', '.vue'];
const plugins = [
  alias({
    entries: {
      vue: 'vue/dist/vue.runtime.esm-browser.prod.js',
    },
  }),
  resolve({ extensions, browser: true }),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
  }),
  commonjs({ extensions, exclude: 'src/**', include: 'node_modules' }),
  vue(),
  scss({
    output: 'dist/v-vectors.css',
  }),
  sucrase({
    exclude: ['node_modules/**'],
    transforms: ['typescript'],
  }),
  beep(),
  terser(),
];

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.description}
 * (c) ${new Date().getFullYear()} ${pkg.author.name}<${pkg.author.email}>
 * Released under the ${pkg.license} License
 */
`;

export default {
  input: 'src/index.ts',
  output: {
    file: pkg.jsdelivr,
    format: 'umd',
    name: 'VVectors',
    exports: 'named',
    sourcemap: true,
    banner,
    globals: {
      vue: 'vue',
    },
  },
  plugins,
};
