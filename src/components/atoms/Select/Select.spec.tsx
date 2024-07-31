import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Select } from './Select'

describe('Select Component', () => {
  test('should render with the correct value and children', () => {
    render(
      <Select value="option1" onChange={() => undefined} disabled={false}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
    )

    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toHaveValue('option1')
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
  })

  test('should call onChange handler with the correct event when an option is selected', async () => {
    const handleChange = jest.fn()
    render(
      <Select value="option1" onChange={handleChange} disabled={false}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
    )

    const selectElement = screen.getByRole('combobox')

    fireEvent.change(selectElement, { target: { value: 'option2' } })

    expect(handleChange).toHaveBeenCalledTimes(1)

    waitFor(() => {
      const [event] = handleChange.mock.calls[0]
      expect(event.target.value).toBe('option2')
    })
  })

  test('should be disabled when the disabled prop is true', () => {
    render(
      <Select value="option1" onChange={() => {}} disabled={true}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
    )

    expect(screen.getByRole('combobox')).toBeDisabled()
  })
})
