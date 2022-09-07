import React from 'react'
import {createPortal} from 'react'
import {useOV} from './OVContext.jsx';
import ImageDisplay from './ImageDisplay.jsx'
import {CgMinimize} from 'react-icons/cg'
import ThumbnailDisplay from './ThumbnailDisplay.jsx'


const Modal = ({expand}) => {
  const { setExpand} = useOV()
  if (!expand) {
    return null
  }

  return (
    <>
      <div id='OVModalOverLay' />
      <div id='OVModal'>
        <ImageDisplay>
          <CgMinimize  className='OVImageExpand' onClick={() => setExpand(false)}/>
        </ImageDisplay>
      </div>
      <div id='OVExpandThumbNails'>
        <ThumbnailDisplay expand={true}/>
      </div>
    </>
  )

}

export default Modal