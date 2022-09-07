import React, {useState, useEffect} from 'react';
import {OVProvider} from './overview/OVContext.jsx'
import Overview from './overview/Overview.jsx';
import ItemLists from './rc/ItemLists.jsx';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import QuestionsMaster from './questionsAnswers/QuestionsMaster.jsx'
import please from '.././request.js'

const App = () => {

  const [product, setProduct] = useState(null)

  useEffect(() => {
    please.getProducts()
    .then((data) => setProduct(data.data[0]))
    .catch((err) => console.log(err))
  },[])

  var clicks = {
    widget: 'default',
    submit: function(e) {
      let clickData = {
        element: e.target.id,
        widget: this.name,
        time: new Date()
      }
      console.log('submitting', clickData)
      please.submitClickData(clickData)
      .then(() => console.log('click recorded'))
      .catch(err => console.log(err));
    }
  }

  return (
    product ?
    <div>
      <h1>buymorethings</h1>
      <OVProvider productId={product.id}>
        <Overview />
      </OVProvider>
      <ItemLists productId={product.id}/>
      <QuestionsMaster productId={65632}/>
      <RatingsReviews
        productId={product.id}
        productName={product.name}
        submitClickData={clicks.submit.bind({name: 'Ratings and Reviews'})}/>
    </div>
    :
    <div>
    <h1>loading...</h1>
    </div>
  )
}


export default App