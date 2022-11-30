<h2>Motivation</h2>
Use vitest which is a fast and modern alternative to jest. use also react-testing-library


<h2>Setup</h2>

<h3>cmd</h3>

```
npm install -D vitest
```

<h3>package.json </h3>
add the following under "scripts"

```json
 "test": "vitest",
```

<h3>vite.config.ts</h3>

add 

```typescript
/// <reference types="vitest" />
```

under defineConfig (not sure it is needed)

```typescript
  test: {
    globals: true,
  },
```

<h3>utils.test.ts</h3>

```typescript
// --- strange because i use global : true in vite.config.ts
import {expect, test} from 'vitest';
import { sum } from '../logic/utils';

test('1+2 is 3' , ()=>{
expect(sum(1,2)).toBe(3)
})
```
