import React, { useState } from 'react';
import please from '../.././request.js';
import moment from 'moment';
import widget from '../helpers/widget.js';

const Answer = ({ answer, index }) => {
  // console.log('answers props : ', answer)
  const [answerCount, setAnswerCount] = useState(answer.helpfulness)
  const [isReported, setReported] = useState('Report');
  // const [photos, setPhotos] = useState('');
  const [imageModal, setImageModal] = useState(null);

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

  // if (!index) {
  //   return (
  //     <div className='qa-answer-container'>
  //     <span id='qa-A'>A:</span> {answer.body}
  //     <div id='qa-img-container'>
  //       {answer.photos.map((img, i) => (<img className='qa-answer-img' src={img.url} key={i} alt="picture"/>))}
  //     </div>
  //     <div className='qa-answer-body'>
  //       <div id='qa-answer-name'>
  //         by {answer['answerer_name']}, {formattedDate}
  //         <span id='qa-answer-helpful'>
  //           <span className='qa-line'>|</span> Helpful?
  //           <span className='qa-pointer' className='qa-yes' onClick={handleCount}>Yes</span>
  //           <span id='qa-answer-count'>({answerCount})</span>
  //           <span className='qa-line'>|</span>
  //           <span className='qa-report' onClick={handleClick}>{isReported}</span>
  //         </span>
  //       </div>
  //     </div>
  //   </div>
  //   )
  // }

  return (
    <div className='qa-answer-container'>
      <div className='qa-answer-body'>
        <span id='qa-body'>{!index && <span id='qa-A'>A:</span>} {answer.body}</span>
        <div id='qa-img-container'>
          {answer.photos.map((img, i) =>
            <div className={imageModal === i ? 'qa-img-modal' : ''} onClick={() => setImageModal(i)}>
              <img className='qa-answer-img' src={img.url} key={i} alt="picture" />
              {imageModal === i && <button className='qa-img-close' onClick={(e) => { e.stopPropagation() || setImageModal(null) }}>&times;</button>}
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
  )
}

export default Answer;