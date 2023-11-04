import { useState } from 'react'
import './App.css'
import CityName from './components/CityName'
import CurrentDay from './components/CurrentDay'
import CurrentTime from './components/CurrentTime'
import WeatherCondition from './components/WeatherCondition'
import HumidityLevel from './components/HumidityLevel'
import ForecastNextWeek from './components/ForecastNextWeek'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='main-body'>
      <CityName />
      <div className='day_time'>
      <CurrentDay />
      <CurrentTime />
      </div>
      <WeatherCondition />
      <HumidityLevel />
      <ForecastNextWeek />
    </main>
  )
}

export default App
