import React from 'react';
import { setupWorker, rest } from 'msw';
import { setupServer } from 'msw/node';
import {render, fireEvent, screen} from '@testing-library/react'
import RatingsReviews from '../RatingsReviews/RatingsReviews.jsx';

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

  it('should open up a form', () => {
    render(<RatingsReviews productId={65631}/>);
  })
})

