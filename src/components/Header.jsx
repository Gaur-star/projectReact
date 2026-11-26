import {useState} from "react";

const Header = () => {
    const [name, setName] = useState("career");
    const nameHandle = (e)=>{
        setName(e.target.value);
    }
    return(
        <>
            <h1>U R In header page</h1>
            <input 
                type="text"
                value={name}               
                onChange={nameHandle}
                
            />
         <h2>{name}</h2>
        </> 
        
    );
}


export default Header;
