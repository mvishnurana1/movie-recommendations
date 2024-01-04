import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Movie Recommendation App/i);
  expect(linkElement).toBeInTheDocument();
});
