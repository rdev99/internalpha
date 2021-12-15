import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import MiddleContainer from './components/MiddleContainer';
import CardDesign from './components/CardDesign';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <MiddleContainer/>
        <CardDesign/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
