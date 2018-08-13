import React from 'react';
import calculatePosition from '../functions/calculatePosition';
import Move from './Move';

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
            const description = this.description(move)
            const position = move ? this.getPosition(step.position) : ''

            return (
                <Move
                    key={move}
                    description={description}
                    position={position}
                    highlight={move === this.props.current}
                    onClick={() => this.props.onClick(move)}></Move>
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