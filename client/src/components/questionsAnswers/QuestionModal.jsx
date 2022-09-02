import React from 'react';

const QuestionModal = ({modal, onClose}) => {
  const asterisk = <span id='qa-asterisk'>*</span>
  if (!modal) return null
  return (
    <div className='qa-question-modal'>
      <p onClick={onClose} className='close-button'>X</p>
        <h3>Ask Your Question!</h3>
        <h5>About the [product name] Name</h5>

        <div>
          <p>Your Question{asterisk}</p>
          <input type='text' maxLength='1000'></input>
        </div>

        <div>
          <p>What is your nickname{asterisk}</p>
          <input type='text' placeholder='Example: jackson11!' maxLength='60'></input>
          <div>For privacy reasons, do not use your full name or email address</div>
        </div>

        <div>
          <p>Your email{asterisk}</p>
          <input type='text' placeholder='Why did you like the product or not?'></input>
          <div>For authentication reasons, you will not be emailed</div>
        </div>

        <button>Submit Question</button>
    </div>
  )
}

export default QuestionModal;