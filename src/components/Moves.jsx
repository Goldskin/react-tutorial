import React from 'react';

class Moves extends React.Component {
    description (move) {
        return move ?
            `Go to move #${move}` :
            'Go to game start'
    }

    listMoves () {
        return this.props.history.map((step, move) => {
            const desc = this.description(move)
            let position
            if (move) {
                position = `x: ${step.position.x + 1} y: ${step.position.y + 1}`
            }


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