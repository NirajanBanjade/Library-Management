import Button from 'react-bootstrap/Button';
import './productcard.css'
import { Card } from 'react-bootstrap';
function BookCard(props) {
  const { imageLink, title, author, year } = props;
  console.log("Props received in BookCard:", props);

  return (
     <div className='card-container'>
      <img src={imageLink} alt="no image" />
      <div className='text-edit'>
        <strong>Title: {title}</strong><br/>
        <strong>Author: {author}</strong><br/>
        <strong>Year: {year}</strong><br/>
        <strong><button type="button" id="full-desc">Full description</button></strong>
      </div>
     </div>

  );
}

export default BookCard;
