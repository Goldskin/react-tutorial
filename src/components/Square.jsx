import React from 'react';
import className from 'classnames';

function Square (props) {
    var classes = className(
        'square',
        { 'bold': props.highlight }
    )

    return (
        <button className={classes} onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square