import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-brand">
          <h2>Book Library</h2>
        </div>
        {/* <div className="avail"> */}
          <Link to="/products" id="avail_checkout">All books</Link>
          <Link to="/available" id="avail_checkout">Available Books</Link>
          <Link to="/checkedout" id="avail_checkout">Checkedout Books</Link>
        {/* </div> */}
        <div className="search-container">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search Books"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;