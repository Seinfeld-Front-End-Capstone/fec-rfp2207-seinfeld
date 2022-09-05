import React, {useState} from 'react';
import please from '../.././request.js';

const Answer = ({answer}) => {
  // console.log('answers props : ', answer)
  const [answerCount, setAnswerCount] = useState(answer.helpfulness)
  const [isReported, setReported] = useState('Report')

  // let q = props.q;
  // let keys = Object.keys(q.answers)[0];
  // let answer = q.answers[keys];
  // if (!answer) {
  //   return <div>No more answers!</div>
  // }
  let date = answer.date.slice(0, 10);

  // console.log('answer : ', answer);
  const handleCount = () => {
    if (answer.helpfulness === answerCount) {
      please.markAnswerAsHelpful(answer.answer_id)
      .then(() => {
        // console.log('success')
        setAnswerCount((count) => count + 1)
      })
    }
  }

  const handleClick = () => {
    if (isReported === 'Report') {
      please.reportAnswer(answer.answer_id)
      .then(() => {
        // console.log('success')
        setReported('Reported')
      })
    }
  }

  return (
    <div className='qa-answer-container'>
      A: {answer.body}
      <span>by {answer['answerer_name']}, {date}  | Helpful?
        <span onClick={handleCount}>Yes </span>
          ({answerCount}) | <span onClick={handleClick}>{isReported}</span>
          {answer.photos.map((img, i) => (<img src={img.url} key={i} alt="picture"/>))}
      </span>
    </div>
  )
}

export default Answer;