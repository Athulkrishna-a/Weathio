import React, { useState, useEffect } from 'react'
import thunderstormIcon from "../../assets/images/thunderstorm.png";
import Stormy from "../../assets/images/strom.png";
import clearnight from "../../assets/images/clearnight.png";
import coolnight from "../../assets/images/coolnight.png";
import clearsky from "../../assets/images/clearsky.png";
import dark from "../../assets/images/dark.png";
import sun from "../../assets/images/sun.png";
import sunny from "../../assets/images/sunny.png";
import windy from "../../assets/images/windy.png";
import fullcloud from "../../assets/images/fullcloud.png";
import lightrainy from "../../assets/images/lightrainy.png";
import heavyrain from "../../assets/images/heavyrain.png";
import lightrain from "../../assets/images/lightrain.png";
import cloud from "../../assets/images/cloud01.png";

const MainCard = () => {

  const weatherData = [
    {
      id: 1,
      name: "Clear",
      temperature: 34,
      wind: 6.2,
      airQualityIndex: 42,
      airQualityLabel: "Good",
      description: "Clear sky with bright sunshine",
      icon: clearsky,
      image:"https://images.stockcake.com/public/b/4/6/b4668308-c13f-4c4f-80e8-3e1776c02ab2_large/bright-sunny-day-stockcake.jpg",
      category: "primary"
    },
    {
      id: 2,
      name: "Sunny",
      temperature: 35,
      wind: 6.8,
      airQualityIndex: 45,
      airQualityLabel: "Good",
      description: "Strong sunlight with minimal clouds",
      icon: sunny,
      image:"https://motionarray.imgix.net/motion-array-3077277-5P3RgQEWJS-high_0001.jpg?w=660&q=60&fit=max&auto=format",
      category: "primary"
    },
    {
      id: 3,
      name: "Partly Cloudy",
      temperature: 33,
      wind: 7.4,
      airQualityIndex: 50,
      airQualityLabel: "Moderate",
      description: "Scattered clouds with warm air",
      icon: fullcloud,
      image:"https://www.popsci.com/wp-content/uploads/2025/06/how_do_clouds_get_their_shapes.jpg?quality=85",
      category: "secondary"
    },
    {
      id: 4,
      name: "Cloudy",
      temperature: 31,
      wind: 8.1,
      airQualityIndex: 54,
      airQualityLabel: "Moderate",
      description: "Dense clouds reducing sunlight",
      icon: dark,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLxjhVvu1OKHUh6utxdOFqcKCAxcz5TGzq_Q&s",
      category: "secondary"
    },
    {
      id: 5,
      name: "Windy",
      temperature: 30,
      wind: 12.3,
      airQualityIndex: 48,
      airQualityLabel: "Good",
      description: "Cool breeze with strong winds",
      icon: windy,
      image:"https://images.foxweather.com/static.foxweather.com/www.foxweather.com/content/uploads/2022/06/668/376/GettyImages-845340462.jpg?ve=1&tl=1",
      category: "secondary"
    },
    {
      id: 6,
      name: "Overcast",
      temperature: 29,
      wind: 9.6,
      airQualityIndex: 55,
      airQualityLabel: "Moderate",
      description: "Fully covered sky with dull light",
      icon: cloud,
      image:"https://thumbs.dreamstime.com/b/image-depicts-dramatic-night-sky-filled-dark-heavy-clouds-predominantly-white-gray-some-areas-blue-hints-373932978.jpg",
      category: "secondary"
    },
    {
      id: 7,
      name: "Light Rain",
      temperature: 27,
      wind: 10.2,
      airQualityIndex: 60,
      airQualityLabel: "Moderate",
      description: "Light drizzle cooling the atmosphere",
      icon: lightrainy,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSXEPwdmUEtHI4qVgHwFPHq_jc602rq3oKrw&s",
      category: "warning"
    },
    {
      id: 8,
      name: "Rainy",
      temperature: 26,
      wind: 11.8,
      airQualityIndex: 58,
      airQualityLabel: "Moderate",
      description: "Steady rainfall with cool winds",
      icon: heavyrain,
      image:"https://images.stockcake.com/public/0/7/9/0796bd2f-b458-4d4a-b923-19fcd6d22146_large/stormy-rainy-sky-stockcake.jpg",
      category: "warning"
    },
    {
      id: 9,
      name: "Thunderstorm",
      temperature: 25,
      wind: 15.6,
      airQualityIndex: 65,
      airQualityLabel: "Poor",
      description: "Heavy rain with thunder and lightning",
      icon: thunderstormIcon,
      image:"https://images.unsplash.com/photo-1600323847785-fe21bc36acdf?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyQyUyMHRodW5kZXJzdG9ybXxlbnwwfHwwfHx8MA%3D%3D",
      category: "danger"
    },
    {
      id: 10,
      name: "Stormy",
      temperature: 24,
      wind: 18.4,
      airQualityIndex: 70,
      airQualityLabel: "Poor",
      description: "Severe weather with strong gusts",
      icon: Stormy,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbnRiTt61hOZXHHdQZYP4BmRTPokeEBRFXA&s",
      category: "danger"
    },
    {
      id: 11,
      name: "Night Clear",
      temperature: 23,
      wind: 7.1,
      airQualityIndex: 46,
      airQualityLabel: "Good",
      description: "Clear night sky with calm winds",
      icon:clearnight,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYf7k8ES41HaB3Q9sORlRQf1FHUD0Z8t01Q&s",
      category: "primary"
    },
    {
      id: 12,
      name: "Cool Night",
      temperature: 22,
      wind: 6.0,
      airQualityIndex: 44,
      airQualityLabel: "Good",
      description: "Cool air with peaceful night conditions",
      icon: coolnight,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZu-4J-OOBFdJ5DryBBS-7P0L8XQ1xbY2NQ&s",
      category: "primary"
    }
  ];
  const [currentWeather, setCurrentWeather] = useState('')
  const getWeatherByTime = () => {
    const hour = new Date().getHours();
    const index = Math.floor(hour / 2);
    return weatherData[index];
  };


  useEffect(() => {
    setCurrentWeather(getWeatherByTime());
  }, []);

  return (
    <div
      className="main-container"
      style={{
        backgroundImage: `url(${currentWeather.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "16px",
        padding: "20px",
        color: "#fff",
      }}
    >
      <div className="weather-info">
        <h2>{currentWeather.name}</h2>
        <p>🌡 {currentWeather.temperature}°C</p>
        <p>💨 {currentWeather.wind} km/h</p>
        <p>
          AQI: {currentWeather.airQualityIndex} (
          {currentWeather.airQualityLabel})
        </p>
        <p>{currentWeather.description}</p>
      </div>

      <div className="weather-icon">
        <img
          src={currentWeather.icon}
          alt={currentWeather.name}
          width={80}
          height={80}
        />
      </div>
    </div>
  );
}

export default MainCard
