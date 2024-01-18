import React from 'react'
import './App.css'
const product = (props) => {
  const handleClick = () => {
    window.location.href =`https://www.amazon.in/s?k=${props.title}&crid=2ZLU1C3JFN0W7&sprefix=%2Caps%2C711&ref=nb_sb_ss_recent_2_0_recent`;
  };
  return (
    <div className='product'>
      <img onClick={handleClick} height="268px" width="182px" src={props.img} alt={props.title} />
        <h3>{props.title}</h3>
        <h4>${props.price}</h4>
    </div>
  )
}

export default product