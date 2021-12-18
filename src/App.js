import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import RegisterStudent1 from './components/RegisterStudent1';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/registerstudent1' element={<RegisterStudent1/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
