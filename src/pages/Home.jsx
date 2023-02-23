import React, { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { useAuth } from "../context/AuthContext";
import Navbar from "../layout/Navbar";
import Carousel from "../layout/Carousel";
import Cart from "../components/Cart";
const Home = () => {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div>
      <div className="flex gap-1 h-10 mb-2 items-center justify-between">
        <div className="flex p-1 mt-1 ml-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.4444 13.0908C28.4444 6.49595 23.1576 1.18506 16.5926 1.18506C10.0276 1.18506 4.74072 6.49595 4.74072 13.0908C4.74072 19.6856 16.5926 31.9999 16.5926 31.9999C16.5926 31.9999 28.4444 19.6856 28.4444 13.0908ZM11.0733 12.8573C11.0733 9.82255 13.5715 7.31301 16.5926 7.31301C19.6136 7.31301 22.1118 9.76418 22.1118 12.8573C22.1118 15.8921 19.6717 18.4017 16.5926 18.4017C13.5715 18.4017 11.0733 15.8921 11.0733 12.8573Z"
              fill="#FFE031"
            />
          </svg>

          <div className="flex flex-col justify-center">
            <span className="flex text-yellow-1000 p-1 text-lg">
              DELIVER TO
            </span>
          </div>
        </div>
        <span className="mr-2">{user.displayName || user.email}</span>
      </div>
      <Carousel />
      <h3 className="text-gray-600 mt-2 mb-2">Restaurants and cafes</h3>
      <div className="flex w-full h-12 text-gray-500 text-center gap-2 pr-2 pl-2 overflow-x-auto  items-center">
        <button
          className="flex justify-center items-center w-full h-full bg-gray-200 rounded-md hover:bg-yellow-1000 p-2 focus:bg-yellow-1000 focus:outline-none"
          onClick={() => handleButtonClick("all")}
          autoFocus
        >
          <div className="flex justify-center items-center w-32">
            <p>All</p>
          </div>
        </button>

        <button
          className="flex justify-center items-center w-full h-full bg-gray-200 rounded-md hover:bg-yellow-1000 p-2 focus:bg-yellow-1000"
          onClick={() => handleButtonClick("hamburger")}
        >
          <div className="flex justify-center items-center w-32">
            <p>🍔 Hamburger</p>
          </div>
        </button>

        <button
          className="flex justify-center items-center w-full h-full bg-gray-200 rounded-md hover:bg-yellow-1000 p-2 focus:bg-yellow-1000"
          onClick={() => handleButtonClick("pizza")}
        >
          <div className="flex justify-center items-center w-32">
            <p>🍕 Pizza</p>
          </div>
        </button>

        <button
          className="flex justify-center items-center w-full h-full bg-gray-200 rounded-md hover:bg-yellow-1000 p-2 focus:bg-yellow-1000"
          onClick={() => handleButtonClick("salad")}
        >
          <div className="flex justify-center items-center w-32">
            <p>🥗 Salad</p>
          </div>
        </button>

        <button
          className="flex justify-center items-center w-full h-full bg-gray-200 rounded-md hover:bg-yellow-1000 p-2 focus:bg-yellow-1000"
          onClick={() => handleButtonClick("pasta")}
        >
          <div className="flex justify-center items-center w-32">
            <p>🍝 Pasta</p>
          </div>
        </button>
      </div>
      <div className="flex flex-wrap gap-2 justify-center items-center pb-28">
        <RestaurantCard category={selectedCategory} />
      </div>
      {/* <div class="w-full mt-4">
      </div> */}
      <Cart />
      <Navbar />
    </div>
  );
};

export default Home;
