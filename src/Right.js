import React from "react";
import "./Right.css";

export default function Right(props) {
  // if (props.unit === "fahrenheit") {
  return (
    <div className="info">
      <div className="highlow">
        <span className="highlow-a">↑ High </span>
        <span className="high-b">{Math.round(props.data.maxTemp)}°</span> |
        <span className="highlow-a"> ↓ Low </span>
        <span className="low-b">{Math.round(props.data.minTemp)}°</span>
      </div>

      <div className="feelsLike">
        <div className="feelslike-a">
          <b>Feels Like</b>
        </div>
        <div className="feelslike-b">{Math.round(props.data.feels_like)}°</div>
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
          <div className="wind-b">{Math.round(props.data.wind)} Mph</div>
        </div>
      </div>
    </div>
  );
}
//   } else {
//     let highCelsius = (props.data.maxTemp - 32) * (5 / 9);
//     let lowCelsius = (props.data.minTemp - 32) * (5 / 9);
//     let feelsLikeCelsius = (props.data.feels_like - 32) * (5 / 9);
//     let windkph = props.data.wind * 1.609;

//     return (
//       <div className="info">
//         <div className="highlow">
//           <span className="highlow-a">↑ High </span>
//           <span className="high-b">{Math.round(highCelsius)}°</span> |
//           <span className="highlow-a"> ↓ Low </span>
//           <span className="low-b">{Math.round(lowCelsius)}°</span>
//         </div>
//         <div className="feelsLike">
//           <div className="feelslike-a">
//             <b>Feels Like</b>
//           </div>
//           <div className="feelslike-b">{Math.round(feelsLikeCelsius)}°</div>
//         </div>
//         <div className="col">
//           <div className="humidity">
//             <div className="hum-a">
//               <b>Humidity</b>
//             </div>
//             <div className="hum-b">{props.data.humidity}%</div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="wind">
//             <div className="wind-a">
//               <b>Wind</b>
//             </div>
//             <div className="wind-b">{Math.round(windkph)} Kph</div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
