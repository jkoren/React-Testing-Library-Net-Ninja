import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Todo from '../Todo';


const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo/>
    </BrowserRouter>
  )
}

it('testing Todo single item - integration testing', async () => {
  render(<MockTodo/>);
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../)
  const buttonElement = screen.getByRole("button", { name: /Add/i} )
  fireEvent.change(inputElement, { target: {value: "Go Grocery Shopping"} })
  fireEvent.click(buttonElement)
  const divElement = screen.getByText(/Go Grocery Shopping/)  // to a certain degree this is an assertion
  expect(divElement).toBeInTheDocument()
})

const addTask = (tasks) => {
  tasks.forEach(task => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../)
    const buttonElement = screen.getByRole("button", { name: /Add/i} )
    fireEvent.change(inputElement, { target: {value: {task}} })
    fireEvent.click(buttonElement)
  });
}

it('testing Todo multiple items - integration testing', async () => {
  render(<MockTodo/>);
  addTask(["Go Grocery Shopping", "Pet Cat", "Wash Hands"])

  const divElements = screen.getAllByTestId("task-container")  // to a certain degree this is an assertion
  expect(divElements.length).toBe(3)
})

it('should not have completed class when initially rendered - integration testing', async () => {
  render(<MockTodo/>);
  addTask(["Go Grocery Shopping"])

  const divElement = screen.getByTestId("task-container") 
  // const divElement = screen.getByText(/Go Grocery Shopping/i)  // not sure why this didn't work
  expect(divElement).not.toHaveClass("todo-item-active")
})

it('should have completed class when clicked - integration testing', async () => {
  render(<MockTodo/>);
  addTask(["Go Grocery Shopping"])

  const divElement = screen.getByTestId("task-container") 
  fireEvent.click(divElement)
  expect(divElement).toHaveClass("todo-item-active")
})