import React from 'react';
import Square from './Square';

class Board extends React.Component {
    renderSquare (i)  {
        return (
            <Square
                key={i}
                value={this.props.squares[i]}
                current={i === this.props.current}
                onClick={() => this.props.onClick(i)}
            />
        )
    }

    renderSquares () {
        const rows = []
        let cellNumber = 0
        let cells
        for (let rowsIndex = 0; rowsIndex < 3; rowsIndex++) {
            cells =[]
            for (let cellIndex = 0; cellIndex < 3; cellIndex++) {
                cells.push(this.renderSquare(cellNumber))
                cellNumber++
            }
            rows.push(<div key={rowsIndex} className="board-row">{cells}</div>)
        }
        return rows
    }


    render () {
        return (
            <div>
                {this.renderSquares()}
            </div>
        );
    }
}

export default Board