import React from 'react';
import Answer from './Answer.jsx';

const Question = ({q}) => {

  // console.log('questions props : ', q.question_body)

  return (
    <div className='qa-question-card'>
      <div>Q: {q.question_body} Helpful? Yes {q.question_helpfulness}  |  Add Answer</div>
      <Answer q={q}/>
    </div>
   )
}

export default Question;