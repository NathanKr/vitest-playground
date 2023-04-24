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


<h3>utils.test.ts in tests directory</h3>
<h4>test logic</h4>


<h3>App.test.tsx in tests directory</h3>
<h4>test react components</h4>


<h3>dom.test.ts in tests directory</h3>
<h4>test dom</h4>
May be used for browser automation test. You can render inside react component but then you need to change the file extension to .tsx


<h3>mutation-observer.test.ts in tests directory</h3>
This invokes MutationObserver and there are two points of interest
<ul>
<li>MutationObserver is supported in jsdom</li>
<li>You must have some sleep even for 0 sec so that events can be fetched from the event loop</li>
</ul>