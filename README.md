Radium v0.22 Experiments
========================

Check out our breaking changes in `radium@0.22.x`.

## Node

Basic SSR.

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

A webpage using the UMD dist.

```sh
$ yarn run browser:umd
```

(Opens browser to local filesystem).

### CommonJS Build

A webpage with a CommonJS build that does **not** use Babel, but uses modern webpack. Because webpack2+ uses `package.json:module` fields, we have to make this adjustment:

```js
Radium = Radium.default;
```

See it in action:

```sh
$ yarn run browser:cjs
```

(Builds and opens browser to local filesystem).

### CommonJS Build with Webpack Alias

A webpage with a CommonJS build that does **not** use Babel, but uses modern webpack. We avoid the adjustment of `Radium = Radium.default;` by adding this alias in our webpack config to force the special index pointed to by `package.json:main`:

```js
  resolve: {
    alias: {
      radium: require.resolve("radium/index")
    }
  }
```

See it in action:

```sh
$ yarn run browser:cjs-alias
```

(Builds and opens browser to local filesystem).

### ESM Build

The most standard webpack build.

```sh
$ yarn run browser:esm
```

(Builds and opens browser to local filesystem).
