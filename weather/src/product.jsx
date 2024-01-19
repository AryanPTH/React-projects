import React from 'react';
import './App.css';

const Product = (props) => {
  return (
    <div className='product'>
    <h2>{props.name}</h2>
    <img width={"253px"} src={props.img} alt=''/>
      <h2>{props.temperature}°C</h2>
    </div>
  );
};

export default Product;
