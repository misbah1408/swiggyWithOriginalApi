import React from 'react';
import { CDN_URL } from '../utils/constants';


export default function Resto(props) {
  const {resData} = props;
  const {
    info: {
      name,
      areaName,
      avgRating,
      cuisines,
      deliveryTime,
      cloudinaryImageId,
    } = {},
  } = resData;

  return (
    <div className="hotels-name">
        <div className="hot-res1 q1">
          <div id="i1" style={{backgroundImage: CDN_URL +cloudinaryImageId}}></div>

          <div className="res n">
            <p id='res-name'>{name}</p>
            <div className="in ph">
              <i className="fa-solid fa-star"></i>
              <p>
                {avgRating} • {deliveryTime} mins
              </p>
            </div>
            <div className="cus">
              <span id="cuis">{cuisines.join(", ")}</span>
              <span>{areaName}</span>
            </div>
          </div>
        </div>
        </div>
  );


}


export const withPromotedLable =(Resto) => {
  return(props)=>(
    <>

    <div>
      <label className='absolute bg-slate-900 mx-1  my-1 z-10 text-white rounded-lg p-2 hover:scale[1.2] text-[10px] hidden'>
       
      </label>
      <Resto {...props}/>
    </div>
    </>
  )
}