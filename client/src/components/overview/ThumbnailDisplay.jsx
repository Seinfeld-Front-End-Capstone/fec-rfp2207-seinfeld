import React from 'react';
import {useOV} from './OVContext.jsx'

const Thumbnail = ({images}) => {
  let {curStyle, displayIndex, setDisplayIndex} = useOV()

  const onClick = (e) => {
    setDisplayIndex(Number(e.target.dataset.key))
  }

  return (
    <div id='OVThumbnailDisplayBox'>
      <div id='OVThumbnailSwiper'>
        {images.map((image, index) => {
          let styles = {backgroundImage: `url(${image.thumbnail_url})`}
          if (index === displayIndex) {
            styles.border = `5px solid var(--light)`
            styles.transform = `scale(1.1)`
          }
          return <div className='OVthumbnailImage'key={index} onClick={onClick} style={styles} data-key={index}/>
        })}
      </div>
    </div>
  )
}

export default Thumbnail