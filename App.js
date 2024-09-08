import React from "react";
import ReactDOM from "react-dom";


const para = React.createElement("div", { id: "parent" }, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1",{},"H1"),
        React.createElement("h2",{},"H2"),
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1",{},"H1"),
        React.createElement("h2",{},"H2"),
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(para);
