import React from 'react'
import Stars from '.././helpers/Stars.jsx'
import AvgStarRating from '.././helpers/AvgStarRating.jsx'
import {useOV} from './OVContext.jsx'

const Rating = () => {
  let {starsObj} = useOV()
  let count = Object.values(starsObj).reduce((count,num) => count + Number(num), 0)

  return (
    <>
      {AvgStarRating(starsObj, (avg) => <Stars rating={avg}/>)}
      <span> read all {count} reviews </span>
    </>
  )
}

export default Rating