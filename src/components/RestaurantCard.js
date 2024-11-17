import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props)=>{
    const {resData} = props;
    const {loggedInUser} = useContext(UserContext);
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,} = resData?.info;
    return (
        <div className="m-4 p-4 w-[272] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" src={CDN_URL+cloudinaryImageId} alt="res-logo" />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{avgRating} stars</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo} </h4>
            <h4>{sla.slaString}</h4>
            <h4>User : {loggedInUser} </h4>
        </div>
    )
}

export const Withopenlabel = (RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white rounded-lg m-2 p-2">Opened</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;