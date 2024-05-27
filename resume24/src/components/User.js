import React from 'react'

export default function User({ login }) {

    let content;

    if (login === true) {
        content = <p>Welcome user!</p>
    } else {
        content = <p>plz first login</p>
    }

    return (
        <div>
            {content}
        </div>
    )
}
