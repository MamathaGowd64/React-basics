import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import {Header} from './components/Header';
import Body from  './components/Body';


const root=ReactDOM.createRoot(document.getElementById('root'));

/*
#Home
    -logo
    -Nav-items
body
    -search
    -res-cards
        -images
        -rating,name,cuisines, delivery time
footer

*/


const AppLayout=()=>{
    return(
        <div className="app">
<Header/>
<Body/>
        </div>
    )  
}

root.render(<AppLayout/>);