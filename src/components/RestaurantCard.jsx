import React from "react";
import { useData } from "../context/DataContext";
import { useInfo } from "../context/HandleInfoContext";
import { useNavigate } from "react-router-dom";
import StarRating from "./StartRating";

const RestaurantCard = () => {
  const { saveData, updatedDbFirestore, findCategory } = useData();
  const { setRestaurantSelected } = useInfo();
  const navigate = useNavigate();
  /*     //USando Query  
    const prueba = async () => {
        console.log(await findCategory("snacks"));
    }
    prueba()
    console.log(updatedDbFirestore);
     */

  const handleClick = (restaurant) => {
    setRestaurantSelected(restaurant);
    navigate("/restaurant");
  };

  return (
    <div className="h-96 w-screen overflow-x-scroll p-2">
      {updatedDbFirestore &&
        Object.keys(updatedDbFirestore).map((key) => {
          return (
            <div
              className="flex w-full h-32 mt-2 p-2 gap-2"
              onClick={() => handleClick(updatedDbFirestore[key])}
              key={key}
            >
              <div className="w-36 h-full">
                <img
                  className="w-full h-full rounded-xl"
                  src={updatedDbFirestore[key].banner}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center">
                <h5>{updatedDbFirestore[key].name}</h5>
                <StarRating
                  rating={updatedDbFirestore[key].stars}
                  maxStars={5}
                />
                <p>{updatedDbFirestore[key].schedule}</p>
              </div>
            </div>
          );
        })}
      <h1></h1>
    </div>
  );
};

export default RestaurantCard;
