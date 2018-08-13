import React from 'react';
import classnames from "classnames";


function Move (props) {
    const classes = classnames(
        { highlight: props.highlight }
    )

    return (
        <li key={props.move}>
            <button
                onClick={() => props.onClick(props.move)}>{props.description}</button>
            <span
                className={classes}>{props.position}</span>
        </li>
    )
}

export default Move