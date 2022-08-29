import React from 'react';

const Form = ({ productName }) => {
  return (
    <form>
      <h3>Write your review</h3>
      <p>About the {productName}</p>
    </form>
  )
}

export default Form;