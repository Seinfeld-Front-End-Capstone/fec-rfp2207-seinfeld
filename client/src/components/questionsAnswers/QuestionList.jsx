import React from 'react';
import Question from './Question.jsx';

var QuestionList = (props) => {
  let questions = props.questions.slice(0, props.length);

  let mappedQuestions = questions.map((question, i) => {
    return <Question productName={props.productName} q={question} key={i}/>
  })

  return <div className='qa-question-list'>{mappedQuestions}</div>
}

export default QuestionList;