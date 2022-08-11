import { useState } from 'react';
import Search from './components/search/Search';
import CurrentWeather from './components/current-weather/current-weather';
import './styles/App.css';
import { WEATHER_API_URL } from './api';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearchChange = (data) => {
    const [lat, lon] = data.value.split(' ');

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=4013973d14ddc41cfd9a743344bdcedd&units=metric`,
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=4013973d14ddc41cfd9a743344bdcedd&units=metric`,
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

  console.log(currentWeather, forecast);

  return (
    <div className="App">
      <Search onSearchChange={handleSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
};

export default App;
