import React, {useState} from 'react';

const Answer = ({answer}) => {
  // console.log('answers props : ', answer)
  const [answerCount, setAnswerCount] = useState(answer.helpfulness)

  // let q = props.q;
  // let keys = Object.keys(q.answers)[0];
  // let answer = q.answers[keys];
  // if (!answer) {
  //   return <div>No more answers!</div>
  // }
  let date = answer.date.slice(0, 10);

  return (
    <div className='qa-answer-container'>
      A: {answer.body}
      <span>by {answer['answerer_name']}, {date}  | Helpful?
        <span onClick={() => setAnswerCount((prevCount) => prevCount + 1)}>Yes </span>
          ({answerCount}) Report
          {answer.photos.map((img, i) => (<img src={img} key={i} alt="picture"/>))}
      </span>
    </div>
  )
}

export default Answer;