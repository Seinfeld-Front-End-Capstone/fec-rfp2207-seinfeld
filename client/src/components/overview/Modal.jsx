import React from 'react'
import {useOV} from './OVContext.jsx';
import {BiCircle} from 'react-icons/bi'


const Modal = () => {
  let {curStyle, displayIndex, setDisplayIndex } = useOV()
  let images = curStyle.photos;

  const toPrevious = () => {
    setDisplayIndex(displayIndex - 1);
  }

  const toNext = () => {
    setDisplayIndex(displayIndex + 1);
  }

  let imageUrl = images[displayIndex].url
  const currImageStyle = {backgroundImage: imageUrl ? `url(${imageUrl})` : `url(https://cdn.dribbble.com/users/1507491/screenshots/4945826/media/116a8ebc414c519ad1cfc0fe63f79d3e.jpg?compress=1&resize=800x600&vertical=top)`}
  const onClick = (e) => {
    setDisplayIndex(e.target.dataset.key)
  }

  return (
    <div id='OVImages'>
      <div id='OVimageDisplayBox'>
        {displayIndex !== 0 && <IoIosArrowBack className='OVleftArrow' onClick={toPrevious} />}
        {displayIndex !== images.length - 1 && <IoIosArrowForward className='OVrightArrow' onClick={toNext} />}
        <div id='OVimagedisplay' style={currImageStyle}></div>
        {images.length > 1 &&
        <div>
          {images.map((index) => {
            <BiCircle onClick={onClick} data-key={index} key={index}/>
          })}
        </div>}
      </div>
    </div>
  )
}

export default Modal