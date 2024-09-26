function WeatherDisplay(props) {
 const {temp, feelsLike, discription } = props

 return(
  <div className="WeatherDisplay">
    <h1>{temp}</h1>
    <small>Feels Like: {feelsLike}</small>
    <p>{discription}</p>
  </div>
 )
}

export default WeatherDisplay