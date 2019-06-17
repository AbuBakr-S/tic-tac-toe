import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// There are currently no interactive components.

// The Square component renders a single <button>.
class Square extends React.Component {
  render() {
    return (
      // Display an alert in the browser when a square is clicked on
      // Changing to arrow function syntax for event handlers
      <button className="square" onClick={() => { alert('click'); }}>
        {
          // Show prop value passed into Square
          this.props.value
        }
      </button>
    );
  }
}

// The Board renders 9 squares.
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;  // Pass a prop called value from parent Board component to child Square component
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// The Game component renders a board with placeholder values which we’ll modify later.
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
