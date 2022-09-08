import React from 'react'
import {useOV} from './OVContext.jsx'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'


const ImageDisplay = ({children}) => {
  let {curStyle, displayIndex, setDisplayIndex, setLeft} = useOV()
  let images = curStyle.photos;


  const toPrevious = () => {
    let previous = displayIndex-1
    setDisplayIndex(previous);
    setLeft(previous > 4 ? (previous - 4) * -120 : 0)
  }

  const toNext = () => {
    let next = displayIndex + 1
    setDisplayIndex(next);
    setLeft(next > 4 ? (next - 4) * -120 : 0)
  }

  let imageUrl = images[displayIndex].url
  const currImageStyle = {backgroundImage: imageUrl ? `url(${imageUrl})` : `url(https://cdn.dribbble.com/users/1507491/screenshots/4945826/media/116a8ebc414c519ad1cfc0fe63f79d3e.jpg?compress=1&resize=800x600&vertical=top)`}

  return (
  <div id='OVimageDisplayBox'>
    {displayIndex !== 0 && <div className='OVleftArrow' onClick={toPrevious}><IoIosArrowBack /></div>}
    {displayIndex !== images.length - 1 && <div className='OVrightArrow' onClick={toNext}><IoIosArrowForward /></div>}
    <div id='OVimagedisplay' style={currImageStyle}></div>
    {children}
  </div>
  )
}

export default ImageDisplay