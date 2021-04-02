import React from "react";
import "./Left.css";

export default function Left() {
  let weatherData = {
    city: "Houston",
    time: "Monday 13:54",
    condition: "Sunny",
    temp: 50,
    icon:
      "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-512.png",
  };

  return (
    <div className="col">
      <div className="city">{weatherData.city}</div>
      <div className="timeDate">{weatherData.time}</div>

      <span className="condition">{weatherData.condition}</span>

      <div className="bottomSection">
        <img
          src={weatherData.icon}
          alt={weatherData.condition}
          className="weather-image"
        />
        <span className="bottomTemp">{weatherData.temp}°</span>
        <span className="units">
          <a href="/" className="active">
            °F
          </a>{" "}
          | <a href="/">°C</a>
        </span>
      </div>
    </div>
  );
}
