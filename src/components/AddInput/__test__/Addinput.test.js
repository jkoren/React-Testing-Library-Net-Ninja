import { render, screen, fireEvent } from '@testing-library/react'
import AddInput from '../AddInput'


const mockedSetTodo = jest.fn()   // this is a mock function

it ('should have empty input when add button is clicked', async () => {
  render(
    <AddInput
      todos={[]}
      setTodos={mockedSetTodo}
    />)
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
  const buttonElement = screen.getByRole("button", { name: /add/i })
  fireEvent.change(inputElement, {target: {value: "Go Grocery Shopping"} })
  fireEvent.click(buttonElement)
  expect(inputElement.value).toBe("")
})

it ('should render the input when it is typed - tested with fireevent', async () => {
  render(
    <AddInput
      todos={[]}
      setTodos={mockedSetTodo}
    />)
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
  fireEvent.change(inputElement, {target: {value: "Go Grocery Shopping"}})
  expect(inputElement.value).toBe("Go Grocery Shopping")
})

it ('should be able to type into input', async () => {
  render(
    <AddInput
      todos={[]}
        // setTodos={() => {}}  // this would work
      setTodos={mockedSetTodo}  // but this is clearer
    />)
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
  expect(inputElement).toBeInTheDocument()
})

it ('should be able to type into input', async () => {
  render(
    <AddInput
      todos={[]}
      setToDos={mockedSetTodo}
    />)
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
  expect(inputElement).toBeInTheDocument()
})