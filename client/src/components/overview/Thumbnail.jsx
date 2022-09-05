import React from 'react';
import {useOV} from './OVContext.jsx'

const Thumbnail = ({thumbnail, index}) => {
  let {setDisplayIndex} = useOV()

  const onClick = (e) => {
    setDisplayIndex(e.target.dataset.key)
  }

  return (
    <div id='OVthumbnailBox'>
      <img className='OVthumbnail' onClick={onClick} src={thumbnail} data-key={index}/>
    </div>)
}

export default Thumbnail