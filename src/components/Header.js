import { LOGO_URL } from "../utils/constants";
import { useContext, useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ()=>{
    const [btnName, setBtnName] = useState("login");
    
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store)=> store.cart.items);

    return (
        <div className="flex justify-between bg-violet-200 shadow-lg">
            <div className="logo-container">
                <img className="w-32"src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus? "🟢": "🔴"}</li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                    </li>
                    <button 
                        className="btn-name px-4" 
                        onClick={
                            ()=>{
                                btnName==="login"
                                    ?setBtnName("logout")
                                    :setBtnName("login");
                        }}
                    >
                        {btnName}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;