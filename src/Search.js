import "./Search.css";
import WeahterForecast from "./WeatherForecast";
import React, { useState } from "react";
import axios from "axios";
import Left from "./Left";
import Right from "./Right";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("fahrenheit");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      condition: response.data.weather[0].description,
      feels_like: Math.round(response.data.main.feels_like),
      maxTemp: Math.round(response.data.main.temp_max),
      minTemp: Math.round(response.data.main.temp_min),
      date: new Date(response.data.dt * 1000),
    });
  }

  function Result() {
    let apiKey = "e1bbbda7b1f75d2ab5d063a0f170a3e6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }

  function Position(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    let apiKey = "e1bbbda7b1f75d2ab5d063a0f170a3e6";
    let apiGeoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

    axios.get(apiGeoUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Result(city);
  }

  function currentPosition() {
    navigator.geolocation.getCurrentPosition(Position);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <form className="searchForm" onSubmit={handleSubmit}>
          <input
            type="search"
            className="form-control"
            placeholder="Search City"
            autoComplete="off"
            onChange={handleCityChange}
          />
          <button type="submit" className="btn btn-secondary">
            <i class="fas fa-search"></i>
          </button>

          <button type="button" className="btn btn-secondary">
            <i className="fas fa-location-arrow" onClick={currentPosition}></i>
          </button>
        </form>
        <section>
          {/* <div className="row"> */}
          {/* <div className="col-6"> */}
          <Left data={weatherData} unit={unit} setUnit={setUnit} />
          {/* </div>
            <div className="col-6"> */}
          <Right data={weatherData} unit={unit} />
          {/* </div> */}
        </section>
        <WeahterForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    Result();
    return null;
  }
}
