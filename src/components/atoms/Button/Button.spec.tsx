import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@/components/atoms/Button/Button'

describe('Button Component', () => {
  test('should render with the correct text', () => {
    render(<Button>Click Me</Button>)
    const buttonElement = screen.getByRole('button', { name: /Click Me/i })
    expect(buttonElement).toBeInTheDocument()
  })

  test('should apply custom class names', () => {
    render(<Button className="custom-class">Click Me</Button>)
    const buttonElement = screen.getByRole('button', { name: /Click Me/i })
    expect(buttonElement).toHaveClass('custom-class')
  })

  test('should call onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
    const buttonElement = screen.getByRole('button', { name: /Click Me/i })
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('should be disabled when passed the disabled prop', () => {
    render(<Button disabled>Click Me</Button>)
    const buttonElement = screen.getByRole('button', { name: /Click Me/i })
    expect(buttonElement).toBeDisabled()
  })
})
