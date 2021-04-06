import "./Search.css";
import React, { useState } from "react";
import axios from "axios";
import Left from "./Left";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
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
        <div className="mb-3">
          <form id="cityForm" onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control"
              id="searchCity"
              placeholder="Search City"
              autoComplete="off"
              onChange={handleCityChange}
            />
            <button type="submit" className="btn btn-secondary">
              Search
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              id="currentButton"
            >
              <i
                className="fas fa-location-arrow"
                onClick={currentPosition}
              ></i>
            </button>
          </form>
        </div>

        <Left data={weatherData} />
      </div>
    );
  } else {
    Result();
    return <p>Loading</p>;
  }
}
