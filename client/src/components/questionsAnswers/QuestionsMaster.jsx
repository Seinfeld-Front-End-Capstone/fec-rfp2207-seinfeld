import React, {useState, useEffect} from 'react';
import QuestionList from './QuestionList.jsx';
import QuestionModal from './QuestionModal.jsx';
import please from '../.././request.js';

const QuestionsMaster = ({productId}) => {
  const [question, setQuestion] = useState([]);
  const [initial, setInitial] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [input, setInput] = useState('');
  const [length, setLength] = useState(2);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    please.getQuestions(productId)
    .then((data) => {
      // console.log('data use effect : ', data.data)
      let sortedQuestions = data.data.results
      sortedQuestions.sort((a, b) => {
        return b.question_helpfulness - a.question_helpfulness
      })
      setQuestion(sortedQuestions)
      setInitial(sortedQuestions)
      // console.log('sorted : ', sorted)
    })
  }, [])


  console.log('question : ', question)
  // console.log('initial : ', initial);

  const doSearch = (word) => {
    // console.log('initial questions : ', initial);
    let questions = initial;
    // console.log(questions);
    let filteredQuestions = [];
    questions.forEach((q) => {
      // console.log('input : ', input)
      if (word.length >= 3 && q.question_body.toLowerCase().includes(word.toLowerCase())) {
        filteredQuestions.push(q)
      }
    })
    filteredQuestions.sort((a, b) => {
      return b.question_helpfulness - a.question_helpfulness
    })
    // console.log('ARRAY : ', filteredQuestions)
    word.length < 3 ? setQuestion(initial) : setQuestion(filteredQuestions)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    doSearch(input)
  }

  return (
    <div className='qa-qa-master'>
      <h2>Questions & Answers</h2>
      {initial.length ? (
        <div className='qa-search-bar'>
          <form onSubmit={onSubmit}>
            <input type='text' placeholder='Have a question? Search for answers...' onChange={(e) => {
              setInput(e.target.value)
              doSearch(e.target.value)
              }}/>
            <button type='submit'>Search Icon</button>
          </form>
          <QuestionList questions={question} length={length}/>
          { length < question.length ?
             <button onClick={() => setLength((prevLength) => prevLength + 2)}>More Answered Questions</button>
            :
             <button onClick={() => setLength(2)}>Collapse Questions</button>
          }
          <button onClick={() => setModal(true)}>Add A Question</button>
          <QuestionModal modal={modal} productId={productId} onClose={() => setModal(false)} setInitial={setInitial} setQuestion={setQuestion}/>
        </div>
       ) : (
        <button>Add A Question</button>
       )
      }
    </div>
  )
}

export default QuestionsMaster;