import React, {useState} from 'react';

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
      setAnswerCount((count) => count + 1)
    }
  }

  const handleClick = () => {
    if (isReported === 'Report') {
      setReported('Reported')
    }
  }

  return (
    <div className='qa-answer-container'>
      <span id='qa-A'>A:</span> {answer.body}
      <div className='qa-answer-body'>
        <div id='qa-answer-name'>
          by {answer['answerer_name']}, {date}
          <span id='qa-answer-helpful'>
          <span className='qa-line'>|</span> Helpful?
          <span onClick={handleCount}>  Yes ({answerCount})</span>
          <span className='qa-line'>|</span>
          <span onClick={handleClick}>{isReported}</span>
          </span>
          {answer.photos.map((img, i) => (<img className='qa-answer-img' src={img.url} key={i} alt="picture"/>))}
        </div>
      </div>

    </div>
  )
}

export default Answer;