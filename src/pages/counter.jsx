import { useState } from 'react';


const Counter = () => {
    const [counter, setCounter] = useState();

    const AddbyOne = () => {
        setCounter(counter + 1)
    }
    return(
        <>
            <h1>set count</h1>
            <h2>Counter value : {counter}</h2>
            <button onClick={AddbyOne}>Increase by One</button>
        </>
    );
}


export default Counter;