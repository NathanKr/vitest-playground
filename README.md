<h2>Motivation</h2>
Use vitest which is a fast and modern alternative to jest. use also react-testing-library


<h2>Setup</h2>

<h3>cmd</h3>

```
npm install -D vitest testing-library/jest-dom @testing-library/react @vitejs/plugin-react
```

<h3>package.json </h3>
add the following under "scripts"

```json
 "test": "vitest",
```

<h3>vite.config.ts in the project root</h3>


```typescript
/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/tests/setup.ts',
  },
  plugins: [react()],
} );
```

<h3>setup.ts in the testing directory</h3>

```typescript

import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
 cleanup();
});

```
<h2>Test files</h2>


<h3>utils.test.ts in the testing directory</h3>
<h4>test logic</h4>

```typescript
// --- strange because i use global : true in vite.config.ts
import {expect, test} from 'vitest';
import { sum } from '../logic/utils';

test('1+2 is 3' , ()=>{
expect(sum(1,2)).toBe(3)
})
```


<h3>App.test.tsx in the testing directory</h3>
<h4>test react components</h4>

```typescript

import { getQueriesForElement } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "../App";

describe("Todos test with testing-library", () => {
  const root = document.createElement("div");
  const {getByText} = getQueriesForElement(root);
  beforeAll(() => {
    ReactDOM.render(<App />, root);
  });
  
  test('Todos text exist',() =>{
    // --- this is using testing-library/dom
    expect(getByText("Hello")).not.toBeNull()
  })
});


```

<h3>dom.test.ts in the testing directory</h3>
<h4>test dom</h4>
May be used for browser automation test. You can render inside react component but then you need to change the file extension to .tsx

```typescript

describe('dom tests',()=>{
    test('document is not null',()=>{
        expect(document).not.toBeNull();
    })

    test('document.body.innerHTML with new div to be truthy',()=>{
        document.body.innerHTML += '<div>123</div>'
        expect(document.body.innerHTML).toBeTruthy();
        expect(document.body.childNodes.length).toBe(1)
    })
})

```