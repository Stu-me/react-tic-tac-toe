import { useState } from "react";
import "./board.css";

function Square({ value }) {
  // we declared our own tag(power of xml )
  return <button className="square">Sundram</button>;
}

function Board() {
  const [count, setCount] = useState(0);

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
