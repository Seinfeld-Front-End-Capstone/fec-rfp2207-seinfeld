import React from 'react';

const Form = ({ productName }) => {
  return (
    <form>
      <h3>Write your review</h3>
      <p>About the {productName}</p>
      <p>Overall Rating: select stars</p>
      <div id="RR-form-recommend">Do you recommend this product?<span aria-label="required">* </span><br/>
        <input type="radio" id="yes" name="recommend" value="yes" checked required />
        <label for="yes">yes</label>
        <input type="radio" id="no" name="recommend" value="no" />
        <label for="no">no</label>
      </div>
      <input type="submit"  value="submit" />

    </form>
  )
}

export default Form;