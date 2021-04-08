import React from "react";

export default function WeatherTemperature(props) {
  // function showCelsius(event) {
  //   event.preventDefault();
  //   props.setUnit("celsius");
  // }

  // function showFahrenheit(event) {
  //   event.preventDefault();
  //   props.setUnit("fahrenheit");
  // }

  // if (props.unit === "fahrenheit") {
  return (
    <span>
      <span className="bottomTemp">{props.fahrenheit.temperature}°</span>
      {/* <span className="units">
        °F */}
      {/* °F |{" "}
          <a href="/" onClick={showCelsius}>
            °C */}
      {/* </a> */}
      {/* </span> */}
    </span>
  );
}
//   } else {
//     let celsius = (props.fahrenheit.temperature - 32) * (5 / 9);
//     return (
//       <span>
//         <span className="bottomTemp">{Math.round(celsius)}°</span>
//         <span className="units">
//           {/* °C |{" "}
//           <a href="/" onClick={showFahrenheit}> */}
//             °F
//           </a>
//         </span>
//       </span>
//     );
//   }
// }
