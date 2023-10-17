import { useEffect, useState } from "react";
import { MENU_URL } from "../Constants";


const useRestaurantMenu = (id)=>{
    const [menu, setMenu] = useState([]);
  

    const fetchMenu = async () => {
      const data = await fetch(MENU_URL + id.resId);
      const json = await data.json();
      setMenu(json);
    };
    useEffect(() => {
      fetchMenu();
    }, []);
    return menu;
}

export default useRestaurantMenu;
