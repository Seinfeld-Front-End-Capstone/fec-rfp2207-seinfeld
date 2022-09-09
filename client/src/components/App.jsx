import React, {useState, useEffect} from 'react';
import {OVProvider} from './overview/OVContext.jsx'
import Overview from './overview/Overview.jsx';
import ItemLists from './rc/ItemLists.jsx';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import QuestionsMaster from './questionsAnswers/QuestionsMaster.jsx'
import please from '.././request.js'
import mannequin from '../assets/mannequin.jpeg';

const App = () => {

  const [product, setProduct] = useState(null)

  useEffect(() => {
    please.getProducts()
    .then((data) => setProduct(data.data[0]))
    .catch((err) => console.log(err))
  },[])

  return (
    product ?
    <div>
      <h1>tekstyle</h1>
      <OVProvider productId={product.id}>
        <Overview />
      </OVProvider>
      <ItemLists productId={product.id} setProduct={setProduct}/>
      <QuestionsMaster productName={product.name} productId={product.id}/>
      <RatingsReviews productId={product.id} productName={product.name}/>
    </div>
    :
    <div id="loading-div">
      <img className='loading-screen' src={mannequin}/>
      <h1 className='loading-screen'>getting dressed...</h1>
    </div>
  )
}


export default App
