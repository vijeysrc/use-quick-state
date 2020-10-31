import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import useQuickState from './'

describe('useQuickState - UI / Component', () => {
  it('should set initial values correctly', () => {
    render(<Example />)
    expect(screen.getByTestId('name-value').textContent).toBe('JavaScript')
    expect(screen.getByTestId('age-value').textContent).toBe('30')
    expect(screen.getByTestId('popular-value').textContent).toBe('Popular')
  })

  it('should have the setters that correctly set values', () => {
    render(<Example />)

    fireEvent.change(screen.getByLabelText('Name:'), {
      target: { value: 'Backbone' }
    })
    fireEvent.change(screen.getByLabelText('Number of years in use:'), {
      target: { value: 10 }
    })
    fireEvent.click(screen.getByLabelText('Is popular?:'))

    expect(screen.getByTestId('name-value').textContent).toBe('Backbone')
    expect(screen.getByTestId('age-value').textContent).toBe('10')
    expect(screen.getByTestId('popular-value').textContent).toBe('Not Popular')
  })
})

const eCbk = cbk => ({ target: { type, value, checked } }) =>
  cbk(type === 'checkbox' ? checked : value)

const Example = () => {
  const { name, age, isPopular, setName, setAge, setIsPopular } = useQuickState(
    {
      name: 'JavaScript',
      age: 30,
      isPopular: true
    }
  )

  return (
    <form>
      <div data-testid="name-value">{name}</div>
      <div data-testid="age-value">{age}</div>
      <div data-testid="popular-value">
        {isPopular ? 'Popular' : 'Not popular'}
      </div>
      <hr />
      <label>
        Name:
        <input type="text" name={name} onChange={eCbk(setName)} />
      </label>
      <br />
      <label>
        Is popular?:
        <input
          name="isPopular"
          type="checkbox"
          checked={isPopular}
          onChange={eCbk(setIsPopular)}
        />
      </label>
      <br />
      <label>
        Number of years in use:
        <input name="age" type="number" value={age} onChange={eCbk(setAge)} />
      </label>
    </form>
  )
}
