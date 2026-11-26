import { React, useState } from 'react'


const NewCounter = () => {
    const [ name, setName ] = useState('john likes');

    function fruits (frut){
        setName(frut);
        // alert(frut);
    }


return (
    <>
     <h2>New function</h2>
     <input type="text" value={name} id={name} onChange={(event)=>{setName(event.target.value)}}/>
     <button onClick={()=>fruits('apple')}>Click</button>
    </>
);
}


export default NewCounter