import { validate } from 'email-validator';

const validateForm = ({ product_id, rating, body, recommend, name, email, characteristics }) => {
  let isValid = true;
  let errorMessages = []
  if (!product_id) {
    isValid = false;
    errorMessages.push('\nMissing product ID')
  }
  if (!rating || rating < 1 || rating > 5) {
    isValid = false;
    errorMessages.push('\nMissing overall rating')
  }
  if (!body || body.length < 50) {
    isValid = false;
    errorMessages.push('\nReview should be at least 50 characters')
  }
  if(recommend === null || recommend === undefined) {
    isValid = false;
    errorMessages.push('\nIndicate whether you recommend this product')
  }
  if(name === undefined || name.length === 0) {
    isValid = false;
    errorMessages.push('\nMissing name')
  }
  if(email === undefined || email.length === 0) {
    isValid = false;
    errorMessages.push('\nMissing email address')

  } else if (!validate(email)) {
    isValid = false;
    errorMessages.push('\nIncorrect email format')
  }
  //need additional logic to validate photos format
  for (let char in characteristics) {
    if (!characteristics[char]) {
      isValid = false;
      errorMessages.push(`\nMissing a rating for ${char}`)
    }
  }
  return { isValid, errorMessages };
}

const formatForm = (form, chars) => {
  form.rating = parseInt(form.rating);
  form.recommend = form.recommend === 'yes' ? true : false;
  for (const char in form.characteristics) {
    let charId = chars[char].id;
    form.characteristics[charId] = parseInt(form.characteristics[char]);
    delete form.characteristics[char];
  }

  return form;

}

export { validateForm , formatForm }

//also need to convert some data types because form collects everything as strings, could rename this function as process form

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