import React from 'react';

const AnswerModal = ({modal, onClose}) => {
  const asterisk = <span id='qa-asterisk'>*</span>
  if (modal) {
    return (
      <div className='qa-answer-modal'>
        <p onClick={onClose}>X</p>
        <p>Submit Your Answer</p>
        <div>[Product Name]: [Question Body]</div>

        <div>
          <div>Your Answer{asterisk}</div>
          <input type='text' maxLength='1000'></input>
        </div>

        <div>
          <div>What is your nickname?</div>
          <input type='text' placeholder='Example: jack543!' maxLength='60'></input>
          For privacy reasons, do not use your full name or email address.
        </div>

        <div>
          <div>Your email</div>
          <input type='text' placeholder='jack@email.com' maxLength='60'></input>
          For authentication reasons, you will not be emailed.
        </div>

        <div>
          Upload Photos: <button>Choose Files</button>
        </div>
      </div>
    )
  }
}

export default AnswerModal;