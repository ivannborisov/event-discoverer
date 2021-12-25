import logo from './logo.svg';
import './App.css';
import Events from './components/Events/Events';
import Search from './components/Search/Search'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <Events/>
      </header>
    </div>
  );
}

export default App;
