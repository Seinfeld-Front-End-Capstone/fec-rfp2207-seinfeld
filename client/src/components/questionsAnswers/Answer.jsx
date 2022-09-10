import React, { useState } from 'react';
import please from '../.././request.js';
import moment from 'moment';
import { MdCancel } from 'react-icons/md';
import widget from '../helpers/widget.js';

const Answer = ({ answer, index }) => {
  const [answerCount, setAnswerCount] = useState(answer.helpfulness)
  const [isReported, setReported] = useState('Report');
  const [imageModal, setImageModal] = useState(null);
  const [image, setImage] = useState('')

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
    <>
      <div id={image && 'qa-modal-container'}>
        <div id='qa-popout-img'>
          <img src={image} />
          {image && <MdCancel className='qa-img-close' onClick={() => { setImage('') }} />}
        </div>
      </div>
      <div className='qa-answer-container'>
        <div className='qa-answer-body'>
          <span id='qa-body'>{!index && <span id='qa-A'>A:</span>} {answer.body}</span>
          <div id='qa-img-container'>
            {answer.photos.map((img, i) =>
              <div className={image ? 'qa-img-modal' : ''} onClick={() => setImage(img.url)}>
                <img className='qa-answer-img' src={img.url} key={i} alt="picture" />
              </div>
            )}
          </div>
          <div id='qa-answer-name'>
            by {answer['answerer_name']}, {formattedDate}
            <span id='qa-answer-helpful'>
              <span className='qa-line'>|</span> Helpful?
              <span className='qa-pointer' className='qa-yes' onClick={handleCount}>Yes</span>
              <span id='qa-answer-count'>({answerCount})</span>
              <span className='qa-line'>|</span>
              <span className='qa-report' onClick={handleClick}>{isReported}</span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Answer;