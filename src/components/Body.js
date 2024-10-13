import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    // Correct casing for state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

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

    return listOfRestaurants.length === 0? <Shimmer/>: (
        <div className="body">
            <input 
                type="text" 
                className="search-box" 
                value={searchText}
                onChange ={
                    (e)=>{
                        setSearchText(e.target.value);
                    }
                }
            />
            <button 
                className="search-btn"
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
            <button className="filter-btn" onClick={() => {
                const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                setFilteredRestaurants(filteredList);
            }}>
                Top restaurants
            </button>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => (
                    // <RestaurantCard  resData={restaurant} />
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                        <RestaurantCard  resData={restaurant} />
                    </Link>
                    
                ))}
            </div>
        </div>
    );
};

export default Body;
