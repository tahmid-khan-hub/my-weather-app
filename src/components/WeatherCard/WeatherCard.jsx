import React, { use } from 'react';
import './WeatherCard.css'

const WeatherCard = ({weatherData}) => {

    const Weather = use(weatherData)
    
    console.log(Weather);

    const {name} = Weather;

    return (
        <div className='card'>
            <h1>{name}, {Weather.sys.country}</h1>
            {/* <img src={Weather.weather[0].icon} alt="" /> */}
            
            <p>{Weather.weather[0].description}</p>
        </div>
    );
};

export default WeatherCard;