import './App.css';
import Events from './components/Events/Events';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1>Event explorer</h1>
      </div>
      <div className="app-search-wrapper">
        <Search />
      </div>
      <div className="app-content">
        
      
      <Events/>
      </div>
    </div>
  );
}

export default App;
