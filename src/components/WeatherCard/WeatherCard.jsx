import React, { use, useState } from 'react';
import './WeatherCard.css'

const WeatherCard = ({weatherData}) => {

    const cityKeys = Object.keys(weatherData);
    console.log(cityKeys);
    const [selectedCity, setSelectedCity] = useState(cityKeys[0]);

    const handleChange = (event) => {
        setSelectedCity(event.target.value);
        // console.log('Selected city:', event.target.value);
    };
    

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

    const convertUnixToTime = (unixTimestamp, timeZone) => {
        const date = new Date((unixTimestamp + timeZone) * 1000)
        return date.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        });
    };

    const Weather = use(weatherData)
    
    console.log(Weather);

    // const {name} = Weather;
    const degree = Weather.ProvinceOfTurin.wind.deg;
    // console.log(Weather.key);
    // const rain = Weather.rain;
    const timeZone = Weather.ProvinceOfTurin.timezone;
    

    return (
        
        <>

            <div className='card'>

                <div>
                    <label htmlFor="city">Choose a city: </label>
                    <select id="city" value={selectedCity} onChange={handleChange}>
                    {cityKeys.map((cityKey) => (
                        <option key={cityKey} value={cityKey}>
                        {Weather.name || cityKey}
                        </option>
                    ))}
                    </select>
                </div>


                <h1 id='title'>{Weather.ProvinceOfTurin.name}, {Weather.ProvinceOfTurin.sys.country}</h1>


                <div className='temperature-container'>
                    <img src={Weather.ProvinceOfTurin.weather.icon} alt="" />
                    
                    <div >
                        <p className='temperature'>{Weather.ProvinceOfTurin.weather.description}</p>
                        <p id='temp' className='temperature'>{Weather.ProvinceOfTurin.main.temp}°C</p>
                    </div>

                </div>

                <div className='weather-details'>
                    <p>Wind: {Weather.ProvinceOfTurin.wind.speed}m/s, {findDirection(degree)}</p>
                    <p>Rain (last ): {Weather.ProvinceOfTurin.rain["1h"]}mm</p>
                    <p>Humidity: {Weather.ProvinceOfTurin.main.humidity}%</p>
                    <p>Pressure: {Weather.ProvinceOfTurin.main.pressure} hPa</p>
                </div>

                <div className='sun-container'>
                    <p>Sunrise: {convertUnixToTime(Weather.ProvinceOfTurin.sys.sunrise, timeZone)}</p>
                    <p>Sunset: {convertUnixToTime(Weather.ProvinceOfTurin.sys.sunset, timeZone)}</p>
                </div>

            </div>
        </>
    );
};

export default WeatherCard;