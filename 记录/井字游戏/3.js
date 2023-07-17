import { useState } from "react";

export function Square({ value, onSquaresClick }) {
  return (
    <button className="square" onClick={onSquaresClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext: isX, squares, onPlay }) {
  const handleClick = (index) => (event) => {
    const nextSquares = squares.slice();
    if (squares[index]) return;

    if (isX) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }

    let res = calculateWinner(nextSquares);
    onPlay(nextSquares);
    if (res) {
      console.log("sssss");
    }
  };
  let state = isX ? "X" : "O";
  return (
    <>
      <div className="status">{"next value:" + state}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquaresClick={handleClick(0)} />
        <Square value={squares[1]} onSquaresClick={handleClick(1)} />
        <Square value={squares[2]} onSquaresClick={handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquaresClick={handleClick(3)} />
        <Square value={squares[4]} onSquaresClick={handleClick(4)} />
        <Square value={squares[5]} onSquaresClick={handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquaresClick={handleClick(6)} />
        <Square value={squares[7]} onSquaresClick={handleClick(7)} />
        <Square value={squares[8]} onSquaresClick={handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    // TODO
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </>
  );
}
