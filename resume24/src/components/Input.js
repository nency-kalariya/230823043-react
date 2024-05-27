import React, { useState, useEffect } from 'react'

export default function Input() {

    const [name, setName] = useState('');

    // const changeHandler = (e) => {
    //     console.log(e);
    //     setName(e);
    // }

    useEffect(() => {

    }, [name]);

    return (
        <div>
            <form>
                <h2>{name}</h2>
                <label>Name</label>
                <input type='text' onChange={(e) => setName(e.target.value)} />
            </form>
        </div>
    )
}
