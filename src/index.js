import { useReducer } from 'react'

const useEasyState = initialValue => {
  const [state, dispatch] = useReducer(
    (state, { key, value }) => ({
      ...state,
      [key]: value
    }),
    initialValue
  )
  const get = key => state[key]
  const set = key => value =>
    dispatch({
      type: 'SET',
      key,
      value
    })
  const helpers = Object.keys(initialValue).reduce((acc, curr) => {
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

export default useEasyState
