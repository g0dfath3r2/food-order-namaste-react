import { useEffect, useState } from "react";
import { MENU_API } from "../Constants";

const useRestaurantList = () => {
  const [resList, setResList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const data = await fetch(MENU_API);    
    const json = await data.json();
    console.log(json, "json");
    if (json.data !== {}) {
      setResList(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
    setLoading(false);
  };
  console.log("this is after fetch promise");

  useEffect(() => {
    fetchData();
  }, []);
  
  return {resList,filteredRestaurant,loading,setFilteredRestaurant};

};



export default useRestaurantList;
