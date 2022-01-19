import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('testing assertions', async () => {
  // 9 - get by text in a component
  render(<Header title="Jeffs Header"/>);
  const headingElement = screen.getByText(/jeffs header/i);
  expect(headingElement).toBeInTheDocument();
})

it('testing getAllByRole', async () => {
  // 8 - testing get allByText
  render(<Header title="Jeffs Header"/>);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(4)
})

it('testing query by text - to test for non-existence', async () => {
  // 7 - testing queryby by text in a component
  render(<Header title="Jeffs Header"/>);
  const headingElement = screen.queryByText(/bobs header/i);
  expect(headingElement).not.toBeInTheDocument();
})

it('testing find by text', async () => {
  // 6 - get by text in a component
  render(<Header title="Jeffs Header"/>);
  const headingElement = await screen.findByText(/jeffs header/i);
  expect(headingElement).toBeInTheDocument();
})

it('testing get by ID', async () => {
  // 5 - get by ID
  render(<Header title="Jeffs Header"/>);
  const headingElement = screen.getByTestId("fishid")
  expect(headingElement).toBeInTheDocument();
})

it('testing semantic search - get by title', async() => {
  // 4 - get by title
  render(<Header title="Jeffs Header"/>);
  const headingElement = screen.getByTitle("dogHeader")
  expect(headingElement).toBeInTheDocument();
})

// it('should not pass this test', () => {
//   render(<Header title="Jeffs Header"/>);
//   const paragraphElement = screen.getByRole("paragraph") // this will fail, as there is no paragraph
// })

it('testing get by Role', () => {
  // 3 - get by role
  render(<Header title="Jeffs Header"/>);
  // const headingElement = screen.getByRole("heading") // will fail if there are 2 headers
  const headingElement = screen.getByRole("heading", { name: "Jeffs Header"})
  expect(headingElement).toBeInTheDocument();

  // const paragraphElement = screen.getByRole("paragraph") // this will fail, as there is no paragraph

  // 2 - get by text in a component
  // render(<Header title="Jeffs Header"/>);
  // const headingElement = screen.getByText(/jeffs header/i);
  // expect(headingElement).toBeInTheDocument();

  // original App.test.js get by text on the whole App
  // render(<App />);
  // const linkElement = screen.getByText(/Todo/i);
  // expect(linkElement).toBeInTheDocument();
});

// original - created by "create react app"
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
