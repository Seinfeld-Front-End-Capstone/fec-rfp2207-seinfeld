import React, {useState, useEffect} from 'react';
import Answer from './Answer.jsx';
import please from '../.././request.js';

const AnswerList = ({q}) => {
  const [answers, setAnswers] = useState([])
  const [length, setLength] = useState(2)
  // console.log('answers : ', answers);

  // console.log('question : ', q);
  useEffect(() => {
    please.getAnswers(q.question_id)
    .then((data) => {
      // console.log('data : ', data.data.results);
      let sorted = data.data.results
      sorted.sort((a, b) => {
        return b.helpfulness - a.helpfulness
      })
      // console.log('sorted answers : ', sorted)
      setAnswers(sorted);
    })
  }, [])

  // console.log('answers : ', answers)

  let sliced = answers.slice(0, length);

  let mappedAnswers = sliced.map((answer, i) => {
    return <Answer answer={answer} key={i}/>
  })

  // console.log('answer Length : ', length);
  return (
    <div>
      <div className='qa-answer-container'>{mappedAnswers}</div>
      { length < answers.length ?
        <div onClick={() => setLength((prevLength) => prevLength + 2)}>load more answers</div>
        :
        <div onClick={() => setLength(2)}>Collapse Answers</div>
      }
    </div>

  )
}

export default AnswerList;