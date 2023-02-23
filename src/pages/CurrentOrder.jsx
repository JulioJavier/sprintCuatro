import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const CurrentOrder = () => {
  const orders = localStorage.getItem("orders");
  const [dishes, setDishes] = useState(orders ? JSON.parse(orders) : []);
  const [total, setTotal] = useState(localStorage.getItem("total") ?? 0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  function minMaxTime() {
    let maxMinTime = -1;
    let maxMaxTime = -1;
    dishes[0].dishes.map((obj) => {
      maxMinTime = Math.max(maxMinTime, parseInt(obj.cookingTimeMin));
      maxMaxTime = Math.max(maxMaxTime, parseInt(obj.cookingTimeMax));
    });
    return { maxMinTime, maxMaxTime };
  }
  const { maxMinTime, maxMaxTime } = minMaxTime();

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center pb-32 pl-2 pr-2 pt-2 md:grid md:grid-cols-2 md:gap-5 ">
      <div className="flex flex-col items-center justify-center w-full mt-10">
        <h1 className="text-2xl mb-1 sm:mb-3">Current order</h1>
        <img
          src="https://res.cloudinary.com/dxwzyjefd/image/upload/v1677011767/sprint4/gui-images/time.png"
          alt="Time order"
          className="w-20 h-20 mb-1"
        />
        <p className="text-sm mb-1">
          {maxMinTime} - {maxMaxTime} min left
        </p>
        <div className="flex justify-evenly gap-2 mb-1 w-full">
          {/* Circulos de estado */}

          <div className="flex flex-col items-center">
            <svg
              className="w-6 h-6 stroke-2 stroke-white bg-yellow-1000 text-yellow-1000 rounded-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#ffff"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-xs">Confirmed</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-1000 text-yellow-1000 w-6 h-6 rounded-full"></div>
            <p className="text-xs">Cooking</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-yellow-1000 text-yellow-1000 w-6 h-6 rounded-full"></div>
            <p className="text-xs">On the way</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-1000 text-yellow-1000 w-6 h-6 rounded-full"></div>
            <p className="text-xs">Delievered</p>
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col w-full overflow-y-auto mt-1">
        {/* Dishes */}
        {dishes.map((obj) => {
          return obj.dishes.map((dish) => {
            return (
              <div
                key={dish.id}
                className="flex justify-center items-center mb-1 gap-5 sm:justify-start"
              >
                <img
                  src={dish.image}
                  alt="Product image"
                  className="w-18 h-12 rounded-lg sm:w-24 sm:h-14"
                />
                <p className="text-sm text-gray-500 sm:text-base">
                  x{dish.quantity}
                </p>
                <p className="font-bold text-sm mb-1 sm:text-lg">{dish.name}</p>
                <p className="text-xs mb-1 sm:text-base">
                  ${dish.price * dish.quantity}
                </p>
              </div>
            );
          });
        })}
      </div>
      <div className="flex flex-col w-full h-28  justify-center pl-2 pr-2 fixed bottom-3 sm:static sm:w-full ">
        <div className="flex flex-row justify-between w-full mb-1 md:mb-0">
          <p className="text-sm font-bold">Products</p>
          <p className="text-sm font-bold">${total}</p>
        </div>
        <div className="flex justify-between w-full mb-1 md:mb-0">
          <p className="text-sm font-bold">Delivery</p>
          <p className="text-sm font-bold">$3</p>
        </div>
        <hr className="w-full border-1 border-black mb-1" />
        <div className="flex justify-between w-full  md:mb-0">
          <p className="text-sm font-bold">Total</p>
          <p className="text-sm font-bold">${parseInt(total) + 3}</p>
        </div>

        <button
          onClick={handleClick}
          className="w-full bg-yellow-1000 text-black py-2 px-4 rounded-xl pr-2 pl-2 md:w-full sm:mt-3"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default CurrentOrder;
