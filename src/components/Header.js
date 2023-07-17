import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
export const Header=()=>{
 const [title, setTitle] =useState("Food Villa");
 const [isLoggedIn, setLoggedIN]=useState(true);
    return (

        <div className="header">
            <div className='logo-container'>
            <img className="logo" 
            src={LOGO_URL}></img>
           </div>
           <h1>{title}</h1>
           <button onClick={()=>setTitle("New App")}>change</button>
        <div className="Nav-Items">
            <ul>
                <li>Home</li>
                <li>Abous Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        <div className="logout">
            {isLoggedIn?<button onClick={()=>setLoggedIN(false)}>Login</button> :
             <button onClick={()=>setLoggedIN(true)}>Logout</button>}
 
                  </div>
        </div>
    )
}

export default Header;