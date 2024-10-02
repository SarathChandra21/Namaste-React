import React from "react";
import ReactDOM from "react-dom/client";

const title = (<h1 className="head"> I am Sarath</h1>);


//React Function component
//React FC should start with capital letter
const Headingcomponent = ()=> (
    <div>
        {title}
        <h1> This is functional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headingcomponent />);