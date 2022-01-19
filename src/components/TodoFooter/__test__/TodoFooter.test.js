import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import TodoFooter from '../TodoFooter'


const MockTodoFooter = ({numberOfIncompleteTasks}) => {
  return(
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
    </BrowserRouter>
  )
}


describe("Todofooter", () => {
  it ('should render the correct amount of incomplete tasks in footer (in describe block)', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5}/>)
    const paragraphElement = screen.getByText(/5 tasks left/i)
    expect(paragraphElement).toBeInTheDocument()
  })
  
  it ('should render "task" in footer when incomplete tasks is one (in describe block)', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
    const paragraphElement = screen.getByText(/1 task left/i)
    expect(paragraphElement).toBeInTheDocument()
  })
})

it ('should render footer with certain characteristics', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5}/>)
  const paragraphElement = screen.getByText(/5 tasks left/i)
  expect(paragraphElement).toBeInTheDocument()
  expect(paragraphElement).toBeTruthy()
  expect(paragraphElement).toBeVisible()
  expect(paragraphElement).toContainHTML("p")
  expect(paragraphElement).not.toBeFalsy()
  // expect(paragraphElement).not.toBeVisible()  // will fail

  // other ways to check text without .getByText
  const paragraphElement2 = screen.getByTitle("jeffsTitle")
  expect(paragraphElement2).toHaveTextContent("5 tasks left")
  expect(paragraphElement2.textContent).toBe("5 tasks left")
  // expect(paragraphElement2.value).toBe("5 tasks left") // will fail, only get value from an input element
})

it ('should render the correct amount of incomplete tasks in footer', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5}/>)
  const paragraphElement = screen.getByText(/5 tasks left/i)
  expect(paragraphElement).toBeInTheDocument()
})

it ('should render "task" in footer when incomplete tasks is one', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
  const paragraphElement = screen.getByText(/1 task left/i)
  expect(paragraphElement).toBeInTheDocument()
})