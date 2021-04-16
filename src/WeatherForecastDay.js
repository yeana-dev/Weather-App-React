import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  let maxTemperature = Math.round(props.data.temp.max);
  let minTemperature = Math.round(props.data.temp.min);
  let weatherIconCode = `images/${props.data.weather[0].icon}.png`;

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="forecastDay">
      <div className="row">
        <div className="col-2 WeatherForecast-day">{day()}</div>
        <img src={weatherIconCode} className="img" alt="" />
        <div className="col-3 WeatherForecast-Temp">
          <span className="col WeatherForecast-maxTemp">{maxTemperature}°</span>
          <span className="col WeatherForecast-minTemp">{minTemperature}°</span>
        </div>
      </div>
    </div>
  );
}
