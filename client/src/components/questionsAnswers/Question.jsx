import React, {useState} from 'react';
import AnswerList from './AnswerList.jsx';
// import Answer from './Answer.jsx';

const Question = ({q}) => {
  const [helpfulness, setHelpfulness] = useState(q.question_helpfulness)

  // console.log('QUESTIONS : ', q)

  return (
    <div className='qa-question-container'>
      <div>Q: {q.question_body} Helpful? <span onClick={() => setHelpfulness((prevCount) => prevCount + 1)}>Yes</span> ({helpfulness})  |  Add Answer</div><AnswerList q={q}/>

    </div>
  )
}

export default Question;