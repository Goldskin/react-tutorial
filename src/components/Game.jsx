import React from 'react';
import Board from './Board';
import Moves from './Moves';
import calculateWinner from '../functions/calculateWinner';
import calculatePosition from '../functions/calculatePosition';

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                position: { x: null, y: null }
            }],
            stepNumber: 0,
            xIsNext: true
        }
    }

    addMove (i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                position: calculatePosition(i)
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo (step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }

    render () {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.addMove(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <Moves
                        history={history}
                        onClick={(i) => this.jumpTo(i)} />
                </div>
            </div>
        );
    }
}


export default Game