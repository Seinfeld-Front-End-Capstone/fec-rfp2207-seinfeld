import React, {useState, useEffect} from 'react';

const Styles = ({styles, setCurStyles}) => {

  const onClick = (e) => {
    setCurStyles(e.target.dataset.key)
  }

  return (
    <div>
      {styles.map((style, index) => {
        return <button className='styles' onClick={onClick} data-key={index} key={index}>{style.name}</button>
      })}
    </div>
  )
}

export default Styles