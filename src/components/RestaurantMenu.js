import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    

    return (
        // <div className="menu">
        //     <h1>{name}</h1>
        //     <p>
        //         {cuisines.join(", ")} - {costForTwoMessage}
        //     </p>
        //     <h2>Menu</h2>
        //     <ul>
        //         {itemCards.map((item) => (
        //         <li key={item.card.info.id}>
        //             {item.card.info.name} -{" Rs."}
        //             {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
        //         </li>
        //         ))}
        //     </ul>
        // </div>
        <div className="menu p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
            <p className="text-gray-600 mt-2">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2 className="text-xl font-semibold mt-4 text-gray-700">Menu</h2>
            <ul className="mt-4 space-y-2">
                {itemCards.map((item) => (
                    <li key={item.card.info.id} className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">{item.card.info.name}</span>
                        <span className="text-gray-900 font-semibold">Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default RestaurantMenu;