import React from "react";

class UserClass extends React.Component{
    constructor(props){
        console.log("child constructor");
        super(props);

        this.state = {
            userInfo: {
                name: "dummy",
                location: "dummy"
            }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/sarathchandra21");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
    }
    
    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
    console.log("Component Will Unmount");
    }
    render(){
        console.log("child render");
        const {name,location} = this.state.userInfo;
        return (
            <div className="user-card">
                <h3>Name: {name}</h3>
                <h3>Location: {location}</h3>
            </div>
        );
    }
}

export default UserClass;