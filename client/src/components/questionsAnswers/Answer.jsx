import React, {useState} from 'react';

const Answer = ({answer, index}) => {
  // console.log('answers props : ', answer)
  const [answerCount, setAnswerCount] = useState(answer.helpfulness)
  const [isReported, setReported] = useState('Report')

  let date = answer.date.slice(0, 10);
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

  if (!index) {
    return (
      <div className='qa-answer-container'>
      <span id='qa-A'>A:</span> {answer.body}
      <div className='qa-answer-body'>
        <div id='qa-answer-name'>
          by {answer['answerer_name']}, {date}
          <span id='qa-answer-helpful'>
            <span className='qa-line'>|</span> Helpful?
            <span className='qa-pointer' className='qa-yes' onClick={handleCount}>Yes</span>
            <span id='qa-answer-count'>({answerCount})</span>
            <span className='qa-line'>|</span>
            <span onClick={handleClick}>{isReported}</span>
          </span>
          <div id='qa-img-container'>
            {answer.photos.map((img, i) => (<img className='qa-answer-img' src={img.url} key={i} alt="picture"/>))}
          </div>
        </div>
      </div>
    </div>
    )
  }

  return (
    <div className='qa-answer-body'>
      <div id='qa-answer-name'>
        by {answer['answerer_name']}, {date}
        <span id='qa-answer-helpful'>
          <span className='qa-line'>|</span> Helpful?
          <span className='qa-pointer' className='qa-yes' onClick={handleCount}>Yes</span>
          <span id='qa-answer-count'>({answerCount})</span>
          <span className='qa-line'>|</span>
          <span onClick={handleClick}>{isReported}</span>
        </span>
        <div id='qa-img-container'>
          {answer.photos.map((img, i) => (<img className='qa-answer-img' src={img.url} key={i} alt="picture"/>))}
        </div>
      </div>
    </div>
  )
}

export default Answer;