import React from 'react';

const Styles = ({styles, setStyleIndex}) => {

  const onClick = (e) => {
    setStyleIndex(e.target.dataset.key)
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