import React from "react";
// import ItemsList from "../ItemsList/ItemsList";
import { useDispatch, useSelector } from "react-redux";
import { RES_URL } from "../../utils/Constants";
import { addItem, removeItem } from "../../utils/redux/CartSlice";

const Cart = () => {
  const cartSlice = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div>
        {cartSlice.map((item) => {
          return (
            // <div className='w-6/12 m-auto bg-gray-100 mb-2'>
            //   <h1>{item.card.info.name}</h1>
            //   <p>{item.card.info.description}</p>
            // </div>
            <div
              key={item.id}
              className="p-4 m-2 flex items-start mx-auto w-8/12 text-left justify-between border border-b-white"
            >
              <div className="w-8/12">
                <h2 className="font-bold text-xl mb-2 text-[#ff6f00]">
                  {item.name}
                </h2>
                <p className="text-gray-500 my-2 text-sm">
                  {item.description}
                </p>
                <p>₹{item.price / 100}</p>
                {item.isVeg ? (
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
                  src={RES_URL + item.imageId}
                  alt=""
                  className="rounded-lg w-[200px]"
                />
                <div className="flex justify-between items-center absolute -bottom-2 w-9/12 left-2">

                
                <button
                  className="bg-black text-[#ff6f00] p-2 rounded-lg text-xs"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>

                <button
                  className="bg-black text-[#ff6f00] p-2 rounded-lg text-xs"
                  onClick={() => handleRemoveItem(item)}
                >
                  Remove -
                </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
