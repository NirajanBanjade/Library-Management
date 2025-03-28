import { useState } from 'react'
import './App.css'
import LoginPage from './productcard/loginpage/login'
import BookCard from './productcard/product/productcard'
import Productdisplay from './productcard/homepage/Productdisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Productdisplay/>
        {/* <BookCard/> */}
    </>
  )
}

export default App;
