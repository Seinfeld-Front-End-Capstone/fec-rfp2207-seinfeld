import React, {useState, useEffect} from 'react';
import QuestionList from './QuestionList.jsx';
import please from '../.././request.js';


// {
//   "product_id": "65635",
//   "results": [
//       {
//           "question_id": 593041,
//           "question_body": "This is a review for pumped up kicks. Those shoes are great",
//           "question_date": "2022-04-12T00:00:00.000Z",
//           "asker_name": "shan",
//           "question_helpfulness": 9,
//           "reported": false,
//           "answers": {
//               "5539255": {
//                   "id": 5539255,
//                   "body": "I agree!",
//                   "date": "2022-04-15T00:00:00.000Z",
//                   "answerer_name": "Javian",
//                   "helpfulness": 3,
//                   "photos": []
//               },
//               "5539256": {
//                   "id": 5539256,
//                   "body": "These shoes are too small for my big feet.",
//                   "date": "2022-04-15T00:00:00.000Z",
//                   "answerer_name": "Eric",
//                   "helpfulness": 1,
//                   "photos": []
//               },
//               "5539257": {
//                   "id": 5539257,
//                   "body": "My shoes came delivered ripped.",
//                   "date": "2022-04-15T00:00:00.000Z",
//                   "answerer_name": "AngryCustomer",
//                   "helpfulness": 1,
//                   "photos": []
//               },
//               "5539261": {
//                   "id": 5539261,
//                   "body": "sdfsdsdfsdfsd",
//                   "date": "2022-04-15T00:00:00.000Z",
//                   "answerer_name": "Mr. Poop",
//                   "helpfulness": 0,
//                   "photos": [
//                       "http://res.cloudinary.com/daxw4bdp6/image/upload/v1650063079/pzaj9iovoqm1cxy27d2u.jpg"
//                   ]
//               },
//               "5539264": {
//                   "id": 5539264,
//                   "body": "Shoes are too small",
//                   "date": "2022-04-15T00:00:00.000Z",
//                   "answerer_name": "bigfoot",
//                   "helpfulness": 0,
//                   "photos": []
//               },
//               "5539265": {
//                   "id": 5539265,
//                   "body": "What a nice product",
//                   "date": "2022-04-15T00:00:00.000Z",
//                   "answerer_name": "tryTry",
//                   "helpfulness": 0,
//                   "photos": []
//               },
//               "5539269": {
//                   "id": 5539269,
//                   "body": "What a nice product",
//                   "date": "2022-04-15T00:00:00.000Z",
//                   "answerer_name": "tryTry",
//                   "helpfulness": 0,
//                   "photos": []
//               }
//           }
//       },
//       {
//           "question_id": 593315,
//           "question_body": "Do the Heir Force Ones slap?",
//           "question_date": "2022-04-15T00:00:00.000Z",
//           "asker_name": "percyjackson",
//           "question_helpfulness": 6,
//           "reported": false,
//           "answers": {
//               "5539247": {
//                   "id": 5539247,
//                   "body": "You're gosh darned right they do!",
//                   "date": "2022-04-15T00:00:00.000Z",
//                   "answerer_name": "Bruce",
//                   "helpfulness": 77,
//                   "photos": []
//               },
//               "5539290": {
//                   "id": 5539290,
//                   "body": "jofghsdflighsdfghjsdfh;gjsdf;gsdhfjlgsdlf",
//                   "date": "2022-04-16T00:00:00.000Z",
//                   "answerer_name": "asdasdasdas",
//                   "helpfulness": 0,
//                   "photos": [
//                       "http://res.cloudinary.com/dlweybd3e/image/upload/v1650131011/yxcelfflzwvljsle8vmk.png",
//                       "http://res.cloudinary.com/dlweybd3e/image/upload/v1650131014/i7fneczgj5psrfbgf7vh.png",
//                       "http://res.cloudinary.com/dlweybd3e/image/upload/v1650131017/tzdgzgmr3btilroufvln.png"
//                   ]
//               },
//               "5539310": {
//                   "id": 5539310,
//                   "body": "They slap forsure!",
//                   "date": "2022-04-18T00:00:00.000Z",
//                   "answerer_name": "Slappymcslappy",
//                   "helpfulness": 0,
//                   "photos": []
//               }
//           }
//       },
//       {
//           "question_id": 573900,
//           "question_body": "Where is this product made?",
//           "question_date": "2018-07-06T00:00:00.000Z",
//           "asker_name": "bballfan",
//           "question_helpfulness": 1,
//           "reported": false,
//           "answers": {
//               "5361381": {
//                   "id": 5361381,
//                   "body": "Canada",
//                   "date": "2018-08-06T00:00:00.000Z",
//                   "answerer_name": "footballfan",
//                   "helpfulness": 9,
//                   "photos": []
//               }
//           }
//       },
//       {
//           "question_id": 593040,
//           "question_body": "new question",
//           "question_date": "2022-04-12T00:00:00.000Z",
//           "asker_name": "questionmaker",
//           "question_helpfulness": 0,
//           "reported": false,
//           "answers": {}
//       }
//   ]
// }

// let questionArray = data.data.results;
// let result = questionArray.filter((obj) => {
//   if (input.length < 3) {
//     return obj
//   } else if (obj.question_body.toLowerCase().includes(input.toLowerCase())) {
//     return obj
//   }
// }).map((obj) => {
//   return obj
// })
const QuestionsMaster = ({productId}) => {
  const [question, setQuestion] = useState([]);
  const [initial, setInitial] = useState([]);
  const [input, setInput] = useState('');
  const [length, setLength] = useState(2);

  useEffect(() => {
    please.getQuestions(productId)
    .then((data) => {
      let sorted = data.data.results
      sorted.sort((a, b) => {
        return b.question_helpfulness - a.question_helpfulness
      })
      // console.log('sorted : ', sorted);
      setQuestion(sorted)
      setInitial(sorted)
    })
  }, [])

  const doSearch = (word) => {
    please.getQuestions(productId)
    .then((data) => {
      // console.log(' data : ' , data.data.results)
      let questionArray = data.data.results
      let filtered = [];
      questionArray.forEach((q) => {
        // console.log('input : ', input)
        if (word.length >= 3 && q.question_body.toLowerCase().includes(word.toLowerCase())) {
          filtered.push(q)
        }
      })
      filtered.sort((a, b) => {
        return b.question_helpfulness - a.question_helpfulness
      })
      // console.log('ARRAY : ', filtered)
      word.length < 3 ? setQuestion(initial) : setQuestion(filtered)
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    doSearch(input)
  }

  return (
    <div className='qa-qa-container'>
      <h4>Questions & Answers</h4>
      <div className='search-bar'>
        <form onSubmit={onSubmit}>
          <input type='text' placeholder='Have a question? Search for answers...' onChange={(e) => {
            setInput(e.target.value)
            doSearch(e.target.value)
            }}/>
          <button type='submit'>Search Icon</button>
        </form>
      </div>

      <QuestionList questions={question} length={length}/>
      <button onClick={() => setLength((prevLength) => prevLength + 2)}>More Answered Questions</button>
    </div>
  )
}

export default QuestionsMaster;