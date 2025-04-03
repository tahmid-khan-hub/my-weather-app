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

    const convertUnixToTime = (unixTimestamp) => {
        return new Date(unixTimestamp * 1000).toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
    };

    const Weather = use(weatherData)
    
    console.log(Weather);

    const {name} = Weather;
    const degree = Weather.wind.deg;
    // const rain = Weather.rain;
    

    return (
        <div className='card'>
            <h1 id='title'>{name}, {Weather.sys.country}</h1>


            <div className='temperature-container'>
                <img src={Weather.weather[0].icon} alt="" />
                
                <div >
                    <p className='temperature'>{Weather.weather[0].description}</p>
                    <p id='temp' className='temperature'>{Weather.main.temp}°C</p>
                </div>

            </div>

            <p className='weather-details'>Wind: {Weather.wind.speed}m/s, {findDirection(degree)}</p>
            <p className='weather-details'>Rain (last ): {Weather.rain["1h"]}mm</p>
            <p className='weather-details'>Humidity: {Weather.main.humidity}%</p>
            <p className='weather-details'>Pressure: {Weather.main.pressure} hPa</p>

            <div className='sun-container'>
                <p>Sunrise: {convertUnixToTime(Weather.sys.sunrise)}</p>
                <p>Sunset: {convertUnixToTime(Weather.sys.sunset)}</p>
            </div>

        </div>
    );
};

export default WeatherCard;