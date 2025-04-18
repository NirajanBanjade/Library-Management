import { useParams } from "react-router-dom";
import Fulldesc from './Fulldesc'; // adjust path as needed

const FulldescWrapper = () => {
    const { bookId } = useParams();
    return <Fulldesc bookId={bookId} />;
  };
  
export default FulldescWrapper;
  
