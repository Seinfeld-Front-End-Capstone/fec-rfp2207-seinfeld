import React, {useState} from 'react';
import AnswerList from './AnswerList.jsx';
import AnswerModal from './AnswerModal.jsx';
import please from '../.././request.js';


const Question = ({q}) => {
  // console.log('question : ', q);
  const [helpfulness, setHelpfulness] = useState(q.question_helpfulness)
  const [modal, setModal] = useState(false)

  const handleClick = () => {
    if (q.question_helpfulness === helpfulness) {
      please.markQuestionAsHelpful(q.question_id)
      .then(() => {
        // console.log('success')
        setHelpfulness((prevCount) => prevCount + 1)
      })
    }
  }

  return (
    <div className='qa-question-container'>
      <div className='qa-question-body'>
       <strong><span id='qa-Q'>Q:</span> <span id='qa-space-body'>{q.question_body}</span></strong>
       <span id='qa-question-helpful'>
         Helpful? <span className='qa-pointer' className='qa-yes' onClick={handleClick}>Yes </span>
         ({helpfulness}) <span className='qa-line'>|</span> <span className='qa-pointer' id='qa-answer-line' onClick={() => setModal(true)}>Add Answer</span>
       </span>
      </div>
        <AnswerList q={q}/>
        <AnswerModal modal={modal} q={q} onClose={() => setModal(false)} />
    </div>
  )
}

export default Question;