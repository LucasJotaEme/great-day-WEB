import './App.css';
import { Home } from './components/Home';
import { ResponsiveNavBar } from './components/ResponsiveNavBar.jsx';
import 'animate.css';

function App() {
  return (
    <div className="App">
      <ResponsiveNavBar></ResponsiveNavBar>
      <div style={{margin: 40}}>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
