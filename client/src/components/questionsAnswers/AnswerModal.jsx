import React, {useState} from 'react';
import please from '../.././request.js';

const AnswerModal = ({q, modal, onClose}) => {
  const [newAnswer, setNewAnswer] = useState('');
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [image, setImage] = useState([]);
  const asterisk = <span id='qa-asterisk'>*</span>

  // const uploadPhotos = (e) => {
  //   e.preventDefault()
  //   axios.post(`qa/questions/${q.question_id}/answers`, {
  //     body: newAnswer,
  //     name: name,
  //     email: email,
  //     photos: []
  //   })
  //   .then((res) => {
  //     console.log('success')
  //   })
  //   .catch((err) => {
  //     console.log('error : ', err)
  //   })
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    please.addAnswer(q.question_id, {body: newAnswer, name: name, email: email, photos: image})
    .then((res) => {
      console.log('success : ', res.status)
      onClose(false)
    })
    .catch(() => console.log(err))
  }

  if (modal) {
    return (
      <div className='qa-answer-modal'>
        <p className='qa-X' onClick={onClose}>X</p>
        <p>Submit Your Answer</p>
        <div>[Product Name]: [Question Body]</div>

        <form onSubmit={handleSubmit}>
          <div>
            <div>Your Answer{asterisk}</div>
            <input type='text' maxLength='1000' onChange={(e) => setNewAnswer(e.target.value)}></input>
          </div>

          <div>
            <div>What is your nickname?</div>
            <input type='text' placeholder='Example: jack543!' maxLength='60' onChange={(e) => setName(e.target.value)}></input>
            <div className='qa-input-text'>For privacy reasons, do not use your full name or email address.</div>
          </div>

          <div>
            <div>Your email</div>
            <input type='text' placeholder='jack@email.com' maxLength='60' onChange={(e) => setEmail(e.target.value)}></input>
            <div className='qa-input-text'>For authentication reasons, you will not be emailed.</div>
          </div>

          <div>
            Upload Photos:
            {/* <input type='file' onChange={(e) => setImage(e.target.files[0])}></input>
            { image &&
              <img alt='not found' width={'200px'} src={URL.createObjectURL(image)}/>
            } */}
          </div>
            <button className='qa-modal-submit'>Submit</button>
        </form>

      </div>
    )
  }
}

export default AnswerModal;