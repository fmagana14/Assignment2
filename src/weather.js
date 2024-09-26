import { useState } from "react";
import "./Weather.css";

import RadioButton from "./RadioButton";
import WeatherDisplay from "./WeatherDisplay";

function Weather() {
  const [zip, setZip] = useState(" ");
  const [unit, setUnit] = useState(" ");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null) 

  async function fetchWeather() {
    // fetch weather
    const apikey = "c2b0ca089391ecaa844992dcbbff0c8a";
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip.trim()}&appid=${apikey}&units=${unit}`;
    const res = await fetch(path);
    const json = await res.json();
    // set data
    console.log(json)

    if (json.cod === 200){   
        const temp = json.main.temp;
        const feelsLike = json.main.feels_like;
        const discription = json.weather[0].discription;
        const name = json.main.name
        const humidity = json.main.humidity
        setError(null)
        setData({
          name,
          temp,
          feelsLike,
          discription,
          humidity
        });
      }
      else{
        setError(json)
        setData(null)
      }
  }

  // seems to be error for api key but if you press 'x' on top right corner
  // then redo the process it displays the 'temp' and 'feelslike'
  return (
    <div className="Weather">
      {data && (
        <WeatherDisplay
        feelsLike={data.feelsLike}
          discription={data.discription}
          name={data.name}
          humidity={data.humidity}
          temp={data.temp}
        />
      )}
      {error && (
        <p>Error: {error.cod} Message: {error.message}</p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchWeather();
        }}
      >
        <div className="input-container">
          <input
            placeholder="Enter zip code"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
          <button type="submit">Submit</button>
        </div>

        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="metric">Celcius</option>
          <option value="imperial">Fahrenheit</option>
          <option value="standard">Kelvin</option>
        </select>

        <RadioButton
          label="metric"
          name="unit"
          checked={unit === "metric"}
          onChange={() => setUnit("metric")}
        />

        <RadioButton
          label="imperial"
          name="unit"
          checked={unit === "imperial"}
          onChange={() => setUnit("imperial")}
        />

        <RadioButton
          label="standard"
          name="unit"
          checked={unit === "standard"}
          onChange={() => setUnit("standard")}
        />
      </form>
    </div>
  );
}

export default Weather;
