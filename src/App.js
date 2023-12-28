import './App.css';
import board from "./board.js";

const board1 = new board();

document.addEventListener('keydown', function (event) {
  if (event.key === 'p') {
    board1.printArray();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'z') {
    board1.play();
  }
});
function App() {
  return (
    <div className="App">
      game
    </div>
  );
}

export default App;
