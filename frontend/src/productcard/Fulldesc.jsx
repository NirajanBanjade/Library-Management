import { useState, useEffect } from "react";
import './fulldesc.css'
import { useNavigate } from "react-router-dom";

const Fulldesc = ({ bookId }) => {
  const [book, setBook] = useState(null);  // Declare state to hold book info
  const navigate = useNavigate();  
  async function fetchdata() {
    console.log("Fetching data of the book...");

    try {
      const response = await fetch(`http://localhost:4000/api/books/${bookId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setBook(data);  // Set the book data
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  }

  useEffect(() => {
    if (bookId) {
      fetchdata();
    }
  }, [bookId]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="full-desc-container" style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <div id="image_here" className="img_desc">
      <img src={`/${book.imageLink}`} alt={book.title} style={{ width: "200px", borderRadius: "10px" }} />

      </div>
      <div id="description_here" className="img_desc">
        <h2>{book.title}</h2>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Publisher:</strong> {book.publisher}</p>
        <p><strong>ISBN:</strong> {book.isbn}</p>
        <p><strong>Status:</strong> {book.status}</p>

        <button id ="edit" onClick={() => console.log("Edit", book)}>Edit</button>
        <button id ="delete"  onClick={() => console.log("Delete", book)}>Delete</button>
        <button id ="back"  onClick={() => navigate('/products')}>Back</button>
      </div>
    </div>
  );
};

export default Fulldesc;
