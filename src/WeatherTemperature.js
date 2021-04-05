import React, { useState } from "react";

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
        <span className="bottomTemp">{props.fahrenheit}°</span>
        <span className="units">
          °F |{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    let celsius = (props.fahrenheit * 9) / 5 + 32;
    return (
      <span>
        <span className="bottomTemp">{Math.round(celsius)}°</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  }
}
