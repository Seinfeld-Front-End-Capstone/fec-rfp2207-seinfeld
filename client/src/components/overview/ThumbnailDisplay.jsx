import React, { useEffect, useState }from 'react';
import { useOV } from './OVContext.jsx'

const Thumbnail = () => {
  let { curStyle, expand, displayIndex, setDisplayIndex, left } = useOV()
  let images = curStyle.photos;

  const onClick = (e) => {
    let imageIndex = e.target.dataset.key
    setDisplayIndex(Number(imageIndex))
  }

  return (
    <>
      {images.map((image, index) => {
        let styles = {
          backgroundImage: `url(${image.thumbnail_url})`,
          left: `${left}px`
        }
        let circleStyle = {}
        if (index === displayIndex) {
          styles.border = `3px solid var(--dark-green)`
          styles.opacity = '1'
          circleStyle.backgroundColor = `var(--mid-green)`
        }

        return  expand ?
        <div className='OVThumbnailCircle' key={index} onClick={onClick} style={circleStyle} data-key={index}/>:
        <div className='OVthumbnailImage'key={index} onClick={onClick} style={styles} data-key={index}/>
      })}
    </>
  )
}

export default Thumbnail