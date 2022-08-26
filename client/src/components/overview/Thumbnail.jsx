import React from 'react';

const Thumbnail = ({thumbnail, setIndexDisplay, index}) => {

  const onClick = (e) => {
    setIndexDisplay(e.target.dataset.key)
  }


  return (
    <div id='OVthumbnailBox'>
      <img className='OVthumbnail' onClick={onClick} src={thumbnail} data-key={index}/>
    </div>)
}

export default Thumbnail