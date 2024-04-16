import { useDispatch } from "react-redux";
import { CDNITEM_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
const dispatch =useDispatch()
  handleCart= (item)=>{
    dispatch(addItem(item))
  }
  if (!items || !Array.isArray(items)) {
    return (<h1>LOADING........</h1>); 
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 py-3 m-2  text-left flex justify-between border-b-black h-36">
          <div className="py-2 ">
            <div className="flex flex-col " >
            <span className="font-semibold">{item.card.info.name} ({item.card.info.ratings.aggregatedRating.rating})</span>
            <span>
              ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
            </span>
            </div>
            <p className="text-xs flex w-[40rem]">{item.card.info.description}</p>
          </div>
          
          <div className="relative">
            <div className=" absolute h-fit">
            <button className="mx-7 w-[5rem] h-7 bg-white text-green-500 rounded-lg text-sm my-24" onClick={() =>handleCart(item)}>Add +</button>
            </div >
          <p className=" w-32 rounded-lg h-32 bg-cover bg-center" style={{backgroundImage: `url(${CDNITEM_URL+item.card.info.imageId})`}}></p>
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
