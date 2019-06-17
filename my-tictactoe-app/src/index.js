import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';






// The Square component renders a single <button>.
class Square extends React.Component {
  render() {
    return (
      // Display current state in the browser when a square is clicked on
      // Passing a function as the onCLick prop
      // Re-render that Square whenever its <button> is clicked.
      <button
        className="square"
        // Passing a function as the onClick prop.
        onClick={() => this.props.onClick()}   //Square calls this.handleClick(i), from Board, when clicked.
      >
        {this.props.value}
      </button>
    );
  }
}






// The Board renders 9 squares.
// The Board component now maintains which squares are filled.
class Board extends React.Component {
  //  In JavaScript classes, you need to always call super when defining the constructor of a subclass. All React component classes that have a constructor should start it with a super(props) call.
  // Set the Board’s initial state to contain an array of 9 nulls corresponding to the 9 squares.
  constructor(props) {
    super(props);
    // Defined the squares in the squares array: all elements are set initialised to null.
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  // renderSquare will read from squares array.
  renderSquare(i) {
    // Each Square will now receive a value prop that will either be 'X', 'O', or null for empty squares.

    /*
    Pass down 2 props form Board to Square:
    1) value -
    2) onCLick - function that Square can call when clicked.
    */

    return (
      <Square
        value={this.state.squares[i]}
        // The Square’s onClick prop was specified by the Board.
        onClick={() => this.handleClick(i)}  // Board passed onClick={() => this.handleClick(i)} to Square}
      />
    );
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
