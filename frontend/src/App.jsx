import { useState } from "react";
import "./square.css";
import Exp from './exp.jsx';

function Square({ value , onSquareClick }) { // we declared our own tag(power of xml ) now we will use in the program
  return (
    <button 
      className="square"
      onClick={onSquareClick}
      >{value}</button>
  );
}

function Board({xIsNext , squares , onPlay}) { 

  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner: " + winner;
  }
  else{
    status = "Next player:" +(xIsNext? "X":"0");
  }
function handleClick(i){                // reRendering 
  
  if(squares[i] || calculateWinner(squares)){
    return;  // if the square is not null or say have any value dont perform any operation 
  }
  const nextSquares = squares.slice();  // copy the whole squares array
  if(xIsNext){
    nextSquares[i] = "X";
  }
  else{
    nextSquares[i] = "O";
  }
  onPlay(nextSquares);
}

  return (
    <>
      <div> <Exp Name='Sandy' Age = '34'></Exp> </div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={()=>handleClick(0)} />
        <Square value={squares[1]} onSquareClick={()=>handleClick(1)} />
        <Square value={squares[2]} onSquareClick={()=>handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={()=>handleClick(3)} ></Square>
        <Square value={squares[4]} onSquareClick={()=>handleClick(4)} ></Square>
        <Square value={squares[5]} onSquareClick={()=>handleClick(5)} ></Square>
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={()=>handleClick(6)} ></Square>
        <Square value={squares[7]} onSquareClick={()=>handleClick(7)} ></Square>
        <Square value={squares[8]} onSquareClick={()=>handleClick(8)} ></Square>
      </div>
    </>
  );
}


function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  for(let i=0;i<lines.length;i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] == squares[b] && squares[a] === squares[c]){
      return squares[a]; // returning x or 0 ofc we will have to send one only 
    }
  }
  return null 
}

  function Game(){ 
    // adding some state to track to Game component
    const [history, setHistory] = useState([Array(9).fill(null)]); // array of arrays of 9 nulls
    const [currentMove,setCurrentMove] = useState(0);
    const currentSquares = history[currentMove]; // last array of arrays of history
    const xIsNext = currentMove %2 === 0;

  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove + 1),nextSquares]; // all the arrays along with nextSquares
    setHistory(nextHistory); 
    setCurrentMove(nextHistory.length-1); 
    //Todo
  }

  function jumpTo(nextMove){
    setCurrentMove(nextMove);
  }
    const moves = history.map((squares,move)=>{
      let description;
      if(move>0){
        description = 'Go to move #' + move;
      }
      else{
        description = 'Go to game start';
      }
      return(
        <li key={move}>
          <button onClick={()=> jumpTo(move)}>{description}</button>
        </li>
      );
    });

    return( 
      <div className="game"> 
        <div className="game-board"> 
          <Board xIsNext = {xIsNext} squares= {currentSquares} onPlay = {handlePlay} />   {/* now we have complete board so now Games is parent component  */}
        </div>
        <div className="game-info">
          <ol> {moves} </ol>
        </div>

      </div>
    )
  }
// look how we are making the <Board> completely dependent on the props 
// now parent component is Game and everything will pass through it 
export default Game;
