import RestroCart from "./RestroCart";
import { useEffect, useState } from "react";
import { MOOK_URL } from "../utils/constant";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestro, setListOfRestro] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MOOK_URL);
        const jsonData = await data.json();
        
        setListOfRestro(jsonData.data.data);
    }

    return listOfRestro.length === 0 ? <Shimmer/> : (
        
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Find your Restro..." />
                <button>Search</button>
               
            </div>
            <div className="res-container">
                {
                    listOfRestro.map((restaurant) => (             
                        <RestroCart key={restaurant.brand_id} resData = {restaurant} />
                    ))
                }   
             </div>   
        </div>   
    )   
}   

export default Body;