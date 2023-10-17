import { useParams } from "react-router";
import useRestaurantMenu from "../../utils/Hooks/useRestaurantmenu";
import ItemsList from "../ItemsList/ItemsList";
import {useState } from "react";


const RestaurantMenu = () => {
  const [menuIndex, setMenuIndex] = useState(null);

  const id = useParams();
  const menuInfo = useRestaurantMenu(id);
  const name = menuInfo?.data?.cards[0]?.card?.card?.info.name;
  const resMenu =
    menuInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) => {
        return (
          card?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
   
  const handleMenuIndex = (index)=>{
    setMenuIndex(index)

  }
  const handleMenuClick = (index)=>{
    console.log("im clicked");
    handleMenuIndex(index)
    if(menuIndex ===index){
      setMenuIndex(null)
    }
  }


  return (
    <div className="text-center">
      <h1 className="font-bold text-5xl my-6 text-orange-500">{name}</h1>

      <div className="w-6/12 m-auto">
        {resMenu &&
          resMenu.map((menu, index) => (
            <ItemsList
              key={menu.card.card.title}
              menu={menu}
              ind={index}
              menuIndex={menuIndex}
              handleMenuClick={handleMenuClick}
            />
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
