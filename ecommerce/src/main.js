import{ useEffect, useState } from 'react';
import Product from './product';
import './App.css'
const Main = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data)
      setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='m'>
      {
      data.map((element) => (
        <Product 
        key={element.id} 
        img={element.image}
        title={element.title}
        price={element.price}/>
      ))}
    </div>
  );
};

export default Main;
