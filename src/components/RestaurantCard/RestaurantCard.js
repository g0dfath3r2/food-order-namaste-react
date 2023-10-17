import React, { useContext } from "react";
import "./index.css";
import { RES_URL } from "../../utils/Constants";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import UserInfoContext from "../../utils/contextAPI/UserInfoContext";

const RestaurantCard = ({
  name,
  cuisines,
  deliveryTime,
  avgRating,
  imgURLId,
}) => {
  const username = useContext(UserInfoContext)
  return (
    <div className="res-card-wrapper">
      <div className="res-image-container">
        <img alt="" src={RES_URL + imgURLId} className="res-image" />
      </div>
      <div>
        <h1>{name || <Skeleton />}</h1>
        <p>{cuisines.join(", ") || <Skeleton />}</p>
        <p>
          <span>{deliveryTime || <Skeleton />}</span> mins
        </p>
        <p>
          <span className="star-rating">⭐ </span>
          {avgRating || <Skeleton />}
        </p>
        <UserInfoContext.Provider value={fullName= 'Elon'}>
        <UserInfoContext.Consumer>
          {(item)=>{
            return (<p>User: {item}</p>)
          }}
        </UserInfoContext.Consumer >
        </UserInfoContext.Provider>
      </div>
    </div>
  );
};

export default RestaurantCard;
