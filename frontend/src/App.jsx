import { useState } from 'react'
import './App.css'
import LoginPage from './productcard/loginpage/login'
import Productdisplay from './productcard/homepage/Productdisplay'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FulldescWrapper from './productcard/fulldescwrapper';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Fulldesc/:bookId" element={<FulldescWrapper />} />
      <Route path="/products" element={<Productdisplay />} />
      <Route path="/available" element={<Productdisplay filter="available" />} />
      <Route path="/checkedout" element={<Productdisplay filter="checked out" />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
