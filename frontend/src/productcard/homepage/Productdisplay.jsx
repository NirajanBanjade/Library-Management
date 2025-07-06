import React from 'react';
import BookCard from '../product/productcard';
import { useState, useEffect } from 'react';
import './Productdisplay.css'
import Navbar from "./Navbar.jsx";
const API_BASE = import.meta.env.VITE_API_BASE_URL;



const Productdisplay = ({filter}) => {
    const [List, setList] = useState([]);
    async function fetchdata(){
        console.log("Fetching data...");

        try{
          const response = await fetch(`${API_BASE}/books`);

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
            id={book._id}
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
