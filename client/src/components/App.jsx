import React from 'react';
import Overview from './overview/Overview.jsx';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import QuestionsList from './questionsAnswers/QuestionsList.jsx'

export default () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Overview/>
      <RatingsReviews/>
      <QuestionsList/>
    </div>
  )
}