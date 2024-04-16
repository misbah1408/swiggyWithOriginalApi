import { useState, useEffect } from "react";
import { SWIGGYAPI_URL } from "./constants";


const useRestaurent = () =>{
    const [listOfRestaurent, setlistOfRestaurent] = useState([]);
    const [filteredRestautent, setFilteredRestautent] = useState([]);

    useEffect(()=>{
            fetchData()
    },[])

    const fetchData = async()=>{
        const data = await fetch(
            SWIGGYAPI_URL
        )
        const json = await data.json()
        const restaurantData =
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
        setlistOfRestaurent(restaurantData);
        setFilteredRestautent(restaurantData);
    }

    return (listOfRestaurent ,filteredRestautent)
}

export default useRestaurent;