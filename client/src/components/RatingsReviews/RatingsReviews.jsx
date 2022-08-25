import React from 'react';
import ReviewList from './ReviewList.jsx';
import ExampleReviews from './ExampleReviews.js';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsOnDisplay: [],
      listOfReviews: []
    };
  }
  componentDidMount() {
    this.setState({
      reviewsOnDisplay: ExampleReviews.slice(0, 2),
      listOfReviews: ExampleReviews
    })
  }

  render() {
    return (
      <div id="RR-ratings-reviews-ctn">
        <h1>Section for Ratings and Reviews</h1>
        <div id="RR-breakdown-ctn">
          Ratings breakdown
        </div>
        <div id="RR-reviews-ctn">
          <div id="RR-header-sort">
            Header and sort
          </div>
          <ReviewList reviews={this.state.reviewsOnDisplay}/>
          <div id="more-menu">
            {this.state.listOfReviews.length > 2 && <button>MORE REVIEWS</button>}
            <button>ADD A REVIEW +</button>

          </div>
        </div>
      </div>
    )
  }

}

export default RatingsReviews;