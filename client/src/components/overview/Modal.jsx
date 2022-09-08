import React from 'react'
import {createPortal} from 'react'
import {useOV} from './OVContext.jsx';
import ImageDisplay from './ImageDisplay.jsx'
import { CgMinimize } from 'react-icons/cg'
import ThumbnailDisplay from './ThumbnailDisplay.jsx'


const Modal = ({ expand }) => {
  const { setExpand } = useOV()
  const close = () => setExpand(false)

  if (!expand) {
    return null;
  }

  return (
    <>
      <div id='OVModalOverLay' onClick={ close }/>
      <div id='OVModal'>
        <ImageDisplay>
          <CgMinimize  className='OVImageExpand' onClick={ close }/>
        </ImageDisplay>
      </div>
      <div id='OVExpandThumbNails'>
        <ThumbnailDisplay/>
      </div>
    </>
  )

}

export default Modal