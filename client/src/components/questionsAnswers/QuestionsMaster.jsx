import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList.jsx';
import QuestionModal from './QuestionModal.jsx';
import { BiSearchAlt2 } from 'react-icons/bi'
import please from '../.././request.js';

const QuestionsMaster = ({ productName, productId }) => {
  const [question, setQuestion] = useState([]);
  const [initial, setInitial] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [input, setInput] = useState('');
  const [length, setLength] = useState(4);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    please.getQuestions(productId)
      .then((data) => {
        let sortedQuestions = data.data.results
        sortedQuestions.sort((a, b) => {
          return b.question_helpfulness - a.question_helpfulness
        })
        setQuestion(sortedQuestions)
        setInitial(sortedQuestions)
      })
  }, [productId])

  const doSearch = (word) => {

    let questions = initial;

    let filteredQuestions = [];
    questions.forEach((q) => {
      if (word.length >= 3 && q.question_body.toLowerCase().includes(word.toLowerCase())) {
        filteredQuestions.push(q)
      }
    })
    filteredQuestions.sort((a, b) => {
      return b.question_helpfulness - a.question_helpfulness
    })
    word.length < 3 ? setQuestion(initial) : setQuestion(filteredQuestions)
  }

  return (
    <div className='qa-qa-master'>
      <div className='qa-qa-container'>
        <h2>Questions & Answers</h2>
        {initial.length > 2 && (
          <div className='qa-search-bar'>
            <input id='qa-search-input' type='text' placeholder='Have a question? Search for answers...' onChange={(e) => {
              setInput(e.target.value)
              doSearch(e.target.value)
            }}></input>
          </div>
        )}
        <QuestionList questions={question} length={length} productName={productName} />
        <div className='qa-button-container'>
          { question.length > 4 &&
          (length < question.length ?
            <button className='qa-question-button' onClick={() => setLength((prevLength) => prevLength + 2)}>More Answered Questions</button>
            :
            <button className='qa-question-button' onClick={() => setLength(4)}>Collapse Questions</button>
          )
         }
          <button className='qa-question-button' onClick={() => setModal(true)}>Add A Question</button>
        </div>


        <QuestionModal modal={modal} productName={productName} productId={productId} onClose={() => setModal(false)} setInitial={setInitial} setQuestion={setQuestion} />
      </div>
    </div>
  )
}
export default QuestionsMaster;