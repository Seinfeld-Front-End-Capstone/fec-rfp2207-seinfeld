import React from 'react';
import { setupWorker, rest } from 'msw';
import { setupServer } from 'msw/node';
import {render, fireEvent, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RatingsReviews from '../RatingsReviews/RatingsReviews.jsx';


const server = setupServer(
  rest.get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews', (req, res, ctx) => {
    return res(ctx.json({mockedData: 'insert data here'}))
  }),
  rest.get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/meta', (req, res, ctx) => {
    return res(ctx.json({mockedData: 'insert data here'}))
  })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Draft test', () => {
  it('should always have an "add a review" button', () => {
    render(<RatingsReviews productId={65631}/>);
    const headingText = screen.getAllByText(/Add a review/i);
    expect(headingText).toBeTruthy();
  })

  it('should prompt users to add a review when there are none', () => {
    render(<RatingsReviews productId={0}/>)
    expect(screen.getAllByText(/Add a review/i)).toBeTruthy;
    expect(screen.getByText(/add a review/i)).toBeTruthy;
    expect(screen.getAllByText("Be the first to review this product!").toBeTruthy);
    let button = screen.getByRole('button');
    expect(button).toBeTruthy;
  })

  // it('should open up a form', () => {
  //   render(<RatingsReviews productId={65631}/>);
  // })

  // it('should give 3 options to sort', () => {
  //   render(<RatingsReviews productId={65631}/>);
  //   let sortDropdown = screen.getByText('Relevant');
  //   console.log(sortDropdown);
  //   userEvent.click(sortDropdown);
  // })
})

