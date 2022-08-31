import React, {useState} from 'react';
import AnswerList from './AnswerList.jsx';
// import Answer from './Answer.jsx';

const Question = ({q}) => {
  // console.log('question : ', q);
  const [helpfulness, setHelpfulness] = useState(q.question_helpfulness)

  const handleClick = () => {
    if (q.question_helpfulness === helpfulness) {
      setHelpfulness((prevCount) => prevCount + 1)
    }
  }

  return (
    <div className='qa-question-container'>
      <div>Q: {q.question_body} Helpful? <span onClick={handleClick}>Yes</span> ({helpfulness})  |  Add Answer</div><AnswerList q={q}/>
    </div>
  )
}

export default Question;