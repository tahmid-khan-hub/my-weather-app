import { Suspense } from 'react';
import './App.css'
import WeatherCard from './components/WeatherCard/WeatherCard'

const weatherData = fetch('./weatherData.json')
.then(res => res.json());

function App() {

  return (
    <>
      
      <Suspense fallback={<h4>loading....</h4>}>
        <WeatherCard weatherData = {weatherData}></WeatherCard>
      </Suspense>
    </>
  )
}

export default App
