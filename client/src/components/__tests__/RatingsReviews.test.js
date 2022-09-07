import {render, fireEvent, screen} from '@testing-library/react'
import RatingsReviews from '../RatingsReviews/RatingsReviews.jsx';


describe('Draft test', () => {
  it('tests something', () => {
    render(<RatingsReviews productId={'65631'}/>);

    const headingText = screen.getAllByText(/review/i)
    expect(true).toBe(true);
    expect(headingText).toBeTruthy();
  })
})

