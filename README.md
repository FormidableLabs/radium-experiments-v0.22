Radium v0.22 Experiments
========================

Check out our breaking changes in `radium@0.22.x`.

## Node

```sh
$ yarn run node
SSR:  <div style="display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex" data-radium="true" data-reactroot=""></div>
Style:  function
```

## Babel

Our babel examples, transpile first, then run SSR in node on transpiled code.

### CommonJS Build

```sh
$ yarn run babel:cjs
SSR:  <div style="display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex" data-radium="true" data-reactroot=""></div>
Style:  function
```

Output: `babel/dist/cjs.js`

### ESM Build

(Execution via std/esm for modules)

```sh
$ yarn run babel:esm
SSR:  <div style="display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex" data-radium="true" data-reactroot=""></div>
Style:  function
```

Output: `babel/dist/esm.js`

## Browser

### UMD

```sh
$ yarn run browser:umd
```

(Opens browser to local filesystem).

### CommonJS Build

### ESM Build
