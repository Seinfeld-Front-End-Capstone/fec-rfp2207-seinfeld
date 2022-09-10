import React, { useState, useEffect } from 'react';
import Answer from './Answer.jsx';
import please from '../.././request.js';

const AnswerList = ({ q }) => {
  const [answers, setAnswers] = useState([])
  const [length, setLength] = useState(2)

  useEffect(() => {
    please.getAnswers(q.question_id)
      .then((data) => {
        console.log('data : ', data.data.results)
        const sortedAnswers = data.data.results
          .sort((a, b) => {
            if (a.answerer_name.toLowerCase() === "seller") {
              return -1;
            } else if (b.answerer_name.toLowerCase() === "seller") {
              return 1;
            } else {
              return b.helpfulness - a.helpfulness;
            }
          })
        setAnswers(sortedAnswers);
      })
  }, [q])

  let slicedAnswers = answers.slice(0, length);

  let mappedAnswers = slicedAnswers.map((answer, i) => {
    return <Answer answer={answer} index={i} key={i} />
  })

  if (answers.length <= 2) {
    return (
      <div className='qa-answer-container'>{mappedAnswers}</div>
    )
  }

  return (
    <div>
      <div className='qa-answer-container'>{mappedAnswers}</div>
      {length < answers.length ?
        <div onClick={() => setLength((prevLength) => prevLength + 2)} className='qa-load-answers'>see more answers</div>
        :
        <div onClick={() => setLength(2)} className='qa-load-answers'>collapse answers</div>
      }
    </div>

  )
}

export default AnswerList;