import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    // console.log('QUESTION OBJ : ',this.props);


  }

  render() {
    let keys = Object.keys(this.props.q.answers)[0]
    let answer = this.props.q.answers[keys]
    let date = this.props.q.answers[keys].date.slice(0, 10)
    return (
      <div className='qa-question-card'>
        <div>Q: {this.props.q.question_body} Helpful? Yes {this.props.q.question_helpfulness}  |  Add Answer</div>
        <div>
          A: {answer.body}
          <span>by {answer['answerer_name']}, {date}  | Helpful? Yes {answer.helpfulness} Report
            {answer.photos.map((img, i) => (<img src={img} key={i} alt="picture"/>))}
          </span>
        </div>
      </div>
    )
  }
}

export default Question;