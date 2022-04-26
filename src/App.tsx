import logo from './wt-logo.jpg';
import './App.css';
import Tile from './components/Tile.tsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Tile />
    </div>
  );
}

export default App;
