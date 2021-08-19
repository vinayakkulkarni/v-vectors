# v-vectors  📈

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/vinayakkulkarni/v-vectors/ci?logo=github-actions)](https://github.com/vinayakkulkarni/v-vectors/actions/workflows/ci.yml)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/vinayakkulkarni/v-vectors/Ship%20js%20trigger?label=⛴%20Ship.js%20trigger)](https://github.com/vinayakkulkarni/v-vectors/actions/workflows/shipjs-trigger.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/vinayakkulkarni/v-vectors?sort=semver&logo=github)](https://github.com/vinayakkulkarni/v-vectors/releases)
[![npm](https://img.shields.io/npm/v/v-vectors?logo=npm)](https://www.npmjs.com/package/v-vectors)
[![npm](https://img.shields.io/npm/dm/v-vectors?logo=npm)](http://npm-stat.com/charts.html?package=v-vectors)
[![npm bundle size (version)](https://img.shields.io/bundlephobia/min/v-vectors/latest)](https://bundlephobia.com/package/v-vectors@latest)
[![npm type definitions](https://img.shields.io/npm/types/v-vectors)](https://github.com/vinayakkulkarni/v-vectors/blob/master/package.json)
[![DeepScan grade](https://deepscan.io/api/teams/9055/projects/18281/branches/445180/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=9055&pid=18281&bid=445180)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/vinayakkulkarni/v-vectors)](https://snyk.io/test/github/vinayakkulkarni/v-vectors)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/github/vinayakkulkarni/v-vectors?logo=lgtm)](https://lgtm.com/projects/g/vinayakkulkarni/v-vectors/alerts/)
[![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/vinayakkulkarni/v-vectors?logo=lgtm)](https://lgtm.com/projects/g/vinayakkulkarni/v-vectors/context:javascript)
[![GitHub contributors](https://img.shields.io/github/contributors/vinayakkulkarni/v-vectors)](https://github.com/vinayakkulkarni/v-vectors/graphs/contributors)
[![Built Using Janak](https://img.shields.io/badge/built%20using-janak-brightgreen)](https://github.com/vinayakkulkarni/janak)

[![eslint](https://img.shields.io/npm/dependency-version/v-vectors/dev/eslint?logo=eslint)](https://eslint.org/)
[![prettier](https://img.shields.io/npm/dependency-version/v-vectors/dev/prettier?logo=prettier)](https://prettier.io/)
[![rollup](https://img.shields.io/npm/dependency-version/v-vectors/dev/rollup?logo=rollup.js)](https://rollupjs.org/guide/en/)
[![typescript](https://img.shields.io/npm/dependency-version/v-vectors/dev/typescript?logo=TypeScript)](https://www.typescriptlang.org/)
[![vue](https://img.shields.io/npm/dependency-version/v-vectors/dev/vue?logo=vue.js)](https://vuejs.org/)

## Features

* Dynamic Vue Component to render vector graphics
* Built from scratch usign Vue 3 with TypeScript


## Table of Contents

- [v-vectors  📈](#v-vectors--)
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

* [vue](https://vuejs.org/) `^3.x`

### Installation

```sh
npm install --save v-vectors
```

CDN: [UNPKG](https://unpkg.com/v-vectors/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/v-vectors/dist/) (available as `window.VVectors`)

### Build Setup

``` bash
# install dependencies
$ npm ci

# package the library
$ npm run build
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
    VSvg
  },
  data() {
    return {
      marker: {
        viewBox: "0 0 24 24",
        paths: [
          {
            d:
              "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
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

| Name            | Type   | Required? | Default              | Description                                                 |
| --------------  | ------ | --------- | ---------            | ----------------------------------------------------------- |
| `marker`        | Object | Yes       | ''                   | Paths or Circles Array of objects, check [interfaces](./types/index.d.ts).  |


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
