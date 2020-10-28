# use-easy-state

> An easy way to add state without having multiple useState hooks. Too many useState hooks have to be refactored using useReducer. This hook abstracts that conversion from useState to useReducer. It looks like useState but behaves like useReducer.

## Features:
  - Provides getter and setter for a given single-level (non-nested) object.
  - Getter and setter names are based on the key names of the input object.
  - See Usage: For a given object with keys name, age and isPopular, the hook returns a set of getters and setters such as name, setName, age, setAge, isPopular, setIsPopular.

## Installation

```bash
npm install --save use-easy-state
```

## Usage

```jsx
import React from 'react'
import useEasyState from 'use-easy-state'

const Example = () => {
  const { name, age, isPopular, setName, setAge, setIsPopular } = useEasyState({
    name: 'JavaScript',
    age: 30,
    isPopular: true
  })
  return <div>{example}</div>
}
```

## License

MIT © [vijeysrc](https://github.com/vijeysrc)

---
