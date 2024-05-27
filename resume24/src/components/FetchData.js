import React, { useState } from 'react'

export default function FetchData() {

    const [data, setDate] = useState([]);

    //fetch data with async await
    async function fetchDataHandler() {
        const response = await fetch('https://swapi.py4e.com/api/films');
        const data = await response.json();
        setDate(data.results);
    }

    //fetch data with .then
    function fetchDataHandler() {
        fetch('https://swapi.py4e.com/api/films').then((response) => {
            return response.json();
        }).then((data) => {
            setDate(data.results);
        })
    }

    return (
        <div>

            {data.map((list) => {
                return <>
                    <h1 >{list.title}</h1>
                    <p>{list.release_date}</p>
                </>
            })}
            <button onClick={fetchDataHandler}>Fetch</button>

        </div>
    )
}
