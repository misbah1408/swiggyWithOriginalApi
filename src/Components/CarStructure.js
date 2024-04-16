import { CDNCAR_URL } from "../utils/constants";

const CarStructure = (props) => {
  const { carSrtuctData } = props;
  const {
    info: {
      name,
      areaName,
      avgRating,
      cuisines,
      deliveryTime,
    } = {},
  } = carSrtuctData;
  return (
    <>
          <div className="res-name1">
            <p>{name}</p>
            <div className="in ph">
              <i className="fa-solid fa-star"></i>
              <p>
                {avgRating} • {deliveryTime} mins
              </p>
            </div>
            <span>{cuisines}</span>
            <span>{areaName}</span>
          </div>
    </>
  );
};

export default CarStructure;
