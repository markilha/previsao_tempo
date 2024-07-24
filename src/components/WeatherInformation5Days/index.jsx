import "./styles.css";
export default function WeatherInformation5Days({ weather5Days }) {
  const dailyForecasts = weather5Days.list;

  let dailyForecast = {};

  for (let forecast of dailyForecasts) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString("pt-BR");
    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }
  const next5Days = Object.values(dailyForecast).slice(1, 6);

  function convertDate(date) {
    const day = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {  weekday: 'long', day: '2-digit' });
    return day;
   
  }

  return (
    <div className="weather-container">
      <h3>Previsão Próximos 5 Dias</h3>
      <div className="weather-list">
      {next5Days.map((forecast) => (
        <div key={forecast.dt} className="weather-item">
          <p className="weather-day">{convertDate(forecast)}</p>
          <img
            src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
            alt="weather icon"
          />
          <p className="weather-description">{forecast.weather[0].description}</p>
          <p>Min: {Math.round(forecast.main.temp_min)} ºC / Max: {Math.round(forecast.main.temp_max)} ºC</p>
     
        </div>
      ))}
      </div>
    </div>
  );
}
