import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
  return(
    <BrowserRouter>
      <FollowersList/>
    </BrowserRouter>
  )
}

describe("FollowersList", () => {

  beforeAll(() => {
    console.log("RUNNING ONCE BEFORE ALL TESTs")
  })

  beforeEach(() => {
    console.log("RUNNING BEFORE EACH TEST")
  })

  it('should have a jeff-0 element - testing async assertions', async () => {
    render(<MockFollowersList/>);
    const followerElement = await screen.findByTestId("jeff-0");
    screen.debug() // console logs the element!
    expect(followerElement).toBeInTheDocument();
  })

  it('should have multiple jeff elements - testing async assertions', async () => {
    render(<MockFollowersList/>);
    // const followerElements = await screen.findAllByTestId("jeff"); //can't use "" with findAll - need regular expression
    const followerElements = await screen.findAllByTestId(/jeff/);
    expect(followerElements.length).toBe(1);  // 1 if using mocks, otherwise 5 - see src/__mocks__/axios.js
  })


  afterAll(() => {
    console.log("RAN ONCE AFTER ALL TESTs")
  })
})
