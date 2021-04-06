import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "e1bbbda7b1f75d2ab5d063a0f170a3e6";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

  // I can only fetch daily forecast using geolocation, not by the name of city.
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thurs</div>
          <img src="images/01d.png" />
          <div className="WeatherForecast-Temp">
            <span className="WeatherForecast-maxTemp">19</span>
            <span className="WeatherForecast-minTemp">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
