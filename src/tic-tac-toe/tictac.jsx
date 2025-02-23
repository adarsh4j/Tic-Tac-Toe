import { useNavigate } from 'react-router-dom';
import './tictac.css';

function Tictac() {
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate('/game'); 
  };

  return (
    <div className="container">
      <img src="./src/assets/tictac.png" alt="Image" className='img' />
      <h1>TIC TAC TOE</h1> <br />
      <button className="btn" onClick={handlePlay}>PLAY</button>
    </div>
  );
}

export default Tictac;
