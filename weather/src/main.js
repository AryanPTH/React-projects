import React, { useEffect, useState } from 'react';
import Product from './product';
import './App.css';
import windIcon from './Weather-App-Html/wind.png';
import humidityIcon from './Weather-App-Html/humidity.png';
import searchIcon from './Weather-App-Html/search.png';

const Main = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState({
    main: {
      temp: null,
      humidity: null,
    },
    wind: {
      speed: null,
    },
    name: '',
  });
  const [weatherImage, setWeatherImage] = useState(null);

  const getData = async () => {
    const api = "b7593ebf19c72a828544fe4a0536eea8";
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${api}`);
      const weatherData = await response.json();
      console.log(weatherData);
      setData(weatherData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const Image = () => {
    if (data.main && data.main.temp) {
      return import('./Weather-App-Html/sun.png').then(module => module.default);
    } else {
      return import('./Weather-App-Html/cloudy.png').then(module => module.default);
    }
  };

  const keyPressed = (event) => {
    if (event.key === "Enter") {
      getData();
    }
  };

  const getCity = (event) => {
    setCity(event.target.value);
  };

  const Search = () => {
    getData();
  };

  useEffect(() => {
    Image().then(image => setWeatherImage(image));
  }, [data.main]);

  return (
    <div className='card'>
      <div className='search'>
        <input
          placeholder='Enter the city'
          value={city}
          onChange={getCity}
          onKeyDown={keyPressed}
        />
        <button>
          <img src={searchIcon} onClick={Search} alt="Search" />
        </button>
      </div>
      <h2>{data.name || 'City'}</h2>
      {data.main && (
        <Product
          img={weatherImage}
          temperature={data.main.temp}
        />
      )}
      <div className='details'>
        <div className='col'>
          <img src={windIcon} alt="Wind Icon" />
          <p>{data.wind && data.wind.speed ? `${data.wind.speed} km/hr` : 'N/A'}</p>
          <p>Wind speed</p>
        </div>
        <div className='col'>
          <img src={humidityIcon} alt="Humidity Icon" />
          <p>{data.main.humidity ? `${data.main.humidity}%` : 'N/A'}</p>
          <p>Humidity</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
