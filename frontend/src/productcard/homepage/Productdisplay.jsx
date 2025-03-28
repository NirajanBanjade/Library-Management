import React from 'react';
import BookCard from '../product/productcard';
import Booklist from '../../Booklist';
import { useState, useEffect } from 'react';

const Productdisplay = () => {
    const [List, setList] = useState([]);
    async function fetchdata(){

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
  
  return (
    <>
        <div>
            <h2>Books</h2>
            {List && List.map((book) => (
                <div key={book._id}>
                    {/* Assuming your book object has these properties */}
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    {/* Or use your BookCard component */}
                    <BookCard book={book} />
                </div>
            ))}
        </div>
        
    </>
  );
};

export default Productdisplay;
