import React from 'react';
import Board from './Board';
import Moves from './Moves';
import calculateWinner from '../functions/calculateWinner';

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                position: null
            }],
            stepNumber: 0,
            xIsNext: true,
            order: 'desc'
        }
    }

    addMove (i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares).player || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                position: i
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
            order: this.state.order
        });
    }

    jumpTo (step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }

    changeOrder () {
        this.setState({
            order: this.state.order === 'asc' ? 'desc' : 'asc'
        })
    }

    render () {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        let status;
        if (winner.player) {
            status = 'Winner: ' + winner.player;
        } else if (this.state.stepNumber >= 9) {
            status = 'Draw';
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.addMove(i)}
                        highlight={winner.squares.concat(current.position)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <button onClick={() => this.changeOrder()}>{this.state.order}</button>
                    <Moves
                        order={this.state.order}
                        history={history}
                        current={this.state.stepNumber}
                        onClick={(i) => this.jumpTo(i)} />
                </div>
            </div>
        );
    }
}


export default Game
