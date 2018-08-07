import React from 'react';

class Moves extends React.Component {
    listMoves () {
        return this.props.history.map((step, move) => {
            const desc = move ?
                `Go to move #${move}` :
                'Go to game start'

            return (
                <li key={move}>
                    <button onClick={() => this.props.onClick(move)}>{desc}</button>
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