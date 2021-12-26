import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import RegisterStudent from './components/RegisterStudent';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/registerstudent' element={<RegisterStudent/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
