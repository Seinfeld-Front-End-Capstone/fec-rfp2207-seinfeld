import React from 'react';
import Overview from './overview/Overview.jsx';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import QuestionsMaster from './questionsAnswers/QuestionsMaster.jsx'

export default () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Overview/>
      <RatingsReviews/>
      <QuestionsMaster/>
    </div>
  )
}