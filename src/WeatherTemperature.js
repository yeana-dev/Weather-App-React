import React, { useState } from "react";
// import Right from "./Right";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <span>
        <span className="bottomTemp">{props.fahrenheit.temperature}°</span>
        <span className="units">
          °F |{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
        <div className="col info">
          <div className="highlow">
            <span className="highlow-a">↑ High </span>
            <span className="high-b">{props.fahrenheit.maxTemp}°</span> |
            <span className="highlow-a"> ↓ Low </span>
            <span className="low-b">{props.fahrenheit.minTemp}°</span>
          </div>

          <div className="feelsLike">
            <div className="feelslike-a">
              <b>Feels Like</b>
            </div>
            <div className="feelslike-b">{props.fahrenheit.feels_like}°</div>
          </div>

          <div className="col">
            <div className="humidity">
              <div className="hum-a">
                <b>Humidity</b>
              </div>
              <div className="hum-b">{props.fahrenheit.humidity}%</div>
            </div>
          </div>

          <div className="col">
            <div className="wind">
              <div className="wind-a">
                <b>Wind</b>
              </div>
              <div className="wind-b">{props.fahrenheit.wind} Mph</div>
            </div>
          </div>
        </div>
      </span>
    );
  } else {
    // converting all to imperial. Trying to figure out how to
    // make these little neater.

    let celsius = (props.fahrenheit.temperature - 32) * (5 / 9);
    let highCelsius = (props.fahrenheit.maxTemp - 32) * (5 / 9);
    let lowCelsius = (props.fahrenheit.minTemp - 32) * (5 / 9);
    let feelsLikeCelsius = (props.fahrenheit.feels_like - 32) * (5 / 9);
    let windkph = props.fahrenheit.wind * 1.609;

    return (
      <span>
        <span className="bottomTemp">{Math.round(celsius)}°</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
        {/* <div className="col"> */}
        {/* <div className="info"> */}
        <div className="col">
          <div className="highlow">
            <span className="highlow-a">↑ High </span>
            <span className="high-b">{Math.round(highCelsius)}°</span> |
            <span className="highlow-a"> ↓ Low </span>
            <span className="low-b">{Math.round(lowCelsius)}°</span>
          </div>

          <div className="feelsLike">
            <div className="feelslike-a">
              <b>Feels Like</b>
            </div>
            <div className="feelslike-b">{Math.round(feelsLikeCelsius)}°</div>
          </div>
        </div>

        <div className="col">
          <div className="humidity">
            <div className="hum-a">
              <b>Humidity</b>
            </div>
            <div className="hum-b">{props.fahrenheit.humidity}%</div>
          </div>
        </div>

        <div className="col">
          <div className="wind">
            <div className="wind-a">
              <b>Wind</b>
            </div>
            <div className="wind-b">{Math.round(windkph)} Kph</div>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </span>
    );
  }
}
