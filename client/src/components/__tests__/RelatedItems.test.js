import {render, fireEvent, screen} from '@testing-library/react'
import RelatedList from '../rc/RelatedList.jsx';


describe('List test 1', () => {
  it('should render at least one card', () => {
    render(<RelatedList productId={'65631'}/>);

    const headingText = screen.getAllByText(/related/i)
    expect(true).toBe(true);
    expect(headingText).toBeTruthy();
  })
})