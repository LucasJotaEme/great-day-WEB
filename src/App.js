import './App.css';
import { Home } from './components/Home';
import { ResponsiveAppBar } from './components/ResponsiveAppBar.jsx';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <div style={{margin: 40}}>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
