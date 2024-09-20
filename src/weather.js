import { useState } from "react";
import './Weather.css';

import RadioButton from'./RadioButton'

function Weather() {
  const [zip, setZip] = useState(' ')
  const [unit, setUnit] = useState(' ')
  const [data, setData] = useState(null)

  return (
    <div className="Weather">
      {data && <h1> {data.temp} </h1>}
      


      <form onSubmit={ e => {
        e.preventDefault()
        // load weather data
        // setData( newData )
      }}>
        <div>
          <input 
            placeholder="Enter zip code"
            value={zip}
            onChange={e => setZip(e.target.value)}
            />


            <button type="submit">Submit</button>
        </div>

        <select 
        value={unit}
        onChange={e => setUnit(e.target.value)}
        >
        <option value="metric">Celcius</option>
        <option value="imperial">Fahrenheit</option>
        <option value="standard">Kelvin</option>
        </select>


        <RadioButton 
          label = "metric"
          name = "unit"
          checked = {unit === "metric"}
          onChange = {() => setUnit('metric')} 
        />
        
        <RadioButton 
          label = "imperial"
          name = "unit"
          checked = {unit === "imperial"}
          onChange = {() => setUnit('imperial')} 
        />
        
        <RadioButton 
          label = "standard"
          name = "unit"
          checked = {unit === "standard"}
          onChange = {() => setUnit('standard')} 
        />
        
      </form>
    </div>
  );
}

export default Weather;
