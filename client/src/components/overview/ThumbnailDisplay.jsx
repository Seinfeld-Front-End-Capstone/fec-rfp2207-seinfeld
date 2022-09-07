import React from 'react';
import {useOV} from './OVContext.jsx'

const Thumbnail = ({expand}) => {
  let {curStyle, displayIndex, setDisplayIndex} = useOV()
  let images = curStyle.photos;

  const onClick = (e) => {
    let imageIndex = e.target.dataset.key
    setDisplayIndex(Number(imageIndex))
  }

  return (
    <>
      {images.map((image, index) => {
        let styles = {backgroundImage: `url(${image.thumbnail_url})`}
        let circleStyle = {}
        if (index === displayIndex) {
          styles.border = `5px solid var(--light)`
          styles.transform = `scale(1.1)`
          circleStyle.backgroundColor = `var(--light)`
        }

        return  expand ?
        <div className='OVThumbnailCircle' key={index} onClick={onClick} style={circleStyle} data-key={index}/>:
        <div className='OVthumbnailImage'key={index} onClick={onClick} style={styles} data-key={index}/>
      })}
    </>
  )
}

export default Thumbnail