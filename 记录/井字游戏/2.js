import { useState } from "react";

export function Square({ value, onSquaresClick }) {
  return (
    <button className="square" onClick={onSquaresClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const onSquaresClickHandle = (index) => (index) => {
    squares[index] = "1";
    setSquares(squares);
  };
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquaresClick={onSquaresClickHandle(0)} />
        <Square value={squares[1]} onSquaresClick={onSquaresClickHandle(1)} />
        <Square value={squares[2]} onSquaresClick={onSquaresClickHandle(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquaresClick={onSquaresClickHandle} />
        <Square value={squares[4]} onSquaresClick={onSquaresClickHandle} />
        <Square value={squares[5]} onSquaresClick={onSquaresClickHandle} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquaresClick={onSquaresClickHandle} />
        <Square value={squares[7]} onSquaresClick={onSquaresClickHandle} />
        <Square value={squares[8]} onSquaresClick={onSquaresClickHandle} />
      </div>
    </>
  );
}
