import Search from './components/search/Search';
import CurrentWeather from './components/current-weather/current-weather';
import './styles/App.css';

const App = () => {
  const handleSearchChange = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <Search onSearchChange={handleSearchChange} />
      <CurrentWeather />
    </div>
  );
};

export default App;
