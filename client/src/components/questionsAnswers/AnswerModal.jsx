import React, { useState } from 'react';
import please from '../.././request.js';
import widget from './../helpers/widget.js';

const AnswerModal = ({ q, modal, onClose }) => {
  const [newAnswer, setNewAnswer] = useState('');
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [images, setImages] = useState([]);
  // const [removeImage, setRemoveImage] = useState(null);
  const asterisk = <span id='qa-asterisk'>*</span>

  const handleWidget = (e) => {
    e.preventDefault()
    const myWidget = widget((error, result) => {
      if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        setImages((prevImages) => [...prevImages, result.info.url])
      }
    });
    myWidget.open()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    please.addAnswer(q.question_id, { body: newAnswer, name: name, email: email, photos: images })
      .then((res) => {
        // console.log('success : ', res.status)
        onClose(false)
      })
      .catch((err) => console.log(err))
  }

  if (modal) {
    return (
      <div className='qa-modal-wrapper'>
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
              <button onClick={(e) => handleWidget(e)}>Upload Photos</button>
              <div className='qa-modal-img-container'>
                {images.map((image) => <img className='qa-img-preview' src={image.url} /> )}
              </div>
            </div>

            <button className='qa-modal-submit'>Submit</button>
          </form>

        </div>
      </div>
    )
  }
}

export default AnswerModal;