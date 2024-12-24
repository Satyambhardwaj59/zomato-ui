import { resList } from "../utils/mookData";
import RestroCart from "./RestroCart";

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Find your Restro..." />
                <button>Search</button>
            </div>
            <div className="res-container">
                {
                    resList.map (restaurant => (
                        <RestroCart key={restaurant.info.brand_id} resData = {restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;
