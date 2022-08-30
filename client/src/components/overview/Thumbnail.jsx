import React from 'react';

const Thumbnail = ({thumbnail, setDisplayIndex, index}) => {

  const onClick = (e) => {
    setDisplayIndex(e.target.dataset.key)
  }

  return (
    <div id='OVthumbnailBox'>
      <img className='OVthumbnail' onClick={onClick} src={thumbnail} data-key={index}/>
    </div>)
}

export default Thumbnail