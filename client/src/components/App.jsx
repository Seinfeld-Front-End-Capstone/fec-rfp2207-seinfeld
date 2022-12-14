import React, {useState, useEffect} from 'react';
import {OVProvider} from './overview/OVContext.jsx'
import Overview from './overview/Overview.jsx';
import ItemLists from './rc/ItemLists.jsx';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import QuestionsMaster from './questionsAnswers/QuestionsMaster.jsx'
import please from '.././request.js'
import mannequin from '../assets/mannequin.jpeg';
import Bag from './overview/Bag.jsx';

const App = () => {

  const [product, setProduct] = useState(null)

  useEffect(() => {
    please.getProducts()
    .then((data) => setProduct(data.data[3]))
    .catch((err) => console.log(err))
  },[])

  return (
    product ?
    <>
      <div id="loading-div">
        <img className='loading-screen' src={mannequin}/>
        <h1 className='loading-screen'>getting dressed...</h1>
      </div>
      <div>
        <div id='TopBar'>
          <h1>tekstyle</h1>
          <Bag />
        </div>
        <OVProvider productId={product.id}>
          <Overview />
        </OVProvider>
        <ItemLists productId={product.id} setProduct={setProduct}/>
        <QuestionsMaster productName={product.name} productId={product.id}/>
        <RatingsReviews productId={product.id} productName={product.name}/>
      </div>
    </>
    :
    <div></div>
    // <div id="loading-div">
    //   <img className='loading-screen' src={mannequin}/>
    //   <h1 className='loading-screen'>getting dressed...</h1>
    // </div>
  )
}


export default App
