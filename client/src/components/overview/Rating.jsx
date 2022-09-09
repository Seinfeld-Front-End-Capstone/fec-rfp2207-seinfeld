import React from 'react'
import Stars from '.././helpers/Stars.jsx'
import AvgStarRating from '.././helpers/AvgStarRating.jsx'
import {useOV} from './OVContext.jsx'

const Rating = () => {
  let {starsObj} = useOV()
  let count = Object.values(starsObj).reduce((count,num) => count + Number(num), 0)

  const scrollToReviews = () => {
    document.getElementById('RR-big-ctn').scrollIntoView()
  }

  return (
    <div id='OVReviews' onClick={scrollToReviews}>
      {AvgStarRating(starsObj, (avg) => <Stars rating={avg}/>)}
      <span> read all {count} reviews </span>
    </div>
  )
}

export default Rating