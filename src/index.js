import { useReducer } from 'react'

export default useEasyState = initialValue => {
  const [state, dispatch] = useReducer(
      (state, { key, value }) => ({
        ...state,
        [key]: value
      }),
      initialValue
    ),
    get = key => state[key],
    set = key => value =>
      dispatch({
        type: 'SET',
        key,
        value
      }),
    helpers = Object.keys(initialValue).reduce((acc, curr) => {
      const setKey = `set${curr.charAt(0).toUpperCase()}${curr.substr(1)}`
      return {
        ...acc,
        [setKey]: set(curr)
      }
    }, {})

  return {
    get,
    set,
    ...state,
    ...helpers
  }
}
