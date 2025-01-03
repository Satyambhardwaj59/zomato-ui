// import { resList } from "../utils/mookData";
import { MOOK_URL } from "../utils/constant";
import RestroCart from "./RestroCart";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestro, setListOfRestro] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const setData = () => {
        const filteredData = listOfRestro.filter(
            (res) => res.info.avgRating > 4
        );
        setListOfRestro(filteredData);
        
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MOOK_URL);
        const jsonData = await data.json();
        console.log(jsonData);

        setListOfRestro(jsonData);
        setFilteredRestaurant(jsonData);
        
    }

    

    return listOfRestro.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Find your Restro..."  className="search-box" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}/>
                <button onClick={
                    () => {
                        console.log(searchText);

                        const filteredRestro = filteredRestaurant.filter((res) => {res.brand_name.toLowerCase().includes(searchText.toLowerCase())})
                        setFilteredRestaurant(filteredRestro);
                    }
                }>Search</button>
                <button className="filter-btn" onClick={setData}>Top Rated Restro..</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map(restaurant => (
                        <RestroCart key={restaurant.info.brand_id} resData = {restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;
