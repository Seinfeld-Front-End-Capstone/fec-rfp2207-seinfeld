import React from 'react';
import ReviewList from './ReviewList.jsx';
import ExampleReviews from './ExampleReviews.js';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsOnDisplay: ExampleReviews
    };
  }

  render() {
    return (
      <div>
        <h1>Section for Ratings and Reviews</h1>
        <ReviewList reviews={this.state.reviewsOnDisplay}/>
      </div>
    )
  }

}

export default RatingsReviews;