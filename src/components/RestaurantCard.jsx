import React from "react";
import { useData } from "../context/DataContext";
import { useInfo } from "../context/HandleInfoContext";
import { useNavigate } from "react-router-dom";
import StarRating from "./StartRating";

const RestaurantCard = ({ category }) => {
  const { updatedDbFirestore } = useData();
  const { setRestaurantSelected } = useInfo();
  const navigate = useNavigate();

  function handleClick(restaurant) {
    setRestaurantSelected(restaurant);
    navigate("/restaurant");
  }

  function getRestaurantsToRender() {
    const restaurants =
      category === "all" || category === ""
        ? Object.values(updatedDbFirestore)
        : Object.values(updatedDbFirestore).filter((obj) =>
            obj["food-categories"].includes(category)
          );
    return restaurants.map((restaurant) => (
<div
  onClick={() => handleClick(restaurant)}
  key={restaurant.id}
  className="flex flex-col sm:flex-row m-4 p-4 rounded-lg shadow-md cursor-pointer max-w-sm lg:max-w-lg"
>
  <div className="relative w-full sm:w-48 h-full rounded-l-lg sm:rounded-r-none overflow-hidden">
    <img
      src={restaurant.banner}
      alt=""
      className="object-cover w-full h-full"
    />
  </div>
  <div className="flex flex-col justify-between flex-1 p-4 bg-white rounded-r-lg sm:rounded-l-none">
    <div>
      <h1 className="text-xl font-bold mb-2">{restaurant.name}</h1>
      <div className="flex justify-between mb-2">
        <StarRating rating={restaurant.stars} maxStars={5} />
        <h1 className="text-sm font-medium">{restaurant.schedule}</h1>
      </div>
      <p className="text-sm">{restaurant.description}</p>
    </div>
  </div>
</div>
    ));
  }
  return (
    <div className="flex flex-wrap justify-center">
      {getRestaurantsToRender()}
    </div>
  );
};

export default RestaurantCard;
