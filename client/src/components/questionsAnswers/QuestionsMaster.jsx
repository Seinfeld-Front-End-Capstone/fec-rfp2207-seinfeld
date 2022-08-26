import React from 'react';
import QuestionList from './QuestionList.jsx'
import data from './exampleData.js';
// import QuestionsList from './QuestionsList.jsx'

class QuestionsMaster extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: data}
  }

  render() {
    return (
      <div className='qa-qa-container'>
        <h4>Questions & Answers</h4>
        <form>
            {/* onChange, state will update as user types in query
            onSubmit, when user clicks search button, calls a function that finds data that matches query and renders */}
          <div className='search-bar'>
            <input type='text' placeholder='Have a question? Search for answers...'/>
            <button type='submit'>Search Icon</button>
          </div>
          <QuestionList questions={this.state.data}/>

          {/* Question List goes here
          conditional rendering: displays first four questions if there are multiple reviews to display
          questions are ordered by helpfulness
          two or less only displays two reviews */}

        </form>
        {/* conditionally render "more answered questions" button if there are two or more reviews */}
      </div>
    )
  }
}

export default QuestionsMaster;