import { resList } from "../utils/mookData";
import RestroCart from "./RestroCart";
import { useState } from "react";

const Body = () => {

    const [listOfRestro, setListOfRestro] = useState(resList);

    const setData = () => {
        const filteredData = listOfRestro.filter(
            (res) => res.info.avgRating > 4
        );
        setListOfRestro(filteredData);
    }

    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Find your Restro..." />
                <button>Search</button>
                <button className="filter-btn" onClick={setData}>Top Rated Restro..</button>
            </div>
            <div className="res-container">
                {
                    listOfRestro.map (restaurant => (
                        <RestroCart key={restaurant.info.brand_id} resData = {restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;
