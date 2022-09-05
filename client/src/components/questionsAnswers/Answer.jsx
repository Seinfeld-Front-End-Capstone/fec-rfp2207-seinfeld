import React, {useState} from 'react';
import please from '../.././request.js';
import moment from 'moment';
import widget from '../helpers/widget.js';

const Answer = ({answer}) => {
  // console.log('answers props : ', answer)
  const [answerCount, setAnswerCount] = useState(answer.helpfulness)
  const [isReported, setReported] = useState('Report');
  const [photos, setPhotos] = useState('');

  const formattedDate = moment(answer.date).format('ll');

  const handleCount = () => {
    if (answer.helpfulness === answerCount) {
      please.markAnswerAsHelpful(answer.answer_id)
      .then(() => setAnswerCount((count) => count + 1))
      .catch((err) => console.log(err))
    }
  }

  const handleClick = () => {
    if (isReported === 'Report') {
      please.reportAnswer(answer.answer_id)
      .then(() => setReported('Reported'))
      .catch((err) => console.log(err))
    }
  }

  return (
    <div className='qa-answer-container'>
      <span id='qa-A'>A:</span> {answer.body}
      <div className='qa-answer-body'>
        <div id='qa-answer-name'>
          by {answer['answerer_name']}, {formattedDate}
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