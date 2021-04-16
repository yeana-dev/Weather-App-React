import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Left.css";

export default function Left(props) {
  return (
    <div className="leftSection">
      <div className="city">{props.data.city}</div>
      <div className="timeDate">
        Last Updated : <FormattedDate date={props.data.date} />
      </div>
      ​<span className="condition">{props.data.condition}</span>
      <div className="bottomSection">
        <span className="weather-image">
          <WeatherIcon code={props.data.icon} />
        </span>
        <WeatherTemperature
          fahrenheit={props.data}
          unit={props.unit}
          setUnit={props.setUnit}
        />
      </div>
    </div>
  );
}
