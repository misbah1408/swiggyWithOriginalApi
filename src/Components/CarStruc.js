import { useState, useEffect } from "react";
import { CDNCAR_URL } from "../utils/constants";
import CarStructure from "./CarStructure";

const CarStruct = () => {
  const [listOfRestaurent, setlistOfRestaurent] = useState([]);
  const [cloudImg, setCloudImg] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8563032&lng=74.83609179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);

      const restaurantData =
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setlistOfRestaurent(restaurantData);

      // Extract cloudinaryImageId from each restaurant's info
      const cloudImageIds = restaurantData.map((res) => res.info?.cloudinaryImageId);
      setCloudImg(cloudImageIds);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="resto">
        <div className="sbtn">
          <span>Top Restaurant chains in Mangaluru</span>
          <div className="scbtn">
            <i className="fa-solid fa-arrow-left" id="left1"></i>
            <i className="fa-solid fa-arrow-right" id="right1"></i>
          </div>
        </div>
        <div className="top-res" id="box1">
          <div className="res1 pho">
            {listOfRestaurent.map((CarRestaurant) => (
              <CarStructure key={CarRestaurant.info.id} carSrtuctData={CarRestaurant} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarStruct;

//   console.log(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((res)=>(res.info?.cloudinaryImageId)))