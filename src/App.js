import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import MiddleContainer from './components/MiddleContainer';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <MiddleContainer/>
      </Router>
    </>
  );
}

export default App;
