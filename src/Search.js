import "./Search.css";
import React from "react";

export default function Search() {
  return (
    <div className="mb-3">
      <form id="cityForm">
        <input
          type="search"
          className="form-control"
          id="searchCity"
          placeholder="Search City"
          autocomplete="off"
        />
        <button type="submit" className="btn btn-secondary">
          Search
        </button>
        <button type="button" className="btn btn-secondary" id="currentButton">
          <i className="fas fa-location-arrow"></i>
        </button>
      </form>
    </div>
  );
}
