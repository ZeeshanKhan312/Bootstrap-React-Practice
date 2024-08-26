import logo from './logo.svg';
import './App.css';
import Home from './home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './account/register';
import HindiMovies from './category/hindiMovies';
import Login from './account/login';


function App() {

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hindi_movies" element={<HindiMovies/>} />
      </Routes>
    </Router>
  ); 
}

export default App;
