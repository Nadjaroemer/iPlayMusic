import './App.css';
import { Router } from "@reach/router";
import WelcomeCard from './components/WelcomeCard';
import Featured from './views/Featured';
import Categories from './views/Categories';
import AllAlbums from './views/AllAlbums';
import AlbumDetails from './views/AlbumDetails';
import Playlists from './views/Playlists';

function App() {
  return (
    <Router className="app">
      <WelcomeCard path="/"/>
      <Featured path="/featured"/>
      <Categories path="/categories"/>
      <Playlists path="/playlists"/>
      <AllAlbums path = "/allAlbums"/>
      <AlbumDetails path = "/albumDetails"/>
    </Router>
  
  );
}

export default App;
