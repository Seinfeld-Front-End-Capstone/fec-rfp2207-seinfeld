import React from 'react'
import {createPortal} from 'react'
import {useOV} from './OVContext.jsx';
import ImageDisplay from './ImageDisplay.jsx'
import { CgMinimize } from 'react-icons/cg'
import ThumbnailDisplay from './ThumbnailDisplay.jsx'


const Modal = ({ expand }) => {
  const { setExpand, curStyle, displayIndex } = useOV()
  const close = () => setExpand(false)
  let images = curStyle.photos;

  const style = expand ? { height: '80%', visibility: 'visible'} : {height: '0%', visibility: 'hidden'};

  return (
      <>
      {expand &&
      <>
        <div id='OVModalOverLay' onClick={ close }/>
        <div id='OVExpandThumbNails'>
          <ThumbnailDisplay/>
        </div>
      </>}
      <div id='OVModal' style={style}>
        <ImageDisplay >
          <CgMinimize  className='OVImageExpand'  onClick={ close }/>
          {images.map((image, index) => {
          let styles = {
            backgroundImage: image.url ? `url(${image.url})` : `url(https://cdn.dribbble.com/users/1507491/screenshots/4945826/media/116a8ebc414c519ad1cfc0fe63f79d3e.jpg?compress=1&resize=800x600&vertical=top)`
          }

          if (index === displayIndex) {
            styles.opacity = 1
          }

          return  <div className='OVimageModal' key={index} style={styles} />
          })}
        </ImageDisplay>
      </div>
    </>
  )

}

export default Modal