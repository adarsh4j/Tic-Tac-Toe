import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./game.css";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const navigate = useNavigate(); 

  // Handle square click
  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";

    setSquares(newSquares);
    setIsXNext(!isXNext);
  }

  // Reset the game
  function resetGame() {
    setSquares(Array(9).fill(null));
  }

  // Check winner
  const winner = calculateWinner(squares);
  let status = winner ? `Winner: ${winner}` : squares.every(square => square) ? "Draw" : `Next Player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="containergame">
      <h2>{status}</h2> <br /><br />

      {/* Tic-Tac-Toe Board */}
      <div className="board">
        {squares.map((value, index) => (
          <button key={index} className="square" onClick={() => handleClick(index)}>
            {value}
          </button>
        ))}
      </div> <br />

      {/* Buttons */}
      <button className="reset" onClick={resetGame}>RESET</button> <br />
      <button className="back" onClick={() => navigate("/")}>BACK</button>
    </div>
  );
};

// Function to determine winner
function calculateWinner(squares) {
  const winningLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let line of winningLines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
