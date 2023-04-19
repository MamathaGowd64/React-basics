
const parent=React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",{id:"child"},[React.createElement(
            "h1",{},"Hello h1"),React.createElement(
                "h2",{},"Hello h2")]),React.createElement(
                    "div",{id:"child"},[React.createElement(
                        "h1",{},"Hello h1"),React.createElement(
                            "h2",{},"Hello h2")])]);
            console.log(parent);
//ReactElement(Object)=HTML(Browser understands)
//const heading= React.createElement("h1", {},"Hello React");
    const root= ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent);
    
