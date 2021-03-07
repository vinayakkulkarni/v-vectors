import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';

const extensions = ['.js', '.ts', '.vue'];
const plugins = [
  alias({
    entries: [
      {
        find: 'vue',
        replacement: 'vue/dist/vue.runtime.esm-browser.prod.js',
      },
    ],
  }),
  resolve({
    extensions,
    browser: true,
  }),
  commonjs({
    extensions,
    exclude: 'src/**',
  }),
  vue({
    target: 'browser',
    templatePreprocessOptions: {
      isProd: true,
    },
    css: true, // Dynamically inject css as a <style> tag
  }),
  typescript({
    include: [/\.tsx?$/, /\.vue\?.*?lang=ts/],
    useTsconfigDeclarationDir: true,
  }),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
  }),
];

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      name: 'v-vectors',
      exports: 'named',
      file: 'dist/v-vectors.esm.js',
    },
    plugins,
  },
  // CommonJS build
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      name: 'v-vectors',
      exports: 'named',
      file: 'dist/v-vectors.cjs.js',
    },
    plugins,
  },
  // UMD build.
  {
    input: 'src/index.js',
    output: {
      format: 'umd',
      name: 'v-vectors',
      exports: 'named',
      file: 'dist/v-vectors.js',
    },
    plugins,
  },
];
