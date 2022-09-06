import React, {useState} from 'react';
import please from '../.././request.js';

const QuestionModal = ({modal, onClose, productId, setInitial, setQuestion}) => {
  const [userQuestion, setUserQuestion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const asterisk = <span id='qa-asterisk'>*</span>

  const handleSubmit = (e) => {
    e.preventDefault()
    let splitEmail = email.split('@')
    if (splitEmail.length !== 2 && !splitEmail[1].includes('.')) {
      alert('invalid input')
      return;
    }

    please.addQuestion({body: userQuestion, name: name, email: email, product_id: productId})
    .then(() => onClose(false))
    .catch((err) => console.log(err))
  }

  if (modal)
  return (
    <div className='qa-question-modal'>
      <p onClick={onClose} className='qa-X'>X</p>
        <p>Ask Your Question!</p>
        <p>About the [product name] Name</p>

        <form onSubmit={handleSubmit}>
          <div>
            <div>Your Question{asterisk}</div>
            <input type='text' maxLength='1000' onChange={(e) => setUserQuestion(e.target.value)} required></input>
          </div>

          <div>
            <div>What is your nickname{asterisk}</div>
            <input type='text' placeholder='Example: jackson11!' maxLength='60' onChange={(e) => setName(e.target.value)} required></input>
            <div className='qa-input-text'>For privacy reasons, do not use your full name or email address</div>
          </div>

          <div>
            <div>Your email{asterisk}</div>
            <input type='text' placeholder='Why did you like the product or not?' onChange={(e) => setEmail(e.target.value)} required></input>
            <div className='qa-input-text'>For authentication reasons, you will not be emailed</div>
          </div>

          <button className='qa-modal-submit'>Submit Question</button>
        </form>

    </div>
  )
}

export default QuestionModal;