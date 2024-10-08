import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    // Correct casing for state variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    
    return (
        <div className="body">
            <button className="filter-btn" onClick={() => {
                const filteredList = listOfRestaurants.filter((res) => res.data.avgRating > 4);
                setListOfRestaurants(filteredList);
            }}>
                Top restaurants
            </button>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
