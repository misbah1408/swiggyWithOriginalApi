import Resto,{withPromotedLable} from "./Resto";
import Shimmer2 from "./Shimmer2";
import { Link } from "react-router-dom";
import useRestaurent from "../utils/useRestaurent";

export default function Restaurent() {


  const filteredRestautent = useRestaurent();
  const RestoPromoted = withPromotedLable(Resto)

  return filteredRestautent.length === 0 ? (
    <Shimmer2 />
  ) : (
    <>  
    <div className="hotels">
      <p>Restaurants with online food delivery in Mangaluru</p>
      <div className="filters">
        <span>
          Filter <i className="fa-solid fa-sliders"></i>{" "}
        </span>
        <span>Sort By</span>
        <span id="long2">Fast Delivery</span>
        <span id="long2">New on Swiggy</span>
        <span>Rating 4.0+</span>
        <span>Pure Veg</span>
        <span>Offers</span>
        <span id="long3">Rs. 300-Rs. 600</span>
        </div>
        
      <div className="btn">
        {/* <div className="search">
          <input
            type="text"
            className="input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button id="btn" onClick={filterTopRestaurants}>
          Top Restaurants
        </button> */}
      </div>
      <div className="ress my-2">
        
        {filteredRestautent.map((restaurant) => (
          <Link to={"/restaurent/"+restaurant.info.id} key={restaurant.info.id} >{
            restaurant.info.isOpen ? <RestoPromoted resData={restaurant}/> :<Resto resData={restaurant} />
          }</Link>
        ))}
      </div>
      </div>
    </>
  );
}


