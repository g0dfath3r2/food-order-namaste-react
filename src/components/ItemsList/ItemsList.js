import React from "react";
import { RES_URL } from "../../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../utils/redux/CartSlice";

const ItemsList = ({ menu, ind, handleMenuClick, menuIndex }) => {
  const { title, itemCards } = menu?.card?.card;
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="text-left p-4 m-2 border shadow-lg bg-slate-200 hover:cursor-pointer">
      <div
        className="flex items-center justify-between"
        onClick={() => handleMenuClick(ind)}
      >
        <h1 className="">
          {title} ({itemCards.length})
        </h1>
        <div className="">🔻</div>
      </div>
      <div>
        {itemCards &&
          itemCards.map(
            (card) =>
              menuIndex === ind && (
                <div
                  key={card.card.info.id}
                  className="p-4 m-2 flex items-start justify-between border border-b-white"
                >
                  <div className="w-8/12">
                    <h2 className="font-bold text-xl mb-2 text-[#ff6f00]">
                      {card.card.info.name}
                    </h2>
                    <p className="text-gray-500 my-2 text-sm">
                      {card.card.info.description}
                    </p>
                    <p>₹{card.card.info.price / 100}</p>
                    {card.card.info.isVeg ? (
                      <p className="mt-2 text-xs">
                        <span className="">🟢</span> Veg
                      </p>
                    ) : (
                      <p className="mt-2 text-xs">
                        <span className="">🔴</span> Non-Veg
                      </p>
                    )}
                  </div>
                  <div className="w-3/12 relative">
                    <img
                      src={RES_URL + card.card.info.imageId}
                      alt=""
                      className="rounded-lg"
                    />
                    <button
                      className="bg-black text-[#ff6f00] p-2 absolute -bottom-2 left-14 rounded-lg"
                      onClick={() => handleAddItem(card.card.info)}
                    >
                      Add +
                    </button>
                  </div>
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default ItemsList;
