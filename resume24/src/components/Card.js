import { useState } from "react";


export function Card(props) {

    const [name, setName] = useState('Dhaval');
    const [age, setAge] = useState(20);
    const [islogin, setIslogin] = useState(false);

    function changeValue() {
        setName('Yash');
        setAge(22);
        setIslogin(true);
    }

    return (
        <>
            <h1 className='display-1'>{props.title}</h1>
            <p>{name}</p>
            <p>{age}</p>
            <button onClick={changeValue}>submit</button>
            {islogin ? <p>Welcom User</p> : <p>Plz login first</p>}
        </>
    );
}
