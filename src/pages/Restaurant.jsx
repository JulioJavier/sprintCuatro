import React, { useEffect, useState } from "react";
import { Alert } from "../components/Alert";
import { useInfo } from "../context/HandleInfoContext";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StartRating";
import DishCard from "../components/DishCard";
import Cart from "../components/Cart";
import Navbar from "../layout/Navbar";
const Restaurant = () => {
  const { restaurantSelected, setProductSelected, setrestaurantToSend } =
    useInfo();
  const navigate = useNavigate();

  const handleClick = (product) => {
    setProductSelected(product);
    setrestaurantToSend({
      id: restaurantSelected.id,
      nameR: restaurantSelected.name,
      logo: restaurantSelected.logo,
    });
    navigate("/product");
  };
  return (
    <div className="flex flex-col justify-center items-center px-4 pb-28">
      <div className="flex justify-center items-center mt-2 mb-2 max-w-screen-lg">
        <img
          className="w-1/2"
          src={restaurantSelected.logo}
          alt="Restaurant Logo"
        />
      </div>

      <div className="w-full">
        <div className="flex justify-center items-center h-28 gap-2 p-1 mb-2">
          <img
            className="w-48 h-28 rounded-2xl"
            src={restaurantSelected.banner}
            alt=""
          />

          <div className="flex flex-col w-full md:w-1/2">
            <span className="font-bold text-xs md:text-xl">
              {restaurantSelected.name}
            </span>
            <p className="text-xs md:text-lg">{restaurantSelected.description}</p>
            <div className="flex flex-wrap items-center justify-around mt-2 sm:justify-start sm:mt-4">
              <StarRating rating={restaurantSelected.stars} maxStars={5} />
              <p className="text-xs ml-2">10-30min</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-4 md:mt-5 md:overflow-y-auto">
        {restaurantSelected.menu.map((item, index) => {
          const image = item.image;
          const name = item.name;
          const price = item.price;
          return (
            <div
              onClick={() => handleClick(item)}
              className="flex items-center justify-center"
             key={index+Date.now()}
            >
              <DishCard image={image} name={name} price={price} key={index} />
            </div>
          );
        })}
      </div>


      <Cart />
      <Navbar />
    </div>
  );
};

export default Restaurant;
