import React from "react";
import "./Right.css";

export default function Right() {
  let weatherData = {
    highTemp: 66,
    lowTemp: 44,
    feelsLike: 55,
    humidity: 33,
    wind: 5,
  };
  return (
    <div className="col">
      <div className="info">
        <div className="col">
          <div className="highlow">
            <span className="high-a">↑ High </span>
            <span className="high-b">{weatherData.highTemp}°</span> |
            <span className="low-a">↓ Low </span>
            <span className="low-b">{weatherData.lowTemp}°</span>
          </div>

          <div className="feelsLike">
            <div className="feelslike-a">
              <b>Feels Like</b>
            </div>
            <div className="feelslike-b">{weatherData.feelsLike}°</div>
          </div>
        </div>

        <div className="col">
          <div className="humidity">
            <div className="hum-a">
              <b>Humidity</b>
            </div>
            <div className="hum-b">{weatherData.humidity}%</div>
          </div>
        </div>

        <div className="col">
          <div className="wind">
            <div className="wind-a">
              <b>Wind</b>
            </div>
            <div className="wind-b">{weatherData.wind} mph</div>
          </div>
        </div>
      </div>
    </div>
  );
}
