import Button from 'react-bootstrap/Button';
import './productcard.css'
import Fulldesc from '../Fulldesc';
import { useNavigate } from 'react-router-dom';
function BookCard(props) {
  const { imageLink, title, author, isbn, status } = props;
  console.log("Props received in BookCard:", props);

  const navigate = useNavigate();
  function handlefulldesc() {
    navigate(`/Fulldesc/${props.id}`); 
  }
  

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
        <strong><button type="button" id="full-desc" onClick={handlefulldesc}>Full description</button></strong>
      </div>
     </div>
     </div>

  );
}

export default BookCard;
