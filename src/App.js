import './App.css';
import { Home } from './pages/Home';
import { ResponsiveAppBar } from './components/ResponsiveAppBar.jsx';
import { SideBar } from './components/SideBar.jsx';

const styles = {
  container:{
    margin: "50px 100px"
  }
}

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <div style={styles.container}>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
