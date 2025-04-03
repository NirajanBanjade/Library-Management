import { useState } from 'react'
import './App.css'
import LoginPage from './productcard/loginpage/login'
import BookCard from './productcard/product/productcard'
import Productdisplay from './productcard/homepage/Productdisplay'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/products" element={<Productdisplay />} />
      
      </Routes>
    </Router>
    </>
  )
}

export default App;
