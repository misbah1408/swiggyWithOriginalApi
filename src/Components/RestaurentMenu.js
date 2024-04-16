import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentItems from "./RestaurentItems";
import Shimmer2 from "./Shimmer2";
import { useState } from "react";

const RestaurentMenu = () => {
  const [showItem, setShowItem] = useState(true);
  const { resId } = useParams();

  const handleClick = () => {
    setShowItem(!showItem);
  };

  const restInfoCards = useRestaurentMenu(resId);

  if (restInfoCards === null) {
    return <Shimmer2 />;
  }

  return (
    <>
      <div className="my-5 mx-60 ">
        {restInfoCards.map((category, index) => (
          <div
            className="resMen p-2 my-3 w-[60rem]  bg-gray-200  px-3 rounded-lg shadow-xl"
            key={index}
            
          >
            <div className="head flex justify-between"  onClick={handleClick}>
              <span className="font-bold">
                {category?.card?.card?.title +
                  `  (${category?.card?.card?.itemCards?.length})`}
              </span>
              <span>
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </div>
            <div className="items">
              {showItem && (
                <RestaurentItems
                  key={category?.card?.card?.title}
                  items={category?.card?.card?.itemCards}
                  showItem={index === 1 ? true : false}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurentMenu;
