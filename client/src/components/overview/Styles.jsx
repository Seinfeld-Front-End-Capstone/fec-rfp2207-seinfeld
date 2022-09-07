import React from 'react';

const Styles = ({styles, setStyleIndex, setDisplayIndex}) => {

  const onClick = (e) => {
    setStyleIndex(e.target.dataset.key)
    setDisplayIndex(0)
  }

  return (
    <div id='OVStyleBox'>
      {styles.map((style, index) => {
        return <div className='OVstyles' title={style.name} onClick={onClick} data-key={index} key={index}>{index}</div>
      })}
    </div>
  )
}

export default Styles