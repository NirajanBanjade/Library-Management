import React from 'react';
import BookCard from '../product/productcard';
import { useState, useEffect } from 'react';
import LoginPage from '../loginpage/login';
import './Productdisplay.css'
import Navbar from "./Navbar.jsx";


const Productdisplay = ({filter}) => {
    const [List, setList] = useState([]);
    async function fetchdata(){
        console.log("Fetching data...");

        try{
            const response=await fetch('http://localhost:4000/api/books');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              const data = await response.json();
              setList(data);
        }
        catch{
            throw new Error("Server side error fetching products!");
            setList([]);
        }
    }
    useEffect(() => {
        fetchdata();
      }, []);
    //   console.log("Current List state:", List);

    const filteredList = filter
    ? List.filter((book) => book.status.toLowerCase() === filter.toLowerCase())
    : List;

  return (
    <>
    
      <Navbar />
      <div className="container">
        {filteredList.map((book) => (
          <BookCard
            key={book._id}
            title={book.title}
            author={book.author}
            isbn={book.isbn}
            status={book.status}
            imageLink={book.imageLink}
          />
        ))}
      </div>

        </>
    
  );
};

export default Productdisplay;
