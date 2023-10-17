import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./index.css";
import { Link } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";
import useRestaurantList from "../../utils/Hooks/useRestaurantList";
import { useContext } from "react";
import UserInfoContext from "../../utils/contextAPI/UserInfoContext";


function Home() {
  const [searchInput, setSearchInput] = useState("");
  const {resList,filteredRestaurant,loading,setFilteredRestaurant} = useRestaurantList()
  const { fullName, setFullName } = useContext(UserInfoContext);


  const getFilteredRes = (name) => {
    const filteredRes = resList.filter((res) =>
      res.info.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredRestaurant(filteredRes);
  };



  return (
    <div className="res-wrapper">
      <div className="filters-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          onClick={() => getFilteredRes(searchInput)}
          className="search-btn"
        >
          Search
        </button>
        <div className="mt-4">
        <label>Username:</label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          className="p-2 border border-black ml-4"
        />
      </div>
      </div>
      <div className="res-cards">
        {
        loading || filteredRestaurant===null ||  filteredRestaurant===undefined? (
          <Shimmer />
        ) : (
          filteredRestaurant.map((res) => (
            <Link key={res.info.id} to={`/restaurant/${res.info.id}`} className="res-links">
              <RestaurantCard
                name={res.info.name}
                cuisines={res.info.cuisines}
                deliveryTime={res.info.sla.deliveryTime}
                avgRating={res.info.avgRating}
                imgURLId={res.info.cloudinaryImageId}
              />
            </Link>
          ) )
        )
        }
      </div>
    </div>
  );
}

export default Home;
