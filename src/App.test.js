import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TODO', () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo/i);
  expect(linkElement).toBeInTheDocument();
});
