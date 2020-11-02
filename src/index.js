import { useReducer } from 'react'

/* eslint-disable space-before-function-paren */
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

const fromEventObject = ({ target: { type, value, checked } }) =>
  type === 'checkbox' ? checked : value

const useQuickState = (initialValue, passEventObjectToSetters) => {
  const [state, dispatch] = useReducer(
    (state, { key, value }) => ({
      ...state,
      [key]: value
    }),
    initialValue
  )
  const get = key => state[key]
  const set = curry((key, value) => {
    dispatch({
      type: 'SET',
      key,
      value: passEventObjectToSetters ? fromEventObject(value) : value
    })
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

export default useQuickState
