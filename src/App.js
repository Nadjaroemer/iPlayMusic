import './App.css';
import { Router } from "@reach/router";
import WelcomeCard from './components/WelcomeCard';
import Featured from './views/Featured';
import Categories from './views/Categories';

function App() {
  return (
    <Router className="app">
      <WelcomeCard path="/"/>
      <Featured path="/featured"/>
      <Categories path="/categories"/>
    </Router>
  
  );
}

export default App;
