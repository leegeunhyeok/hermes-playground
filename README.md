# hermes-playground

```bash
git clone https://github.com/facebook/hermes.git
yarn build
```

## Run

```bash
# execute code on hermes engine
yarn hermes src/{filename}.js

# execute code on v8 engine without jit
yarn node src/{filename}.js
```

## Polyfills

```js
// assign console.log to print for Node.js
typeof HermesInternal === 'undefined' ? (
  globalThis.print = console.log
) : 0;
```
