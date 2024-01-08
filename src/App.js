import './App.css';
import board from "./board.js";
import {useState} from 'react';










function App() {
  
  const board1 = new board(0);

  const [bord,setBord] = useState(board1.boardArr);

  document.addEventListener('keydown', function (event) {
    if (event.key == 'p') {
      board1.printArray();
    }
  });
  
  document.addEventListener('keydown', function (event) {
    if (event.key == 'z') {
      board1.play();
      setBord(board1.boardArr);
    }
  });


  

  return (
    <div className="App">
      { bord.map((item)=>{//كل سطر من المصفوفة
        return(
            <div>
              {
                item.map((singlItem)=>{ // كل عنصر من السطر
                  return(
                    <div className="item_to_play">
                      {singlItem}
                    </div>
                  )
                })
              }
            </div>
        )
      }) }
    </div>
  );
}

export default App;
