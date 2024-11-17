import resList from "../utils/mockData";
import RestaurantCard, {Withopenlabel} from "./RestaurantCard";
import { useContext, useState } from "react";
import { useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.js";

const Body = () => {
    // Correct casing for state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantOpened = Withopenlabel(RestaurantCard);


    const onlineStatus = useOnlineStatus();

    console.log(listOfRestaurants);


    useEffect(() => {
      fetchData();
    }, [])
    
    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(onlineStatus === false) return <h1>Oops, you are offline! Please check your internet connection!</h1>

    const {loggedInUser, setUserName} = useContext(UserContext);

    return listOfRestaurants.length === 0? <Shimmer/>: (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                        <input 
                        type="text" 
                        className="search-box border border-solid border-black" 
                        value={searchText}
                        onChange ={
                            (e)=>{
                                setSearchText(e.target.value);
                            }
                        }
                    />
                    <button 
                        className="px-4 py-2 bg-blue-100 m-4 rounded-lg"
                        onClick ={
                            ()=>{
                                const filteredList = listOfRestaurants.filter(
                                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                );
                                setFilteredRestaurants(filteredList);
                            }
                        }
                    >
                            Search
                    </button>
                </div>
                <div className="top flex items-center m-4 p-4">
                    <button className="px-4 py-2 bg-green-100 rounded-lg" onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                        setFilteredRestaurants(filteredList);
                    }}>
                        Top restaurants
                    </button>
                </div>
                <div className="top flex items-center m-4 p-4">
                    <label>UserName: </label>
                    <input type="text" className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
                </div>
            </div>
            
            
            <div className="flex flex-wrap">
                {filteredRestaurants.map((restaurant) => (
                    // <RestaurantCard  resData={restaurant} />
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                        {
                            restaurant.info.isOpen? <RestaurantOpened  resData={restaurant} /> : <Restaurant  resData={restaurant} />
                        }
                        
                    </Link>
                    
                ))}
            </div>
        </div>
    );
};

export default Body;
