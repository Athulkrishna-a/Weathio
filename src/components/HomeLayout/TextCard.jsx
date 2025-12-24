import React,{useState,useEffect} from 'react'

const TextCard = () => {
    const weatherFacts = [
        "Weather and climate are not the same. Weather is short-term; climate is long-term averages.",
        "The Sun drives almost all weather through uneven heating of Earth.",
        "Wind is caused by air moving from high pressure to low pressure.",
        "Warm air holds more water vapor than cold air.",
        "Clouds can weigh over a million tons despite appearing light.",
        "Lightning is hotter than the surface of the Sun.",
        "Thunder is caused by the rapid expansion of air heated by lightning.",
        "Some rain evaporates before reaching the ground; this is called virga.",
        "Hurricanes cannot form at the equator due to weak Coriolis force.",
        "Most tornadoes form from rotating supercell thunderstorms.",
        "Snow can fall even when ground temperatures are above 0°C.",
        "Hail forms when strong updrafts repeatedly lift ice particles.",
        "Fog is simply a cloud at ground level.",
        "Humidity affects how hot it feels, not the actual air temperature.",
        "The coldest recorded temperature on Earth was −89.2°C in Antarctica.",
        "The hottest recorded temperature on Earth was 56.7°C in Death Valley.",
        "Barometers help predict weather by measuring air pressure changes.",
        "Weather forecasts become unreliable beyond 7–10 days.",
        "El Niño and La Niña significantly impact global weather patterns.",
        "Human activity is increasing the frequency of extreme weather events."
      ];
    
      const [msg, setMsg] = useState("");
    
      useEffect(() => {
        const interval = setInterval(() => {
          const randomIndex = Math.floor(Math.random() * weatherFacts.length);
          setMsg(weatherFacts[randomIndex]);
        }, 3000);
    
        return () => clearInterval(interval); 
      }, []);
    
      return (
        <div className='text-card'>
          <h1>Weather Facts</h1>
          <p>{msg}</p>
        </div>
      )
}

export default TextCard
