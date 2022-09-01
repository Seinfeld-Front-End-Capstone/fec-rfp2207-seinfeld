const validateForm = (form) => {
  let formIsValid = true;
  let errorMessages = []
  if (!form.product_id) {
    formIsValid = false;
    errorMessages.push('Missing product ID')
  }
  if (!form.rating || form.rating < 1 || form.rating > 5) {
    formIsValid = false;
    errorMessages.push('Missing overall rating')
  }
  if (!body || body < 50) {
    formIsValid = false;
    errorMessages.push('Review should be at least 50 characters')
  }
  if(recommend === null || recommend === undefined) {
    formIsValid = false;
    errorMessages.push('Indicate whether you recommend this product')
  }
  if(name === undefined || name.length === 0) {
    formIsValid = false;
    errorMessages.push('Missing name')
  }
  if(email === undefined || email.length === 0) {
    formIsValid = false;
    errorMessages.push('Missing email address')
    //need additional logic to validate email format
  }
  //need additional logic to validate photos format
  for (let char in form.characteristics) {
    if (!form.characteristics[char]) {
      formIsValid = false;
      //this might not actually catch this error
      errorMessages.push(`Missing a rating for ${char}`)
    }
  }


  return formIsValid;

}

export default validateForm;

//   form requirements = {
  //   product_id: null,       //integer req
  //   rating: null,           //int 1-5 req
  //   summary: null,          //text
  //   body: null,             //text req, at least 50 chars
  //   recommend: null,        //bool req
  //   name: null,             //text req
  //   email: null,            //text req correct format
  //   photos: null,           //array of text urls, correct format
  //   characteristics: null   //obj req
  // }