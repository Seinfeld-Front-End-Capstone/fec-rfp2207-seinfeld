import React from 'react';

console.log('REACT : ', React);

var QuestionsList = () => {
  return (
    <div>
      <h4>Questions & Answers</h4>
      <form>
        <input type='text' placeholder='Have a question? Search for answers...'/>
        <button className='search-icon' type='submit'></button>
      </form>
    </div>
  )
}

export default QuestionsList;