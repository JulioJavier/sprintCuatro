import React from "react";
import { useInfo } from "../context/HandleInfoContext";
import Navbar from "../layout/Navbar";

const OrderDetails = () => {
  const { dishToDetails } = useInfo();
  // console.log(dishToDetails);

  return (
    <div className="container mx-auto p-4 justify-center items-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">Orders</h1>
      {dishToDetails.dishes.map((dish, index) => {
        return (
          <div
            key={index}
            className="flex sm:flex-row items-center justify-between mb-4 sm:mb-6 md:mb-8"
          >
            <div className="flex gap-2 ">
              <p className="text-base sm:text-lg  text-slate-400">
                {dish.quantity} x
              </p>
              <p className="text-base sm:text-lg ">{dish.name}</p>
            </div>
            <div>
              <p className="text-base sm:text-lg ">${dish.price}</p>
            </div>
          </div>
        );
      })}
      <div className="flex flex-col items-center sm:flex-col ">
        <div className="flex justify-between w-full sm:mb-1 ">
          <p className="text-base sm:text-lg font-semibold">Production cost</p>
          <p className="text-base sm:text-lg">${dishToDetails.total}</p>
        </div>
        <div className="flex justify-between w-full sm:mb-2">
          <p className="text-base sm:text-lg font-semibold">Cost of delivery</p>
          <p className="text-base text-black sm:text-lg">$5000</p>
        </div>
        <hr className="w-full border-1 border-black" />
        <div className="flex justify-between w-full mb-4 sm:mb-6">
          <p className="text-base sm:text-xl font-semibold">Total</p>
          <p className="text-base sm:text-xl">
            ${parseInt(dishToDetails.total) + 5000}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Navbar />
      </div>
    </div>
  );
};

export default OrderDetails;
