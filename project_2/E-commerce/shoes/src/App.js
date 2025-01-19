import logo from './logo.svg';
import './App.css';
import Header from './screens/Header';
import HomePage from './screens/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddToCart from './screens/AddToCart';


function App() {
  return (
    <Router>
      
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<AddToCart />} />
      </Routes>
      
    </Router>

  
  );
}

export default App;
