/*navigation bar logic is written in this file.*/

import "./navbar.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {useState} from 'react';

const NavBar = () => {
    const [status,setStatus] = useState(false);
    const key = localStorage.getItem('jwt');

    const setLogout = ()=>{
        localStorage.clear();
        setStatus(false);
    }

    const renderList = ()=>{
        if(status)
        {
            if(key)
            setStatus(true);
            return [
            // <Link to="/profile" style={{textDecoration:"none",margin:"20px"}}> profile</Link> ,
            // <Link to="/create" style={{textDecoration:"none",margin:"20px"}}> create post</Link>,
            <button onClick={setLogout}>logout</button>
            ]
        }

        else
        {
            return [
            <Link to="/login" style={{textDecoration:"none",margin:"20px"}}>login</Link> ,
            <Link to="/signup" style={{textDecoration:"none",margin:"20px"}}> signup</Link>
                   ]
        }
    }

    return (  

        <nav className="navBar">
            <div>
            <h1 style={{margin:"10px"}}>simplify3x</h1>
            </div>
            <div style={{margin:"25px"}}>
            </div>
            {renderList()}
        </nav>
    );
}
 
export default NavBar;