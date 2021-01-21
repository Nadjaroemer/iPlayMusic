import './App.css';
import { Router } from "@reach/router";
import WelcomeCard from './components/WelcomeCard';
import Featured from './views/Featured';
import Categories from './views/Categories';
import AllAlbums from './views/AllAlbums';

function App() {
  return (
    <Router className="app">
      <WelcomeCard path="/"/>
      <Featured path="/featured"/>
      <Categories path="/categories"/>
      <AllAlbums path = "/allAlbums"/>
    </Router>
  
  );
}

export default App;
