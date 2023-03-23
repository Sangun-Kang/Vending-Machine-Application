import { render, screen } from '@testing-library/react'
import { VendingMachineApp } from './VendingMachineApp'

test('renders learn react link', () => {
  render(<VendingMachineApp />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
});
