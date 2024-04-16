import { useState ,useEffect } from "react";

const useRestaurentMenu = (resId) =>{

    const [resInfo, setResInfo] = useState([null]);

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () =>{
        const data = await fetch( "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8563032&lng=74.83609179999999&restaurantId="+resId)
        const json = await data.json()

        const restInfoAre =
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
      
      const restInfoCards = restInfoAre.filter((c) => {
        return c.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
      });
      

    setResInfo(restInfoCards)
    }

    return resInfo
}

export default useRestaurentMenu;