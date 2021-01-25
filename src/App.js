import './App.css';
import { Router } from "@reach/router";
import WelcomeCard from './components/WelcomeCard';
import Featured from './views/Featured';
import Categories from './views/Categories';
import AllAlbums from './views/AllAlbums';
import AlbumDetails from './views/AlbumDetails';

function App() {
  return (
    <Router className="app">
      <WelcomeCard path="/"/>
      <Featured path="/featured"/>
      <Categories path="/categories"/>
      <AllAlbums path = "/allAlbums"/>
      <AlbumDetails path = "/albumDetails"/>
    </Router>
  
  );
}

export default App;
