# bun test + @testing-library/svelte bug repro

### Expected behaviour
Test should pass

### Actual behaviour

```
bun-test-testing-library-bug-repro » bun test
bun test v1.0.0 (822a00c4)

test/Component.test.ts:
20 | const render = (
21 |   Component,
22 |   { target, ...options } = {},
23 |   { container, queries } = {}
24 | ) => {
25 |   container = container || document.body
                               ^
ReferenceError: Can't find variable: document
      at render (/bun-test-testing-library-bug-repro/node_modules/@testing-library/svelte/src/pure.js:25:27)
      at /bun-test-testing-library-bug-repro/test/Component.test.ts:6:22
✗ bun test > should be able to render this component with @testing-library/svelte [1.87ms]

 0 pass
 1 fail
Ran 1 tests across 1 files. [249.00ms]
```