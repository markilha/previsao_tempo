import { useRef, useState } from "react";
import axios from "axios";

import "./App.css";
import WeatherInformation from "./components/WeatherInformation";

function App() {
  const inputRef = useRef();
  const [weather, setWeather] = useState(null);

  async function searchCity() {
    const token = import.meta.env.VITE_API_TOKEN;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&appid=${token}&lang=pt_br&units=metric`;
    const result = await axios.get(url);
    setWeather(result.data);
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchCity();
    }
  }

  return (
    <div className="container">
      <h1> Previsão do Tempo</h1>
      <input onKeyDown={handleKeyPress} ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button  onClick={searchCity}>Buscar</button>
      {weather && <WeatherInformation weather={weather}/> } 
    </div>
  );
}

export default App;
