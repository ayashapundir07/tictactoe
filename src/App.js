import React,{ useState} from "react";
import Board from "./components/Board";
import { calculateWinner} from './helpers';

import "./styles/root.scss";

const App = () => {

  // from board.js

  const [board, setBoard ]= useState( Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
 
  const winner = calculateWinner(board);
  const message = winner
   ? `winner is ${winner}` 
   : `Next player is ${ isXNext ? 'X': '0'}`

  const handleSquareClick = (position) => {
      
      // to ensure that already set value is not changed after clicking again
      if(board[position] || winner){
          return;
      }



      setBoard( (prev) => {
          return prev.map((square,pos) => {
              if (pos === position){
                  return isXNext ? 'X' : '0';
              }
              return square;
          });
      });
      setIsXNext( (prev) => !prev);// to get 0 and X alternatively

  };


  return (
    <div className="app">
    <h1>TIC TAC TOE</h1>
    <h2>{message}</h2>
    <Board board={board} handleSquareClick = {handleSquareClick}/>
  </div>
  );
};


export default App;