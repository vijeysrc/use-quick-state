import { renderHook, act } from '@testing-library/react-hooks'
import useQuickState from './'

describe('useQuickState', () => {
  const setup = () =>
    renderHook(() =>
      useQuickState({
        name: 'JavaScript',
        age: 30,
        isPopular: true
      })
    )

  it('should take up an initial object and return getters and setters', () => {
    const { result } = setup()

    expect(result.current.name).toBe('JavaScript')
    expect(result.current.age).toBe(30)
    expect(result.current.isPopular).toBe(true)

    expect(typeof result.current.setName).toBe('function')
    expect(typeof result.current.setAge).toBe('function')
    expect(typeof result.current.setIsPopular).toBe('function')
  })

  it('should have the setters that correctly set values', () => {
    const { result } = setup()

    act(() => {
      result.current.setName('Backbone')
      result.current.setAge(10)
      result.current.setIsPopular(false)
    })

    expect(result.current.name).toBe('Backbone')
    expect(result.current.age).toBe(10)
    expect(result.current.isPopular).toBe(false)
  })

  it('should have the setters working correctly for all kinds of currying ', () => {
    const { result } = setup()

    act(() => {
      result.current.set('name')('React')
      result.current.set('age')(6)
      result.current.set('isPopular')(true)
    })

    expect(result.current.get('name')).toBe('React')
    expect(result.current.get('age')).toBe(6)
    expect(result.current.get('isPopular')).toBe(true)

    act(() => {
      const setName = result.current.set('name')
      const setAge = result.current.set('age')
      const setIsPopular = result.current.set('isPopular')

      setName('jQuery')
      setAge(15)
      setIsPopular(false)
    })

    expect(result.current.get('name')).toBe('jQuery')
    expect(result.current.get('age')).toBe(15)
    expect(result.current.get('isPopular')).toBe(false)
  })
})
