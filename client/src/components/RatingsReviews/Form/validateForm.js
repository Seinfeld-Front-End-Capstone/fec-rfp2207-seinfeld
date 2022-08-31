

const handleSubmit = (productId) => {
  let form = {
    product_id: null,       //integer
    rating: null,           //int 1-5
    summary: null,          //text
    body: null,             //text
    recommend: null,        //bool
    name: null,             //text
    email: null,            //text
    photos: null,           //array of text urls
    characteristics: null   //obj
  }

  form.product_id = productId;
  form.rating =
  console.log('form data: ', form);


}

export default handleSubmit;