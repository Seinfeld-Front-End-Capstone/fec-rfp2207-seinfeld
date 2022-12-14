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

  return (
  <div id='OVimageDisplayBox'>
    {displayIndex !== 0 && <div className='OVleftArrow' onClick={toPrevious}><IoIosArrowBack /></div>}
    {displayIndex !== images.length - 1 && <div className='OVrightArrow' onClick={toNext}><IoIosArrowForward /></div>}
    {children}
  </div>
  )
}

export default ImageDisplay