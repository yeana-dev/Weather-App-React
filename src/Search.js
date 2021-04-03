import "./Search.css";
import React, { useState } from "react";
import axios from "axios";
import Left from "./Left";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleSubmit(response) {
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
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <div className="mb-3">
          <form id="cityForm">
            <input
              type="search"
              className="form-control"
              id="searchCity"
              placeholder="Search City"
              autocomplete="off"
            />
            <button type="submit" className="btn btn-secondary">
              Search
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              id="currentButton"
            >
              <i className="fas fa-location-arrow"></i>
            </button>
          </form>
        </div>

        <Left data={weatherData} />
      </div>
    );
  } else {
    let apiKey = "e1bbbda7b1f75d2ab5d063a0f170a3e6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleSubmit);

    return <p>Loading</p>;
  }
}
