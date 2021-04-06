import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Left.css";

export default function Left(props) {
  return (
    <div className="row">
      <div className="col">
        <div className="city">{props.data.city}</div>
        <div className="timeDate">
          Last Updated : <FormattedDate date={props.data.date} />
        </div>

        <span className="condition">{props.data.condition}</span>

        <div className="bottomSection">
          <span className="weather-image">
            <WeatherIcon code={props.data.icon} />
          </span>
          <WeatherTemperature fahrenheit={props.data.temperature} />
        </div>
      </div>
      <div className="col info">
        {/* <div className="info"> */}
        <div className="col">
          <div className="highlow">
            <span className="high-a">↑ High </span>
            <span className="high-b">{props.data.maxTemp}°</span> |
            <span className="low-a"> ↓ Low </span>
            <span className="low-b">{props.data.minTemp}°</span>
          </div>

          <div className="feelsLike">
            <div className="feelslike-a">
              <b>Feels Like</b>
            </div>
            <div className="feelslike-b">{props.data.feels_like}°</div>
          </div>
        </div>

        <div className="col">
          <div className="humidity">
            <div className="hum-a">
              <b>Humidity</b>
            </div>
            <div className="hum-b">{props.data.humidity}%</div>
          </div>
        </div>

        <div className="col">
          <div className="wind">
            <div className="wind-a">
              <b>Wind</b>
            </div>
            <div className="wind-b">{props.data.wind} mph</div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
