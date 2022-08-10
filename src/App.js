import Search from './components/search/Search';
import './styles/App.css';

const App = () => {
  const handleSearchChange = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <Search onSearchChange={handleSearchChange} />
    </div>
  );
};

export default App;
