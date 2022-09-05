import React, {useState, useEffect} from 'react';
import Answer from './Answer.jsx';
import please from '../.././request.js';

const AnswerList = ({q}) => {
  const [answers, setAnswers] = useState([])
  const [length, setLength] = useState(2)
  // console.log('question : ', q);
  useEffect(() => {
    please.getAnswers(q.question_id)
    .then((data) => {
      // console.log('data : ', data.data.results);
      let sortedAnswers = data.data.results
      sortedAnswers.sort((a, b) => {
        return b.helpfulness - a.helpfulness
      })
      // console.log('sorted answers : ', sorted)
      setAnswers(sortedAnswers);
    })
  }, [])

  // console.log('answers : ', answers)

  let slicedAnswers = answers.slice(0, length);

  let mappedAnswers = slicedAnswers.map((answer, i) => {
    return <Answer answer={answer} key={i}/>
  })

  // console.log('answers : ', answers);

  if (answers.length <= 2) {
    return(
      <div className='qa-answer-container'>{mappedAnswers}</div>
    )
  }
  // console.log('answer Length : ', length);
  return (
    <div>
      <div className='qa-answer-container'>{mappedAnswers}</div>
      { length < answers.length ?
        <div onClick={() => setLength((prevLength) => prevLength + 2)} className='qa-load-answers'>load more answers</div>
        :
        <div onClick={() => setLength(2)} className='qa-load-answers'>Collapse Answers</div>
      }
    </div>

  )
}

export default AnswerList;