# use-easy-state

> An easy way to add state without having multiple useState hooks. Too many useState hooks have to be refactored using useReducer. This hook abstracts that conversion from useState to useReducer. It looks like useState but behaves like useReducer.

## Install

```bash
npm install --save-dev use-easy-state
```

## Usage

```jsx
import React, { Component } from "react";

import { useMyHook } from "use-easy-state";

const Example = () => {
  const example = useMyHook();
  return <div>{example}</div>;
};
```

## License

MIT © [vijeysrc](https://github.com/vijeysrc)

---
