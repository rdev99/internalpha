import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Carousel></Carousel>
      </Router>
    </>
  );
}

export default App;
