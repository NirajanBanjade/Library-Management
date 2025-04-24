import { useParams } from "react-router-dom";
import Fulldesc from './Fulldesc'; // adjust path as needed

const FulldescWrapper = () => {
  const { bookId } = useParams();

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',

    }}>
      <Fulldesc bookId={bookId} />
    </div>
  );
};

export default FulldescWrapper;
