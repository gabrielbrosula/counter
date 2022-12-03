// import necessary react testing library helpers here
// import the Counter component here
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';

const setup = () => {
  render(<Counter />);
}

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  setup();
  const counterText = screen.getByText(/Counter/i);
  expect(counterText).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  setup();
  expect(screen.getByText(/0/i)).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  setup();
  const counterText = screen.getByTestId("count")?.textContent;
  const counterNum = Number(counterText);
  fireEvent.click(screen.getByText('+'))

  expect(screen.getByTestId("count")?.textContent).toBe((counterNum + 1).toString());
});

test('clicking - increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  setup();
  const counterText = screen.getByTestId("count")?.textContent;
  const counterNum = Number(counterText);
  fireEvent.click(screen.getByText(/-/i))

  expect(screen.getByTestId("count")?.textContent).toBe((counterNum - 1).toString());
});
