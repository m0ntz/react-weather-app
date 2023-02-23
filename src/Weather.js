import React from "react";
import "./Weather.css";

export default function Weather() {
  let data = {
    city: "Düsseldorf",
    date: "Sunday 14:00",
    description: "cloudy",
    icon: "http://openweathermap.org/img/wn/04n.png",
    temperature: 3,
    humidity: 80,
    wind: 5,
  };

  return (
    <body>
      <div class="container">
        <div class="weather-app">
          <form id="search-form">
            <div class="row">
              <div class="col-9">
                <input
                  type="search"
                  placeholder="Enter location"
                  class="form-control"
                  id="city-input"
                />
              </div>
              <div class="col-3">
                <input type="submit" value="Search" class="btn btn-primary" />
              </div>
            </div>
          </form>
          <div class="overview">
            <h1 id="city">{data.city}</h1>
            <ul>
              <li>
                Last updated: {data.date} <span id="date"></span>
              </li>
              <li id="description">{data.description}</li>
            </ul>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="d-flex weather-temperature">
                <img
                  src={data.icon}
                  alt="rain-icon"
                  class="float-left"
                  id="icon"
                />
                <strong id="temperature">{data.temperature}</strong>
                <span class="units">
                  <a href="#" id="celsius-link" class="active">
                    {" "}
                    °C
                  </a>{" "}
                  |
                  <a href="#" id="fahrenheit-link" rel="noreferrer">
                    °F
                  </a>
                </span>
              </div>
            </div>
            <div class="col-6">
              <ul>
                <li>
                  Humidity: {data.humidity}
                  <span id="humidity"></span>%
                </li>
                <li>
                  Wind: {data.wind} <span id="wind"></span> km/h
                </li>
              </ul>
            </div>
          </div>
          <div class="weather-forecast" id="forecast"></div>
        </div>
        <footer>
          <a
            href="https://github.com/m0ntz/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Montserrat Chavez
        </footer>
      </div>
    </body>
  );
}
