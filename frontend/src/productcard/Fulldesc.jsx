import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './fulldesc.css';

const Fulldesc = ({ bookId }) => {
  const [book, setBook] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEditedBook] = useState({});
  const navigate = useNavigate();

  // Fetch the book data
  async function fetchdata() {
    try {
      const response = await fetch(`http://localhost:4000/api/books/${bookId}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setBook(data);
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  }

  useEffect(() => {
    if (bookId) fetchdata();
  }, [bookId]);

  // Handle Edit button click
  const handleEdit = () => {
    setEditedBook(book);   // Pre-fill form with current book data
    setIsEditing(true);
  };

  // Track form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBook((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Save (PUT request)
  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/books/${bookId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedBook),
      });
      if (!response.ok) throw new Error("Update failed.");
      const updated = await response.json();
      setBook(updated);          // Update local state
      setIsEditing(false);       // Hide the form
      navigate('/products');
      alert("Book updated successfully.");
    } catch (error) {
      console.error("Error updating book:", error);
      alert("Failed to update book.");
    }
  };

  // Delete the book
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/books/${bookId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Delete failed.");
      alert("Book deleted successfully.");
      navigate('/products');
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete book.");
    }
  };

  if (!book) return <div>Loading...</div>;

  const handleCheckOut = async () => {
    if (book.status === "checked out") {
      alert("This book is already checked out.");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:4000/api/books/${bookId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...book, status: "checked out" }),
      });
      if (!response.ok) throw new Error("CheckOut failed.");
      const updated = await response.json();
      setBook(updated);
      navigate('/products');
      alert("Book checked out successfully.");

    } catch (error) {
      console.error("CheckOut error:", error);
      alert("Failed to check out book.");
    }
  };
  const handleCheckIn = async () => {
  
    try {
      const response = await fetch(`http://localhost:4000/api/books/${bookId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...book, status: "available" }),
      });
      if (!response.ok) throw new Error("CheckIn failed.");
      const updated = await response.json();
      setBook(updated);
      navigate('/products');
      alert("Book checked in successfully.");
    } catch (error) {
      console.error("CheckIn error:", error);
      alert("Failed to check in book.");
    }
  };
  

  return (
    <div className="full-desc-container" style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <div className="img_desc">
        <img src={`/${book.imageLink}`} alt={book.title} style={{ width: "200px", borderRadius: "10px" }} />
      </div>

      <div className="img_desc">
        {!isEditing ? (
          <>
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Publisher:</strong> {book.publisher}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <p><strong>Status:</strong> {book.status}</p>
            <button id="edit" onClick={handleEdit}>Edit</button>
            <button id="delete" onClick={handleDelete}>Delete</button>
            <button id="back" onClick={() => navigate('/products')}>Back</button>
            <button id="checkout" onClick={handleCheckOut}>CheckOut</button>
            <button id="checkin" onClick={handleCheckIn}>CheckIn</button>
          </>
        ) : (
          <>
            <h3>Edit Book Info</h3>
            <label>Title: <input name="title" value={editedBook.title} onChange={handleInputChange} /></label><br />
            <label>Author: <input name="author" value={editedBook.author} onChange={handleInputChange} /></label><br />
            <label>Publisher: <input name="publisher" value={editedBook.publisher} onChange={handleInputChange} /></label><br />
            <label>Status:
              <select name="status" value={editedBook.status} onChange={handleInputChange}>
                <option value="available">Available</option>
                <option value="checked out">Checked Out</option>
              </select>
            </label><br />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Fulldesc;
