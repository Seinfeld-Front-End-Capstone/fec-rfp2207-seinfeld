import React from 'react';
import data from './exampleData.js';
// import QuestionsList from './QuestionsList.jsx'

class QuestionsMaster extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: data}
  }

  render() {
    return (
      <div>
        <h4>Questions & Answers</h4>
        <form>
          <div className='search-bar'>
            <input type='text' placeholder='Have a question? Search for answers...'/>
            <button type='submit'>Search Icon</button>
          </div>
        </form>
      </div>
    )
  }
}

export default QuestionsMaster;