import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);
        console.log("parent constructor");
    }

    componentDidMount(){
        console.log("parent did mount");
    }

    render(){
        console.log("parent render");
        return (
            <div>
                <h1>About us</h1>
                <UserClass name={"Sarath"} location={"Rajahmundry"} />
            </div>
        );
    }
}


export default About;