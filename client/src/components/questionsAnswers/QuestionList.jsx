import React from 'react';
import Question from './Question.jsx';

var QuestionList = (props) => {

  let sliced = props.questions.slice(0, props.length);
  // console.log('SLICED : ', sliced);
  let array = sliced.map((question, i) => {
    return <Question q={question} key={i}/>
  })

  return <div className='qa-question-list'>{array}</div>
}

export default QuestionList;