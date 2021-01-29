import './App.css';
import { Router } from "@reach/router";
import WelcomeCard from './components/WelcomeCard';
import Featured from './views/Featured';
import Categories from './views/Categories';
import AllAlbums from './views/AllAlbums';
import AlbumDetails from './views/AlbumDetails';
import Playlists from './views/Playlists';
import Login from './views/Login';
import Callback from './views/Callback';
import TokenContext from "./TokenContext";
import { useState } from 'react';

function App() {

  var tokenState = useState(null);
  return (
    <TokenContext.Provider value={tokenState}>
      <Router className="app">
        <Login default/>
        <Callback path="/callback"/>
        <WelcomeCard path="/welcome"/>
        <Featured path="/featured"/>
        <Categories path="/categories"/>
        <Playlists path="/playlists"/>
        <AllAlbums path = "/allAlbums"/>
        <AlbumDetails path = "/albumDetails"/>
      </Router>
    </TokenContext.Provider>
  
  );
}

export default App;
