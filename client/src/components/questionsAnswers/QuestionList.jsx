import React from 'react';
import Question from './Question.jsx';

var QuestionList = (props) => {

  let sliceQuestions = props.questions.slice(0, props.length);
  // console.log('SLICED : ', sliced);
  let mappedQuestions = sliceQuestions.map((question, i) => {
    return <Question q={question} key={i}/>
  })

  return <div className='qa-question-list'>{mappedQuestions}</div>
}

export default QuestionList;