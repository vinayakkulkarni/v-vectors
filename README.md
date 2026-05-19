# v-vectors 📈

<!-- Badges -->

[![Pipeline](https://img.shields.io/github/actions/workflow/status/vinayakkulkarni/v-vectors/pipeline.yml?branch=main&logo=github-actions&label=pipeline)](https://github.com/vinayakkulkarni/v-vectors/actions/workflows/pipeline.yml)
[![GitHub release](https://img.shields.io/github/v/release/vinayakkulkarni/v-vectors?sort=semver&logo=github&label=release)](https://github.com/vinayakkulkarni/v-vectors/releases)
[![npm](https://img.shields.io/npm/v/v-vectors?logo=npm&label=npm)](https://www.npmjs.com/package/v-vectors)
[![JSR](https://img.shields.io/jsr/v/@vinayakkulkarni/v-vectors?logo=jsr&label=jsr)](https://jsr.io/@vinayakkulkarni/v-vectors)
[![npm downloads](https://img.shields.io/npm/dm/v-vectors?logo=npm&label=downloads)](http://npm-stat.com/charts.html?package=v-vectors)
[![bundle size](https://img.shields.io/bundlephobia/minzip/v-vectors?label=size)](https://bundlephobia.com/package/v-vectors@latest)
[![types](https://img.shields.io/npm/types/v-vectors?logo=typescript&label=types)](https://github.com/vinayakkulkarni/v-vectors/blob/main/package.json)
[![License](https://img.shields.io/github/license/vinayakkulkarni/v-vectors?logo=github&label=license)](./LICENSE)

[![vite-plus](https://img.shields.io/github/package-json/dependency-version/vinayakkulkarni/v-vectors/dev/vite-plus?logo=vite&label=vite-plus)](https://github.com/voidzero-dev/vite-plus)
[![typescript](https://img.shields.io/github/package-json/dependency-version/vinayakkulkarni/v-vectors/dev/typescript?logo=TypeScript&label=typescript)](https://www.typescriptlang.org/)
[![pnpm](https://img.shields.io/github/package-json/packageManager/vinayakkulkarni/v-vectors?label=pnpm&logo=pnpm)](https://pnpm.io/)
[![node](https://img.shields.io/node/v/v-vectors?logo=node.js&label=node)](https://nodejs.org/)

<!-- End Badges -->

## Features

- Dynamic Vue Component to render vector graphics
- Built from scratch usign Vue 3 with TypeScript

## Table of Contents

- [v-vectors 📈](#v-vectors--)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Requirements](#requirements)
    - [Installation](#installation)
    - [Build Setup](#build-setup)
  - [Usage](#usage)
    - [Globally](#globally)
      - [As a component](#as-a-component)
      - [As a plugin](#as-a-plugin)
    - [Locally](#locally)
      - [Example](#example)
  - [API](#api)
    - [Props](#props)
  - [Built with](#built-with)
  - [Contributing](#contributing)
  - [Author](#author)

## Demo

[![Edit v-vectors-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/v-vectors-demo-bkd57?fontsize=14&hidenavigation=1&theme=dark)

## Requirements

- [vue](https://vuejs.org/) `^3.x`

### Installation

```sh
pnpm add v-vectors
```

CDN: [UNPKG](https://unpkg.com/v-vectors/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/v-vectors/dist/) (available as `window.VVectors`)

### Build Setup

```bash
# install dependencies
$ pnpm install --frozen-lockfile

# package the library
$ pnpm run build
```

## Usage

### Globally

#### As a component

```javascript
Vue.component('VVectors', require('v-vectors'));
```

#### As a plugin

```javascript
import Vue from 'vue';
import VVectors from 'v-vectors';

Vue.use(VVectors);
```

### Locally

```javascript
import { VSvg } from 'v-vectors';
```

#### Example

<details>
<summary>Locally imported as a component</summary>
<br />

```html
<v-svg :marker="marker" />
```

```javascript
import { VSvg } from 'v-vectors';

Vue.component('example-component', {
  components: {
    VSvg,
  },
  data() {
    return {
      marker: {
        viewBox: '0 0 24 24',
        paths: [
          {
            d: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
          },
        ],
      },
    };
  },
});
```

</details>

## API

### Props

| Name     | Type   | Required? | Default | Description                                                                |
| -------- | ------ | --------- | ------- | -------------------------------------------------------------------------- |
| `marker` | Object | Yes       | ''      | Paths or Circles Array of objects, check [interfaces](./types/index.d.ts). |

## Built with

- [TypeScript](https://www.typescriptlang.org/).
- [Vue 3](https://v3.vuejs.org)

## Contributing

1. Fork it ( [https://github.com/vinayakkulkarni/v-vectors/fork](https://github.com/vinayakkulkarni/v-vectors/fork) )
2. Create your feature branch (`git checkout -b feat/new-feature`)
3. Commit your changes (`git commit -Sam 'feat: add feature'`)
4. Push to the branch (`git push origin feat/new-feature`)
5. Create a new [Pull Request](https://github.com/vinayakkulkarni/v-vectors/compare)

_Note_:

1. Please contribute using [Github Flow](https://guides.github.com/introduction/flow/)
2. Commits & PRs will be allowed only if the commit messages & PR titles follow the [conventional commit standard](https://www.conventionalcommits.org/), _read more about it [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)_
3. PS. Ensure your commits are signed. _[Read why](https://withblue.ink/2020/05/17/how-and-why-to-sign-git-commits.html)_

## Author

**v-vectors** &copy; [Vinayak](https://vinayakkulkarni.dev), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Vinayak Kulkarni with help from contributors ([list](https://github.com/vinayakkulkarni/v-vectors/contributors)).

> [vinayakkulkarni.dev](https://vinayakkulkarni.dev) · GitHub [@vinayakkulkarni](https://github.com/vinayakkulkarni) · Twitter [@\_vinayak_k](https://twitter.com/_vinayak_k)
