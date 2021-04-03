import React from "react";
import Search from "./Search";

export default function Weather() {
  return (
    <div className="Weather">
      <Search defaultCity="houston" />
    </div>
  );
}
