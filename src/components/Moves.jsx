import React from 'react';
import calculatePosition from '../functions/calculatePosition';

class Moves extends React.Component {
    description (move) {
        return move ?
            `Go to move #${move}` :
            'Go to game start'
    }

    getPosition (position) {
        position = calculatePosition(position)
        return `x: ${position.x + 1} y:${position.y + 1}`
    }

    listMoves () {
        return this.props.history.map((step, move) => {
            const desc = this.description(move)
            let position = move ? this.getPosition(step.position) : ''

            return (
                <li key={move}>
                    <button onClick={() => this.props.onClick(move)}>{desc}</button> {position}
                </li>
            )
        })
    }

    render () {
        return (
            <ol>
                {this.listMoves()}
            </ol>
        )
    }
}

export default Moves