import React from 'react'
import '../HomeLayout/HomeLayout.css'

const BottonCard = () => {
  
  const previousWeekWeather = [
    { id: 1, name: "Clear Sky", temp: 30, icon: "🌅" },
    { id: 2, name: "Cloudy", temp: 28, icon: "☁️" },
    { id: 3, name: "Rainy", temp: 25, icon: "🌦️" },
    { id: 4, name: "Partly Cloudy", temp: 27, icon: "⛅" },
    { id: 5, name: "Foggy", temp: 22, icon: "💭" },
    { id: 6, name: "Thunderstorm", temp: 24, icon: "🌩️" },
    { id: 7, name: "Snow", temp: -1, icon: "🌨️" }
  ];
  const upcomingWeekWeather = [
    { id: 1, name: "Clear Sky", temp: 31, icon: "🌅" },
    { id: 2, name: "Partly Cloudy", temp: 29, icon: "⛅" },
    { id: 3, name: "Cloudy", temp: 26, icon: "☁️" },
    { id: 4, name: "Rainy", temp: 23, icon: "🌦️" },
    { id: 5, name: "Thunderstorm", temp: 21, icon: "🌩️" },
    { id: 6, name: "Snow", temp: 0, icon: "🌨️" },
    { id: 7, name: "Foggy", temp: 19, icon: "💨" }
  ];
 


  return (
    <div className='bottom-card'>
      <div className='bottom-left'>
        
        {previousWeekWeather.map((weather) => (
          <div key={weather.id} className='weather-item'>
            <h1>Previous Weather Info</h1>
            <span className='weather-icon'>{weather.icon}</span>
            <span className='weather-name'>{weather.name}</span>
            <span className='weather-temp'>{weather.temp}°C</span>
          </div>
        ))}
      </div>
      <div className='bottom-right'>
         
        {upcomingWeekWeather.map((weather) => (
          <div key={weather.id} className='weather-item'>
            <h1>Upcoming Weather Forecast</h1>
            <span className='weather-icon'>{weather.icon}</span>
            <span className='weather-name'>{weather.name}</span>
            <span className='weather-temp'>{weather.temp}°C</span>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default BottonCard
