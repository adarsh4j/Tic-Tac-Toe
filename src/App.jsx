import Tictac from './tic-tac-toe/tictac.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './tic-tac-toe/game.jsx'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Tictac/>} />
        <Route path="/game" element={<Game/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
