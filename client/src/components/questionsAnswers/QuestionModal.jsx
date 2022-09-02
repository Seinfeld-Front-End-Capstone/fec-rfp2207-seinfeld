import React, {useState} from 'react';
import please from '../.././request.js';

const QuestionModal = ({modal, onClose, productId, setInitial, setQuestion}) => {
  const [userQuestion, setUserQuestion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const asterisk = <span id='qa-asterisk'>*</span>

  // send post request to add to api?
  // send get request to grab new list of questions
  const handleSubmit = (e) => {
    e.preventDefault()
    let splitEmail = email.split('@')
    if (splitEmail.length !== 2 && !splitEmail[1].includes('.')) {
      alert('warning message')
      return;
    }

    please.addQuestion({body: userQuestion, name: name, email: email, product_id: productId})
    .then(() => {
      return please.getQuestions(productId)
    })
    .then((data) => {
      console.log('data please: ', data);
      // sort data first
      // set initial and question states to new get request
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