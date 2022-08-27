import React from 'react';

const Answer = (props) => {

  let q = props.q;
  let keys = Object.keys(q.answers)[0];
  let answer = q.answers[keys];
  if (!answer) {
    return <div>No more answers!</div>
  }

  let date = q.answers[keys].date.slice(0, 10);

  return (
    <div>
      A: {answer.body}
      <span>by {answer['answerer_name']}, {date}  | Helpful? Yes {answer.helpfulness} Report
        {answer.photos.map((img, i) => (<img src={img} key={i} alt="picture"/>))}
      </span>
    </div>
  )
}

export default Answer