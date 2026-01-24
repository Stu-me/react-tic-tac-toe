import { useState } from "react";
import "./square.css";

function Square() { // we declared our own tag(power of xml )
  
  const [value,setValue] = useState(null); // we declare here state , function to change state and default value
 
  function handleClick(){
    setValue('X');
  }
  return (
    <button 
      className="square"
      onClick={handleClick}
      >{value}</button>
  );
}

function Board() {
  const [squares,setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>

      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>

      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </>
  );
}

export default Board;
