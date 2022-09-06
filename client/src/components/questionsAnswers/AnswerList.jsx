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
      let sortedAnswers = data.data.results
      sortedAnswers.sort((a, b) => {
        return b.helpfulness - a.helpfulness
      })

      for (const answer of sortedAnswers) {
        if (answer['answerer_name'].toLowerCase() === 'seller') {
          let indexOfSeller = sortedAnswers.indexOf(answer)
          let removeSeller = sortedAnswers.splice(indexOfSeller, indexOfSeller)
          sortedAnswers.unshift(removeSeller[0]);
        }
      }
      // console.log('sorted : ', sortedAnswers);
      setAnswers(sortedAnswers);
    })
  }, [])

  // console.log('question answers : ', q)

  let slicedAnswers = answers.slice(0, length);

  let mappedAnswers = slicedAnswers.map((answer, i) => {
    return <Answer answer={answer} index={i} key={i}/>
  })

  if (answers.length <= 2) {
    return(
      <div className='qa-answer-container'>{mappedAnswers}</div>
    )
  }

  return (
    <div>
      <div className='qa-answer-container'>{mappedAnswers}</div>
      { length < answers.length ?
        <div onClick={() => setLength((prevLength) => prevLength + 2)} className='qa-load-answers'>load more answers</div>
        :
        <div onClick={() => setLength(2)} className='qa-load-answers'>collapse answers</div>
      }
    </div>

  )
}

export default AnswerList;