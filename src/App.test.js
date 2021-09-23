import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const text = screen.getByText(/Hi there/);
  expect(text).toBeInTheDocument();
});
