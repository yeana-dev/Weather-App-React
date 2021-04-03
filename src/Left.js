import React from "react";
import Right from "./Right";
import "./Left.css";

export default function Left(props) {
  return (
    <div class="row">
      <div className="col">
        <div className="city">{props.data.city}</div>
        <div className="timeDate">{props.data.time}</div>

        <span className="condition">{props.data.condition}</span>

        <div className="bottomSection">
          <img
            src="/images/01d.png"
            alt={props.data.condition}
            className="weather-image"
          />
          <span className="bottomTemp">{props.data.temperature}°</span>
          <span className="units">
            <a href="/" className="active">
              °F
            </a>{" "}
            | <a href="/">°C</a>
          </span>
        </div>
      </div>
      <div className="col">
        <Right data={props.data} />
      </div>
    </div>
  );
}
