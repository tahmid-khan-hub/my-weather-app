import React, { use } from 'react';
import './WeatherCard.css'

const WeatherCard = ({weatherData}) => {

    function findDirection(degree){
        const directions = [
            "North", "North-Northeast", "Northeast", "East-Northeast", "East",
        "East-Southeast", "Southeast", "South-Southeast", "South", 
        "South-Southwest", "Southwest", "West-Southwest", "West", 
        "West-Northwest", "Northwest", "North-Northwest"
        ];

        const index = Math.round(degree / 22.5) % 16;
        return directions[index];
    }

    const Weather = use(weatherData)
    
    console.log(Weather);

    const {name} = Weather;
    const degree = Weather.wind.deg;
    

    return (
        <div className='card'>
            <h1>{name}, {Weather.sys.country}</h1>

            {/* <img src={Weather.weather[0].icon} alt="" /> */}
            
            <h1 className='temperature'>{Weather.weather[0].description}</h1>
            <h1 className='temperature'>{Weather.main.temp}°C</h1>

            <p>Wind: {Weather.wind.speed}, {findDirection(degree)}</p>
            <p>Rain (): {Weather.rain["1h"]}mm</p>

        </div>
    );
};

export default WeatherCard;