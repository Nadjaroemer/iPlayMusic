import './App.css';
import { Router } from "@reach/router";
import WelcomeCard from './components/WelcomeCard';

function App() {
  return (
    <Router className="app">
      <>
      <WelcomeCard path="/"/>
     </>
    </Router>
  );
}

export default App;
