import './App.css';
import { Router } from "@reach/router";
import WelcomeCard from './components/WelcomeCard';
import Featured from './views/Featured';

function App() {
  return (
    <Router className="app">
      <WelcomeCard path="/"/>
      <Featured path="/featured"/>
    </Router>
  
  );
}

export default App;
