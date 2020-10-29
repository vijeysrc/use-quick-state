# useQuickState

> useQuickState is a React hook. An easy way to add state without having multiple useState hooks. Too many useState hooks have to be refactored using useReducer. This hook abstracts that conversion from useState to useReducer. It looks like useState but behaves like useReducer.

## Features:
  - Provides getter and setter for a given single-level (non-nested) object.
  - Getter and setter names are based on the key names of the input object.
  - See Usage: For a given object with keys name, age and isPopular, the hook returns a set of getters and setters such as name, setName, age, setAge, isPopular, setIsPopular.
  - The hook also provides a generic getter and setter method called get and set.

## Installation

```bash
npm install --save use-quick-state
```

## Usage

```jsx
import React from 'react'
import useQuickState from 'use-quick-state'

const Example = () => {
  const { name, age, isPopular, setName, setAge, setIsPopular } = useQuickState({
    name: 'JavaScript',
    age: 30,
    isPopular: true
  })

  return (
    <form>
      <label>
        Name:
        <input type="text" name={name} onChange={setName} />
      </label>
      <br />
      <label>
        Is popular?:
        <input
          name="isPopular"
          type="checkbox"
          checked={isPopular}
          onChange={setIsPopular} />
      </label>
      <br />
      <label>
        Number of years in use:
        <input
          name="age"
          type="number"
          value={age}
          onChange={setAge} />
      </label>
    </form>
  )
}
```

## License

MIT © [vijeysrc](https://github.com/vijeysrc)

---
