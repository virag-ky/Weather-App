import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/current-weather";
import "./styles/App.css";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearchChange = (data) => {
    const [lat, lon] = data.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: data.label, ...weatherResponse });
        setForecast({ city: data.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="App">
      <Search onSearchChange={handleSearchChange} />
      <CurrentWeather />
    </div>
  );
};

export default App;
