import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [data, setData] = useState(false);
  const [weather, setWeather] = useState({});

  function searchCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setData(true);

    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "117ab8d8bcf8c7c5acd0f501978c9bbf";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showTemperature);
  }

  let form = (
    <form id="search-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter location"
            class="form-control"
            id="city-input"
            onChange={searchCity}
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </div>
    </form>
  );

  let staticData = {
    city: "Düsseldorf",
    date: "Sunday 14:00",
    description: "cloudy",
    icon: "http://openweathermap.org/img/wn/04n.png",
    temperature: 3,
    humidity: 80,
    wind: 5,
  };

  if (data) {
    return (
      <div className="body">
        <div className="container">
          <div className="weather-app">
            {form}
            <div className="overview">
              <h1 id="city" style={{ textTransform: "capitalize" }}>
                {city}
              </h1>
              <ul>
                <li>
                  Last updated: Today <span id="date"></span>
                </li>
                <li id="description">{weather.description}</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="d-flex weather-temperature">
                  <img
                    src={weather.icon}
                    alt="Weather Icon"
                    className="float-left"
                    id="icon"
                  />
                  <strong id="temperature">{weather.temperature}</strong>
                  <span className="units">°C</span>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Humidity: {weather.humidity}
                    <span id="humidity"></span>%
                  </li>
                  <li>
                    Wind: {weather.wind} <span id="wind"></span> km/h
                  </li>
                </ul>
              </div>
            </div>
            <div className="weather-forecast" id="forecast"></div>
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
      </div>
    );
  } else {
    return (
      <div className="body">
        <div className="container">
          <div className="weather-app">
            {form}
            <div className="overview">
              <h1 id="city" style={{ textTransform: "capitalize" }}>
                {staticData.city}
              </h1>
              <ul>
                <li>
                  Last updated: Today <span id="date"></span>
                </li>
                <li id="description">{weather.description}</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="d-flex weather-temperature">
                  <img
                    src={staticData.icon}
                    alt="Weather Icon"
                    className="float-left"
                    id="icon"
                  />
                  <strong id="temperature">{staticData.temperature}</strong>
                  <span className="units">°C</span>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Humidity: {staticData.humidity}
                    <span id="humidity"></span>%
                  </li>
                  <li>
                    Wind: {staticData.wind} <span id="wind"></span> km/h
                  </li>
                </ul>
              </div>
            </div>
            <div className="weather-forecast" id="forecast"></div>
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
      </div>
    );
  }
}
