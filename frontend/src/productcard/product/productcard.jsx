import Button from 'react-bootstrap/Button';
import './productcard.css'
import { Card } from 'react-bootstrap';
function BookCard(props) {
  const { imageLink, title, author, isbn, status } = props;
  console.log("Props received in BookCard:", props);

  return (
    <div className='card-size-first'>
     <div className='card-container'>
      <img src={imageLink} alt="no image" />
      <div className='text-edit'>
        <strong>Title: {title}</strong><br/>
        <strong>Author: {author}</strong><br/>
        <strong>ISBN: {isbn}</strong><br/>
        <strong>
            Status: <span style={{ color: status === "available" ? "green" : "red" }}>
                {status}
            </span>
        </strong><br/>
        <strong><button type="button" id="full-desc">Full description</button></strong>
      </div>
     </div>
     </div>

  );
}

export default BookCard;
