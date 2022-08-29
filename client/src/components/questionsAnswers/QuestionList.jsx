import React from 'react';
import Question from './Question.jsx';

var QuestionList = (props) => {

  let questions = props.questions.results;

  // console.log('MAPPED ARRAY : ', questions)

  let array = questions.map((question, i) => {
    // console.log('MAPPPP : ', question, i)
    return <Question q={question} key={i}/>
  })
  return <div className='qa-question-list'>{array}</div>
}

export default QuestionList;