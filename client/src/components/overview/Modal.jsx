import React from 'react'
import {createPortal} from 'react'
import {useOV} from './OVContext.jsx';
import ImageDisplay from './ImageDisplay.jsx'
import { CgMinimize } from 'react-icons/cg'
import ThumbnailDisplay from './ThumbnailDisplay.jsx'


const Modal = ({ expand }) => {
  const { setExpand } = useOV()
  const close = () => setExpand(false)

  let visibility = {visibility: expand ? 'visible' : 'hidden'};
  visibility.opacity = expand ? 1 : 0;


  return (
    <>
      <div id='OVModalOverLay' onClick={ close } style={ visibility } />
      <div id='OVModal' style={ visibility } >
        <ImageDisplay>
          <CgMinimize  className='OVImageExpand' onClick={ close } />
        </ImageDisplay>
      </div>
      <div id='OVExpandThumbNails' style={ visibility } >
        <ThumbnailDisplay expand={ true } />
      </div>
    </>
  )

}

export default Modal