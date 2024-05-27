

export function Card({ title, name, onclick }) {
    console.log(name);
    return (
        <>
            <h1>This is Card Compoent</h1>
            <p>{title[1]}</p>
            {name.map((list) => {
                return <>
                    <p>{list.name}</p>
                    <p>{list.Age}</p>
                </>
            })}
            <button onClick={onclick}>Click me</button>
        </>
    );
}