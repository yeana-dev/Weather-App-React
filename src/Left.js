import React from "react";
import Right from "./Right";
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
      <div className="col">
        <Right data={props.data} />
      </div>
    </div>
  );
}
