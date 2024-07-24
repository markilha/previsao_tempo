
import './weather.css';
export default function WeatherInformation({ weather }) {

    const urlImage = `https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`;
    
 return (
   <div className='weather-container'>
    <h2>{weather?.name}</h2>
    <div className='weather-info'>
    <img src={urlImage}/>    
    <p className='temperature'> {Math.round(weather?.main.temp)} ºC</p>
    </div>
    <div className='description'>
        {weather?.weather[0].description}
    </div>
    <div className='details'>
        <p> Sensação Térmica: {Math.round(weather?.main.feels_like)} ºC</p>
        <p> Min: {Math.round(weather?.main.temp_min)} ºC</p>
        <p> Max: {Math.round(weather?.main.temp_max)} ºC</p>
        <p> Humidade: {weather?.main.humidity} %</p>
        <p> Pressão: {weather?.main.pressure} hPa</p>
    </div>

   </div>
 );
}