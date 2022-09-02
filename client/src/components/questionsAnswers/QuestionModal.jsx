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
    .then(() => {
      onClose(false);
    })
  }

  if (modal)
  return (
    <div className='qa-question-modal'>
      <p onClick={onClose} className='close-button'>X</p>
        <h3>Ask Your Question!</h3>
        <h5>About the [product name] Name</h5>

        <form onSubmit={handleSubmit}>
          <div>
            <div>Your Question{asterisk}</div>
            <input type='text' maxLength='1000' onChange={(e) => setUserQuestion(e.target.value)} required></input>
          </div>

          <div>
            <div>What is your nickname{asterisk}</div>
            <input type='text' placeholder='Example: jackson11!' maxLength='60' onChange={(e) => setName(e.target.value)} required></input>
            <div>For privacy reasons, do not use your full name or email address</div>
          </div>

          <div>
            <div>Your email{asterisk}</div>
            <input type='text' placeholder='Why did you like the product or not?' onChange={(e) => setEmail(e.target.value)} required></input>
            <div>For authentication reasons, you will not be emailed</div>
          </div>

          <button>Submit Question</button>
        </form>

    </div>
  )
}

export default QuestionModal;